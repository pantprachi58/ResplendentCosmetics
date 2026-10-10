# Admin Panel & Blog Connection

This document explains how the admin panel is connected with the public-facing blog.

## Overview

The admin panel (`/app/admin/blog/`) and the public blog (`/app/blog/`) are fully integrated, allowing administrators to manage blog content that appears on the website.

## Data Flow

```
┌─────────────────┐
│  Admin Panel    │
│  /admin/blog    │
└────────┬────────┘
         │
         ├─ View all posts
         ├─ Create new posts  ──────┐
         ├─ Edit posts              │
         └─ Delete posts            │
                                    │
                                    ▼
                          ┌──────────────────┐
                          │   API Routes     │
                          │   /api/blog/     │
                          └────────┬─────────┘
                                   │
                                   ▼
                          ┌──────────────────┐
                          │  Blog Data       │
                          │  data/blog.ts    │
                          └────────┬─────────┘
                                   │
                                   ▼
                          ┌──────────────────┐
                          │  Public Blog     │
                          │  /blog/          │
                          └──────────────────┘
```

## Key Features

### 1. **Admin Dashboard** (`/app/admin/blog/page.tsx`)
- View all blog posts in a table
- Search posts by title or content
- Filter by category (Face, Body, Women, Men)
- Quick stats showing total posts per category
- Actions: View, Edit, Delete

### 2. **Create New Post** (`/app/admin/blog/new/page.tsx`)
- Form to create new blog posts
- Auto-generate URL slug from title
- Set category, topic, and featured image
- Link to related treatment page

### 3. **Edit Post** (`/app/admin/blog/[id]/page.tsx`)
- Edit all post details
- Add/remove content sections
- Add/remove consultation questions
- Preview post before saving

### 4. **Public Blog** (`/app/blog/page.tsx`)
- Display all published posts
- Filter by category
- "Show more" pagination
- Responsive card layout

### 5. **Individual Blog Post** (`/app/blog/[slug]/page.tsx`)
- Full article view with sections
- Table of contents navigation
- Related posts suggestions
- Link to related treatment
- SEO optimized with metadata

## API Endpoints

### `GET /api/blog`
Fetch all blog posts

### `POST /api/blog`
Create a new blog post

**Body:**
```json
{
  "slug": "post-slug",
  "title": "Post Title",
  "excerpt": "Brief description",
  "category": "face",
  "topic": "Topic label",
  "image": { "src": "/path/to/image.jpg", "alt": "Alt text" },
  "treatment": { "label": "Treatment Name", "href": "/treatments/slug" },
  "sections": [],
  "questions": []
}
```

### `GET /api/blog/[slug]`
Fetch a single blog post by slug

### `PUT /api/blog/[slug]`
Update an existing blog post

### `DELETE /api/blog/[slug]`
Delete a blog post

## Navigation Between Admin & Blog

### From Admin to Blog:
1. **Dashboard sidebar** → "View Blog" button → `/blog`
2. **View action** in post table → `/blog/[slug]`
3. **Preview button** in edit form → `/blog/[slug]`

### From Blog to Admin:
- Admins can access `/admin/blog` directly
- The admin panel link is available in the sidebar

## Data Structure

All blog posts follow this TypeScript interface:

```typescript
type BlogPost = {
  slug: string;              // URL-friendly identifier
  title: string;             // Post title
  excerpt: string;           // Short description
  category: "face" | "body" | "women" | "men";
  topic: string;             // Label shown above title
  image: { src: string; alt: string; };
  treatment: { label: string; href: string; };
  sections: BlogSection[];   // Content sections
  questions: string[];       // Consultation questions
}
```

## Important Notes

### Current Implementation
The current implementation uses a static data file (`data/blog.ts`) with TypeScript exports. Changes made through the admin panel **are not persisted** to the file system automatically.

### For Production Use
To make this fully functional, you would need to:

1. **Add a Database**
   - Use PostgreSQL, MongoDB, or another database
   - Create a `blog_posts` table/collection
   
2. **Update API Routes**
   - Connect to database in `/app/api/blog/` routes
   - Implement CRUD operations with actual persistence
   
3. **Add Authentication**
   - Implement admin login system
   - Protect admin routes with middleware
   - Add role-based access control

4. **Add Image Upload**
   - Implement file upload functionality
   - Store images in cloud storage (AWS S3, Cloudinary)
   - Update image references in posts

5. **Add Rich Text Editor**
   - Integrate a WYSIWYG editor (TipTap, Quill, etc.)
   - Support formatting, links, and media embeds

## File Locations

### Admin Panel
- `/app/admin/blog/page.tsx` - Dashboard
- `/app/admin/blog/new/page.tsx` - Create post
- `/app/admin/blog/[id]/page.tsx` - Edit post
- `/app/admin/blog/admin.module.css` - Admin styles
- `/app/admin/blog/form.module.css` - Form styles

### Public Blog
- `/app/blog/page.tsx` - Blog index
- `/app/blog/[slug]/page.tsx` - Individual post
- `/components/blog/BlogExplorer.tsx` - Category filter & grid
- `/components/blog/BlogCard.tsx` - Post card component

### API Routes
- `/app/api/blog/route.ts` - GET all, POST new
- `/app/api/blog/[slug]/route.ts` - GET, PUT, DELETE single post

### Data
- `/data/blog.ts` - Blog post data and types

## Testing the Connection

1. **Navigate to admin**: Visit `/admin/blog`
2. **View stats**: See total posts per category
3. **Filter posts**: Use category dropdown
4. **Search posts**: Use search bar
5. **View post**: Click eye icon → Goes to `/blog/[slug]`
6. **Edit post**: Click pencil icon → Goes to `/admin/blog/[slug]`
7. **Create post**: Click "Create New Post" → Fill form → Submit
8. **View blog**: Click "View Blog" in sidebar → See all posts at `/blog`

## Styling

The admin panel uses a clean, modern interface with:
- Sidebar navigation
- Stats dashboard with icons
- Data table with actions
- Form layouts with validation
- Responsive design

The public blog uses:
- Clean typography
- Category filters
- Card-based layout
- Breadcrumb navigation
- Related posts section

## Future Enhancements

1. Draft/Published status
2. Scheduled publishing
3. Post analytics (views, engagement)
4. Comments system
5. Tags and search functionality
6. SEO optimization tools
7. Bulk operations
8. Version history
9. Media library
10. Multi-author support
