import { ObjectId } from "mongodb";
import { getDatabase } from "@/lib/mongodb";
import {
  BlogPost,
  BlogPostInput,
  BLOG_CATEGORIES,
  DEFAULT_AUTHOR,
  slugify,
  calculateReadingTime,
} from "@/lib/blog-types";
import { getMigratedBlogPosts } from "@/lib/migrate-blog-data";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

export * from "@/lib/blog-types";

const COLLECTION_NAME = "posts";
const FALLBACK_DIR = path.join(process.cwd(), "data");
const FALLBACK_FILE = path.join(FALLBACK_DIR, "posts.json");

// Use migrated blog posts from existing data/blog.ts
const INITIAL_SEED_POSTS: BlogPost[] = getMigratedBlogPosts();

/* Fallback local storage helpers */
async function getLocalPosts(): Promise<BlogPost[]> {
  try {
    const data = await readFile(FALLBACK_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    await mkdir(FALLBACK_DIR, { recursive: true });
    await writeFile(FALLBACK_FILE, JSON.stringify(INITIAL_SEED_POSTS, null, 2), "utf-8");
    return INITIAL_SEED_POSTS;
  }
}

async function saveLocalPosts(posts: BlogPost[]): Promise<void> {
  await mkdir(FALLBACK_DIR, { recursive: true });
  await writeFile(FALLBACK_FILE, JSON.stringify(posts, null, 2), "utf-8");
}

let isInitialized = false;

export async function initBlogDb() {
  if (isInitialized) return;
  try {
    const db = await getDatabase();
    if (!db) {
      // Ensure fallback file exists
      await getLocalPosts();
      isInitialized = true;
      return;
    }

    const collection = db.collection(COLLECTION_NAME);
    await collection.createIndex({ slug: 1 }, { unique: true });
    await collection.createIndex({ status: 1, publishedAt: -1 });
    await collection.createIndex({ category: 1 });

    const count = await collection.countDocuments();
    if (count === 0) {
      const localPosts = await getLocalPosts();
      const seedDocs = localPosts.map((p) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _id, ...rest } = p;
        return rest;
      });
      await collection.insertMany(seedDocs as any);
    }
    isInitialized = true;
  } catch (error) {
    console.warn("Notice: Using resilient storage fallback:", (error as Error).message);
    await getLocalPosts();
    isInitialized = true;
  }
}

