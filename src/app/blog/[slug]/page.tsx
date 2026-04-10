import Link from 'next/link';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fallback posts for when database is not available
const fallbackPosts = [
  {
    id: 1,
    slug: 'darvo',
    title: 'Understanding DARVO',
    subtitle: 'Narcissism, Manipulation Tactics, and How to Protect Yourself',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      DARVO stands for <strong style="color: var(--accent);">Deny, Attack, Reverse Victim and Offender</strong>. It was coined in the 1990s by psychologist Dr. Jennifer Freyd in her research on betrayal trauma and perpetrator responses—particularly in cases of sexual abuse, though it applies broadly to narcissistic and abusive dynamics today.
    </p>

    <div style="margin: 2rem 0; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid rgba(255, 215, 0, 0.3); background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));">
      <p style="text-align: center; margin-bottom: 1rem; color: var(--text-primary); font-family: var(--font-orbitron); font-weight: 500;">
        Explore realistic examples of these tactics in action with the{' '}
        <a href="https://clarify-drop-ai.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #ffd700; text-decoration: underline; font-weight: bold; transition: color 0.3s;">
          Clarity Drop AI personality test and toolkit
        </a>
        {' '}— a free educational resource designed to help you recognize and analyze narcissistic responses.
      </p>
    </div>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      This blog post breaks down DARVO clearly, explores related narcissistic tactics, and offers practical steps for recognition and recovery. Whether you're navigating a difficult relationship, recovering from emotional abuse, or simply educating yourself, understanding these dynamics is empowering.
    </p>`,
    tags: JSON.stringify(['narcissism', 'DARVO', 'abuse', 'manipulation', 'mental health']),
    readTime: '15 min read',
    createdAt: new Date('2024-01-01')
  },
  {
    id: 2,
    slug: 'epic-story-life-big-bang-today',
    title: 'The Epic Story of Life: From the Big Bang to Today – A Straightforward Timeline',
    subtitle: null,
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      The history of the universe and life on Earth spans 13.8 billion years. Most of it happened long before humans existed. Here is a matter-of-fact look at the most important events that shaped everything we know, from the birth of the cosmos to the world we live in now.
    </p>
    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      We occupy an almost impossibly thin slice of this 13.8-billion-year story. Every atom in your body was forged in ancient stars. Every breath you take carries oxygen first produced by microbes billions of years ago. Life did not appear suddenly—it was the result of countless cosmic and planetary processes that built upon each other, step by step.
    </p>`,
    tags: JSON.stringify(['history', 'timeline', 'universe', 'life', 'evolution']),
    readTime: '10 min read',
    createdAt: new Date('2024-01-02')
  }
];

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = fallbackPosts.filter(p => p.slug === slug);
  if (post.length === 0) {
    notFound();
  }

  const blogPost = post[0];
  const tags = blogPost.tags ? JSON.parse(blogPost.tags) : [];

  return (
    <div className="min-h-screen bg-gray-50">
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
              className="prose prose-lg mb-12 break-words"
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
                No Sacred Cows
              </h3>
              <p className="text-gray-400 text-sm">
                Unfiltered discussions on controversial topics.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/blog?category=Trump" className="hover:text-white transition-colors">Trump</Link></li>
                <li><Link href="/blog?category=$$$+Stuff" className="hover:text-white transition-colors">$$$ Stuff</Link></li>
                <li><Link href="/blog?category=Mental+Health" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/blog?category=The+Universe" className="hover:text-white transition-colors">The Universe</Link></li>
                <li><Link href="/blog?category=Artificial+Intelligence" className="hover:text-white transition-colors">AI</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/write" className="hover:text-white transition-colors">Write</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 No Sacred Cows. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}