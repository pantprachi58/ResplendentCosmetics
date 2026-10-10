import { NextResponse } from "next/server";
import { getAllPosts, getPublishedPosts, createPost } from "@/lib/db/blog";
import type { BlogPostInput } from "@/lib/blog-types";

export const dynamic = "force-dynamic";

// GET all blog posts
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("mode");
    const category = searchParams.get("category");

    // Admin mode returns all posts (published + drafts)
    // Public mode returns only published posts
    const posts = mode === "admin" 
      ? await getAllPosts()
      : await getPublishedPosts(category || undefined);

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error("GET /api/blog error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts", details: String(error) },
      { status: 500 }
    );
  }
}

// POST create a new blog post
export async function POST(request: Request) {
  try {
    const body: BlogPostInput = await request.json();
    
    // Validate required fields
    if (!body.title || !body.content || !body.excerpt) {
      return NextResponse.json(
        { error: "Missing required fields: title, content, and excerpt are required" },
        { status: 400 }
      );
    }

    const newPost = await createPost(body);
    
    return NextResponse.json({
      success: true,
      message: "Post created successfully",
      post: newPost,
    }, { status: 201 });
  } catch (error) {
    console.error("POST /api/blog error:", error);
    return NextResponse.json(
      { error: "Failed to create post", details: String(error) },
      { status: 500 }
    );
  }
}
