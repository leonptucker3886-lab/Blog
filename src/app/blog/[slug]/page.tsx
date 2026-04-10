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
  },
  {
    id: 3,
    slug: 'cut-through-the-noise-get-a-strictly-factual-ai-report-on-your-conflict',
    title: 'Cut Through the Noise: Get a Strictly Factual AI Report on Your Conflict',
    subtitle: null,
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      Conflicts drag on because emotions cloud the facts. Timelines get twisted, agreements are forgotten, and each side frames the story differently. What if you could drop your side of the story and receive a clear, objective breakdown—<strong style="color: var(--accent);">no opinions, no judgment, no taking sides</strong>?
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      That's exactly what this new one-time payment service delivers.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      How It Works
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      You submit a detailed account of the conflict. The AI analyzes only the information you provide and generates a <strong>strictly factual report</strong>. It highlights real, verifiable discrepancies in:
    </p>

    <ul style="padding-left: 1.25rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      <li style="margin-bottom: 0.5rem;">Timelines</li>
      <li style="margin-bottom: 0.5rem;">Events</li>
      <li style="margin-bottom: 0.5rem;">Previous agreements or boundaries</li>
      <li style="margin-bottom: 0.5rem;">Framing of the situation</li>
    </ul>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Nothing is added. No interpretations. Just the objective gaps and inconsistencies based on what you entered.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      You also receive <strong>clear navigation scripts</strong>—ready-to-copy language you can use to move the conversation forward productively, whether in person, by message, or in a formal discussion.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Everything is delivered by email and as a downloadable PDF for your records.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Privacy and Data Handling
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Your submitted data is automatically deleted after 24 hours. No lingering records. No sharing. Straightforward privacy.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Why This Approach Works
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Traditional mediation or advice often comes loaded with bias—someone else's agenda, emotional spin, or expensive hourly rates. This tool skips all of that. It gives you a neutral mirror of the facts so you can decide your next move with clarity.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      It's designed for real-life disputes: relationships, family matters, business disagreements, roommate issues, or any situation where two versions of events are clashing.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      No subscriptions. No ongoing commitments. One payment, one clear report, and you're equipped to navigate forward.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Ready to Get Clarity?
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      If you're tired of circular arguments and want the facts laid out plainly, this is a simple, affordable way to regain control of the situation.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      <strong>One-time payment. Submit your side. Receive the facts.</strong>
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Learn more and get started here: <a href="https://your-service-link.com" target="_blank" rel="noopener noreferrer" style="color: #ffd700; text-decoration: underline;">Service Landing Page</a> (replace with actual link when live)
    </p>

    <h3 style="font-size: 1.25rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1rem; font-family: var(--font-cinzel);">
      Related Reading on AI in Conflict Resolution:
    </h3>

    <ul style="padding-left: 1.25rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      <li style="margin-bottom: 0.5rem;"><a href="https://www.pon.harvard.edu/daily/mediation/ai-mediation-using-ai-to-help-mediate-disputes/" target="_blank" rel="noopener noreferrer" style="color: #ffd700; text-decoration: underline;">AI Mediation: Using AI to Help Mediate Disputes</a> – Harvard Program on Negotiation overview of how AI is entering mediation.</li>
      <li style="margin-bottom: 0.5rem;"><a href="https://themediator.ai/" target="_blank" rel="noopener noreferrer" style="color: #ffd700; text-decoration: underline;">TheMediator.AI</a> – Another practical AI tool focused on everyday personal disputes.</li>
    </ul>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      This post is direct, benefit-focused, and professional. It avoids hype while clearly explaining the value. You can easily swap in your actual payment link, pricing, or branding when ready.
    </p>`,
    tags: JSON.stringify(['AI', 'Conflict Resolution', 'Mediation', 'Dispute Resolution']),
    readTime: '4 min read',
    createdAt: new Date('2026-04-10')
  }
];

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
    // Check fallback
    post = fallbackPosts.filter(p => p.slug === slug);
    if (post.length === 0) {
      notFound();
    }
  }

  if (!post || post.length === 0) {
    // Check fallback
    post = fallbackPosts.filter(p => p.slug === slug);
    if (post.length === 0) {
      notFound();
    }
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
            © 2026 THE COLISEUM • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </main>
  );
}