import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { rateLimit, sweepExpired } from "@/lib/rate-limit";

// Validate input server-side — never trust the client.
const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.string().trim().max(120).optional().default(""),
  inquiry: z.string().trim().max(2000).optional().default(""),
  // Anti-spam fields (not real form data):
  website: z.string().max(0).optional().default(""), // honeypot — must be empty
  startedAt: z.number().optional(), // client timestamp when the form opened
});

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

// Which site the submission came from — the app is served on both domains.
function getSourceWebsite(req: NextRequest): string {
  const host = (
    req.headers.get("x-forwarded-host") ||
    req.headers.get("host") ||
    ""
  ).toLowerCase();
  if (host.includes("itekdental")) return "itekdental.com";
  if (host.includes("iteksolutions")) return "iteksolutions.ca";
  // Fallback: list both rather than guess.
  return "iteksolutions.ca / itekdental.com";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  sweepExpired();

  // 1. Rate limit: 5 submissions per IP per hour.
  const limit = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000);
  if (!limit.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": "3600" } }
    );
  }

  // 2. Parse body.
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }
  const data = parsed.data;

  // 3. Honeypot: a real user never fills this. Pretend success for bots.
  if (data.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 4. Time-trap: bots submit instantly. Require >= 2.5s of fill time.
  if (typeof data.startedAt === "number") {
    const elapsed = Date.now() - data.startedAt;
    if (elapsed < 2500 || elapsed > 1000 * 60 * 60 * 6) {
      // Too fast (bot) or absurdly stale (replayed). Soft-accept.
      return NextResponse.json({ ok: true }, { status: 200 });
    }
  }

  // 5. Send.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact form: missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL");
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 }
    );
  }

  const sourceWebsite = getSourceWebsite(req);
  const subjectLabel = data.company || data.name;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `New Website Inquiry – ${subjectLabel}`,
    text: [
      `Client Name: ${data.name}`,
      `Company Name: ${data.company || "—"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      `Service Interested In: ${data.service || "—"}`,
      `Message / Inquiry Details: ${data.inquiry || "—"}`,
      `Source Website: ${sourceWebsite}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
