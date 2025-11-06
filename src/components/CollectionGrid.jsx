import React from 'react';

const cars = [
  {
    name: 'Ferrari SF90 Stradale',
    year: '2023',
    stat: '986 hp Hybrid V8',
    img: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Ferrari 812 Superfast',
    year: '2022',
    stat: '789 hp V12',
    img: 'https://images.unsplash.com/photo-1536523638938-05a1928df05d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Ferrari F8 Tributo',
    year: '2021',
    stat: '710 hp V8',
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Ferrari LaFerrari',
    year: '2016',
    stat: '950 hp Hybrid V12',
    img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1974&auto=format&fit=crop',
  },
];

function Card({ item }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10">
      <img src={item.img} alt={item.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
      <div className="absolute bottom-0 p-5">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-zinc-400">{item.year} • {item.stat}</p>
      </div>
    </div>
  );
}

export default function CollectionGrid() {
  return (
    <section id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((c) => (
          <Card key={c.name} item={c} />
        ))}
      </div>
    </section>
  );
}
