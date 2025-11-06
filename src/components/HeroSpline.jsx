import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroSpline() {
  return (
    <header className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="backdrop-blur-sm/0">
            <span className="inline-flex items-center gap-2 bg-red-600/10 text-red-400 ring-1 ring-red-500/20 px-3 py-1 rounded-full text-xs font-semibold">
              <Rocket className="h-4 w-4" /> Ferrari Showcase
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              The Prancing Horse Collection
            </h1>
            <p className="mt-4 text-zinc-300 max-w-2xl">
              Experience an elite selection of Ferrari masterpieces—where design, technology, and racing heritage meet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#collection" className="inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-500 transition-colors px-5 py-3 text-sm font-semibold">Explore Collection</a>
              <a href="#highlights" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 text-sm font-semibold">See Highlights</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 to-transparent" />
    </header>
  );
}
