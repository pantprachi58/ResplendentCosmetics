import { NextResponse } from "next/server";
import { getPostById, getPostBySlug, updatePost, deletePost } from "@/lib/db/blog";
import type { BlogPostInput } from "@/lib/blog-types";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

// GET a single blog post by slug or ID
export async function GET(request: Request, { params }: Params) {
  try {
    const { slug } = await params;
    
    // Try to get by ID first (for admin edit), then by slug (for public view)
    let post = await getPostById(slug);
    if (!post) {
      post = await getPostBySlug(slug);
    }

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error("GET /api/blog/[slug] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch post", details: String(error) },
      { status: 500 }
    );
  }
}

// PUT update a blog post
export async function PUT(request: Request, { params }: Params) {
  try {
    const { slug } = await params;
    const body: Partial<BlogPostInput> = await request.json();

    // Slug parameter is actually the post ID for updates
    const updatedPost = await updatePost(slug, body);

    if (!updatedPost) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post updated successfully",
      post: updatedPost,
    }, { status: 200 });
  } catch (error) {
    console.error("PUT /api/blog/[slug] error:", error);
    return NextResponse.json(
      { error: "Failed to update post", details: String(error) },
      { status: 500 }
    );
  }
}

// DELETE a blog post
export async function DELETE(request: Request, { params }: Params) {
  try {
    const { slug } = await params;
    
    // Slug parameter is actually the post ID for deletion
    const success = await deletePost(slug);

    if (!success) {
      return NextResponse.json(
        { error: "Post not found or failed to delete" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post deleted successfully",
    }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/blog/[slug] error:", error);
    return NextResponse.json(
      { error: "Failed to delete post", details: String(error) },
      { status: 500 }
    );
  }
}
