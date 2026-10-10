import { NextResponse } from "next/server";
import { jsonError, requireAdminApi } from "@/lib/auth/session";
import { createPost, SlugTakenError } from "@/lib/blog/repository";
import { revalidateBlog } from "@/lib/blog/revalidate";
import { parsePostInput } from "@/lib/blog/validation";

/** Create a post */
export async function POST(request: Request) {
  const admin = await requireAdminApi();
  if (admin instanceof NextResponse) return admin;

  const parsed = parsePostInput(await request.json().catch(() => null));
  if ("errors" in parsed) return jsonError(400, "Check the highlighted fields", { fields: parsed.errors });

  try {
    const post = await createPost(parsed.data);
    revalidateBlog(post.slug);
    return NextResponse.json({ post: { id: post.id, slug: post.slug } }, { status: 201 });
  } catch (err) {
    if (err instanceof SlugTakenError) return jsonError(409, err.message, { fields: { slug: err.message } });
    console.error("[admin] create post failed:", err);
    return jsonError(500, "The post couldn't be saved. Try again.");
  }
}
