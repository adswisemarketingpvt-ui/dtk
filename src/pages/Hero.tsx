import React, { useEffect, useState } from "react";

// Optimized Hero component
// Improvements included:
// 1) Preloads the hero image when the component mounts (link rel="preload").
// 2) Uses fetchpriority/decoding/loading attributes to hint browser to prioritize and decode efficiently.
// 3) Adds width/height to reduce layout shift (CLS).
// 4) Shows a lightweight skeleton + spinner while the real image is loading, then fades the image in.
// 5) Provides a robust onError fallback to a placeholder image.

const mainShoeImage =
  "https://www.dtkfootwear.com//White%20Floral%20Happy%20Dussehra%20Poster%20(2).png";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    // Preload the hero image for faster paint (helpful for above-the-fold images)
    // We remove the link on unmount to keep DOM clean.
    try {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = mainShoeImage;
      // some browsers respect this attribute on <link>
      link.setAttribute("importance", "high");
      document.head.appendChild(link);
      return () => {
        try {
          document.head.removeChild(link);
        } catch (e) {
          // ignore
        }
      };
    } catch (e) {
      // ignore any errors while trying to preload
    }
  }, []);

  const handleExploreClick = () => {
    const target = document.getElementById("trending");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(
        'Features section not found: add id="trending" to the target element.'
      );
    }
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col items-center justify-start">
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 mb-0 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-20">
          {/* Image Section */}
          <div className="flex justify-center items-center order-1 md:order-2 w-full">
            <div className="relative w-full max-w-4xl">
              {/* Skeleton / placeholder behind the image */}
              <div
                aria-hidden
                className={` overflow-hidden  w-full transition-colors duration-300 ${
                  loaded ? "opacity-100" : "opacity-100"
                }`}
                style={{ minHeight: "340px" }}
              >
                {/* spinner shown while image isn't loaded */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    loaded ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <svg
                    className="animate-spin h-10 w-10 text-amber-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                </div>

                {/* Real image: fades in when loaded */}
                <img
                  src={mainShoeImage}
                  alt="Featured athletic shoe"
                  // Help browser prioritize and decode efficiently for hero image
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  // Provide dimensions to avoid layout shift. Adjust if you know the real image size.
                  width={1200}
                  height={800}
                  onLoad={() => setLoaded(true)}
                  onError={(e) => {
                    setErrored(true);
                    // graceful fallback
                    e.currentTarget.src =
                      "https://placehold.co/600x600/CCCCCC/FFFFFF?text=Image+Not+Found";
                    setLoaded(true);
                  }}
                  // Smooth fade-in using opacity
                  className={`w-full h-auto object-contain max-h-[80vh] rounded-lg transition-opacity duration-700 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Classic Shoes ,
              <span className="text-amber-900"> Modern Style</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
              DTK Footwear blends timeless craftsmanship with contemporary
              design, offering formal shoes that define sophistication. Step
              confidently into every occasion with comfort, class, and unmatched
              quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                type="button"
                onClick={handleExploreClick}
                className="bg-amber-900 text-white font-semibold py-3 px-8 shadow-md transition-all duration-300 transform focus:outline-none rounded"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
