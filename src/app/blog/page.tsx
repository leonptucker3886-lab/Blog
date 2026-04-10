'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { MilestoneBadges } from '@/components/MilestoneBadges';

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
    slug: 'donald-trumps-mental-health-genius-or-instability',
    title: 'Donald Trump\'s Mental Health: Genius or Instability?',
    subtitle: 'Examining the fine line between strategic brilliance and psychological concerns',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      Donald Trump's presidency and public persona have sparked intense debate about his mental health. Supporters often praise his "genius" and "brilliance," while critics point to concerning behaviors that suggest instability. Where does the truth lie?
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      The Case for Strategic Genius
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Trump's supporters argue that what appears as erratic behavior is actually masterful strategy. His unconventional communication style, they claim, cuts through media filters and speaks directly to voters. His business acumen built a real estate empire, suggesting high intelligence and risk-taking ability.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      The Case for Psychological Concerns
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Critics, including mental health professionals, have raised concerns about narcissistic personality traits, possible mania, and impulsive behavior. His Twitter habits and public outbursts have been cited as evidence of poor emotional regulation.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Yet, some of the same traits that concern critics—confidence, resilience, and unconventional thinking—could also be assets in leadership. Is this genius masked as instability, or instability mistaken for genius? The question remains open, leaving us to wonder about the true nature of Trump's psychological profile.
    </p>`,
    tags: JSON.stringify(['Trump', 'Mental Health', 'Psychology', 'Leadership']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-11')
  },
  {
    id: 4,
    slug: 'the-psychology-of-trumps-twitter-behavior-brilliance-or-disorder',
    title: 'The Psychology of Trump\'s Twitter Behavior: Brilliance or Disorder?',
    subtitle: 'Analyzing the mental processes behind viral social media communication',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      Donald Trump's use of Twitter (now X) revolutionized political communication, but also raised questions about his psychological state. Was this innovative strategy or evidence of mental health issues?
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Strategic Communication Innovation
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Proponents argue Trump's Twitter usage was brilliant marketing. He bypassed traditional media gatekeepers, controlled his message, and created direct engagement with millions. His tweets often dominated news cycles, giving him unprecedented reach and influence.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Signs of Psychological Patterns
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Critics saw patterns of impulsivity, emotional reactivity, and attention-seeking behavior. Late-night tweets and rapid responses suggested poor impulse control. The constant need for validation through likes and retweets could indicate underlying insecurities.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      However, the same behaviors that seem disordered to some were highly effective for others. Trump's online presence built a massive following and disrupted political norms. Was this disordered thinking that happened to work, or calculated brilliance that appeared disordered? The ambiguity persists, making it difficult to draw definitive conclusions.
    </p>`,
    tags: JSON.stringify(['Trump', 'Mental Health', 'Social Media', 'Psychology']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-12')
  },
  {
    id: 5,
    slug: 'the-book-that-predicted-trump-coincidence-or-divine-plan',
    title: 'The Book That Predicted Trump: Coincidence or Divine Plan?',
    subtitle: 'Examining the eerie similarities between fiction and reality',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      In 1988, author Marjorie Bowen published "The Trump Prophecy," a novel that eerily predicted Donald Trump's rise to power. The uncanny parallels have led some to wonder if this was mere coincidence or something more prophetic.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      The Striking Similarities
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Bowen's book describes a real estate mogul named "Donald Trump" who becomes president after exposing corruption in Washington. The fictional Trump is portrayed as brash, successful in business, and ultimately victorious in politics. Many plot points mirror real events from Trump's actual presidency.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Coincidence or Something More?
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Skeptics point out that Trump was already a public figure in 1988, so using his name wasn't entirely coincidental. The book's predictions could be explained by cultural trends and political observations of the time. However, the specificity of some predictions—particularly regarding Trump's political success—remains puzzling.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Some interpret this as evidence of divine providence or predictive programming. Others see it as a remarkable coincidence. The book's existence continues to fuel speculation about whether Trump's rise was somehow foretold, leaving readers to ponder the nature of fate, fiction, and reality.
    </p>`,
    tags: JSON.stringify(['Trump', 'Prophecy', 'Books', 'Coincidence']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-13')
  },
  {
    id: 6,
    slug: 'trump-and-epstein-business-partner-or-casual-acquaintance',
    title: 'Trump and Epstein: Business Partner or Casual Acquaintance?',
    subtitle: 'Unpacking the complex relationship between two controversial figures',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      The relationship between Donald Trump and Jeffrey Epstein has been a source of intense speculation and controversy. While some claim they were close business partners, others argue their connection was superficial. The truth appears to lie somewhere in between.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      The Business Connections
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Trump and Epstein's paths crossed in the 1980s and 1990s through New York City's elite social circles. Epstein managed money for several high-profile individuals, and Trump was a prominent businessman. There are documented instances of them attending events together and Epstein flying on Trump's private jet.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      The Level of Involvement
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Trump has claimed their relationship was casual, limited to social interactions. However, Epstein was banned from Trump's Mar-a-Lago club in 2007 after being accused of soliciting prostitution, suggesting a closer relationship than Trump has admitted. Flight logs show Epstein's associates flew on Trump's plane multiple times.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      While they weren't formal business partners, their social and professional circles overlapped significantly. Trump's denials of close friendship contrast with evidence of repeated interactions. The exact nature of their relationship remains a subject of debate, with implications for both men's reputations and legacies.
    </p>`,
    tags: JSON.stringify(['Trump', 'Epstein', 'Relationships', 'Controversy']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-14')
  },
  {
    id: 7,
    slug: 'the-trump-family-legacy-from-immigrant-roots-to-american-dynasty',
    title: 'The Trump Family Legacy: From Immigrant Roots to American Dynasty',
    subtitle: 'Tracing the remarkable journey from Scottish immigrant to presidential family',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      The Trump family's story is a classic American immigrant tale that evolved into a modern dynasty. From humble beginnings in Scotland to the highest levels of American business and politics, the family's journey reflects both opportunity and controversy.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      The Immigrant Beginnings
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Donald Trump's grandfather, Friedrich Trump, immigrated from Germany (though family lore claims Scotland) in the late 1800s. He became a successful barber and saloon owner, then invested in the Klondike Gold Rush. His son, Fred Trump, built a real estate empire in New York, focusing on middle-class housing.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      The Modern Dynasty
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Donald Trump inherited and expanded the family business, becoming a celebrity businessman and eventually president. His children—Donald Jr., Ivanka, Eric, and Tiffany—have become prominent figures in business and politics. The family has been both celebrated for its success and criticized for its controversies.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      From immigrant roots to presidential aspirations, the Trump family embodies the American Dream's complexities. Their story raises questions about wealth, power, and the immigrant experience in America, leaving us to wonder about the true cost of such ambition and success.
    </p>`,
    tags: JSON.stringify(['Trump', 'Family History', 'Immigration', 'Legacy']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-15')
  },
  {
    id: 8,
    slug: 'the-current-price-of-silver-market-trends-and-future-outlook',
    title: 'The Current Price of Silver: Market Trends and Future Outlook',
    subtitle: 'Understanding the forces driving silver prices in today\'s economy',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      Silver prices have experienced significant volatility in recent years, influenced by industrial demand, investment trends, and macroeconomic factors. As of 2026, silver trades around $25-30 per ounce, but what drives these fluctuations?
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Industrial Demand Drives Value
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Unlike gold, which is primarily an investment asset, silver has substantial industrial applications. It's used in electronics, solar panels, automotive components, and medical devices. As green energy transitions accelerate, demand for silver in solar panels has surged.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Investment and Speculation
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Silver also serves as an investment hedge against inflation and currency devaluation. When economic uncertainty rises, investors often turn to precious metals. However, silver's price can be more volatile than gold due to its dual role as both industrial metal and investment asset.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      The future outlook depends on industrial growth versus economic stability. Will renewable energy demand push prices higher, or will economic recovery reduce safe-haven buying? The balance between these competing forces leaves investors wondering about silver's trajectory.
    </p>`,
    tags: JSON.stringify(['$$$ Stuff', 'Silver', 'Precious Metals', 'Investment']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-16')
  },
  {
    id: 9,
    slug: 'gold-prices-in-2026-economic-factors-and-market-dynamics',
    title: 'Gold Prices in 2026: Economic Factors and Market Dynamics',
    subtitle: 'Why gold remains the ultimate safe-haven asset in uncertain times',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      Gold has long been considered the ultimate safe-haven asset, and 2026 has proven no different. Trading around $2,000-2,500 per ounce, gold's price reflects ongoing global economic uncertainties and shifting monetary policies.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Inflation and Currency Concerns
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Rising inflation rates and concerns about currency devaluation drive investors toward gold. When fiat currencies lose purchasing power, gold traditionally maintains its value. Central bank policies and geopolitical tensions further support gold's appeal as a store of value.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Central Bank Policies
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Major central banks continue to accumulate gold reserves, viewing it as a hedge against economic instability. China's significant gold purchases and shifts in global reserve management contribute to ongoing demand.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      However, rising interest rates can pressure gold prices downward, as they increase the opportunity cost of holding non-yielding assets. The interplay between economic growth, inflation, and monetary policy creates uncertainty about gold's future direction.
    </p>`,
    tags: JSON.stringify(['$$$ Stuff', 'Gold', 'Precious Metals', 'Economy']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-17')
  },
  {
    id: 10,
    slug: 'the-origin-of-bitcoin-satoshi-nakamoto-and-the-birth-of-cryptocurrency',
    title: 'The Origin of Bitcoin: Satoshi Nakamoto and the Birth of Cryptocurrency',
    subtitle: 'How a mysterious figure revolutionized finance in 2008',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      Bitcoin's creation in 2008 marked the beginning of a financial revolution. But who was Satoshi Nakamoto, and what motivated this groundbreaking invention?
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      The 2008 Whitepaper
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Following the 2008 financial crisis, an anonymous developer using the pseudonym Satoshi Nakamoto published "Bitcoin: A Peer-to-Peer Electronic Cash System." This whitepaper proposed a decentralized digital currency that operated without central banks or intermediaries.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      The Mystery of Satoshi
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Satoshi's true identity remains unknown. Speculation has pointed to various individuals, including cryptography experts and economists, but no definitive proof exists. Satoshi mined the first bitcoins and facilitated early development before disappearing from public view in 2011.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Was Satoshi a lone genius, a team effort, or perhaps someone we wouldn't expect? The mystery adds to Bitcoin's allure, leaving us to wonder about the true origins of this transformative technology.
    </p>`,
    tags: JSON.stringify(['$$$ Stuff', 'Bitcoin', 'Cryptocurrency', 'Blockchain']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-18')
  },
  {
    id: 11,
    slug: 'what-is-an-nft-non-fungible-tokens-explained',
    title: 'What is an NFT? Non-Fungible Tokens Explained',
    subtitle: 'Understanding the digital assets revolutionizing ownership and creativity',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      NFTs, or Non-Fungible Tokens, have taken the digital world by storm, but what exactly are they and why do they matter?
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Fungible vs. Non-Fungible
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Traditional cryptocurrencies like Bitcoin are fungible—each unit is interchangeable with another. NFTs are non-fungible, meaning each token is unique and represents something specific. This uniqueness allows for verifiable digital ownership of art, music, collectibles, and other digital assets.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      How NFTs Work
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      NFTs are created on blockchain networks, most commonly Ethereum. Each NFT contains metadata that proves ownership and authenticity. Smart contracts govern how NFTs can be transferred, ensuring scarcity and provenance.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Applications and Controversy
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Beyond digital art, NFTs enable new business models in gaming, music, real estate, and identity verification. However, environmental concerns about blockchain energy use and market volatility have sparked debate about their long-term viability.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Are NFTs a revolutionary technology for digital ownership, or an over-hyped bubble? Their evolution will depend on solving scalability and sustainability challenges, leaving the future of digital assets uncertain.
    </p>`,
    tags: JSON.stringify(['$$$ Stuff', 'NFT', 'Cryptocurrency', 'Digital Assets']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-19')
  },
  {
    id: 12,
    slug: 'altcoins-beyond-bitcoin-understanding-alternative-cryptocurrencies',
    title: 'Altcoins: Beyond Bitcoin - Understanding Alternative Cryptocurrencies',
    subtitle: 'Exploring the diverse ecosystem of digital currencies',
    content: `<p style="font-size: 1.125rem; line-height: 1.75rem; margin-bottom: 2rem; color: var(--text-primary); font-family: var(--font-rajdhani);">
      While Bitcoin pioneered cryptocurrency, thousands of alternative coins (altcoins) have emerged, each with unique features and purposes. What drives this diversity?
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Types of Altcoins
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Altcoins serve various functions: Ethereum enables smart contracts, stablecoins like USDC maintain pegged values, and meme coins like Dogecoin focus on community and virality. Privacy coins prioritize anonymity, while utility tokens power specific blockchain applications.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Innovation vs. Speculation
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Many altcoins introduce technological improvements over Bitcoin, such as faster transactions or enhanced privacy. However, market speculation often drives prices more than fundamental value, leading to extreme volatility.
    </p>

    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 3rem; margin-bottom: 1.25rem; font-family: var(--font-cinzel);">
      Risks and Rewards
    </h2>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Altcoins offer diversification and exposure to emerging technologies, but they carry higher risk than established cryptocurrencies. Many projects fail, and regulatory uncertainty adds complexity.
    </p>

    <p style="margin-bottom: 1.5rem; color: var(--text-primary); font-family: var(--font-rajdhani); line-height: 1.6;">
      Will altcoins fulfill their innovative potential, or will most become forgotten experiments? The cryptocurrency ecosystem's evolution depends on technological maturity and regulatory clarity, leaving investors to navigate an uncertain landscape.
    </p>`,
    tags: JSON.stringify(['$$$ Stuff', 'Altcoins', 'Cryptocurrency', 'Blockchain']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-20')
  },
  {
    id: 13,
    slug: 'ai-sex-robots-controversy',
    title: 'AI Sex Robots: Liberation or Objectification?',
    subtitle: 'Exploring the ethical dilemmas of artificial intimacy',
    content: `<p>The rise of AI sex robots presents a profound ethical quandary. On one hand, proponents argue they offer safe, customizable companionship for those who struggle with human relationships, potentially reducing exploitation in the sex industry. On the other, critics contend they reinforce harmful gender stereotypes and could desensitize users to real human connection.</p>
<p>From a libertarian perspective, adults should have the freedom to choose their forms of pleasure, and AI companions might even reduce demand for human trafficking. However, feminists worry that these robots, often designed with hyper-sexualized female forms, perpetuate objectification and could normalize abusive behaviors.</p>
<p>The technology is advancing rapidly, with some robots featuring emotional intelligence and learning capabilities. But does this make them more human-like, or just better at manipulation? The debate touches on deeper questions about consent, empathy, and what it means to be human in an increasingly automated world.</p>`,
    tags: JSON.stringify(['AI', 'sex robots', 'ethics', 'relationships']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-11')
  },
  {
    id: 14,
    slug: 'ai-in-warfare-drones-and-autonomy',
    title: 'AI in Warfare: Lethal Autonomous Weapons Systems',
    subtitle: 'The future of combat and the ethics of killer robots',
    content: `<p>Lethal Autonomous Weapons Systems (LAWS), or "killer robots," represent the next frontier in military technology. These AI-powered drones and systems can identify and engage targets without human intervention, promising to reduce soldier casualties and make warfare more efficient.</p>
<p>Supporters argue that AI can make better tactical decisions than humans under stress, potentially minimizing civilian casualties through precision targeting. However, opponents fear a "robot arms race" where these systems proliferate globally, making warfare too easy and lowering the threshold for conflict.</p>
<p>The core concern is accountability: who is responsible when an AI makes a fatal error? International treaties are being debated, but the technology's rapid advancement outpaces regulation. As AI becomes more autonomous, we must grapple with whether machines should have the power of life and death over humans.</p>`,
    tags: JSON.stringify(['AI', 'warfare', 'ethics', 'military']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-12')
  },
  {
    id: 15,
    slug: 'income-now-vs-1990s',
    title: 'Income Inequality: Now vs. the 1990s',
    subtitle: 'Has economic mobility improved or worsened?',
    content: `<p>The 1990s are often romanticized as a time of economic prosperity, but how does income distribution compare to today? In the 90s, the middle class expanded significantly, with wages rising across income brackets. However, the gap between the rich and poor was already widening due to globalization and technology.</p>
<p>Today, while GDP has grown substantially, wage growth has stagnated for many. The top 1% has captured an increasingly large share of income, leading to debates about whether capitalism is inherently flawed or if policy changes are needed.</p>
<p>Some argue that modern gig economy and remote work offer new opportunities, but others point to rising living costs and student debt as barriers. The question remains: are we better off than in the 90s, or has progress been illusory for most people?</p>`,
    tags: JSON.stringify(['$$$ Stuff', 'income', 'inequality', 'economy']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-13')
  },
  {
    id: 16,
    slug: 'interest-vs-compound-interest',
    title: 'Interest Rates vs. Compound Interest: The Hidden Power',
    subtitle: 'Understanding how small differences create massive wealth gaps',
    content: `<p>Simple interest and compound interest seem similar on the surface, but their long-term effects are dramatically different. Simple interest calculates earnings only on the principal amount, while compound interest earns "interest on interest," leading to exponential growth.</p>
<p>This difference explains why starting to save early, even small amounts, can lead to substantial wealth. It's also why debt can spiral out of control when compounded. Critics argue that compound interest favors the wealthy who can invest early, while the poor struggle with high-interest debt.</p>
<p>From an economic perspective, compound interest drives investment and growth. But is it fair that the rich get richer while the poor pay exorbitant rates on credit cards and payday loans? The debate touches on broader questions of financial literacy and systemic inequality.</p>`,
    tags: JSON.stringify(['$$$ Stuff', 'interest', 'compound interest', 'wealth']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-14')
  },
  {
    id: 17,
    slug: 'probability-of-simulation',
    title: 'Are We Living in a Simulation?',
    subtitle: 'The philosophical and scientific case for our simulated reality',
    content: `<p>Nick Bostrom's simulation argument suggests that if advanced civilizations can create simulations indistinguishable from reality, and they create many such simulations, then we're likely living in one rather than the "base" reality.</p>
<p>Proponents point to the fine-tuning of physical constants, the digital nature of our universe at quantum levels, and the rapid advancement of VR technology as evidence. If true, it would revolutionize our understanding of consciousness and free will.</p>
<p>Skeptics argue that creating such detailed simulations is computationally impossible, and the argument relies on unproven assumptions. But the question persists: if we're in a simulation, what does that mean for ethics, purpose, and our place in the cosmos?</p>`,
    tags: JSON.stringify(['simulation', 'philosophy', 'universe']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-15')
  },
  {
    id: 18,
    slug: 'origins-of-man-evolution-vs-creation',
    title: 'Origins of Humanity: Evolution or Divine Creation?',
    subtitle: 'The scientific evidence versus religious beliefs',
    content: `<p>The debate over human origins pits evolutionary biology against creationist interpretations of religious texts. Fossils, DNA evidence, and genetic similarities with other primates strongly support the theory that humans evolved from earlier hominids over millions of years.</p>
<p>Creationists argue that the complexity of life, particularly human consciousness, requires an intelligent designer. They point to gaps in the fossil record and irreducible complexity as evidence against gradual evolution.</p>
<p>While science sees evolution as a natural process guided by natural selection, faith sees divine intervention. Can these perspectives be reconciled, or must we choose between empirical evidence and spiritual truth? The answer may lie in how we interpret both science and scripture.</p>`,
    tags: JSON.stringify(['origins', 'evolution', 'creation', 'science']),
    readTime: '4 min read',
    createdAt: new Date('2026-04-16')
  },
  {
    id: 19,
    slug: 'guns-and-people-we-kill',
    title: 'Guns and Violence: Protection or Threat?',
    subtitle: 'The Second Amendment debate in modern America',
    content: `<p>The right to bear arms is enshrined in the US Constitution, but mass shootings and rising gun violence have sparked intense debate. Gun rights advocates argue that firearms are essential for self-defense and that "guns don't kill people, people do."</p>
<p>Gun control proponents point to statistics showing that countries with stricter gun laws have lower rates of gun deaths. They argue that military-style weapons have no place in civilian hands and that background checks and waiting periods could prevent tragedies.</p>
<p>The issue is deeply polarized, touching on fears of government tyranny versus fears of personal vulnerability. As technology advances with smart guns and red flag laws, the debate evolves, but the core question remains: how do we balance individual rights with public safety?</p>`,
    tags: JSON.stringify(['guns', 'violence', 'rights', 'safety']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-17')
  },
  {
    id: 20,
    slug: 'history-of-religion-evolution',
    title: 'The Evolution of Religion: From Animism to Modern Faiths',
    subtitle: 'How spiritual beliefs shaped human civilization',
    content: `<p>Religion has been a cornerstone of human society for millennia, evolving from animistic beliefs in nature spirits to complex organized faiths. Early religions served to explain natural phenomena and provide social cohesion.</p>
<p>As civilizations developed, religions became more structured, with moral codes, rituals, and institutions. The Axial Age (800-200 BCE) saw the emergence of major world religions like Buddhism, Christianity, and Islam, emphasizing ethical living and salvation.</p>
<p>Critics argue that religion has been used to justify wars and oppression, while supporters say it provides meaning and moral guidance. In secular societies, religion's role has diminished but persists in various forms. The future may see further evolution or decline as science answers more questions.</p>`,
    tags: JSON.stringify(['religion', 'history', 'evolution']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-18')
  },
  {
    id: 21,
    slug: 'spaceballs-vs-star-wars',
    title: 'Spaceballs vs. Star Wars: Comedy or Blasphemy?',
    subtitle: 'Mel Brooks\' parody and its impact on sci-fi fandom',
    content: `<p>Mel Brooks' 1987 film Spaceballs mercilessly parodies Star Wars, with characters like Lone Starr and Dark Helmet mimicking Luke Skywalker and Darth Vader. Fans debate whether this homage honors the original or undermines its legacy.</p>
<p>Supporters argue Spaceballs celebrates Star Wars' cultural impact while poking fun at its clichés, much like Airplane! did for disaster movies. Critics say it cheapens the franchise, appealing to lowest common denominators.</p>
<p>As parody becomes more common in media, Spaceballs raises questions about when homage becomes mockery. Does it enrich or erode the source material? The film's enduring popularity suggests parody can coexist with reverence.</p>`,
    tags: JSON.stringify(['spaceballs', 'star wars', 'parody', 'culture']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-19')
  },
  {
    id: 22,
    slug: 'culture-shock-nuances-50-cultures',
    title: 'Culture Shock: 50 Nuances Across Cultures',
    subtitle: 'Navigating the invisible rules of global etiquette',
    content: `<p>Culture shock manifests in subtle ways across 50 cultures. In Japan, bowing depth indicates respect levels; in Brazil, personal space is minimal; in Saudi Arabia, gender segregation is norm. Understanding these nuances prevents faux pas.</p>
<p>Westerners often assume universal norms, but greetings vary: cheek kisses in France, namaste in India, firm handshakes in Germany. Food taboos differ: no beef in India, no pork in Muslim countries, insects as delicacy in Thailand.</p>
<p>Time perception varies too: polychronic cultures (Latin America) prioritize relationships over schedules, while monochronic ones (Germany) value punctuality. Embracing diversity requires suspending judgment and observing quietly.</p>`,
    tags: JSON.stringify(['culture', 'shock', 'nuances', 'global']),
    readTime: '4 min read',
    createdAt: new Date('2026-04-20')
  },
  {
    id: 23,
    slug: 'squatting-poo-history',
    title: 'The Squatting Poo: Ancient Wisdom or Modern Fad?',
    subtitle: 'The history and health debate of natural defecation positions',
    content: `<p>Squatting to defecate, common in Asia and Africa, is gaining Western attention. Proponents claim it prevents hemorrhoids and constipation by aligning the rectum naturally, unlike sitting on toilets.</p>
<p>Anthropologists note humans evolved squatting; modern toilets may contribute to digestive issues. Studies show squatting reduces straining and improves bowel movements. However, critics argue toilets are hygienic and accessible for disabled people.</p>
<p>As squat toilets appear in eco-friendly designs, the debate continues: tradition vs. modernity. Is squatting a healthier way, or just cultural preference? The answer may lie in individual physiology and comfort.</p>`,
    tags: JSON.stringify(['squatting', 'poo', 'health', 'tradition']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-21')
  },
  {
    id: 24,
    slug: 'shark-vs-bear-attacks',
    title: 'Shark Attacks vs. Bear Attacks: Which is Deadlier?',
    subtitle: 'Comparing ocean and wilderness threats with surprising statistics',
    content: `<p>Sharks strike fear with Jaws imagery, but bears kill more people annually. In 2023, bears caused 11 fatalities worldwide vs. sharks' 6. Yet shark attacks get more media attention due to sensationalism.</p>
<p>Bears attack in forests near human habitats; sharks in oceans during recreation. Bear encounters often involve surprise or food protection; shark attacks usually mistaken identity. Both are rare: lifetime odds of shark attack 1 in 11.5 million, bear 1 in 2.1 million.</p>
<p>Fear vs. reality: sharks symbolize unknown depths, bears familiar wilderness. Education reduces risks—avoiding bear food storage, not swimming with injuries. The deadlier threat depends on location and behavior.</p>`,
    tags: JSON.stringify(['shark', 'bear', 'attacks', 'statistics']),
    readTime: '3 min read',
    createdAt: new Date('2026-04-22')
  },
  {
    id: 25,
    slug: 'history-civilization-breakdown',
    title: 'Breaking Down the History of Civilization',
    subtitle: 'From hunter-gatherers to space age: key turning points',
    content: `<p>Civilization began 10,000 years ago with agriculture in Mesopotamia, enabling settled communities. Writing (cuneiform) followed, preserving knowledge. River valleys fostered early civilizations: Nile (Egypt), Indus (India), Yellow (China).</p>
<p>The Axial Age (800-200 BCE) brought philosophical revolutions: Buddhism, Confucianism, Greek philosophy. Industrial Revolution (1760-1840) mechanized production, urbanization. Information Age (1970s-present) digitized communication.</p>
<p>Each era built on the last, but at costs: environmental degradation, inequality. Will future civilizations avoid past mistakes? History shows progress through trial and error, with humanity's resilience as constant.</p>`,
    tags: JSON.stringify(['history', 'civilization', 'progress', 'timeline']),
    readTime: '4 min read',
    createdAt: new Date('2026-04-23')
  }
];

// Function to strip HTML tags
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

export default function BlogIndex() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      router.push('/blog');
    } else {
      router.push(`/blog?category=${encodeURIComponent(category)}`);
    }
  };

  // Define main categories
  const mainCategories = useMemo(() => ['Trump', '$$$', 'Mental Health', 'The Universe', 'Artificial Intelligence', 'History', 'Culture', 'Science', 'Religion'], []);

  // Get all unique tags for categories
  const allCategories = useMemo(() => {
    const tags = new Set<string>();
    fallbackPosts.forEach(post => {
      const postTags = post.tags ? JSON.parse(post.tags) : [];
      postTags.forEach((tag: string) => tags.add(tag));
    });
    return ['All', ...Array.from(tags).sort()];
  }, []);

  // Group posts by main categories
  const categorizedPosts = useMemo(() => {
    const groups: { [key: string]: typeof fallbackPosts } = {};
    mainCategories.forEach(cat => {
      groups[cat] = [];
    });

    fallbackPosts.forEach(post => {
      const tags = post.tags ? JSON.parse(post.tags) : [];
      for (const cat of mainCategories) {
        if (cat === 'Trump' && tags.includes('Trump')) {
          groups[cat].push(post);
          break;
        } else if (cat === '$$$' && tags.includes('$$$ Stuff')) {
          groups[cat].push(post);
          break;
        } else if (cat === 'Mental Health' && tags.includes('Mental Health')) {
          groups[cat].push(post);
          break;
        } else if (cat === 'The Universe' && (tags.includes('universe') || tags.includes('life') || tags.includes('evolution') || tags.includes('simulation'))) {
          groups[cat].push(post);
          break;
        } else if (cat === 'Artificial Intelligence' && tags.includes('AI')) {
          groups[cat].push(post);
          break;
        } else if (cat === 'History' && (tags.includes('history') || tags.includes('civilization') || tags.includes('Americans') || tags.includes('generals') || tags.includes('Nixon') || tags.includes('crusaders') || tags.includes('popes'))) {
          groups[cat].push(post);
          break;
        } else if (cat === 'Culture' && (tags.includes('culture') || tags.includes('spaceballs') || tags.includes('shark') || tags.includes('bear') || tags.includes('squatting'))) {
          groups[cat].push(post);
          break;
        } else if (cat === 'Science' && (tags.includes('DNA') || tags.includes('leeches') || tags.includes('origins') || tags.includes('guns') || tags.includes('delta force') || tags.includes('bitcoin') || tags.includes('internet'))) {
          groups[cat].push(post);
          break;
        } else if (cat === 'Religion' && (tags.includes('religion') || tags.includes('Illuminati'))) {
          groups[cat].push(post);
          break;
        }
      }
    });

    return groups;
  }, [mainCategories]);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return fallbackPosts.filter(post => {
        return searchTerm === '' ||
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          stripHtml(post.content).toLowerCase().includes(searchTerm.toLowerCase()) ||
          (post.tags && JSON.parse(post.tags).some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      });
    } else {
      return fallbackPosts.filter(post => {
        const matchesCategory = post.tags && JSON.parse(post.tags).includes(selectedCategory);
        const matchesSearch = searchTerm === '' ||
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          stripHtml(post.content).toLowerCase().includes(searchTerm.toLowerCase()) ||
          (post.tags && JSON.parse(post.tags).some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())));

        return matchesCategory && matchesSearch;
      });
    }
  }, [searchTerm, selectedCategory]);

  // Get categories that have posts
  const availableCategories = useMemo(() => {
    return mainCategories.filter(cat => categorizedPosts[cat] && categorizedPosts[cat].length > 0);
  }, [mainCategories, categorizedPosts]);

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Index */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Category Links */}
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            <button
              onClick={() => handleCategoryChange('All')}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg border transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
              }`}
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              <span className="text-sm">All</span>
            </button>
            {availableCategories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
                }`}
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                <span className="text-sm">{category}</span>
              </button>
            ))}
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            NO SACRED COWS
          </h1>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Discussions on mental health, psychology, technology, philosophy, and everything in between.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All</option>
              {availableCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {selectedCategory === 'All' ? (
            <div className="space-y-12">
              {mainCategories.map(category => {
                const posts = categorizedPosts[category];
                if (posts.length === 0) return null;

                return (
                  <div key={category} className="space-y-6">
                    <h2 className="text-2xl font-bold gradient-text border-b border-[var(--accent)]/30 pb-2"
                        style={{ fontFamily: 'var(--font-cinzel)' }}>
                      {category}
                    </h2>
                    <div className="space-y-6">
                      {posts.map((post: BlogPost) => {
              const tags = post.tags ? JSON.parse(post.tags) : [];
              const description = stripHtml(post.content).substring(0, 200) + '...';

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
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post: BlogPost) => {
                const tags = post.tags ? JSON.parse(post.tags) : [];
                const description = stripHtml(post.content).substring(0, 200) + '...';

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
          )}

          {selectedCategory !== 'All' && filteredPosts.length === 0 && (
            <p className="text-center mt-8" style={{ color: 'var(--text-secondary)' }}>
              No blog posts found matching your search.
            </p>
          )}

          {selectedCategory !== 'All' && filteredPosts.length > 0 && (
            <p className="text-center mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
              Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
                No Sacred Cows
              </h3>
              <p className="text-gray-400 text-sm">
                Unfiltered discussions on controversial topics.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/blog?category=Trump" className="hover:text-white transition-colors">Trump</Link></li>
                <li><Link href="/blog?category=$$$+Stuff" className="hover:text-white transition-colors">$$$ Stuff</Link></li>
                <li><Link href="/blog?category=Mental+Health" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/blog?category=The+Universe" className="hover:text-white transition-colors">The Universe</Link></li>
                <li><Link href="/blog?category=Artificial+Intelligence" className="hover:text-white transition-colors">AI</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/write" className="hover:text-white transition-colors">Write</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 No Sacred Cows. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
