"use client";

import Link from 'next/link';
import ProfileCard from "../components/ProfileCard";
import { MilestoneBadges } from "../components/MilestoneBadges";



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

      <MilestoneBadges />

      {/* Hero Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              THE ARENA
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Discussions on Mental health, crypto, the origins of life, religion, sex, politics, nothing is out of text reach.
            </p>
          </div>

          <ProfileCard />
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
