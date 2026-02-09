/**
 * About page copy: company intro, value proposition, mission, leadership.
 * Used by app/about/page.tsx.
 */

export const aboutCopy = {
  hero: {
    eyebrow: "About us",
    headline: "Technology partners who put your success first",
    description:
      "We deliver end-to-end IT solutions so your business stays secure, connected, and running smoothly. Our team brings enterprise-level expertise in managed support, cloud, security, and strategic IT leadership.",
  },
  aboutUs: {
    headline: "About Us",
    paragraphs: [
      "Metallic IT is a women-led and minority-owned small business with a team of experts capable of serving all of your needs. Our more than 30 multicultural, multilingual, and multigenerational team members have both broad and relevant enterprise-level certified experience.",
      "We serve healthcare, dental, and other organizations that depend on reliable technology and strong security. From managed support and cloud solutions to cybersecurity and strategic IT leadership, we bring the same enterprise-level discipline and care whether you run a single practice or multiple locations.",
      "Our diversity is a strength. Different backgrounds, languages, and perspectives help us understand the varied needs of our clients and build solutions that work for real teams in real environments. We take pride in reducing downtime, meeting compliance requirements, and letting you focus on what you do best.",
      "As Metallic IT Powered by ITEK Solutions, we have built a leading managed services practice in Canada and expanded into the United States. Whatever your size or industry, we are here to make the most of your IT investment and keep your business running smoothly.",
    ],
  },
  valueProposition: {
    label: "EFFICIENT",
    headline: "Value Proposition",
    body: "Leverage our experience and expertise to make the most of your IT investment with a methodology focused on optimization and long-term return.",
  },
  mission: {
    headline: "Our Mission",
    body: "Enable our clients to maximize their productivity and minimize costly downtime by equipping them with an operating model that ensures cybersecurity, cyber resilience, data protection, and online privacy.",
  },
  partners: {
    eyebrow: "Trusted by",
    headline: "Our Partners",
  },
  leadership: {
    eyebrow: "Who we are",
    headline: "Our Leadership",
  },
  contact: {
    phone: "(626) 561-4040",
    tollFree: "833-LA-MSSP-9",
    email: "sales@metallicIT.ai",
  },
} as const;

export type LeadershipMember = {
  name: string;
  title: string;
  bio: string[];
  email: string;
  phone: string;
  tollFree: string;
};

export const leadership: LeadershipMember[] = [
  {
    name: "Ann Chow",
    title: "President & Owner",
    bio: [
      "Ann Chow was born in Vietnam and raised in Canada. She graduated from the University of Toronto with a Bachelor's Degree in Commerce and continued in accounting and finance until starting her own company 19 years ago. At the time, she recognized that IT support for dental providers was lacking and set out to fill a gap in the market.",
      "As the company's founder, Ann has established it as a leading MSP in Canada and positioned it for expansion into the United States as Metallic IT Powered by ITEK Solutions. She believes that MSPs play an important role in providing the best possible care and takes pride in reducing downtime to allow for medical and dental providers to focus on their patients. While a career in technology wasn't part of Ann's initial plan, it has been incredibly rewarding, and she hopes to encourage other women to consider making it a part of theirs.",
      "Ann is passionate about increasing access to educational and professional opportunities for those who may not have them otherwise.",
      "Ann has three children. Outside of work, she volunteers at St. Andrews College in Canada, serving as an executive of the Parents Guild. She is also passionate about self-defense and practices Filipino Martial Arts.",
    ],
    email: aboutCopy.contact.email,
    phone: aboutCopy.contact.phone,
    tollFree: aboutCopy.contact.tollFree,
  },
  {
    name: "Christian Doroja",
    title: "CEO",
    bio: [
      "Christian Doroja was born and raised in Manila, Philippines before moving to Canada. He graduated with a Network Systems Technician diploma from CDI College of Business. Christian has worked in IT for over 25 years, 10 of them in operations, and is currently the CEO of Metallic IT.",
      "His passionate approach to his work with Metallic IT stems from a family history in the medical field, with both of his parents working in different areas of the industry. That combined with his love for technology led Christian to develop his focus for supporting healthcare and dental practices. He understands the challenges they face when it comes to cybersecurity, compliance and day-to-day IT tasks, and is dedicated to making their lives easier.",
      "A lifetime of martial arts has played a significant role in Christian's career and contributes to his leadership approach. He began learning Taekwondo as a child, which instilled in him the desire to achieve more, as well as his competitive streak. He holds a 6th Dan WT Blackbelt and has worked and coached athletes from beginners to Olympians. Christian is a member of the National Coaching Sports Institute of Canada, Coaches Association of Ontario and Coaches Association of Canada and is a Chartered Professional Coach (ChPC).",
      "Prior to his current role at Metallic IT, Christian worked for companies across numerous industries including IBM, St. Elizabeth Health Care, Sony and International Credit Experts.",
    ],
    email: aboutCopy.contact.email,
    phone: aboutCopy.contact.phone,
    tollFree: aboutCopy.contact.tollFree,
  },
];

/** Placeholder partner logos for the carousel. Replace with real logo URLs/names. */
export const partnerLogos: { name: string; logo?: string }[] = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
];
