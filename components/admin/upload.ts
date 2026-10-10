/** Uploads an image through the admin API and returns its public URL (/media/<id>). */
export async function uploadImage(file: File): Promise<string> {
  if (file.size > 5 * 1024 * 1024) throw new Error("Images must be 5 MB or smaller");
  const body = new FormData();
  body.append("file", file);
  const res = await fetch("/api/admin/media", { method: "POST", body });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Upload failed");
  return data.url as string;
}
