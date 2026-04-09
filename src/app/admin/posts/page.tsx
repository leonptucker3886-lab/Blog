import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { users, posts } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import Link from 'next/link';

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

export default async function ManagePostsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/admin/login');
  }

  const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Manage Blog Posts</h1>
            <div className="flex gap-4">
              <Link
                href="/admin/posts/new"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Create New Post
              </Link>
              <Link
                href="/admin"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>

          {allPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No posts created yet.</p>
              <Link
                href="/admin/posts/new"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Create Your First Post
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Slug
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allPosts.map((post) => (
                    <tr key={post.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {post.title}
                        </div>
                        {post.subtitle && (
                          <div className="text-sm text-gray-500">
                            {post.subtitle}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {post.slug}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'N/A'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/admin/posts/${post.id}/edit`}
                            className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                          >
                            Edit
                          </Link>
                          <form action={deletePostAction} className="inline">
                            <input type="hidden" name="postId" value={post.id} />
                            <button
                              type="submit"
                              className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                              onClick={(e) => {
                                if (!confirm('Are you sure you want to delete this post?')) {
                                  e.preventDefault();
                                }
                              }}
                            >
                              Delete
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

async function deletePostAction(formData: FormData) {
  'use server';

  const cookieStore = await cookies();
  const sessionId = cookieStore.get('admin_session')?.value;

  if (!sessionId) {
    redirect('/admin/login');
  }

  const postId = parseInt(formData.get('postId') as string);

  await db.delete(posts).where(eq(posts.id, postId));

  redirect('/admin/posts');
}