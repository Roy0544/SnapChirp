import React from 'react';

function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 w-full border-t border-gray-400 bg-white max-w-[1290px] m-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Top: CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4">
          <p className="text-sm text-black font-medium">Join the conversation.</p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-800">
          <a className="hover:underline" href="/about">About</a>
          <a className="hover:underline" href="/download">Download app</a>
          <a className="hover:underline" href="/terms">Terms of Service</a>
          <a className="hover:underline" href="/privacy">Privacy Policy</a>
          <a className="hover:underline" href="/blog">Blog</a>
          <a className="hover:underline" href="/developers">Developers</a>
          <a className="hover:underline" href="/directory">Directory</a>

          {/* Language selector */}
          <div className="ml-auto flex items-center gap-2">
            <label htmlFor="lang" className="sr-only">Language</label>
            <select
              id="lang"
              name="lang"
              className="text-xs bg-transparent border border-neutral-300 rounded-md px-2 py-1 text-gray-600"
            >
              <option>English</option>
              <option>हिंदी</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
          </div>
        </nav>

        {/* Bottom */}
        <div className="mt-3 text-xs text-gray-900">
          © 2025 Chirp, Inc.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
