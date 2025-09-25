import React, { useEffect, useState, useCallback } from 'react';

// Curated Unsplash candle / ambience images (royalty-free under Unsplash License)
// Each URL includes resizing & quality params for performance.
const slides = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1700502418391-2b6d9f210b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjZW50ZWQlMjBjYW5kbGVzfGVufDB8fDB8fHww',
    title: 'KOSELIG',
    subtitle: 'GIFT BOX'
  },
  {
    img: 'https://images.unsplash.com/photo-1602607203475-c5e99918dfc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNjZW50ZWQlMjBjYW5kbGVzfGVufDB8fDB8fHww',
    title: 'WINTER',
    subtitle: 'COLLECTION'
  },
  {
    img: 'https://images.unsplash.com/photo-1602607203588-d6d0eda790e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNjZW50ZWQlMjBjYW5kbGVzfGVufDB8fDB8fHww',
    title: 'AROMA',
    subtitle: 'BLENDS'
  },
  {
    img: 'https://images.unsplash.com/photo-1603218678692-3967d7523bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNjZW50ZWQlMjBjYW5kbGVzfGVufDB8fDB8fHww',
    title: 'SOY',
    subtitle: 'CLASSICS'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1736517208054-424bbd67df43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHNjZW50ZWQlMjBjYW5kbGVzfGVufDB8fDB8fHww',
    title: 'BLOOM',
    subtitle: 'SERIES'
  },
  {
    img: 'https://images.unsplash.com/photo-1720788810349-7e51a042404a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxzY2VudGVkJTIwY2FuZGxlc3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'NOIR',
    subtitle: 'EDITION'
  }
];

const ArrowBtn = ({ dir, onClick, className = '' }) => (
  <button
    aria-label={dir === 'left' ? 'Previous slide' : 'Next slide'}
    onClick={onClick}
    className={`group w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur flex items-center justify-center border border-white/10 text-stone-300 hover:text-white transition ${className}`}
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {dir === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5l7 7-7 7" />
      )}
    </svg>
  </button>
);

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);

  const next = useCallback(() => setIndex(i => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total]);

  // Keyboard accessibility
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  return (
    <section id="home" className="relative h-[540px] md:h-[600px] bg-black">
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'} ${i === index ? 'z-10' : 'z-0'}`}
          >
            <img
              src={s.img}
              alt={s.title + ' candle atmosphere'}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              onError={(e) => { e.currentTarget.style.opacity = '0.4'; e.currentTarget.style.filter = 'grayscale(40%)'; }}
              className={`w-full h-full object-cover will-change-transform transition-transform duration-[6000ms] ease-[cubic-bezier(.16,.8,.38,1)] ${i === index ? 'scale-105' : 'scale-100'}`}
            />
            {/* Overlays (lightened for higher visible image opacity) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(0,0,0,0.28),rgba(0,0,0,0.55))]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/5" />
          </div>
        ))}
      </div>
      {/* Content card */}
      <div className="relative z-20 h-full flex items-end md:items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center gap-10">
          <div className="max-w-lg backdrop-blur-sm/50">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-amber-400/70" />
              <span className="text-[11px] tracking-[0.35em] text-amber-300 font-medium">{slides[index].subtitle}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.08em] text-white mb-6">
              {slides[index].title}
            </h1>
            <p className="text-stone-300/80 text-sm md:text-base leading-relaxed max-w-md mb-8">
              Hand-poured small batch blends. Slow crafted aroma profiles designed to soften spaces & elevate quiet rituals.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#bestsellers"
                className="inline-flex items-center justify-center px-8 h-11 rounded-full bg-amber-400 text-black text-sm font-medium tracking-wide hover:brightness-110 active:scale-[0.97] transition shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset]"
              >
                Shop Now
              </a>
              <button
                onClick={next}
                className="hidden md:inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/15 text-stone-200 text-sm tracking-wide hover:bg-white/10 active:scale-95 transition"
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          {/* Indicators (desktop) */}
          <div className="hidden md:flex flex-col gap-3 ml-auto pr-4">
            {slides.map((s, i) => (
              <button
                key={s.title + i}
                onClick={() => setIndex(i)}
                className={`group flex items-center gap-3 text-left transition`}
                aria-current={i === index}
              >
                <span className={`h-px w-10 transition-all ${i === index ? 'bg-amber-400 w-14' : 'bg-white/25 group-hover:bg-white/50'}`} />
                <span className={`text-[11px] tracking-widest ${i === index ? 'text-amber-300' : 'text-stone-400 group-hover:text-stone-200'}`}>{s.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Arrows (overlay) */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 z-30 pointer-events-none">
        <ArrowBtn dir="left" onClick={prev} className="pointer-events-auto" />
        <ArrowBtn dir="right" onClick={next} className="pointer-events-auto" />
      </div>
      {/* Mobile dots */}
      <div className="absolute bottom-5 left-0 right-0 flex md:hidden justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-amber-400' : 'w-3 bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;