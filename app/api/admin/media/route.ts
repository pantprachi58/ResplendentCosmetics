import { NextResponse } from "next/server";
import { jsonError, requireAdminApi } from "@/lib/auth/session";
import { MAX_UPLOAD_BYTES, saveImage, sniffImageType } from "@/lib/media";

/** Upload an image (cover or inline). Returns its public URL. */
export async function POST(request: Request) {
  const admin = await requireAdminApi();
  if (admin instanceof NextResponse) return admin;

  // Reject obviously oversized bodies before buffering them
  if (Number(request.headers.get("content-length") ?? 0) > MAX_UPLOAD_BYTES + 64 * 1024)
    return jsonError(413, "Images must be 5 MB or smaller");

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File) || file.size === 0) return jsonError(400, "Choose an image to upload");
  if (file.size > MAX_UPLOAD_BYTES) return jsonError(413, "Images must be 5 MB or smaller");

  const bytes = new Uint8Array(await file.arrayBuffer());
  const type = sniffImageType(bytes);
  if (!type) return jsonError(415, "Upload a JPEG, PNG, WebP, AVIF or GIF image");

  try {
    const url = await saveImage(bytes, type, file.name, admin.email);
    return NextResponse.json({ url }, { status: 201 });
  } catch (err) {
    console.error("[admin] upload failed:", err);
    return jsonError(500, "The image couldn't be uploaded. Try again.");
  }
}
