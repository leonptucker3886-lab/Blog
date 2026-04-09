"use client";


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
          <div className="absolute top-4 right-6">
            <ThemeSwitcher />
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
