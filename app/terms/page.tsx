import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: '이용약관 - Oh my Seoul',
  description: 'Oh my Seoul 서비스 이용약관',
};

export default function TermsPage() {
  // Read TERMS.md file
  const filePath = path.join(process.cwd(), 'TERMS.md');
  const content = fs.readFileSync(filePath, 'utf8');

  // Simple Markdown to HTML conversion
  const htmlContent = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-12 mb-6 text-[#37BEB0]">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-8 text-center">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    // Lists with numbers
    .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4"><strong>$1.</strong> $2</li>')
    // Lists with dash
    .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#37BEB0] underline hover:text-[#2C9B8F]">$1</a>')
    // Horizontal rules
    .replace(/^---$/gim, '<hr class="my-8 border-gray-300" />')
    // Paragraphs
    .replace(/^(?!<[h|l|p|d|t|c|u])(.*$)/gim, '<p class="mb-4 leading-relaxed">$1</p>')
    // Wrap lists
    .replace(/(<li.*<\/li>)/s, '<ol class="list-decimal ml-6 mb-4 space-y-2">$1</ol>');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F7F5] to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Back to Home Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-[#37BEB0] text-white px-6 py-3 rounded-lg hover:bg-[#2C9B8F] transition-colors"
          >
            ← 홈으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}
