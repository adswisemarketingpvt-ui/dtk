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
    url: "https://tartariatech.com/public/Screenshot%202026-01-15%20095431.png?auto=format&fit=crop&q=80?auto=format&fit=crop&q=80",
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
  const itemsVisible = 3; // Number of images to show at once
  
  // Calculate the maximum index we can slide to
  const maxIndex = slides.length - itemsVisible;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-2 py-4 overflow-hidden group">
      <h2 className="text-3xl font-serif mb-8 text-center">Featured Gallery</h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="min-w-[33.333%] px-2 box-border"
            >
              <div className="relative h-[400px] overflow-hidden  group/item">
                <img 
                  src={slide.url} 
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white">{slide.title}</h3>
                  <p className="text-sm text-white/70">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="text-black" size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="text-black" size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all rounded-full ${
              currentIndex === i ? "w-8 bg-black" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AutomaticArtSlider;