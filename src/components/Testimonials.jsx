import React, { useEffect, useState } from 'react';

// Testimonial data (placeholder; can be replaced with real reviews)
const testimonials = [
  {
    id: 1,
    quote: 'The most soothing candle I have ever owned – the fragrance lingers for hours and instantly calms the space.',
    author: 'Aarav K.'
  },
  {
    id: 2,
    quote: 'Beautifully crafted. Feels like a quiet ritual every evening when I light it.',
    author: 'Meera S.'
  },
  {
    id: 3,
    quote: 'Warm, complex aromas without being overpowering. Guests always ask where it\'s from.',
    author: 'Rohan B.'
  },
  {
    id: 4,
    quote: 'Elegant packaging and a clean burn. It\'s become my go‑to gift for friends.',
    author: 'Ishita P.'
  }
];

// Automatically cycling fade carousel (similar minimal feel as other sections)
const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive(a => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-28 bg-[#faf8f9] relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-center text-xl md:text-2xl font-serif tracking-wide text-stone-700 mb-16">What Our Customers Say</h2>
        <div className="relative h-[260px] md:h-[240px]">
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <figure
                key={t.id}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-700 ease-out ${isActive ? 'opacity-100 scale-[1.0]' : 'opacity-0 scale-[0.995]'} select-none px-4 md:px-2`}
                aria-hidden={!isActive}
              >
                <div className="relative max-w-3xl w-full">
                  {/* Glow ring */}
                  <div className={`absolute -inset-[2px] rounded-xl bg-gradient-to-br from-stone-300/50 via-white/40 to-stone-200/50 blur opacity-0 ${isActive ? 'animate-[pulseGlow_2s_ease-out_0.1s_1] opacity-100' : ''}`} />
                  <blockquote className="relative font-light text-[15px] md:text-[17px] leading-relaxed text-stone-700 tracking-wide bg-white/70 backdrop-blur-sm border border-stone-300/70 rounded-xl px-8 py-10 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12)]">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 text-[11px] tracking-[0.25em] text-stone-500 uppercase">{t.author}</figcaption>
              </figure>
            );
          })}
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${i === active ? 'bg-stone-800 w-6' : 'bg-stone-400/50 hover:bg-stone-500/70'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// Tailwind keyframe (can be added within a global CSS if purging removes it)
// @keyframes pulseGlow { 0% { opacity:0; transform:scale(.98); } 40% { opacity:1; } 100% { opacity:0; transform:scale(1); } }
