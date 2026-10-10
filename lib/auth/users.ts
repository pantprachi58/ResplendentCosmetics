import bcrypt from "bcryptjs";
import { ObjectId, type Db } from "mongodb";

/* Admin accounts. Shared by the app and scripts/create-admin.ts, so no Next-only APIs here. */

export type AdminUserDoc = {
  _id: ObjectId;
  email: string;
  name: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date | null;
};

export type SessionDoc = {
  _id: ObjectId;
  /** SHA-256 of the cookie token; the raw token is never stored */
  tokenHash: string;
  userId: ObjectId;
  createdAt: Date;
  expiresAt: Date;
};

export const usersCollection = (db: Db) => db.collection<AdminUserDoc>("admin_users");
export const sessionsCollection = (db: Db) => db.collection<SessionDoc>("admin_sessions");

export async function ensureAuthIndexes(db: Db) {
  await usersCollection(db).createIndex({ email: 1 }, { unique: true });
  await sessionsCollection(db).createIndex({ tokenHash: 1 }, { unique: true });
  await sessionsCollection(db).createIndex({ userId: 1 });
  // MongoDB removes sessions once expiresAt has passed
  await sessionsCollection(db).createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
}

const BCRYPT_COST = 12;
export const PASSWORD_MIN_LENGTH = 10;

/** Returns an error message, or null if the password is acceptable. */
export function passwordProblem(password: string): string | null {
  if (password.length < PASSWORD_MIN_LENGTH) return `Use at least ${PASSWORD_MIN_LENGTH} characters`;
  // bcrypt only uses the first 72 bytes
  if (new TextEncoder().encode(password).length > 72) return "Use at most 72 bytes (about 70 characters)";
  return null;
}

export const hashPassword = (password: string) => bcrypt.hash(password, BCRYPT_COST);
export const verifyPassword = (password: string, hash: string) => bcrypt.compare(password, hash);

export const normaliseEmail = (email: string) => email.trim().toLowerCase();

/** Creates the admin, or resets the password (and signs out every session) if the email exists. */
export async function upsertAdmin(db: Db, input: { email: string; name: string; password: string }) {
  await ensureAuthIndexes(db);
  const email = normaliseEmail(input.email);
  const now = new Date();
  const passwordHash = await hashPassword(input.password);
  const result = await usersCollection(db).findOneAndUpdate(
    { email },
    {
      $set: { name: input.name, passwordHash, updatedAt: now },
      $setOnInsert: { _id: new ObjectId(), email, createdAt: now, lastLoginAt: null },
    },
    { upsert: true, returnDocument: "after", includeResultMetadata: true }
  );
  const user = result.value!;
  const created = !result.lastErrorObject?.updatedExisting;
  if (!created) await sessionsCollection(db).deleteMany({ userId: user._id });
  return { user, created };
}
