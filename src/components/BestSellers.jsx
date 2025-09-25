import React from 'react';
import Img1 from '../assets/Img_1.jpg';
import Img2 from '../assets/Img_2.jpg';
import Img3 from '../assets/Img_3.jpg';
import Img4 from '../assets/Img_4.jpg';
import Img5 from '../assets/Img_5.jpg';
import Img6 from '../assets/Img_6.jpg';



// Reference style bestsellers (3 featured items)
const bestSellers = [
  { id: 1, name: 'Sacred Sanctuary', note: 'Burnt Oak & Sage', price: 1860, image: Img1 },
  { id: 2, name: 'Prairie', note: 'Lavender and Patchouli', price: 2330, image: Img2 },
  { id: 3, name: 'Love Potion', note: 'Rose & Apple Blossom', price: 2330, image: Img3 },
  { id: 4, name: 'Citrus Grove', note: 'Citrus & Herbs', price: 1860, image: Img4 },
  { id: 5, name: 'Midnight Jasmine', note: 'Jasmine & Ylang Ylang', price: 2330, image: Img5 },
  { id: 6, name: 'Woodland Walk', note: 'Pine & Cedarwood', price: 2330, image: Img6 }
];

const formatINR = (val) => `Rs. ${val.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

const BestSellers = () => {
  return (
    <section id="bestsellers" className="py-20 bg-[#faf8f9]">
      <div className="max-w-[1480px] mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-serif tracking-wide text-stone-700 mb-14">Our Bestsellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 xl:gap-20">
          {bestSellers.map(p => (
            <div key={p.id} className="group flex flex-col items-center">
              <figure className="w-full overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              </figure>
              <figcaption className="mt-6 text-center">
                <h3 className="uppercase tracking-[0.15em] text-[11px] md:text-[12px] font-semibold text-stone-800">{p.name}</h3>
                <p className="text-[11px] md:text-[12px] tracking-wide text-stone-500 mt-1">{p.note}</p>
                <p className="text-[11px] md:text-[12px] tracking-wide text-stone-700 mt-2 font-medium">{formatINR(p.price)}</p>
              </figcaption>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <a
            href="#categories"
            className="inline-flex items-center justify-center h-12 px-24 border border-stone-900 text-[11px] tracking-[0.2em] font-medium hover:bg-stone-900 hover:text-white transition-colors"
          >
            VIEW ALL
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;