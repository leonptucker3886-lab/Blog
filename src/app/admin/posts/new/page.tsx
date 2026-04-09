import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { users, posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getCurrentUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('admin_session')?.value;

  if (!sessionId) {
    return null;
  }

  const userId = parseInt(sessionId);
  const user = await db.select().from(users).where(eq(users.id, userId)).limit(1);

  return user.length > 0 ? user[0] : null;
}

export default async function NewPostPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Create New Blog Post</h1>
            <Link
              href="/admin"
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Back to Dashboard
            </Link>
          </div>

          <form action={createPostAction} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter post title"
              />
            </div>

            <div>
              <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                Subtitle
              </label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter post subtitle"
              />
            </div>

            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                Slug *
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="url-friendly-slug"
              />
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="tag1, tag2, tag3"
              />
            </div>

            <div>
              <label htmlFor="readTime" className="block text-sm font-medium text-gray-700">
                Read Time
              </label>
              <input
                type="text"
                id="readTime"
                name="readTime"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="5 min read"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content (HTML) *
              </label>
              <textarea
                id="content"
                name="content"
                rows={15}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter post content in HTML format"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

async function createPostAction(formData: FormData) {
  'use server';

  const cookieStore = await cookies();
  const sessionId = cookieStore.get('admin_session')?.value;

  if (!sessionId) {
    redirect('/admin/login');
  }

  const title = formData.get('title') as string;
  const subtitle = formData.get('subtitle') as string;
  const slug = formData.get('slug') as string;
  const tags = formData.get('tags') as string;
  const readTime = formData.get('readTime') as string;
  const content = formData.get('content') as string;

  if (!title || !slug || !content) {
    throw new Error('Title, slug, and content are required');
  }

  // Parse tags
  const tagsArray = tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

  await db.insert(posts).values({
    title,
    subtitle: subtitle || null,
    content,
    slug,
    tags: tagsArray.length > 0 ? JSON.stringify(tagsArray) : null,
    readTime: readTime || null,
  });

  redirect('/admin');
}