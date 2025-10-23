import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: '개인정보처리방침 - Oh my Seoul',
  description: 'Oh my Seoul 개인정보처리방침',
};

export default function PrivacyPage() {
  // Read PRIVACY.md file
  const filePath = path.join(process.cwd(), 'PRIVACY.md');
  const content = fs.readFileSync(filePath, 'utf8');

  // Simple Markdown to HTML conversion
  const htmlContent = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-12 mb-6 text-[#37BEB0]">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-8 text-center">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#37BEB0] underline hover:text-[#2C9B8F]" target="_blank" rel="noopener noreferrer">$1</a>')
    // Tables
    .replace(/^\|(.+)\|$/gim, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      const isHeader = match.includes('---');
      if (isHeader) return '';
      const tag = cells[0].includes('수탁') || cells[0].includes('제공받는') ? 'th' : 'td';
      const cellsHtml = cells.map(cell =>
        `<${tag} class="border border-gray-300 px-4 py-2">${cell.trim()}</${tag}>`
      ).join('');
      return `<tr>${cellsHtml}</tr>`;
    })
    // Horizontal rules
    .replace(/^---$/gim, '<hr class="my-8 border-gray-300" />')
    // Paragraphs
    .replace(/^(?!<[h|l|p|d|t|c|u])(.*$)/gim, '<p class="mb-4 leading-relaxed">$1</p>');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F7F5] to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Back to Home Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#37BEB0] text-white px-6 py-3 rounded-lg hover:bg-[#2C9B8F] transition-colors"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
