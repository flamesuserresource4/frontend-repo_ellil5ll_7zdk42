import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} Prancing Horse Collection. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#collection" className="hover:text-white transition-colors">Collection</a>
          <a href="#highlights" className="hover:text-white transition-colors">Highlights</a>
          <a href="https://www.ferrari.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Ferrari</a>
        </nav>
      </div>
    </footer>
  );
}
