import Link from 'next/link';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await db
      .select()
      .from(posts)
      .where(eq(posts.slug, slug))
      .limit(1);
  } catch (error) {
    console.error('Database error:', error);
    notFound();
  }

  if (!post || post.length === 0) {
    notFound();
  }

  const blogPost = post[0];
  const tags = blogPost.tags ? JSON.parse(blogPost.tags) : [];

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Blog Post */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <article>
            <header className="mb-8">
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                {blogPost.title}
              </h1>
              {blogPost.subtitle && (
                <p
                  className="text-xl mb-4"
                  style={{ color: 'var(--accent)', fontFamily: 'var(--font-orbitron)' }}
                >
                  {blogPost.subtitle}
                </p>
              )}
              <div
                className="flex items-center gap-4 text-sm mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
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
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full border border-[var(--accent)]/50 bg-[var(--accent)]/10"
                      style={{ color: 'var(--accent)', fontFamily: 'var(--font-orbitron)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div
              className="prose prose-lg max-w-none mb-12"
              style={{ color: 'var(--text-primary)' }}
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            <footer className="mt-12 pt-8 border-t border-[var(--primary)]/20">
              <Link
                href="/blog"
                className="inline-block px-6 py-3 rounded-lg border border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                ← Back to Blog
              </Link>
            </footer>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--primary)]/20 py-8 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-orbitron)' }}>
            © 2026 LEON-LINK • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </main>
  );
}