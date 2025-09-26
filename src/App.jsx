import React from 'react';
import './App.css';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import BlogSection from './components/BlogSection';
import FragranceCarousel from './components/FragranceCarousel';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import useReveal from './components/useReveal';

function App() {
  useReveal();
  return (
    <div className="font-sans text-stone-800 bg-white min-h-screen">
      <PromoBanner />
      <Navbar />
      <main>
        <div className="reveal" data-reveal-delay="0"><HeroCarousel /></div>
        <div className="reveal" data-reveal-delay="100"><Categories /></div>
        <div className="reveal" data-reveal-delay="200"><BestSellers /></div>
        <div className="reveal" data-reveal-delay="200"><BlogSection /></div>
        <div className="reveal" data-reveal-delay="200"><FragranceCarousel /></div>
        <div className="reveal" data-reveal-delay="200"><Testimonials /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
