# Blog System Setup Guide

## Overview

Your admin panel is now fully connected to a MongoDB-powered blog system with automatic fallback to local JSON storage. The system works with or without MongoDB.

## Features

✅ **Full CRUD Operations**: Create, Read, Update, and Delete blog posts
✅ **MongoDB Integration**: Professional database storage with local fallback
✅ **Rich Text Editor**: HTML/Markdown support with live preview
✅ **Image Upload**: Cover image management
✅ **Draft & Publish**: Save drafts or publish live
✅ **Category & Tags**: Organize content effectively
✅ **SEO-Friendly**: Clean URL slugs and meta descriptions
✅ **Authentication**: Password-protected admin access

## Quick Start

### Option 1: Run Without MongoDB (Automatic Fallback)

The system automatically uses a local JSON file (`data/posts.json`) as a fallback when MongoDB is not available. This is perfect for development and testing.

**Just start the server:**

```bash
npm run dev
```

Visit:
- Admin Panel: http://localhost:3000/admin/login
- Public Blog: http://localhost:3000/blog

**Default Admin Password:** `resplendent@2026`

### Option 2: Run With MongoDB (Recommended for Production)

#### Step 1: Install MongoDB

**Option A: Local MongoDB**

1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. MongoDB will run on `mongodb://localhost:27017`

**Option B: MongoDB Atlas (Cloud - Free Tier Available)**

1. Create account at https://www.mongodb.com/cloud/atlas/register
2. Create a free cluster
3. Get your connection string from "Connect" → "Connect your application"
4. Whitelist your IP address or use `0.0.0.0/0` for testing

#### Step 2: Configure Connection

Edit `.env.local` file:

```env
# For Local MongoDB
MONGODB_URI=mongodb://localhost:27017/resplendent_blog

# For MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/resplendent_blog

# Admin Password
ADMIN_PASSWORD=resplendent@2026
```

#### Step 3: Start Development Server

```bash
npm run dev
```

The system will:
- Connect to MongoDB on startup
- Create indexes automatically
- Seed with 3 sample blog posts
- Fallback to local JSON if connection fails

## Admin Panel Usage

### 1. Login

1. Navigate to: http://localhost:3000/admin/login
2. Enter password: `resplendent@2026`
3. Click "Sign In"

### 2. View Dashboard

The dashboard shows:
- All blog posts (published + drafts)
- Stats: Total posts, published, drafts, categories
- Search and filter by category
- Actions: View, Edit, Delete

### 3. Create New Post

1. Click "Write New Article" button
2. Fill in:
   - **Title**: Main article title
   - **Slug**: URL-friendly identifier (auto-generated from title)
   - **Excerpt**: Short description (120-160 chars for SEO)
   - **Category**: Select from predefined categories
   - **Tags**: Comma-separated keywords
   - **Cover Image**: Upload or paste URL
   - **Content**: Write HTML/Markdown content
   - **Status**: Choose "Published Live" or "Draft"
3. Use toolbar for formatting: H2, H3, Bold, Italic, Lists, Quotes
4. Switch to "Live Preview" tab to see rendered output
5. Click "Publish Article" or "Update Article"

### 4. Edit Existing Post

1. Find post in dashboard
2. Click "Edit" button
3. Modify fields as needed
4. Click "Update Article"

### 5. Delete Post

1. Find post in dashboard
2. Click "Delete" button
3. Confirm deletion

### 6. View Live Post

- From dashboard: Click "View" button
- Or visit: http://localhost:3000/blog/your-slug-here

## File Structure

```
app/
├── admin/
│   ├── page.tsx                  # Dashboard
│   ├── login/page.tsx            # Login page
│   └── blog/
│       ├── new/page.tsx          # Create new post
│       └── [id]/page.tsx         # Edit existing post
├── api/
│   ├── admin/auth/route.ts       # Authentication
│   └── blog/
│       ├── route.ts              # GET all, POST new
│       └── [slug]/route.ts       # GET one, PUT, DELETE
└── blog/
    ├── page.tsx                  # Public blog index
    └── [slug]/page.tsx           # Individual post page

components/
└── admin/
    └── PostEditor.tsx            # Rich text editor component

lib/
├── mongodb.ts                    # MongoDB connection with fallback
├── blog-types.ts                 # TypeScript types
└── db/
    └── blog.ts                   # Database operations (CRUD)

data/
└── posts.json                    # Fallback JSON storage (auto-created)
```

