import Link from 'next/link';
import LeonLinkLogo from './LeonLinkLogo';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <LeonLinkLogo />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Blog
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center transition-colors">
                Categories
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200">
                <div className="py-1">
                  <Link href="/blog?category=Trump" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Trump
                  </Link>
                  <Link href="/blog?category=$$$+Stuff" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    $$$ Stuff
                  </Link>
                  <Link href="/blog?category=Mental+Health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Mental Health
                  </Link>
                  <Link href="/blog?category=The+Universe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    The Universe
                  </Link>
                  <Link href="/blog?category=Artificial+Intelligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Artificial Intelligence
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Right side - Search */}
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-48 md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="absolute right-2 top-2.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden border-t border-gray-200">
          <nav className="flex flex-col space-y-2 py-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">
              Blog
            </Link>
            <details className="group">
              <summary className="text-gray-700 hover:text-gray-900 font-medium py-2 cursor-pointer flex items-center transition-colors">
                Categories
                <svg className="ml-1 w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="pl-4 space-y-1 border-l border-gray-200 ml-4">
                <Link href="/blog?category=Trump" className="block text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors">
                  Trump
                </Link>
                <Link href="/blog?category=$$$+Stuff" className="block text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors">
                  $$$ Stuff
                </Link>
                <Link href="/blog?category=Mental+Health" className="block text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors">
                  Mental Health
                </Link>
                <Link href="/blog?category=The+Universe" className="block text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors">
                  The Universe
                </Link>
                <Link href="/blog?category=Artificial+Intelligence" className="block text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors">
                  Artificial Intelligence
                </Link>
              </div>
            </details>
          </nav>
        </div>
      </div>
    </header>
  );
}