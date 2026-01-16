import React from 'react';

const FootwearGrid = () => {
  return (
    /* CHANGE: Use min-h-screen instead of h-screen to allow the page to grow if needed.
       CHANGE: Removed overflow-hidden to ensure the bottom of cards are visible.
    */
    <section className="w-full min-h-screen bg-background p-4 md:p-6 flex items-center justify-center">
      <div className="w-full max-w-[1600px] mx-auto">
        
        {/* CHANGE: Used h-auto or aspect-ratio based heights to prevent bottom cutting.
            On mobile, it switches to a natural flow; on desktop, it maintains the collage.
        */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3">
          
          {/* COLUMN 1: LEFT STACK */}
          <div className="md:col-span-2 grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-sm shadow-sm aspect-[4/5] md:aspect-auto md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" 
                alt="Portrait detail"
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm shadow-sm aspect-[4/5] md:aspect-auto md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80" 
                alt="Child walking"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* COLUMN 2: CENTER PILLAR (Full Height) */}
          <div className="md:col-span-3 relative overflow-hidden rounded-sm shadow-sm min-h-[400px] md:h-[612px]">
            <img
              src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80" 
              alt="Hand detail"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* COLUMN 3: RIGHT SECTION */}
          <div className="md:col-span-5 grid grid-rows-2 gap-3">
            {/* Top Large Landscape */}
            <div className="relative overflow-hidden rounded-sm shadow-sm aspect-video md:aspect-auto md:h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1505144808421-1984296ad536?auto=format&fit=crop&q=80" 
                alt="Chair by sea"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Bottom Row: Split into two */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden rounded-sm shadow-sm aspect-square md:aspect-auto md:h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80" 
                  alt="Interior"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm shadow-sm aspect-square md:aspect-auto md:h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1542840410-3092f99611a3?auto=format&fit=crop&q=80" 
                  alt="Tying boots"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FootwearGrid;