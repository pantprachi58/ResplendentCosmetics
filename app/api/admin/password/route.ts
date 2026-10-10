import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";
import { createSession, jsonError, requireAdminApi } from "@/lib/auth/session";
import { hashPassword, passwordProblem, sessionsCollection, usersCollection, verifyPassword } from "@/lib/auth/users";

/** Change the signed-in admin's password. Signs out every other session. */
export async function POST(request: Request) {
  const admin = await requireAdminApi();
  if (admin instanceof NextResponse) return admin;

  const body = await request.json().catch(() => null);
  const currentPassword = typeof body?.currentPassword === "string" ? body.currentPassword : "";
  const newPassword = typeof body?.newPassword === "string" ? body.newPassword : "";

  const problem = passwordProblem(newPassword);
  if (problem) return jsonError(400, problem, { field: "newPassword" });

  const db = await getDb();
  const userId = new ObjectId(admin.id);
  const user = await usersCollection(db).findOne({ _id: userId });
  if (!user || !(await verifyPassword(currentPassword, user.passwordHash)))
    return jsonError(400, "Current password is incorrect", { field: "currentPassword" });

  await usersCollection(db).updateOne(
    { _id: userId },
    { $set: { passwordHash: await hashPassword(newPassword), updatedAt: new Date() } }
  );
  await sessionsCollection(db).deleteMany({ userId });
  await createSession(userId);
  return NextResponse.json({ ok: true });
}
