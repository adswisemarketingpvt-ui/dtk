import React from 'react';

const FootwearGrid = () => {
  return (
    <div className="w-full py-10 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main Grid Container: 1 column on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* 1. Top Left: Sneakers on leaves (Spans 2 columns) */}
          <div className="md:col-span-2 h-64 relative overflow-hidden group">
            <img
              src="https://theformales.in//tranding1%20(1).jpg" // Replace with your leaves image
              alt="Autumn sneakers"
              className="w-full h-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* 2. Top Middle: Splash (Spans 1 column) */}
          <div className="md:col-span-1 h-64 relative overflow-hidden group">
            <img
              src="https://theformales.in//tranding2.png" // Replace with your splash image
              alt="Water splash sneaker"
              className="w-full h-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* 3. Right: Black Friday (Spans 1 column, but 2 Rows tall) */}
          <div className="md:col-span-1 md:row-span-2 h-96 md:h-auto relative overflow-hidden group">
            <img
              src="https://i.pinimg.com/1200x/85/00/b9/8500b9973a7dd6a2cecba095f183713e.jpg" // Replace with your Black Friday image
              alt="Black Friday Supersales"
              className="w-full h-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* 4. Bottom Left: White Nike (Spans 1 column) */}
          <div className="md:col-span-1 h-64 relative overflow-hidden group">
            <img
              src="https://theformales.in/ChatGPT%20Image%20Dec%2011%2C%202025%2C%2008_14_53%20PM.jpg" // Replace with your white shoe image
              alt="White sneaker"
              className="w-full h-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* 5. Bottom Middle: Skater (Spans 2 columns) */}
          <div className="md:col-span-2 h-64 relative overflow-hidden group">
            <img
              src="https://theformales.in/4.png" // Replace with your skater image
              alt="Sneaker for sports"
              className="w-full h-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FootwearGrid;