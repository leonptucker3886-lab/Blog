'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// Blog data (subset for home page)
const latestPosts = [
  {
    id: 1,
    slug: 'understanding-darvo',
    title: 'Understanding DARVO',
    subtitle: 'Narcissism, Manipulation Tactics, and How to Protect Yourself',
    content: `<p>Conflicts drag on because emotions cloud the facts...</p>`,
    tags: JSON.stringify(['narcissism', 'DARVO', 'abuse']),
    readTime: '15 min read',
    createdAt: new Date('2024-01-01')
  },
  {
    id: 3,
    slug: 'donald-trumps-mental-health-genius-or-instability',
    title: 'Donald Trump\'s Mental Health: Genius or Instability?',
    subtitle: 'Examining the fine line between strategic brilliance and psychological concerns',
    content: `<p>Donald Trump's presidency and public persona have sparked intense debate about his mental health...</p>`,
    tags: JSON.stringify(['Trump', 'Mental Health', 'Psychology', 'Leadership']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-11')
  },
  {
    id: 8,
    slug: 'the-current-price-of-silver-market-trends-and-future-outlook',
    title: 'The Current Price of Silver: Market Trends and Future Outlook',
    subtitle: 'Understanding the forces driving silver prices in today\'s economy',
    content: `<p>Silver prices have experienced significant volatility in recent years...</p>`,
    tags: JSON.stringify(['$$$ Stuff', 'Silver', 'Precious Metals', 'Investment']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-16')
  }
];

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}



export default function Home() {

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-4xl mx-auto flex justify-center">
          <Link
            href="/"
            className="text-xl font-bold gradient-text"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            THE COLISEUM
          </Link>
        </div>
      </nav>

      {/* Blog Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Latest Posts
          </h2>

          <div className="space-y-8">
            {latestPosts.map((post) => {
              const tags = post.tags ? JSON.parse(post.tags) : [];
              const description = stripHtml(post.content).substring(0, 150) + '...';

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-6 rounded-lg border border-[var(--primary)]/30 bg-[var(--bg-lighter)]/30 hover:bg-[var(--bg-lighter)]/60 hover:border-[var(--accent)]/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors"
                          style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--primary)' }}>
                        {post.title}
                      </h3>
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
                        <span>{post.createdAt ? post.createdAt.toLocaleDateString() : 'Unknown date'}</span>
                        {post.readTime && (
                          <>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 rounded-lg border border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              View All Posts →
            </Link>
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer className="border-t border-[var(--primary)]/20 py-8 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-orbitron)' }}>
            © 2026             THE-COLISEUM • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </main>
  );
}
