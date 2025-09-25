import React from 'react';

// Cleaner subdued promo bar aligned with neutral / luxury aesthetic
const PromoBanner = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[linear-gradient(90deg,#141414_0%,#1c1c1c_50%,#141414_100%)] text-[11px] sm:text-xs tracking-wide text-stone-300">
      <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-center">
        <p className="flex items-center gap-2 font-medium">
          <span className="hidden sm:inline text-amber-400">NEW</span>
          <span className="text-stone-200/90">Get 10% off your first order with code</span>
          <span className="text-amber-400 font-semibold">NEWMOONLIT</span>
          <span className="hidden md:inline text-stone-400">• Free delivery in Tricity</span>
        </p>
      </div>
    </div>
  );
};

export default PromoBanner;