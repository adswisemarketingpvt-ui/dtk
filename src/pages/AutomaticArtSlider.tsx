import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: "https://tartariatech.com//public/1.png?auto=format&fit=crop&q=80",
    title: "Sacred Craftsmanship",
    subtitle: "Hand-carved with devotion."
  },
  {
    url: "https://tartariatech.com/public/Screenshot%202026-01-15%20095431.png?auto=format&fit=crop&q=80",
    title: "Divine Energy",
    subtitle: "Spiritual presence for your home."
  },
  {
    url: "https://tartariatech.com//public/1.png?auto=format&fit=crop&q=80",
    title: "Eco-Friendly",
    subtitle: "Pure clay idols for the future."
  },
  {
    url: "https://tartariatech.com/public/Screenshot%202026-01-15%20095431.png?auto=format&fit=crop&q=80",
    title: "Heritage Art",
    subtitle: "Traditions passed through generations."
  },
  {
    url: "https://tartariatech.com//public/1.png?auto=format&fit=crop&q=80",
    title: "Modern Minimalist",
    subtitle: "Clean designs for modern spaces."
  }
];

const AutomaticArtSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);

  // Handle responsiveness via window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2); // Tablet
      } else {
        setItemsVisible(3); // Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = slides.length - itemsVisible;

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-2 overflow-hidden group">
      <h2 className="text-4xl md:text-5xl  font-serif mb-6 md:mb-10 text-center text-gray-800">
        Craft Honored by <span className='text-[#E67E22]'>Leaders</span> 
      </h2>

      {/* Slider Viewport */}
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)` 
          }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="px-2 box-border flex-shrink-0"
              style={{ width: `${100 / itemsVisible}%` }}
            >
              <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-lg group/item shadow-md">
                <img 
                  src={slide.url} 
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                />
                
                {/* Overlay Text - Always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white transform transition-transform duration-300">
                    {slide.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/80 mt-1">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls - Hidden on small touch devices, shown on hover for desktop */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 rounded-full shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-black" size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 rounded-full shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="text-black" size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === i ? "w-8 bg-black" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AutomaticArtSlider;