import React from 'react';

const FootwearGrid = () => {
  return (
    <section className="w-full min-h-screen bg-background p-4 md:p-6 flex items-center justify-center">
      <div className="w-full max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3">
          
          {/* COLUMN 1: LEFT STACK */}
          <div className="md:col-span-2 grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-sm shadow-sm aspect-[4/5] md:aspect-auto md:h-[300px] group">
              <img
                src="https://mediumaquamarine-quetzal-462306.hostingersite.com//public/grid3.jpg?auto=format&fit=crop&q=80" 
                alt="Portrait detail"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-lg font-semibold">Abstract Bhakt</h3>
                <p className="text-gray-300 text-sm mt-1">A modern black sculpture with a tealight holder that adds warmth and calm to any space.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm shadow-sm aspect-[4/5] md:aspect-auto md:h-[300px] group">
              <img
                src="https://mediumaquamarine-quetzal-462306.hostingersite.com//public/grid2.jpg?auto=format&fit=crop&q=80" 
                alt="Child walking"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-lg font-semibold">Abstract Ring Krishna</h3>
                <p className="text-gray-300 text-sm mt-1">An elegant flowing design with a diya holder, symbolizing harmony and artistic grace.</p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CENTER PILLAR (Full Height) */}
          <div className="md:col-span-3 relative overflow-hidden rounded-sm shadow-sm min-h-[400px] md:h-[612px] group">
            <img
              src="https://mediumaquamarine-quetzal-462306.hostingersite.com/public/grid6.png?auto=format&fit=crop&q=80" 
              alt="Hand detail"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <h3 className="text-white text-2xl font-semibold">Regal Shivaji Maharaj Idol</h3>
              <p className="text-gray-300 text-base mt-2">A finely crafted Shivaji Maharaj idol representing bravery, leadership, and heritage pride.</p>
            </div>
          </div>

          {/* COLUMN 3: RIGHT SECTION */}
          <div className="md:col-span-5 grid grid-rows-2 gap-3">
            {/* Top Large Landscape */}
            <div className="relative overflow-hidden rounded-sm shadow-sm aspect-video md:aspect-auto md:h-[300px] group">
              <img
                src="https://mediumaquamarine-quetzal-462306.hostingersite.com/public/grid5.jpg?auto=format&fit=crop&q=80"
                alt="Chair by sea"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-lg font-semibold">Krishna - Chafa</h3>
                <p className="text-gray-300 text-sm mt-1">A compact leaf-themed shrine ideal for offices, bringing positivity and focus.</p>
              </div>
            </div>

            {/* Bottom Row: Split into two */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden rounded-sm shadow-sm aspect-square md:aspect-auto md:h-[300px] group">
                <img
                  src="https://mediumaquamarine-quetzal-462306.hostingersite.com//public/grid1.jpg?auto=format&fit=crop&q=80" 
                  alt="Interior"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-lg font-semibold">Pimpal Pan Krishna</h3>
                  <p className="text-gray-300 text-sm mt-1">A divine Krishna sculpture within a golden leaf, blending tradition with modern art.</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-sm shadow-sm aspect-square md:aspect-auto md:h-[300px] group">
                <img
                  src="https://mediumaquamarine-quetzal-462306.hostingersite.com//public/grid4.jpg?auto=format&fit=crop&q=80" 
                  alt="Tying boots"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-lg font-semibold">Dhyanasth Mahuli</h3>
                  <p className="text-gray-300 text-sm mt-1">A peaceful meditating sage statue that creates a calm and spiritual atmosphere.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FootwearGrid;