import Link from 'next/link';
import LeonLinkLogo from './LeonLinkLogo';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-dark)]/80 backdrop-blur-sm border-b border-[var(--primary)]/20 relative">
      <div className="w-full px-6 py-4">
        <Link href="/">
          <LeonLinkLogo />
        </Link>
        <div className="flex justify-center">
          <ThemeSwitcher />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3 max-w-md mx-auto">
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
            <span className="text-sm hover:text-[var(--accent)] transition-colors">The-Coliseum</span>
            <svg className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent)' }}>
              <path d="M17.5 3 L12 12 L6.5 3 L12 21" />
              <path d="M12 12 L21 6 L3 6" />
            </svg>
          </a>

          <a
            href="https://hhhhu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="spartan-shield group inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-[var(--primary)]/50 hover:border-[var(--accent)] bg-[var(--bg-lighter)]/30 hover:bg-[var(--bg-lighter)]/60 transition-all duration-300"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            <span className="text-2xl" style={{ color: '#ffd700' }}>♠</span>
            <span className="text-sm hover:text-[var(--accent)] transition-colors">SunNFun Slots</span>
          </a>

          <a
            href="https://clarify-drop-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="spartan-shield group inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-[var(--primary)]/50 hover:border-[var(--accent)] bg-[var(--bg-lighter)]/30 hover:bg-[var(--bg-lighter)]/60 transition-all duration-300"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            <span className="text-2xl" style={{ color: '#ffd700' }}>👁️</span>
            <span className="text-sm hover:text-[var(--accent)] transition-colors">Clarity Drop AI</span>
          </a>
        </div>
      </div>
    </header>
  );
}