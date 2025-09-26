import React, { useRef, useEffect, useState, useCallback } from 'react';
import Img1 from '../assets/Img_14.png';
import Img2 from '../assets/Img_15.png';
import Img3 from '../assets/Img_16.png';
import Img4 from '../assets/Img_17.png';
import Img5 from '../assets/Img_18.png';
import Img6 from '../assets/Img_19.png';

// Extended list (replace or add real images later if needed)
const fragrances = [
  { name: 'Floral And Gourmand', image: Img2 },
  { name: 'Warm And Cosy', image: Img1 },
  { name: 'Intimate And Sensual', image: Img3 },
  { name: 'Fresh And Breezy', image: Img4 },
  { name: 'Earthy And Woody', image: Img5 },
  { name: 'Citrus And Bright', image: Img6 }
];

const Arrow = ({ dir, onClick }) => (
  <button
    aria-label={dir === 'left' ? 'Previous' : 'Next'}
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/70 hover:bg-white shadow-sm flex items-center justify-center backdrop-blur transition ${dir === 'left' ? 'left-4' : 'right-4'}`}
  >
    <svg className="w-4 h-4 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {dir === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5l7 7-7 7" />
      )}
    </svg>
  </button>
);

const FragranceCarousel = () => {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const handleRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  // Update handle size & position
  const updateHandle = useCallback(() => {
    const vp = viewportRef.current;
    const track = trackRef.current;
    const handle = handleRef.current;
    if (!vp || !track || !handle) return;
    const { scrollLeft, scrollWidth, clientWidth } = vp;
    const fractionVisible = clientWidth / scrollWidth;
    const trackWidth = track.clientWidth;
    const handleWidth = Math.max(24, trackWidth * fractionVisible); // slightly smaller handle
    const maxX = trackWidth - handleWidth;
    const progress = scrollLeft / (scrollWidth - clientWidth || 1);
    handle.style.width = handleWidth + 'px';
    handle.style.transform = `translateX(${progress * maxX}px)`;
  }, []);

  const scrollTo = (i) => {
    const vp = viewportRef.current;
    if (!vp) return;
    const child = vp.children[i];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setIndex(i);
    }
  };
  const next = () => scrollTo((index + 1) % fragrances.length);
  const prev = () => scrollTo((index - 1 + fragrances.length) % fragrances.length);

  // Sync index on manual scroll
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { scrollLeft, clientWidth } = vp;
            const firstChild = vp.children[0];
            const cardWidth = firstChild ? firstChild.getBoundingClientRect().width : clientWidth * 0.33;
            const gap = 32; // gap-8
            const newIndex = Math.round(scrollLeft / (cardWidth + gap));
            if (newIndex !== index) setIndex(Math.min(fragrances.length - 1, Math.max(0, newIndex)));
            updateHandle();
          ticking = false;
        });
        ticking = true;
      }
    };
    vp.addEventListener('scroll', handler, { passive: true });
    return () => vp.removeEventListener('scroll', handler);
  }, [index, updateHandle]);

  // Resize listener to adjust handle
  useEffect(() => {
    updateHandle();
    const onResize = () => updateHandle();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateHandle]);

  // Drag logic for scrub bar
  useEffect(() => {
    const track = trackRef.current;
    const vp = viewportRef.current;
    if (!track || !vp) return;

    const onPointerMove = (e) => {
      if (!dragging) return;
      const rect = track.getBoundingClientRect();
      let x = e.clientX - rect.left;
      x = Math.max(0, Math.min(rect.width, x));
      const { scrollWidth, clientWidth } = vp;
      const fractionVisible = clientWidth / scrollWidth;
      const handleWidth = Math.max(40, rect.width * fractionVisible);
      const maxX = rect.width - handleWidth;
      const progress = Math.max(0, Math.min(1, (x - handleWidth / 2) / maxX));
      vp.scrollLeft = progress * (scrollWidth - clientWidth);
    };
    const stop = () => {
      if (dragging) {
        // Snap smoothly to nearest card after drag end
        const { scrollLeft, clientWidth } = vp;
        const firstChild = vp.children[0];
        const cardWidth = firstChild ? firstChild.getBoundingClientRect().width : clientWidth * 0.33;
        const gap = 32;
        const targetIndex = Math.round(scrollLeft / (cardWidth + gap));
        const targetLeft = targetIndex * (cardWidth + gap);
        vp.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
      setDragging(false);
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointerleave', stop);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointerleave', stop);
    };
  }, [dragging]);

  return (
    <section id="fragrances" className="py-24 bg-[#faf8f9]">
      <div className="max-w-[1480px] mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-serif tracking-wide text-stone-700 mb-14">Shop by Fragrance</h2>
        <div className="relative">
          <Arrow dir="left" onClick={prev} />
          <Arrow dir="right" onClick={next} />
          <div
            ref={viewportRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {fragrances.map((f, i) => (
              <div
                key={f.name}
                className="relative snap-start shrink-0 w-[88%] sm:w-[65%] md:w-[50%] lg:w-[34%] xl:w-[33%] 2xl:w-[30%] aspect-[3/4] overflow-hidden group"
              >
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-50 transition" />
                <div className="absolute inset-0 flex items-end p-8">
                  <h3 className="text-white text-sm md:text-base font-light tracking-wide drop-shadow-sm">{f.name}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* Draggable progress (scrub) bar - minimal width */}
          <div className="mx-auto mt-6 w-[240px] md:w-[260px] select-none">
            <div
              ref={trackRef}
              className="relative h-1.5 rounded-full bg-stone-300/60 cursor-pointer group"
              onPointerDown={(e) => { setDragging(true); e.preventDefault(); }}
            >
              <div
                ref={handleRef}
                className={`absolute top-0 h-full rounded-full bg-stone-800/80 group-hover:bg-stone-800 transition-colors flex items-center justify-center ${dragging ? 'ring-2 ring-stone-400/50' : ''}`}
                style={{ width: '60px' }}
              >
                <span className="sr-only">Carousel progress handle</span>
              </div>
            </div>
            <p className="sr-only">Slide {index + 1} of {fragrances.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FragranceCarousel;