import React from 'react';
import HeroSpline from './components/HeroSpline.jsx';
import CollectionGrid from './components/CollectionGrid.jsx';
import Highlights from './components/Highlights.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSpline />
      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ferrari Signature Collection</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">A curated garage of Maranello’s finest. Explore modern icons and legendary machines—crafted for speed, engineered for emotion.</p>
        </section>
        <CollectionGrid />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}
