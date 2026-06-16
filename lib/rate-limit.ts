// Lightweight in-memory sliding-window rate limiter.
//
// Note: state lives in the process memory, so it resets on deploy and is NOT
// shared across multiple serverless instances. It's a solid first line of
// defense for low/medium traffic. If this site scales to many concurrent
// instances, swap this for a shared store (e.g. Upstash Redis).

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  resetAt: number;
};

/**
 * Returns whether `key` is allowed another request within the window.
 * @param key      Usually the client IP.
 * @param limit    Max requests allowed per window.
 * @param windowMs Window length in milliseconds.
 */
export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 60 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    const resetAt = now + windowMs;
    buckets.set(key, { count: 1, resetAt });
    return { success: true, remaining: limit - 1, resetAt };
  }

  if (bucket.count >= limit) {
    return { success: false, remaining: 0, resetAt: bucket.resetAt };
  }

  bucket.count += 1;
  return {
    success: true,
    remaining: limit - bucket.count,
    resetAt: bucket.resetAt,
  };
}

// Opportunistically evict expired buckets so the map doesn't grow unbounded.
// Runs at most once per minute, piggybacking on incoming requests.
let lastSweep = 0;
export function sweepExpired(now = Date.now()) {
  if (now - lastSweep < 60 * 1000) return;
  lastSweep = now;
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetAt) buckets.delete(key);
  }
}
