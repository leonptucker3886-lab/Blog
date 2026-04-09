import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
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

export default async function AdminDashboard() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {user.email}</span>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Blog Management</h2>
              <div className="space-y-3">
                <Link
                  href="/admin/posts/new"
                  className="block w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
                >
                  Create New Post
                </Link>
                <Link
                  href="/admin/posts"
                  className="block w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-center"
                >
                  Manage Posts
                </Link>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <p className="text-gray-600">Dashboard features coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function logoutAction() {
  'use server';

  const cookieStore = await cookies();
  cookieStore.delete('admin_session');

  redirect('/admin/login');
}