export async function getPublishedPosts(category?: string): Promise<BlogPost[]> {
  await initBlogDb();
  const db = await getDatabase();

  if (db) {
    try {
      const query: Record<string, unknown> = { status: "published" };
      if (category && category !== "All") {
        query.category = category;
      }

      const posts = await db
        .collection(COLLECTION_NAME)
        .find(query)
        .sort({ publishedAt: -1 })
        .toArray();

      return posts.map((p) => ({
        ...p,
        _id: p._id.toString(),
      })) as BlogPost[];
    } catch (err) {
      console.warn("MongoDB read failed, falling back to local store:", (err as Error).message);
    }
  }

  const posts = await getLocalPosts();
  return posts
    .filter((p) => p.status === "published" && (!category || category === "All" || p.category === category))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getAllPosts(): Promise<BlogPost[]> {
  await initBlogDb();
  const db = await getDatabase();

  if (db) {
    try {
      const posts = await db
        .collection(COLLECTION_NAME)
        .find({})
        .sort({ publishedAt: -1, createdAt: -1 })
        .toArray();

      return posts.map((p) => ({
        ...p,
        _id: p._id.toString(),
      })) as BlogPost[];
    } catch (err) {
      console.warn("MongoDB read all failed, using local store:", (err as Error).message);
    }
  }

  const posts = await getLocalPosts();
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  await initBlogDb();
  const db = await getDatabase();

  if (db) {
    try {
      const post = await db.collection(COLLECTION_NAME).findOne({ slug });
      if (post) {
        return {
          ...post,
          _id: post._id.toString(),
        } as BlogPost;
      }
    } catch (err) {
      console.warn("MongoDB getPostBySlug failed, using local store:", (err as Error).message);
    }
  }

  const posts = await getLocalPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  await initBlogDb();
  const db = await getDatabase();

  if (db && ObjectId.isValid(id)) {
    try {
      const post = await db.collection(COLLECTION_NAME).findOne({ _id: new ObjectId(id) });
      if (post) {
        return {
          ...post,
          _id: post._id.toString(),
        } as BlogPost;
      }
    } catch (err) {
      console.warn("MongoDB getPostById failed, using local store:", (err as Error).message);
    }
  }

  const posts = await getLocalPosts();
  return posts.find((p) => p._id === id) || null;
}

export async function createPost(input: BlogPostInput): Promise<BlogPost> {
  await initBlogDb();
  const db = await getDatabase();

  let targetSlug = input.slug ? slugify(input.slug) : slugify(input.title);
  if (!targetSlug) {
    targetSlug = `post-${Date.now()}`;
  }

  const now = new Date().toISOString();
  const tagsArray = Array.isArray(input.tags)
    ? input.tags
    : typeof input.tags === "string"
    ? input.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  const postDoc: Omit<BlogPost, "_id"> = {
    title: input.title.trim(),
    slug: targetSlug,
    excerpt: input.excerpt.trim(),
    content: input.content,
    category: input.category || BLOG_CATEGORIES[0],
    tags: tagsArray,
    coverImage:
      input.coverImage?.trim() ||
      "https://lh3.googleusercontent.com/p/AF1QipNkJW8f7U2_Z1E87P2c9Hh94iWvYVkWtqB0WzY=s1360-w1360-h1020",
    author: input.author || DEFAULT_AUTHOR,
    readingTime: calculateReadingTime(input.content),
    status: input.status || "draft",
    publishedAt: input.publishedAt || now,
    createdAt: now,
    updatedAt: now,
  };

  if (db) {
    try {
      const collection = db.collection(COLLECTION_NAME);
      let uniqueSlug = targetSlug;
      let counter = 1;
      while (await collection.findOne({ slug: uniqueSlug })) {
        uniqueSlug = `${targetSlug}-${counter}`;
        counter++;
      }
      postDoc.slug = uniqueSlug;

      const result = await collection.insertOne(postDoc);
      const created = {
        ...postDoc,
        _id: result.insertedId.toString(),
      };

      // Also sync to local store
      const local = await getLocalPosts();
      await saveLocalPosts([created, ...local]);
      return created;
    } catch (err) {
      console.warn("MongoDB insert failed, saving to local store:", (err as Error).message);
    }
  }

  // Local fallback
  const local = await getLocalPosts();
  let uniqueSlug = targetSlug;
  let counter = 1;
  while (local.some((p) => p.slug === uniqueSlug)) {
    uniqueSlug = `${targetSlug}-${counter}`;
    counter++;
  }
  postDoc.slug = uniqueSlug;

  const newPost: BlogPost = {
    ...postDoc,
    _id: `post-${Date.now()}`,
  };
  await saveLocalPosts([newPost, ...local]);
  return newPost;
}

export async function updatePost(
  id: string,
  input: Partial<BlogPostInput>
): Promise<BlogPost | null> {
  await initBlogDb();
  const db = await getDatabase();

  const updateData: Record<string, unknown> = {
    updatedAt: new Date().toISOString(),
  };

  if (input.title !== undefined) updateData.title = input.title.trim();
  if (input.excerpt !== undefined) updateData.excerpt = input.excerpt.trim();
  if (input.content !== undefined) {
    updateData.content = input.content;
    updateData.readingTime = calculateReadingTime(input.content);
  }
  if (input.category !== undefined) updateData.category = input.category;
  if (input.status !== undefined) updateData.status = input.status;
  if (input.coverImage !== undefined) updateData.coverImage = input.coverImage;
  if (input.author !== undefined) updateData.author = input.author;
  if (input.publishedAt !== undefined) updateData.publishedAt = input.publishedAt;

  if (input.tags !== undefined) {
    updateData.tags = Array.isArray(input.tags)
      ? input.tags
      : typeof input.tags === "string"
      ? input.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];
  }

  if (db && ObjectId.isValid(id)) {
    try {
      const collection = db.collection(COLLECTION_NAME);
      if (input.slug !== undefined && input.slug.trim()) {
        const newSlug = slugify(input.slug);
        let uniqueSlug = newSlug;
        let counter = 1;
        while (
          await collection.findOne({
            slug: uniqueSlug,
            _id: { $ne: new ObjectId(id) },
          })
        ) {
          uniqueSlug = `${newSlug}-${counter}`;
          counter++;
        }
        updateData.slug = uniqueSlug;
      }

      await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
      const updated = await collection.findOne({ _id: new ObjectId(id) });
      if (updated) {
        const res = { ...updated, _id: updated._id.toString() } as BlogPost;
        const local = await getLocalPosts();
        await saveLocalPosts(local.map((p) => (p._id === id ? res : p)));
        return res;
      }
    } catch (err) {
      console.warn("MongoDB update failed, saving locally:", (err as Error).message);
    }
  }

  // Local fallback
  const local = await getLocalPosts();
  const index = local.findIndex((p) => p._id === id);
  if (index === -1) return null;

  if (input.slug !== undefined && input.slug.trim()) {
    const newSlug = slugify(input.slug);
    let uniqueSlug = newSlug;
    let counter = 1;
    while (local.some((p) => p.slug === uniqueSlug && p._id !== id)) {
      uniqueSlug = `${newSlug}-${counter}`;
      counter++;
    }
    updateData.slug = uniqueSlug;
  }

  const updatedPost: BlogPost = {
    ...local[index],
    ...updateData,
  } as BlogPost;

  local[index] = updatedPost;
  await saveLocalPosts(local);
  return updatedPost;
}

export async function deletePost(id: string): Promise<boolean> {
  await initBlogDb();
  const db = await getDatabase();

  if (db && ObjectId.isValid(id)) {
    try {
      await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(id) });
    } catch (err) {
      console.warn("MongoDB delete failed:", (err as Error).message);
    }
  }

  const local = await getLocalPosts();
  const filtered = local.filter((p) => p._id !== id);
  await saveLocalPosts(filtered);
  return true;
}