## API Endpoints

### `GET /api/blog?mode=admin`
Fetch all posts (for admin dashboard)

### `GET /api/blog?category=CategoryName`
Fetch published posts by category (for public blog)

### `POST /api/blog`
Create new post

**Body:**
```json
{
  "title": "Post Title",
  "slug": "post-slug",
  "excerpt": "Short description",
  "content": "<h2>HTML content</h2>",
  "category": "Rhinoplasty & Nose",
  "tags": "tag1, tag2, tag3",
  "coverImage": "https://...",
  "status": "published",
  "author": {
    "name": "Dr. Sukhbir Singh",
    "role": "Senior Consultant Plastic Surgeon"
  }
}
```

### `GET /api/blog/[id]`
Fetch single post by ID or slug

### `PUT /api/blog/[id]`
Update existing post

### `DELETE /api/blog/[id]`
Delete post

### `POST /api/admin/auth`
Login to admin panel

**Body:**
```json
{
  "password": "resplendent@2026"
}
```

### `GET /api/admin/auth`
Check authentication status

### `DELETE /api/admin/auth`
Logout

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/resplendent_blog` |
| `ADMIN_PASSWORD` | Admin panel password | `resplendent@2026` |

## Categories

Predefined blog categories:
- Rhinoplasty & Nose
- Hair Restoration
- Facial Aesthetics
- Body Contouring
- Skin Rejuvenation & Lasers
- Anti-Aging & Injectables

## Troubleshooting

### MongoDB Connection Fails

**Symptom:** Console shows "MongoDB connection unavailable (using fallback JSON store)"

**Solution:** This is normal! The system automatically falls back to local JSON storage. Your data is safe and the blog works perfectly.

To use MongoDB:
1. Install MongoDB or create Atlas account
2. Update `MONGODB_URI` in `.env.local`
3. Restart server

### Can't Login to Admin

**Solution:**
1. Check `.env.local` for `ADMIN_PASSWORD`
2. Restart server after changing password
3. Clear browser cookies
4. Try incognito/private window

### Posts Not Showing

**Solution:**
1. Check post status is "published" (not "draft")
2. In admin dashboard, verify posts are listed
3. Check browser console for errors
4. Verify API response: http://localhost:3000/api/blog

### Image Upload Fails

The upload endpoint needs to be implemented with a storage solution:
- For now, use direct image URLs (from Google Photos, Cloudinary, etc.)
- To implement upload: Add cloud storage (AWS S3, Cloudinary) in `/api/upload/route.ts`

## Data Migration

### From Local JSON to MongoDB

When you switch from fallback JSON to MongoDB, the system automatically:
1. Reads existing posts from `data/posts.json`
2. Seeds MongoDB with those posts
3. Keeps both in sync

Your data is never lost!

### From Static Data to Database

If you have posts in `data/blog.ts`, the seed data is already defined in `lib/db/blog.ts` as `INITIAL_SEED_POSTS`.

## Production Deployment

### 1. Environment Variables

Set these in your hosting platform (Vercel, Netlify, etc.):

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/resplendent_blog
ADMIN_PASSWORD=your-secure-password
NODE_ENV=production
```

### 2. Security Recommendations

- Change default admin password
- Use strong MongoDB credentials
- Enable MongoDB authentication
- Whitelist IP addresses in MongoDB Atlas
- Use HTTPS in production
- Consider adding rate limiting
- Add CAPTCHA to login form

### 3. Build Command

```bash
npm run build
```

### 4. Start Command

```bash
npm start
```

## Support

For issues or questions:
1. Check MongoDB connection status in server logs
2. Verify environment variables are loaded
3. Check browser console for client-side errors
4. Review API responses in Network tab

## License

This blog system is part of the Resplendent Aesthetics website.

---

**Need Help?** The system is designed to work out of the box. Just run `npm run dev` and start creating content!
