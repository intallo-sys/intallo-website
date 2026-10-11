import { createHmac, randomBytes } from "node:crypto";
import { prisma } from "@/lib/db/client";

const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

// Ephemeral fallback secret generated once per process lifetime if IP_HASH_SECRET is omitted.
// This preserves GDPR pseudonymization (no public rainbow table) and avoids reusing unrelated credentials.
const ephemeralSecret = randomBytes(32).toString("hex");

// In-memory fallback store to ensure rate-limiting remains enforced even during database downtime
const memoryRateLimitStore = new Map<string, number[]>();

export function getClientIp(request: Request): string {
  // Only trustworthy behind a trusted proxy/CDN that sets these headers.
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function hashIp(ip: string): string {
  const secret = process.env.IP_HASH_SECRET || ephemeralSecret;
  return createHmac("sha256", secret).update(ip).digest("hex");
}

export function isMemoryRateLimited(ipHash: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = (memoryRateLimitStore.get(ipHash) ?? []).filter((t) => t >= windowStart);

  if (timestamps.length >= LIMIT) {
    memoryRateLimitStore.set(ipHash, timestamps);
    return true;
  }

  timestamps.push(now);
  memoryRateLimitStore.set(ipHash, timestamps);
  return false;
}

export async function isRateLimited(ipHash: string): Promise<boolean> {
  try {
    const since = new Date(Date.now() - WINDOW_MS);
    const count = await prisma.contactSubmission.count({
      where: { ipHash, createdAt: { gte: since } },
    });
    // Mirror count in memory store for consistency
    isMemoryRateLimited(ipHash);
    return count >= LIMIT;
  } catch {
    // If database is offline or query fails, enforce in-memory throttling to protect email quota
    return isMemoryRateLimited(ipHash);
  }
}
