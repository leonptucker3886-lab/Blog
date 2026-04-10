# Active Context: No Sacred Cows Blog

## Current State

**Site Status**: ✅ Live blog site with minimal design

"No Sacred Cows" is a blog-focused website featuring unfiltered discussions on controversial topics. The site has a minimal design with navigation at the bottom, custom logo of a cow with crossed halo, and blog functionality with categories and search.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] Database integration with Drizzle ORM and SQLite
- [x] Blog functionality (create, read, search, categories)
- [x] Admin panel for blog management (later removed)
- [x] Theme system with custom CSS variables
- [x] Responsive design with Tailwind CSS
- [x] Multiple branding iterations (Leon-Link, The Coliseum, No Sacred Cows)
- [x] Custom SVG logos (sword, Coliseum, cow with crossed halo)
- [x] Minimal site redesign with bottom navigation
- [x] Fallback content for production without database

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Home page with blog preview | ✅ Ready |
| `src/app/blog/page.tsx` | Blog index with search/categories | ✅ Ready |
| `src/app/blog/[slug]/page.tsx` | Individual blog posts | ✅ Ready |
| `src/app/write/page.tsx` | Blog creation (password protected) | ✅ Ready |
| `src/components/LeonLinkLogo.tsx` | Logo component (cow with halo) | ✅ Ready |
| `src/db/` | Database schema and connections | ✅ Ready |
| `src/context/ThemeContext.tsx` | Theme provider | ✅ Ready |
| `src/app/layout.tsx` | Root layout (no header) | ✅ Ready |
| `src/app/globals.css` | Global styles and themes | ✅ Ready |

## Current Focus

The blog site is complete and minimal as requested. Site focuses on:

1. Blog content delivery
2. Bottom navigation for simplicity
3. "No Sacred Cows" branding with cow logo
4. Unfiltered topic discussions

## Quick Start Guide

### To add a new page:

Create a file at `src/app/[route]/page.tsx`:
```tsx
export default function NewPage() {
  return <div>New page content</div>;
}
```

### To add components:

Create `src/components/` directory and add components:
```tsx
// src/components/ui/Button.tsx
export function Button({ children }: { children: React.ReactNode }) {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded">{children}</button>;
}
```

### To add a database:

Follow `.kilocode/recipes/add-database.md`

### To add API routes:

Create `src/app/api/[route]/route.ts`:
```tsx
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}
```

## Available Recipes

| Recipe | File | Use Case |
|--------|------|----------|
| Add Database | `.kilocode/recipes/add-database.md` | Data persistence with Drizzle + SQLite |

## Pending Improvements

- [ ] Add more recipes (auth, email, etc.)
- [ ] Add example components
- [ ] Add testing setup recipe

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-04-10 | Full blog site development: database, admin panel, theming, blog features |
| 2026-04-10 | Rebranding to "No Sacred Cows": minimal design, bottom nav, cow logo, blog focus |
