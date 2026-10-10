import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getDb } from "@/lib/mongodb";
import { clearFailures, isRateLimited, recordFailure } from "@/lib/auth/rate-limit";
import { createSession, destroySession, isSameOrigin, jsonError } from "@/lib/auth/session";
import { hashPassword, normaliseEmail, usersCollection, verifyPassword } from "@/lib/auth/users";

// Compared against when the email is unknown, so response time doesn't reveal which emails exist
let dummyHash: Promise<string> | null = null;

/** Sign in with email + password */
export async function POST(request: Request) {
  if (!(await isSameOrigin())) return jsonError(403, "Cross-origin request blocked");

  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? normaliseEmail(body.email) : "";
  const password = typeof body?.password === "string" ? body.password : "";
  if (!email || !password || password.length > 200) return jsonError(400, "Enter your email and password");

  const ip = ((await headers()).get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  // Tight per client+account; looser per client; a high per-account ceiling so nobody can lock the
  // admin out from one address, while spoofed X-Forwarded-For values still hit the account cap.
  const limits = [
    { key: `pair:${ip}|${email}`, max: 8 },
    { key: `ip:${ip}`, max: 30 },
    { key: `email:${email}`, max: 50 },
  ];
  if (isRateLimited(limits)) return jsonError(429, "Too many failed attempts. Try again in 15 minutes.");

  try {
    const users = usersCollection(await getDb());
    const user = await users.findOne({ email });
    dummyHash ??= hashPassword(randomBytes(16).toString("hex"));
    const valid = await verifyPassword(password, user?.passwordHash ?? (await dummyHash));
    if (!user || !valid) {
      recordFailure(limits);
      return jsonError(401, "Incorrect email or password");
    }

    clearFailures(limits.slice(0, 1));
    await users.updateOne({ _id: user._id }, { $set: { lastLoginAt: new Date() } });
    await createSession(user._id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin] login failed:", err);
    return jsonError(503, "Sign-in is unavailable: the database can't be reached");
  }
}

/** Sign out */
export async function DELETE() {
  if (!(await isSameOrigin())) return jsonError(403, "Cross-origin request blocked");
  try {
    await destroySession();
  } catch (err) {
    console.error("[admin] logout failed:", err);
  }
  return NextResponse.json({ ok: true });
}
