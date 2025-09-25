import React from 'react';
import Img1 from '../assets/Img_2.jpg';

const BlogSection = () => {
  return (
    <section id="blog" className="py-28 bg-[#faf8f9]">
      <div className="max-w-[1480px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 max-w-xl">
            <h2 className="font-serif text-2xl md:text-[28px] text-stone-800 mb-8 tracking-wide">The Happy Space.</h2>
            <div className="space-y-6 text-[13px] leading-relaxed tracking-wide text-stone-600">
              <p>Misa was born from a singular passion to make extraordinary candles - that not only look gorgeous and smell ethereal but are a gentle call to slow down, escape the humdrum and discover the everyday magic in and around us.</p>
              <p>As Robert Brault wrote, "Enjoy the little things, for one day you may look back and realise they were the big things".</p>
            </div>
            <div className="mt-10">
              <a href="#" className="text-[12px] tracking-wider underline underline-offset-4 decoration-stone-400 hover:decoration-stone-800 text-stone-800">Read Our Story</a>
            </div>
          </div>
          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <img
                src={Img1}
                alt="MISA candle story"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;