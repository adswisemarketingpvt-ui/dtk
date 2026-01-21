import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrendingCollectionCard: React.FC = () => {
  const collections = [
     {
      title: "Gifting",
      image: "https://mediumaquamarine-quetzal-462306.hostingersite.com//public/gifting.png",
      link: "/products",
    },
    {
      title: "Home Decor",
      image: "https://mediumaquamarine-quetzal-462306.hostingersite.com//public/homedecor.png",
      link: "/products",
    },
    {
      title: "Table Decor",
      image: "https://mediumaquamarine-quetzal-462306.hostingersite.com/public/table.jpg",
      link: "/products",
    }
   
  ];

  return (
    <section id="most-trending" className="py-24 bg-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-accent text-sm font-bold uppercase tracking-[0.3em]">
              Curated Picks
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary-heading mb-6 tracking-tight mt-2">
              Most Trending <span className='text-[#E67E22]'>Collection</span> 
            </h2>
          </div>
          <p className="text-secondary-text/70 max-w-xs text-sm font-light leading-relaxed">
            Discover our most sought-after styles designed for every occasion.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative h-[500px] w-full bg-border-divider overflow-hidden flex items-center justify-center transition-all duration-700"
            >
              {/* Image Container (Revealed on hover) */}
              <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out scale-110 group-hover:scale-100"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Text Layer */}
              <div className="relative z-10 text-center transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="text-4xl md:text-4xl font-black uppercase italic tracking-tighter text-primary-heading group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                
                {/* Arrow Icon (Reveals on hover) */}
                <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/40 text-white">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Overlay for legibility */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-dark {
          -webkit-text-stroke: 1px #1F344C;
        }
      `}</style>
    </section>
  );
};

export default TrendingCollectionCard;