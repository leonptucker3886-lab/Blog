import Link from 'next/link';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);

  if (!post || post.length === 0) {
    notFound();
  }

  const blogPost = post[0];
  const tags = blogPost.tags ? JSON.parse(blogPost.tags) : [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          {blogPost.subtitle && (
            <p className="text-xl text-gray-600 mb-4">{blogPost.subtitle}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{blogPost.createdAt ? new Date(blogPost.createdAt).toLocaleDateString() : 'Unknown date'}</span>
            {blogPost.readTime && (
              <>
                <span>•</span>
                <span>{blogPost.readTime}</span>
              </>
            )}
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        <footer className="mt-12 pt-8 border-t">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </div>
  );
}