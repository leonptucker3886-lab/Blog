"use client";

import { useState } from "react";
import LeonLinkLogo from "../components/LeonLinkLogo";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ProfileCard from "../components/ProfileCard";
import { MilestoneBadges } from "../components/MilestoneBadges";

const blogPosts = [
  { id: 1, title: "Welcome to The Arena", category: "General", date: "April 2026" },
  { id: 2, title: "Learning Code in 2026", category: "Coding", date: "April 2026" },
  { id: 3, title: "From Chimneys to Computers", category: "Life", date: "March 2026" },
  { id: 4, title: "Lessons from Military Service", category: "Life", date: "March 2026" },
  { id: 5, title: "Website Building Tips", category: "Coding", date: "February 2026" },
  { id: 6, title: "Gaming and Discipline", category: "Gaming", date: "February 2026" },
];

const categories = ["All", "General", "Coding", "Life", "Gaming"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <ThemeSwitcher />
      <MilestoneBadges />
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--bg-dark)]/80 backdrop-blur-sm border-b border-[var(--primary)]/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <LeonLinkLogo />
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
              Personal thoughts, code projects, and life stories
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-8 z-10 relative">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all
                         ${activeCategory === cat 
                           ? 'bg-[var(--primary)] text-white' 
                           : 'bg-[var(--secondary)] text-[var(--text-secondary)]'}`}
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 pb-20 z-10 relative">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-[var(--secondary)] border border-[var(--primary)]/30 rounded-xl p-5
                        hover:border-[var(--accent)] transition-all cursor-pointer group">
              <span className="text-xs px-2 py-1 rounded bg-[var(--primary)]/20 mb-3 inline-block"
                    style={{ color: 'var(--accent)', fontFamily: 'var(--font-orbitron)' }}>
                {post.category}
              </span>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
                {post.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {post.date}
              </p>
            </article>
          ))}
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
