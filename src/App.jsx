import React from 'react';
import './App.css';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import BlogSection from './components/BlogSection';
import FragranceCarousel from './components/FragranceCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-stone-800 bg-white min-h-screen">
      <PromoBanner />
      <Navbar />
      <main>
        <HeroCarousel />
        <Categories />
        <BestSellers />
        <BlogSection />
        <FragranceCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
