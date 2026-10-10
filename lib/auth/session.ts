import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { cache } from "react";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { ObjectId, type Db } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { ensureAuthIndexes, sessionsCollection, usersCollection } from "./users";

/*
 * Admin sessions: a random token in an httpOnly cookie, stored server-side as a SHA-256 hash with
 * an expiry (MongoDB's TTL index deletes expired rows). Logging out or resetting a password deletes
 * the session rows, so a stolen cookie stops working immediately.
 */

const SESSION_TTL_MS = 12 * 60 * 60 * 1000;
// __Host- pins the cookie to this origin over HTTPS; plain name in dev (http://localhost)
const COOKIE_NAME = process.env.NODE_ENV === "production" ? "__Host-ra_admin" : "ra_admin";

export type AdminUser = { id: string; email: string; name: string };

let indexesReady: Promise<void> | null = null;

async function authDb(): Promise<Db> {
  const db = await getDb();
  indexesReady ??= ensureAuthIndexes(db).catch((err) => {
    indexesReady = null;
    throw err;
  });
  await indexesReady;
  return db;
}

const hashToken = (token: string) => createHash("sha256").update(token).digest("hex");

export async function createSession(userId: ObjectId) {
  const db = await authDb();
  const token = randomBytes(32).toString("base64url");
  const now = new Date();
  const expiresAt = new Date(now.getTime() + SESSION_TTL_MS);
  await sessionsCollection(db).insertOne({ _id: new ObjectId(), tokenHash: hashToken(token), userId, createdAt: now, expiresAt });

  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: expiresAt,
  });
}

export async function destroySession() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (token) {
    try {
      await sessionsCollection(await authDb()).deleteOne({ tokenHash: hashToken(token) });
    } finally {
      store.delete(COOKIE_NAME);
    }
  }
}

/** The signed-in admin for this request, or null. Cached per request. */
export const getCurrentAdmin = cache(async (): Promise<AdminUser | null> => {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;

  const db = await authDb();
  const session = await sessionsCollection(db).findOne({ tokenHash: hashToken(token), expiresAt: { $gt: new Date() } });
  if (!session) return null;
  const user = await usersCollection(db).findOne({ _id: session.userId }, { projection: { email: 1, name: 1 } });
  return user ? { id: user._id.toString(), email: user.email, name: user.name } : null;
});

/** For admin pages: the signed-in admin, or a redirect to the login page. */
export async function requireAdminPage(): Promise<AdminUser> {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}

/**
 * Same-origin check for state-changing requests (defence in depth on top of SameSite=Strict).
 * Browsers always send Origin on cross-origin and same-origin POST/PUT/DELETE fetches.
 */
export async function isSameOrigin() {
  const h = await headers();
  const origin = h.get("origin");
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export const jsonError = (status: number, error: string, extra?: Record<string, unknown>) =>
  NextResponse.json({ error, ...extra }, { status });

/** For admin API routes: the admin, or an error response to return as-is. */
export async function requireAdminApi(): Promise<AdminUser | NextResponse> {
  if (!(await isSameOrigin())) return jsonError(403, "Cross-origin request blocked");
  const admin = await getCurrentAdmin();
  return admin ?? jsonError(401, "Your session has expired. Sign in again.");
}
