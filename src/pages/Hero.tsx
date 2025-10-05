import React from "react";

const App = () => {
  return <Hero />;
};

/**
 * @typedef {object} HeroProps
 * @property {string} [moreHref] - Optional callback or link for the "More" button.
 */

/**
 * A responsive hero section component for an e-commerce site.
 * It's designed to be mobile-first and scales up for larger screens.
 * @param {HeroProps} props
 */
const Hero = ({ moreHref = "#shop" }: { moreHref?: string }) => {
  return (
    // Fill the full viewport height
    <section className="relative bg-white w-full h-screen overflow-hidden">
      {/* Full width container (no side padding/margin) */}
      <div className="w-full h-full">
        <div className="relative h-full overflow-hidden mb-0">
          {/* use flex to center content vertically/horizontally */}
          <div className="relative flex items-center justify-center h-full w-full">
            {/* Left Shoe (flush to left edge) */}
            <div
              className="absolute left-0 top-0 bottom-0 pointer-events-none flex items-center"
              // keep it off the z-axis so center content sits above
              aria-hidden="true"
            >
              <img
                src="https://www.dtkfootwear.com/public/Black%20Shoes/1%20(4).png"
                alt="Black formal shoe"
                loading="lazy"
                className="h-full max-h-screen w-auto object-contain select-none"
                style={{ transform: "translateX(-6%)" }} // slight nudge if you want it beyond edge
              />
            </div>

            {/* Right Shoe (flush right + mirrored) */}
            <div
              className="absolute right-0 top-0 bottom-0 pointer-events-none flex items-center"
              aria-hidden="true"
            >
              <img
                src="https://www.dtkfootwear.com/public/Brown%20Shoess/Artboard%204.png"
                alt="Brown formal shoe"
                loading="lazy"
                className="h-full max-h-screen w-auto object-contain select-none"
                style={{ transform: "scaleX(-1) translateX(6%)" }} // mirror + nudge inside/outside edge
              />
            </div>

            {/* Center content */}
            <div className="relative z-10 w-full max-w-2xl text-center px-6 h-full flex flex-col items-center justify-center">
              <p className="uppercase text-sm tracking-wider text-amber-700 mb-2 sm:mb-4">
                New Or Never
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-amber-900 leading-tight">
                Formal Shoes
              </h1>

              <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                Classic craftsmanship meets modern comfort.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={moreHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-900 text-white text-sm font-medium shadow-md hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-all"
                  aria-label="Explore more formal shoes"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
