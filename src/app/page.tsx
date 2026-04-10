import Link from 'next/link';

// Featured posts for homepage
const featuredPosts = [
  {
    id: 1,
    slug: 'understanding-darvo',
    title: 'Understanding DARVO',
    subtitle: 'Narcissism, Manipulation Tactics, and How to Protect Yourself',
    excerpt: 'Conflicts drag on because emotions cloud the facts. Learn how DARVO manipulates the narrative and how to break free.',
    category: 'Mental Health',
    readTime: '15 min read',
    createdAt: new Date('2024-01-01')
  },
  {
    id: 2,
    slug: 'epic-story-life-big-bang-today',
    title: 'The Epic Story of Life: From the Big Bang to Today',
    subtitle: 'A Straightforward Timeline of Everything',
    excerpt: 'The history of the universe and life on Earth spans 13.8 billion years. Here is a matter-of-fact look at the most important events.',
    category: 'The Universe',
    readTime: '10 min read',
    createdAt: new Date('2024-01-02')
  },
  {
    id: 3,
    slug: 'donald-trumps-mental-health-genius-or-instability',
    title: 'Donald Trump\'s Mental Health: Genius or Instability?',
    subtitle: 'Examining the fine line between strategic brilliance and psychological concerns',
    excerpt: 'Donald Trump\'s presidency has sparked intense debate about his mental health. Where does the truth lie?',
    category: 'Trump',
    readTime: '3 min read',
    createdAt: new Date('2026-04-11')
  }
];

const categoryPosts = {
  'Trump': [
    {
      id: 3,
      slug: 'donald-trumps-mental-health-genius-or-instability',
      title: 'Donald Trump\'s Mental Health: Genius or Instability?',
      excerpt: 'Examining the fine line between strategic brilliance and psychological concerns.',
      readTime: '3 min read'
    },
    {
      id: 4,
      slug: 'the-psychology-of-trumps-twitter-behavior-brilliance-or-disorder',
      title: 'The Psychology of Trump\'s Twitter Behavior',
      excerpt: 'Analyzing the mental processes behind viral social media communication.',
      readTime: '3 min read'
    }
  ],
  '$$$ Stuff': [
    {
      id: 8,
      slug: 'the-current-price-of-silver-market-trends-and-future-outlook',
      title: 'The Current Price of Silver: Market Trends and Future Outlook',
      excerpt: 'Understanding the forces driving silver prices in today\'s economy.',
      readTime: '3 min read'
    },
    {
      id: 9,
      slug: 'gold-prices-in-2026-economic-factors-and-market-dynamics',
      title: 'Gold Prices in 2026: Economic Factors and Market Dynamics',
      excerpt: 'Why gold remains the ultimate safe-haven asset in uncertain times.',
      readTime: '3 min read'
    }
  ],
  'Mental Health': [
    {
      id: 1,
      slug: 'understanding-darvo',
      title: 'Understanding DARVO',
      excerpt: 'Narcissism, Manipulation Tactics, and How to Protect Yourself.',
      readTime: '15 min read'
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
              NO SACRED COWS
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unfiltered discussions on controversial topics, mental health, economics, and the universe.
              No topic is off-limits when seeking truth and understanding.
            </p>
          </div>

          {/* Featured Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors" style={{ fontFamily: 'var(--font-cinzel)' }}>
                    {post.title}
                  </h3>
                  {post.subtitle && (
                    <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
                      {post.subtitle}
                    </p>
                  )}
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3 break-words">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.createdAt.toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(categoryPosts).map(([category, posts]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {category}
                </h2>
                <Link
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200 border border-gray-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors" style={{ fontFamily: 'var(--font-cinzel)' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2 break-words">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter/Signup Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest articles and insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
              Subscribe
            </button>
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
                <li><Link href="/blog" className="hover:text-white transition-colors">All Articles</Link></li>
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