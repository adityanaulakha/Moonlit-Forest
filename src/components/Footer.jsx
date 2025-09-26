import React from 'react';

// Footer adapted to match reference screenshot layout & content
// Columns: Contact Us | Quick Links | Newsletter
// Simplified links & updated contact information per image

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-stone-200 pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Three columns horizontally spaced on large screens */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-20">
          {/* Contact Us */}
          <div className="min-w-[200px] space-y-5 text-left">
            <h5 className="text-xs tracking-[0.25em] text-stone-400">CONTACT US</h5>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="mailto:care@misa.in" className="hover:text-amber-300 transition-colors">care@moonlitforest.in</a>
              </li>
              <li>
                <a href="tel:+916232362323" className="hover:text-amber-300 transition-colors">+91 79862 76862</a>
              </li>
              <li>
                <a href="https://www.instagram.com/moonlitforest_candle" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">Instagram</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="min-w-[200px] space-y-5 text-left">
            <h5 className="text-xs tracking-[0.25em] text-stone-400">QUICK LINKS</h5>
            <ul className="space-y-4 text-sm">
              <li><button className="hover:text-amber-300 transition-colors">FAQs</button></li>
              <li><button className="hover:text-amber-300 transition-colors">Delivery and Returns</button></li>
              <li><button className="hover:text-amber-300 transition-colors">Terms and Conditions</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="min-w-[260px] space-y-5 text-left">
            <h5 className="text-xs tracking-[0.25em] text-stone-400 max-w-[14ch]">SIGN UP FOR OUR NEWSLETTER</h5>
            <form onSubmit={(e)=>e.preventDefault()} className="space-y-8 max-w-sm">
              <div className="flex items-center gap-3 border-b border-stone-600 focus-within:border-amber-400 transition">
                <input
                  type="email"
                  placeholder="Enter email"
                  aria-label="Email address"
                  className="flex-1 bg-transparent h-10 text-sm placeholder:text-stone-500 focus:outline-none"
                />
                <button aria-label="Submit email" className="text-stone-400 hover:text-amber-300 transition p-1">→</button>
              </div>
              <button type="button" className="px-6 h-10 rounded-md bg-stone-800 text-xs tracking-wide flex items-center gap-1 hover:bg-stone-700 transition">
                INR
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 9l6 6 6-6" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Divider (optional subtle line) */}
        <div className="mt-24 border-t border-stone-800 pt-8 text-center text-[11px] tracking-wide text-stone-500">
          © {new Date().getFullYear()} Moonlit Forest
        </div>
      </div>
    </footer>
  );
};

export default Footer;