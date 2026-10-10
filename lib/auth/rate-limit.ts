/*
 * Fixed-window limiter for failed logins, kept in process memory. Enough for a single server;
 * behind several instances each one counts separately (use a shared store if that matters).
 */

const WINDOW_MS = 15 * 60 * 1000;

const failures = new Map<string, { count: number; resetAt: number }>();

function liveEntry(key: string) {
  const entry = failures.get(key);
  if (entry && entry.resetAt <= Date.now()) {
    failures.delete(key);
    return undefined;
  }
  return entry;
}

/** Each limit is a key plus the failures it allows per 15-minute window. */
export type Limit = { key: string; max: number };

export function isRateLimited(limits: Limit[]) {
  return limits.some(({ key, max }) => (liveEntry(key)?.count ?? 0) >= max);
}

export function recordFailure(limits: Limit[]) {
  const now = Date.now();
  for (const { key } of limits) {
    const entry = liveEntry(key);
    if (entry) entry.count++;
    else failures.set(key, { count: 1, resetAt: now + WINDOW_MS });
  }
  // Keep the map from growing without bound
  if (failures.size > 10_000) {
    for (const [k, v] of failures) if (v.resetAt <= now) failures.delete(k);
  }
}

export function clearFailures(limits: Limit[]) {
  for (const { key } of limits) failures.delete(key);
}
