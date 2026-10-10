# Blog System Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     RESPLENDENT BLOG SYSTEM                      │
│                    Dual-Storage Architecture                     │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────┐          ┌──────────────────────┐
│   ADMIN INTERFACE    │          │   PUBLIC INTERFACE   │
│   /admin/*           │          │   /blog/*            │
├──────────────────────┤          ├──────────────────────┤
│ • Login Page         │          │ • Blog Index         │
│ • Dashboard          │          │ • Individual Posts   │
│ • Create Post        │          │ • Category Filter    │
│ • Edit Post          │          │ • Search             │
│ • Delete Post        │          │                      │
└──────────┬───────────┘          └──────────┬───────────┘
           │                                  │
           └──────────┬───────────────────────┘
                      │
                      ▼
           ┌──────────────────────┐
           │     API ROUTES       │
           │     /api/*           │
           ├──────────────────────┤
           │ • /api/blog          │ ◄── GET all, POST new
           │ • /api/blog/[id]     │ ◄── GET one, PUT, DELETE
           │ • /api/admin/auth    │ ◄── Authentication
           │ • /api/upload        │ ◄── Image upload
           └──────────┬───────────┘
                      │
                      ▼
           ┌──────────────────────┐
           │  DATABASE LAYER      │
           │  lib/db/blog.ts      │
           ├──────────────────────┤
           │ • getAllPosts()      │
           │ • getPublishedPosts()│
           │ • getPostById()      │
           │ • getPostBySlug()    │
           │ • createPost()       │
           │ • updatePost()       │
           │ • deletePost()       │
           └──────────┬───────────┘
                      │
         ┌────────────┴────────────┐
         │                         │
         ▼                         ▼
┌────────────────┐      ┌─────────────────┐
│   MONGODB      │      │  JSON FALLBACK  │
│  (Primary)     │      │   (Backup)      │
├────────────────┤      ├─────────────────┤
│ • Production   │      │ • Development   │
│ • Scalable     │      │ • Automatic     │
│ • Indexed      │      │ • Zero Config   │
│ • Cloud-Ready  │      │ • File-Based    │
└────────────────┘      └─────────────────┘
  ↓ If available         ↑ If MongoDB fails
  │                      │
  └──────► Automatic Selection
```

## Data Flow

### Creating a Blog Post

```
User (Admin)
  │
  ├─► 1. Login (/admin/login)
  │     POST /api/admin/auth { password }
  │     ├─► Check password
  │     └─► Set auth cookie
  │
  ├─► 2. Navigate to Dashboard (/admin)
  │     GET /api/admin/auth
  │     ├─► Verify cookie
  │     └─► Fetch posts: GET /api/blog?mode=admin
  │
  ├─► 3. Click "Write New Article" (/admin/blog/new)
  │
  ├─► 4. Fill Form & Submit
  │     POST /api/blog
  │     {
  │       title, slug, excerpt, content,
  │       category, tags, coverImage,
  │       status, author
  │     }
  │     │
  │     ├─► Database Layer (lib/db/blog.ts)
  │     │     createPost(input)
  │     │     │
  │     │     ├─► Try MongoDB
  │     │     │   ├─► Generate unique slug
  │     │     │   ├─► Insert document
  │     │     │   └─► Return post with _id
  │     │     │
  │     │     └─► Fallback to JSON
  │     │         ├─► Read data/posts.json
  │     │         ├─► Add new post
  │     │         ├─► Write file
  │     │         └─► Return post
  │     │
  │     └─► Response: { success: true, post: {...} }
  │
  └─► 5. Redirect to Dashboard
        Post now visible in admin & public blog
```

### Viewing Blog Post (Public)

```
User (Public)
  │
  ├─► 1. Visit Blog Index (/blog)
  │     GET /api/blog?category=All
  │     │
  │     ├─► Database Layer
  │     │     getPublishedPosts(category)
  │     │     │
  │     │     ├─► Try MongoDB
  │     │     │   └─► db.find({ status: "published" })
  │     │     │
  │     │     └─► Fallback to JSON
  │     │         └─► Filter published posts
  │     │
  │     └─► Response: { posts: [...] }
  │
  ├─► 2. Click on Post Card
  │
  └─► 3. View Individual Post (/blog/[slug])
        GET /api/blog/[slug]
        │
        ├─► Database Layer
        │     getPostBySlug(slug)
        │     │
        │     ├─► Try MongoDB
        │     │   └─► db.findOne({ slug })
        │     │
        │     └─► Fallback to JSON
        │         └─► Array.find(p => p.slug === slug)
        │
        └─► Response: { post: {...} }
```

## Component Architecture

```
┌─────────────────────────────────────────────────┐
│              Admin Dashboard Page                │
│              app/admin/page.tsx                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌────────────────────────────────────────┐    │
│  │  Topbar Component                      │    │
│  │  • Logo & Branding                     │    │
│  │  • Navigation Links                    │    │
│  │  • Logout Button                       │    │
│  └────────────────────────────────────────┘    │
│                                                  │
│  ┌────────────────────────────────────────┐    │
│  │  Stats Cards                           │    │
│  │  • Total Posts                         │    │
│  │  • Published Count                     │    │
│  │  • Drafts Count                        │    │
│  │  • Categories Count                    │    │
│  └────────────────────────────────────────┘    │
│                                                  │
│  ┌────────────────────────────────────────┐    │
│  │  Table Toolbar                         │    │
│  │  • Search Input                        │    │
│  │  • Category Filter Dropdown            │    │
│  │  • "Write New Article" Button          │    │
│  └────────────────────────────────────────┘    │
│                                                  │
│  ┌────────────────────────────────────────┐    │
│  │  Posts Table                           │    │
│  │  ┌──────────────────────────────────┐ │    │
│  │  │ Row: Post Item                   │ │    │
│  │  │ • Title & Slug                   │ │    │
│  │  │ • Category                       │ │    │
│  │  │ • Status Badge                   │ │    │
│  │  │ • Publish Date                   │ │    │
│  │  │ • Actions: View, Edit, Delete    │ │    │
│  │  └──────────────────────────────────┘ │    │
│  └────────────────────────────────────────┘    │
│                                                  │
└─────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────┐
│              Post Editor Component               │
│          components/admin/PostEditor.tsx         │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌────────────────────────────────────────┐    │
│  │  Back Button & Actions                 │    │
│  └────────────────────────────────────────┘    │
│                                                  │
│  ┌────────────────────────────────────────┐    │
│  │  Main Content Column                   │    │
│  │  ┌──────────────────────────────────┐ │    │
│  │  │ Title Input                      │ │    │
│  │  │ Slug Input (auto-generated)      │ │    │
│  │  │ Excerpt Textarea                 │ │    │
│  │  └──────────────────────────────────┘ │    │
│  │                                        │    │
│  │  ┌──────────────────────────────────┐ │    │
│  │  │ Content Editor                   │ │    │
│  │  │ • Toolbar: H2, H3, B, I, List    │ │    │
│  │  │ • Textarea (HTML/Markdown)       │ │    │
│  │  │ • Tab: Edit | Preview            │ │    │
│  │  └──────────────────────────────────┘ │    │
│  └────────────────────────────────────────┘    │
│                                                  │
│  ┌────────────────────────────────────────┐    │
│  │  Sidebar Column                        │    │
│  │  ┌──────────────────────────────────┐ │    │
│  │  │ Publishing Card                  │ │    │
│  │  │ • Status Radio: Published/Draft  │ │    │
│  │  │ • Submit Button                  │ │    │
│  │  └──────────────────────────────────┘ │    │
│  │                                        │    │
│  │  ┌──────────────────────────────────┐ │    │
│  │  │ Category & Tags Card             │ │    │
│  │  │ • Category Dropdown              │ │    │
│  │  │ • Tags Input                     │ │    │
│  │  └──────────────────────────────────┘ │    │
│  │                                        │    │
│  │  ┌──────────────────────────────────┐ │    │
│  │  │ Cover Image Card                 │ │    │
│  │  │ • URL Input                      │ │    │
│  │  │ • Upload Button                  │ │    │
│  │  │ • Image Preview                  │ │    │
│  │  └──────────────────────────────────┘ │    │
│  │                                        │    │
│  │  ┌──────────────────────────────────┐ │    │
│  │  │ Author Card                      │ │    │
│  │  │ • Name Input                     │ │    │
│  │  │ • Role Input                     │ │    │
│  │  └──────────────────────────────────┘ │    │
│  └────────────────────────────────────────┘    │
│                                                  │
└─────────────────────────────────────────────────┘
```

## Authentication Flow

```
┌───────────────┐
│  Login Page   │
│ /admin/login  │
└───────┬───────┘
        │
        │ 1. User enters password
        │
        ▼
  ┌─────────────┐
  │ POST /api/  │
  │ admin/auth  │
  └─────┬───────┘
        │
        │ 2. Verify password
        │    (from .env.local)
        │
        ├─► ✅ Valid
        │   │
        │   ├─► Set HTTP-only cookie
        │   │   { name: "resplendent_admin_session" }
        │   │
        │   └─► Response: { success: true }
        │       │
        │       └─► Redirect to /admin
        │
        └─► ❌ Invalid
            │
            └─► Response: { error: "Invalid password" }
                │
                └─► Show error message

┌──────────────────┐
│  Protected Page  │
│  /admin/*        │
└────────┬─────────┘
         │
         │ 1. On page load
         │
         ▼
   ┌──────────────┐
   │ GET /api/    │
   │ admin/auth   │
   └──────┬───────┘
          │
          │ 2. Check cookie
          │
          ├─► ✅ Valid Cookie
          │   │
          │   └─► Response: { isAuthenticated: true }
          │       │
          │       └─► Show page content
          │
          └─► ❌ No/Invalid Cookie
              │
              └─► Response: { isAuthenticated: false }
                  │
                  └─► Redirect to /admin/login

┌─────────────┐
│   Logout    │
└─────┬───────┘
      │
      │ 1. User clicks logout
      │
      ▼
┌──────────────┐
│ DELETE /api/ │
│ admin/auth   │
└──────┬───────┘
       │
       │ 2. Delete cookie
       │
       └─► Redirect to /admin/login
```

## Database Schema

### MongoDB Collection: `posts`

```javascript
{
  _id: ObjectId("..."),              // MongoDB auto-generated
  title: String,                     // "Understanding Rhinoplasty Recovery"
  slug: String,                      // "understanding-rhinoplasty-recovery" (unique index)
  excerpt: String,                   // "A comprehensive guide to..."
  content: String,                   // "<h2>Introduction</h2><p>..."
  category: String,                  // "Rhinoplasty & Nose"
  tags: [String],                    // ["Rhinoplasty", "Recovery", "Delhi"]
  coverImage: String,                // "/images/blog/cover.jpg"
  author: {
    name: String,                    // "Dr. Sukhbir Singh"
    role: String,                    // "Senior Consultant..."
    avatar: String                   // "/svg/logo.png" (optional)
  },
  readingTime: String,               // "6 min read" (auto-calculated)
  status: String,                    // "published" | "draft"
  publishedAt: ISODate,              // "2026-03-15T09:00:00.000Z"
  createdAt: ISODate,                // Auto-timestamp
  updatedAt: ISODate                 // Auto-timestamp
}
```

**Indexes:**
- `{ slug: 1 }` (unique) - Fast lookup by URL
- `{ status: 1, publishedAt: -1 }` - Published posts sorted by date
- `{ category: 1 }` - Filter by category

### JSON Fallback: `data/posts.json`

```json
[
  {
    "_id": "post-1710489600000",
    "title": "Understanding Rhinoplasty Recovery",
    "slug": "understanding-rhinoplasty-recovery",
    "excerpt": "A comprehensive guide...",
    "content": "<h2>Introduction</h2>...",
    "category": "Rhinoplasty & Nose",
    "tags": ["Rhinoplasty", "Recovery"],
    "coverImage": "/images/blog/cover.jpg",
    "author": {
      "name": "Dr. Sukhbir Singh",
      "role": "Senior Consultant..."
    },
    "readingTime": "6 min read",
    "status": "published",
    "publishedAt": "2026-03-15T09:00:00.000Z",
    "createdAt": "2026-03-15T09:00:00.000Z",
    "updatedAt": "2026-03-15T09:00:00.000Z"
  }
]
```

## Error Handling & Resilience

```
┌─────────────────┐
│  API Request    │
└────────┬────────┘
         │
         ▼
┌──────────────────────┐
│  Database Layer      │
│  (lib/db/blog.ts)    │
└────────┬─────────────┘
         │
         ├─► 1. Try MongoDB Connection
         │   │
         │   ├─► ✅ Success
         │   │   └─► Execute operation
         │   │       └─► Return result
         │   │
         │   └─► ❌ Fail (timeout, network, auth)
         │       │
         │       └─► Log: "MongoDB unavailable, using fallback"
         │           │
         │           ▼
         ├─► 2. Automatic Fallback to JSON
         │   │
         │   ├─► Read data/posts.json
         │   │   │
         │   │   ├─► ✅ File exists
         │   │   │   └─► Parse JSON
         │   │   │       └─► Execute operation
         │   │   │           └─► Return result
         │   │   │
         │   │   └─► ❌ File missing
         │   │       │
         │   │       └─► Create with seed data
         │   │           └─► Return seed posts
         │   │
         │   └─► Write operations
         │       └─► Update file
         │           └─► Return result
         │
         └─► Result returned to API route
             └─► Response sent to client
```

## Security Model

```
┌──────────────────────────────────────┐
│         Security Layers              │
└──────────────────────────────────────┘

1. Authentication Cookie
   • HTTP-only (prevents XSS)
   • Secure flag in production
   • SameSite=lax (prevents CSRF)
   • 7-day expiration

2. Password Protection
   • Environment variable (.env.local)
   • Not committed to version control
   • Server-side validation

3. API Route Protection
   • Admin routes check auth cookie
   • 401 response if not authenticated
   • Automatic redirect to login

4. Input Validation
   • Required field checks
   • Slug sanitization
   • File type validation (images)
   • Size limits on uploads

5. MongoDB Security (if used)
   • Connection string in env
   • Credentials not in code
   • Optional: IP whitelist
   • Optional: SSL/TLS connection

6. Production Recommendations
   • Change default password
   • Enable HTTPS
   • Add rate limiting
   • Add CAPTCHA to login
   • Monitor failed login attempts
```

## Performance Optimizations

```
1. Database Indexes
   ├─► slug: unique index (fast lookup by URL)
   ├─► status + publishedAt: compound index (published posts)
   └─► category: simple index (category filtering)

2. Connection Pooling
   └─► MongoDB client reuses connections (lib/mongodb.ts)

3. Efficient Queries
   ├─► Only fetch published posts for public
   ├─► Sort at database level
   └─► Project only needed fields

4. Fallback Performance
   ├─► JSON file cached in memory (global var)
   ├─► No repeated file reads
   └─► Fast array operations

5. Client-Side
   ├─► Next.js automatic code splitting
   ├─► Image optimization (Next.js Image component)
   ├─► Static generation where possible
   └─► API route caching headers
```

---

This architecture provides a robust, scalable, and resilient blog system that works seamlessly with or without MongoDB, making it perfect for both development and production environments.
