import Link from 'next/link';
import { MilestoneBadges } from '@/components/MilestoneBadges';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { desc } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  content: string;
  tags: string | null;
  readTime: string | null;
  createdAt: Date | null;
}

// Fallback posts for when database is not available
const fallbackPosts: BlogPost[] = [
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
    slug: 'the-power-of-third-party-information-and-ai',
    title: 'The Power of Third-Party Information and AI: Why You Need Both in 2026',
    subtitle: 'How curated external insights combined with artificial intelligence can save you hours and sharpen your thinking every single week.',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      In a world drowning in information, the smartest move isn't to read more—it's to read smarter. Third-party information (insights, research, and news gathered and filtered by others) paired with modern AI tools is one of the highest-leverage combinations available today.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Why Third-Party Information Matters
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Most of us don't have time to scour dozens of sources daily. Third-party information acts as a force multiplier: it brings together expert analysis, diverse perspectives, and verified data you might never discover on your own. Whether it's industry reports, market trends, scientific summaries, or competitor moves, relying on quality-curated external sources prevents tunnel vision and reduces blind spots in decision-making.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6; background: linear-gradient(90deg, rgba(255, 215, 0, 0.1), transparent); padding: 0.5rem 1rem; border-left: 4px solid #ffd700;">
      The real benefit? You gain breadth without sacrificing depth. Instead of spending hours hunting, you receive pre-filtered intelligence that accelerates learning and strategic thinking.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      How AI Supercharges Third-Party Information
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Artificial intelligence takes curated information to the next level. AI doesn't just collect data—it understands context, summarizes complex topics, spots patterns, and delivers personalized insights tailored to your specific goals.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Imagine receiving a concise weekly digest that pulls the most relevant third-party news, research, and opinions across your chosen topics. No more endless scrolling or tab overload. AI handles the heavy lifting: filtering noise, connecting dots across sources, and highlighting what actually matters to you.
    </p>

    <div style="margin: 3rem 0; padding: 2rem; border-radius: 0.75rem; border: 1px solid rgba(255, 215, 0, 0.3); background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05)); text-align: center;">
      <p style="font-size: 1.25rem; margin-bottom: 1rem; color: var(--text-primary); font-family: var(--font-orbitron);">
        Ready to stop searching and start receiving intelligence?
      </p>
      <p style="margin-bottom: 0.75rem;">
        <a href="https://claritydrop.co/" target="_blank" rel="noopener noreferrer" style="color: #ffd700; text-decoration: underline; font-weight: bold; transition: color 0.3s; font-size: 1.3rem;">
          Try ClarityDrop AI →
        </a>
      </p>
      <p style="margin-top: 0.75rem; font-size: 0.95rem; color: var(--text-secondary);">
        AI-powered weekly digests tailored to your topics and goals.
      </p>
    </div>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Real-World Benefits You'll Feel in Under a Week
    </h2>

    <ul style="padding-left: 1.25rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      <li style="margin-bottom: 0.5rem;"><strong>Time savings:</strong> Cut research time from hours to minutes.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Better decisions:</strong> Access balanced, multi-source viewpoints instead of echo chambers.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Reduced stress:</strong> No more fear of missing critical updates.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Deeper insights:</strong> AI connects ideas across domains you might never link manually.</li>
    </ul>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Tools like <a href="https://claritydrop.co/" target="_blank" rel="noopener noreferrer" style="color: #ffd700; text-decoration: underline;">ClarityDrop AI</a> excel here by turning scattered third-party information into clean, actionable weekly briefings. You simply tell it your interests and objectives, and it delivers intelligence—not just links.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Final Thought
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      The future belongs to those who can efficiently consume and synthesize external knowledge. Third-party information provides the raw material. AI provides the processing power. Together, they create a sustainable advantage in an accelerating world.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      If you're tired of information overload, it's time to let AI do the curating for you.
    </p>`,
    tags: JSON.stringify(['AI', 'Information Overload', 'Productivity', 'Third-Party Data']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-09')
  }
];

export default async function BlogIndex() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));
    if (blogPosts.length === 0) {
      // If db is available but empty, use fallback
      blogPosts = fallbackPosts;
    }
  } catch (error) {
    console.error('Database error:', error);
    // Fallback to hardcoded posts
    blogPosts = fallbackPosts;
  }

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <MilestoneBadges />

      {/* Blog Index */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          <h1
            className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            THE ARENA BLOG
          </h1>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Discussions on mental health, psychology, technology, philosophy, and everything in between.
          </p>

          <div className="space-y-6">
            {blogPosts.map((post) => {
              const tags = post.tags ? JSON.parse(post.tags) : [];
              const description = post.content.substring(0, 200) + '...';

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group p-6 rounded-lg border border-[var(--primary)]/30 bg-[var(--bg-lighter)]/30 hover:bg-[var(--bg-lighter)]/60 hover:border-[var(--accent)]/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h2
                        className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors"
                        style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--primary)' }}
                      >
                        {post.title}
                      </h2>
                      {post.subtitle && (
                        <p className="text-sm mb-3" style={{ color: 'var(--accent)', fontFamily: 'var(--font-orbitron)' }}>
                          {post.subtitle}
                        </p>
                      )}
                      <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {description}
                      </p>
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 text-sm rounded-full border border-[var(--accent)]/50 bg-[var(--accent)]/10"
                                  style={{ color: 'var(--accent)', fontFamily: 'var(--font-orbitron)' }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Unknown date'}</span>
                        {post.readTime && (
                          <>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </>
                        )}
                      </div>
                      <div className="mt-4 inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium">
                        Continue reading
                        <span style={{ color: '#ffd700' }}>→</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {blogPosts.length === 0 && (
            <p className="text-center mt-8" style={{ color: 'var(--text-secondary)' }}>
              No blog posts yet.
            </p>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-lg border border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              ← Back to Home
            </Link>
          </div>
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
