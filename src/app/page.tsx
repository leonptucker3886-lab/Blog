"use client";

import Link from 'next/link';
import LeonLinkLogo from "../components/LeonLinkLogo";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ProfileCard from "../components/ProfileCard";
import { MilestoneBadges } from "../components/MilestoneBadges";



export default function Home() {

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <MilestoneBadges />
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--bg-dark)]/80 backdrop-blur-sm border-b border-[var(--primary)]/20 relative">
        <div className="w-full px-6 py-4">
          <LeonLinkLogo />
          <div className="flex justify-center">
            <ThemeSwitcher />
          </div>
          <div className="flex justify-center flex-wrap gap-3 mt-3">
            <Link 
              href="/blog"
              className="spartan-shield group inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-[var(--primary)]/50 hover:border-[var(--accent)] bg-[var(--bg-lighter)]/30 hover:bg-[var(--bg-lighter)]/60 transition-all duration-300"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent)' }}>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <span className="text-sm hover:text-[var(--accent)] transition-colors">Blog</span>
            </Link>
            
            <a 
              href="https://leonlink.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="spartan-shield group inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-[var(--primary)]/50 hover:border-[var(--accent)] bg-[var(--bg-lighter)]/30 hover:bg-[var(--bg-lighter)]/60 transition-all duration-300"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent)' }}>
                <path d="M6.5 3 L12 12 L17.5 3 L12 21" />
                <path d="M12 12 L3 6 L21 6" />
              </svg>
              <span className="text-sm hover:text-[var(--accent)] transition-colors">Leon Link</span>
              <svg className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent)' }}>
                <path d="M17.5 3 L12 12 L6.5 3 L12 21" />
                <path d="M12 12 L21 6 L3 6" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ProfileCard />
          
          <div className="mt-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              THE ARENA
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Discussions on Mental health, crypto, the origins of life, religion, sex, politics, nothing is out of text reach.
            </p>
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
