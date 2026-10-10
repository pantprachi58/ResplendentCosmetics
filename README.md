# Resplendent Aesthetics: Next.js + CSS Modules

Marketing site for Resplendent Aesthetics with a small blog CMS at `/admin`.

## Setup

```bash
npm install
cp .env.example .env.local   # then set MONGODB_URI
npm run admin:create -- --email you@example.com --name "Your Name"   # prompts for a password
npm run dev                  # http://localhost:3000, admin at /admin
```

`npm run build && npm start` for production. Set `MONGODB_URI` in the host's environment, not in a committed file.

## Blog

- Posts live in MongoDB (`blog_posts`). Uploaded images are stored in GridFS (`media`) and served from `/media/<id>`.
- The first time the app connects to a database it inserts the original articles from `data/blog.ts`. Existing posts are never changed or removed.
- `npm run blog:seed` re-inserts any of those original articles that are missing, without touching existing posts.
- Without a reachable database, `/blog` shows the original articles read-only, and the admin panel is unavailable.

## Admin accounts

- Accounts are stored in MongoDB (`admin_users`) with bcrypt-hashed passwords. There is no default password.
- `npm run admin:create -- --email … --name …` creates an account, or resets the password of an existing one (this also signs it out everywhere).
- Signed-in admins can change their password under **Account**.
