import React from 'react';
import Logo from '../assets/Logo.jpg';

const navLinks = [
  { href: '#categories', label: 'Candles' },
  { href: '#categories', label: 'Gifts' },
  { href: '#categories', label: 'Collections' },
  { href: '#categories', label: 'Accessories' },
  { href: '#blog', label: 'Our Story' },
  { href: '#contact', label: 'Contact Us' }
];

const IconButton = ({ children, label }) => (
  <button aria-label={label} className="relative p-2 rounded-full hover:bg-white/10 active:scale-95 transition">
    {children}
  </button>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]">
      {/* Main nav */}
      <div className="bg-[#121212]/95 backdrop-blur supports-[backdrop-filter]:bg-[#121212]/85 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">
          {/* Left: Brand */}
          <a href="#home" className="flex items-center gap-3 group min-w-[150px]">
            <img src={Logo} alt="Moonlit Forest Candle" className="w-10 h-10 object-cover rounded-sm hidden sm:block ring-1 ring-white/10" />
            <span className="text-white font-medium tracking-[0.18em] text-xs sm:text-sm uppercase group-hover:text-amber-300 transition-colors">Moonlit Forest</span>
          </a>
          {/* Center: nav links */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-10">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-[13px] tracking-wide text-stone-300/80 hover:text-white transition-colors py-1 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-amber-400 after:transition-all hover:after:w-6 focus-visible:outline-none focus-visible:after:w-6"
              >
                {l.label}
              </a>
            ))}
          </nav>
          {/* Right: icons */}
          <div className="flex items-center gap-1 ml-auto">
            <IconButton label="Search">
              <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </IconButton>
            <IconButton label="Profile">
              <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM4 21a8 8 0 1116 0" />
              </svg>
            </IconButton>
            <IconButton label="Cart">
              <div className="relative">
                <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h11.5a1 1 0 00.95-.68l1.6-4.79A.6.6 0 0020.47 7H5.1M7 13l-2 6h14M10 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-black font-semibold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow" aria-label="Items in cart">0</span>
              </div>
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;