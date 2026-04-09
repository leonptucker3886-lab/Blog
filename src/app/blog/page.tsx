"use client";

import Link from 'next/link';
import LeonLinkLogo from '@/components/LeonLinkLogo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { MilestoneBadges } from '@/components/MilestoneBadges';

export default function BlogIndex() {
  const blogPosts = [
    {
      slug: 'darvo',
      title: 'Understanding DARVO',
      subtitle: 'Narcissism, Manipulation Tactics, and How to Protect Yourself',
      date: 'April 9, 2026',
      readTime: '15 min read',
      description: 'An educational guide to recognizing DARVO abusive patterns in relationships - Deny, Attack, Reverse Victim and Offender.'
    }
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <MilestoneBadges />
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--bg-dark)]/80 backdrop-blur-sm border-b border-[var(--primary)]/20 relative">
        <div className="w-full px-6 py-4">
          <Link href="/">
            <LeonLinkLogo />
          </Link>
          <div className="flex justify-center mt-2">
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      {/* Blog Index */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            THE ARENA BLOG
          </h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Discussions on mental health, psychology, technology, philosophy, and everything in between.
          </p>

          <div className="space-y-6">
            {blogPosts.map((post) => (
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
                    <p className="text-sm mb-3" style={{ color: 'var(--accent)', fontFamily: 'var(--font-orbitron)' }}>
                      {post.subtitle}
                    </p>
                    <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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
            © 2026 LEON-LINK • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </main>
  );
}
