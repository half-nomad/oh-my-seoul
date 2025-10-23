// Oh my Seoul - Footer Component
// Displays version, copyright, and legal links

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 mt-auto border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          <Link
            href="/privacy"
            className="text-sm text-gray-600 hover:text-[#37BEB0] transition-colors"
          >
            개인정보처리방침
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/terms"
            className="text-sm text-gray-600 hover:text-[#37BEB0] transition-colors"
          >
            이용약관
          </Link>
        </div>

        {/* Version and Copyright */}
        <p className="text-sm text-gray-500 text-center">
          Oh my Seoul v1.0.0 · © 2025
        </p>
      </div>
    </footer>
  );
}
