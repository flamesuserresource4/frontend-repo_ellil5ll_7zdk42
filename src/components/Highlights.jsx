import React from 'react';
import { Gauge, Shield, Trophy } from 'lucide-react';

const items = [
  {
    title: 'Racing DNA',
    icon: Trophy,
    desc: 'Born on the track: every model carries decades of Scuderia heritage.',
  },
  {
    title: 'Precision Engineering',
    icon: Gauge,
    desc: 'Wind-tunnel crafted aerodynamics and lightning-fast powertrains.',
  },
  {
    title: 'Iconic Design',
    icon: Shield,
    desc: 'Timeless lines and modern materials—instantly recognizable.',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ title, icon: Icon, desc }) => (
          <div key={title} className="rounded-2xl bg-zinc-900 ring-1 ring-white/10 p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-400 ring-1 ring-red-500/20">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-zinc-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
