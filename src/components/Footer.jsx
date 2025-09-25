import React from 'react';
import Logo from '../assets/Logo.jpg';

const links = [
  { label: 'Shop', href: '#categories' },
  { label: 'Bestsellers', href: '#bestsellers' },
  { label: 'Fragrance', href: '#fragrances' },
  { label: 'Story', href: '#blog' }
];

const policies = [ 'Shipping', 'Returns', 'Privacy', 'Terms' ];

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#111] text-stone-300 pt-16 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(circle_at_70%_30%,#444,transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end gap-14 md:gap-10">
          {/* Brand + tagline */}
          <div className="flex-1 max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <img src={Logo} alt="Moonlit Forest" className="w-11 h-11 object-cover rounded-sm ring-1 ring-white/10" />
              <span className="text-stone-100 tracking-[0.18em] text-xs font-medium uppercase">Moonlit Forest</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              Slow-crafted aroma objects for quiet rituals, mindful evenings and softly lit corners.
            </p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-6 flex items-center gap-2">
              <input
                type="email"
                placeholder="Email for updates"
                className="flex-1 h-11 bg-white/5 border border-white/10 rounded-md px-4 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              />
              <button className="h-11 px-5 rounded-md bg-amber-400 text-black text-sm font-medium hover:brightness-110 active:scale-95 transition">
                Join
              </button>
            </form>
          </div>

          {/* Navigation clusters */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h5 className="text-xs tracking-[0.25em] text-stone-400 mb-5">PAGES</h5>
              <ul className="space-y-3 text-sm">
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-amber-300 transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xs tracking-[0.25em] text-stone-400 mb-5">POLICY</h5>
              <ul className="space-y-3 text-sm">
                {policies.map(p => (
                  <li key={p}><button className="hover:text-amber-300 transition-colors">{p}</button></li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:block">
              <h5 className="text-xs tracking-[0.25em] text-stone-400 mb-5">SOCIAL</h5>
              <ul className="space-y-3 text-sm">
                <li><button className="hover:text-amber-300 transition-colors">Instagram</button></li>
                <li><button className="hover:text-amber-300 transition-colors">Pinterest</button></li>
                <li><button className="hover:text-amber-300 transition-colors">Threads</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center gap-4 justify-between text-[11px] tracking-wide text-stone-500">
          <p>© {new Date().getFullYear()} Moonlit Forest. All rights reserved.</p>
          <div className="flex gap-4">
            {policies.map(p => (
              <button key={p} className="hover:text-amber-300 transition-colors">{p}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;