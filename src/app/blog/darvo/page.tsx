"use client";

import Link from 'next/link';
import LeonLinkLogo from '@/components/LeonLinkLogo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { MilestoneBadges } from '@/components/MilestoneBadges';

export default function DARVOBlogPost() {
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

      {/* Blog Content */}
      <article className="py-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-3xl md:text-5xl font-bold gradient-text mb-6 text-center"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Understanding DARVO
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12" style={{ color: 'var(--text-secondary)' }}>
            Narcissism, Manipulation Tactics, and How to Protect Yourself
          </p>

          <div className="prose max-w-none" style={{ fontFamily: 'var(--font-rajdhani)', color: 'var(--text-primary)' }}>
            <p className="text-lg mb-8">
              Narcissism isn&apos;t just about self-absorption or vanity—when it crosses into narcissistic personality traits or narcissistic abuse, it often involves sophisticated psychological tactics designed to control, confuse, and evade accountability. One of the most effective and insidious strategies is <strong>DARVO</strong>, a pattern that leaves victims questioning their own reality.
            </p>

            <div className="my-8 p-6 rounded-lg border border-[var(--primary)]/30 bg-[var(--bg-lighter)]/50">
              <p className="text-center mb-4">
                Explore realistic examples of these tactics in action with the{' '}
                <a 
                  href="https://v0-narcassist-response-generator.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  Narcissist Response Generator personality test and toolkit
                </a>
                {' '}— a free educational resource designed to help you recognize and analyze narcissistic responses.
              </p>
            </div>

            <p className="mb-6">
              This blog post breaks down DARVO clearly, explores related narcissistic tactics, and offers practical steps for recognition and recovery. Whether you&apos;re navigating a difficult relationship, recovering from emotional abuse, or simply educating yourself, understanding these dynamics is empowering.
            </p>

            <h2 
              className="text-2xl font-bold mt-12 mb-6"
              style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--primary)' }}
            >
              What Is DARVO? The Acronym That Explains Gaslighting on Steroids
            </h2>

            <p className="mb-4">
              <strong>DARVO</strong> stands for <strong>Deny, Attack, Reverse Victim and Offender</strong>. It was coined in the 1990s by psychologist Dr. Jennifer Freyd in her research on betrayal trauma and perpetrator responses—particularly in cases of sexual abuse, though it applies broadly to narcissistic and abusive dynamics today.
            </p>

            <p className="mb-4">
              When confronted with harmful behavior, instead of owning up, a person using DARVO follows a predictable three-step script:
            </p>

            <div className="my-6 space-y-6">
              <div className="p-4 rounded-lg border border-[var(--primary)]/20 bg-[var(--bg-lighter)]/30">
                <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--accent)' }}>1. Deny</h3>
                <p className="mb-3">The individual flatly rejects the accusation or minimizes it.</p>
                <ul className="list-disc pl-6 space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>&quot;That never happened.&quot;</li>
                  <li>&quot;You&apos;re exaggerating/misremembering/making this up.&quot;</li>
                  <li>&quot;I would never do something like that.&quot;</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-[var(--primary)]/20 bg-[var(--bg-lighter)]/30">
                <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--accent)' }}>2. Attack</h3>
                <p className="mb-3">Once denial is on the table, the person shifts to aggressive counter-attacks against the accuser&apos;s character, memory, or motives. This often feels like gaslighting.</p>
                <ul className="list-disc pl-6 space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>&quot;You&apos;re crazy/too sensitive/paranoid.&quot;</li>
                  <li>&quot;You&apos;re always causing drama.&quot;</li>
                  <li>&quot;This is why no one can stand being around you.&quot;</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-[var(--primary)]/20 bg-[var(--bg-lighter)]/30">
                <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--accent)' }}>3. Reverse Victim and Offender</h3>
                <p className="mb-3">The final twist: the abuser claims <em>they</em> are the real victim while painting the original victim as the perpetrator.</p>
                <ul className="list-disc pl-6 space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>&quot;You&apos;re the one abusing &lt;em&gt;me&lt;/em&gt; by bringing this up.&quot;</li>
                  <li>&quot;Look at how you&apos;re hurting my reputation/family/mental health.&quot;</li>
                  <li>&quot;I&apos;m the one who should be upset here.&quot;</li>
                </ul>
              </div>
            </div>

            <p className="mb-6">
              This sequence is incredibly effective because it flips the power dynamic, induces guilt in the victim, and often recruits bystanders who only hear the &quot;victim&quot; narrative from the narcissist.
            </p>

            <p className="mb-6">
              See how these DARVO responses actually sound in real conversations by trying the{' '}
              <a 
                href="https://v0-narcassist-response-generator.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                Narcissist Response Generator personality test
              </a>. It lets you simulate realistic narcissistic replies and compare them with healthier communication styles.
            </p>

            <div className="my-8 p-6 rounded-lg border border-[var(--primary)]/30 bg-[var(--bg-lighter)]/50">
              <h3 className="font-bold mb-4">Real-World Example</h3>
              <p className="mb-2"><em>Partner A confronts Partner B about repeated emotional put-downs.</em></p>
              <p className="italic" style={{ color: 'var(--text-secondary)' }}>
                Partner B&apos;s DARVO response:
              </p>
              <blockquote className="mt-2 pl-4 border-l-4 border-[var(--primary)]">
                &quot;I never said those things—you&apos;re twisting my words because you&apos;re insecure and controlling. Now &lt;em&gt;I&apos;m&lt;/em&gt; the one feeling attacked and walking on eggshells. You&apos;re the toxic one here.&quot;
              </blockquote>
            </div>

            <h2 
              className="text-2xl font-bold mt-12 mb-6"
              style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--primary)' }}
            >
              Other Common Narcissistic Manipulation Tactics
            </h2>

            <p className="mb-4">
              DARVO rarely operates in isolation. Here are other frequent tactics you may encounter alongside it:
            </p>

            <ul className="space-y-3 mb-8">
                <li><strong>Gaslighting</strong> — Systematically making you doubt your perceptions, memories, or sanity (&quot;You&apos;re overreacting; that&apos;s not what I said&quot;).</li>
              <li><strong>Projection</strong> — Accusing <em>you</em> of the very behaviors they exhibit (e.g., a cheater constantly accusing you of cheating).</li>
              <li><strong>Love Bombing</strong> — Overwhelming affection, gifts, and attention early on to hook you, followed by withdrawal.</li>
              <li><strong>Smear Campaigns</strong> — Spreading rumors or lies to isolate you from friends, family, or colleagues.</li>
              <li><strong>Silent Treatment / Stonewalling</strong> — Punishing you with prolonged silence or emotional shutdown.</li>
              <li><strong>Triangulation</strong> — Bringing a third party (real or invented) into the conflict to create jealousy, competition, or doubt.</li>
                <li><strong>Playing the Victim / Martyr</strong> — A constant narrative of being wronged by everyone else, which overlaps heavily with the &quot;R&quot; in DARVO.</li>
            </ul>

            <p className="mb-6">
              These tactics often cycle in the <strong>narcissistic abuse cycle</strong>: idealization → devaluation → discard → hoover (attempt to suck you back in).
            </p>

            <p className="mb-6">
              If you want to practice identifying these patterns interactively, the{' '}
              <a 
                href="https://v0-narcassist-response-generator.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                Narcissist Response Generator
              </a>
              {' '}includes an 85-question Insight Test and a full educational library covering these exact behaviors.
            </p>

            <h2 
              className="text-2xl font-bold mt-12 mb-6"
              style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--primary)' }}
            >
              The Impact on Victims and Why It Feels So Confusing
            </h2>

            <p className="mb-4">
              DARVO and related tactics erode self-trust, create anxiety, depression, and even <strong>trauma bonding</strong> (the addictive pull of intermittent kindness mixed with harm). Victims often feel:
            </p>

              <ul className="space-y-2 mb-6">
                <li>Constantly &quot;crazy&quot; or at fault</li>
                <li>Isolated from support networks</li>
                <li>Trapped in a loop of trying to &quot;prove&quot; their experience</li>
              </ul>

            <p className="mb-6">
              Recognizing the pattern is the first step toward breaking free.
            </p>

            <p className="mb-6">
              Want to test how well you can spot narcissistic responses versus healthy ones? Head over to the{' '}
              <a 
                href="https://v0-narcassist-response-generator.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                Narcissist Response Generator personality test
              </a>
              {' '}for hands-on practice.
            </p>

            <h2 
              className="text-2xl font-bold mt-12 mb-6"
              style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--primary)' }}
            >
              Healthy Ways to Respond and Protect Yourself
            </h2>

            <ul className="space-y-4 mb-8">
                <li>
                  <strong>Recognize it in real time</strong> — When you hear denial + attack + victim flip, name it internally: &quot;This is DARVO.&quot;
                </li>
                <li>
                  <strong>Stay factual and brief</strong> — Avoid JADE (Justify, Argue, Defend, Explain). Short responses like &quot;I remember what happened&quot; or gray rocking (neutral, low-emotion replies) can limit engagement.
                </li>
              <li>
                <strong>Document everything</strong> — Keep records of incidents, messages, and patterns (dates, what was said, how you felt).
              </li>
                <li>
                  <strong>Set and hold boundaries</strong> — &quot;I won&apos;t continue this conversation if it turns into personal attacks.&quot;
                </li>
              <li>
                <strong>Seek external validation</strong> — Talk to a therapist trained in narcissistic abuse, trauma, or betrayal trauma. Support groups can also help.
              </li>
              <li>
                <strong>Limit or go no-contact</strong> when safe and possible — Especially with high-conflict individuals.
              </li>
            </ul>

            <p className="mb-6">
              Healing takes time. Focus on rebuilding self-trust, not &quot;fixing&quot; the other person.
            </p>

            <h2 
              className="text-2xl font-bold mt-12 mb-6"
              style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--primary)' }}
            >
              Final Thoughts
            </h2>

            <p className="mb-4">
              DARVO and narcissistic tactics thrive in secrecy and self-doubt. Shining light on them through education is one of the most powerful ways to reclaim your reality. You are not &quot;too sensitive,&quot; &quot;crazy,&quot; or &quot;the problem.&quot; Your experiences are valid.
            </p>

            <p className="mb-4">
              If you&apos;re struggling, reach out to a licensed mental health professional or a domestic abuse hotline in your area. Recovery is possible, and you don&apos;t have to do it alone.
            </p>

            <div className="my-8 p-6 rounded-lg border border-[var(--primary)]/30 bg-[var(--bg-lighter)]/50">
              <p className="text-center">
                For more interactive learning and realistic scenario practice, visit the{' '}
                <a 
                  href="https://v0-narcassist-response-generator.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline font-bold"
                >
                  Narcissist Response Generator personality test and toolkit
                </a>
                {' '}anytime.
              </p>
            </div>

            <p className="mb-4 text-center italic" style={{ color: 'var(--text-secondary)' }}>
              Stay curious, stay safe, and keep learning.
            </p>

            <p className="text-center text-sm mt-12" style={{ color: 'var(--text-secondary)' }}>
              Last updated: April 2026
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/" 
              className="inline-block px-6 py-3 rounded-lg border border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              ← Back to The Arena
            </Link>
          </div>
        </div>
      </article>

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
