import React from 'react';
import Img1 from '../assets/Img_1.jpg';
import Img2 from '../assets/Img_2.jpg';
import Img3 from '../assets/Img_3.jpg';
import Img4 from '../assets/Img_4.jpg';

const categories = [
  { title: 'GIFTS', image: Img1 },
  { title: 'CANDLES', image: Img2 },
  { title: 'COLLECTIONS', image: Img3 },
  { title: 'ACCESSORIES', image: Img4 }
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-[#faf8f9]">
      <div className="max-w-[1480px] mx-auto px-4">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-serif tracking-wide text-stone-700 mb-10 md:mb-14">
          Extraordinary candles made by master perfumers in India.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map(cat => (
            <a
              key={cat.title}
              href="#bestsellers"
              className="group relative block overflow-hidden"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-[1.06]"
                />
              </div>
              {/* Overlay label */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] flex flex-col items-center text-white">
                <span className="relative font-light tracking-[0.2em] text-[13px] md:text-sm">
                  {cat.title}
                  <span className="block mt-3 w-24 h-px bg-white/70 group-hover:w-28 transition-all" />
                  <span className="absolute left-1/2 -translate-x-1/2 mt-[18px] block text-[18px] leading-none group-hover:rotate-12 transition-transform">★</span>
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-70 group-hover:opacity-60 transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;