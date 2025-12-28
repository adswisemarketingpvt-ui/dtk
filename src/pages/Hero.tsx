import { ArrowRight } from "lucide-react";

export default function DTKFootwearHome() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 font-[Inter]">

      {/* Google Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,600&family=Inter:wght@300;400;500;600;700&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
      `}} />

      {/* SEO Heading */}
      <div className="sr-only">
        <h1>The Formales | Premium Handcrafted Formal Shoes</h1>
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://theformales.in//heroimage.png"
          alt="Premium Formal Shoes"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_infinite_alternate]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
          <div className="max-w-xl space-y-6">

            {/* Subtitle */}
            <div className="flex items-center gap-3 opacity-0 animate-fade-up">
              <div className="w-8 h-[1px] bg-white"></div>
              <span className="text-white text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
                Artisan Crafted
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white opacity-0 animate-fade-up delay-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="italic font-semibold">
                The Gold Standard
              </span>
              <br />
              <span className="not-italic font-light tracking-tight">
                of Formal Elegance
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/80 text-base md:text-lg font-light tracking-wide max-w-md leading-relaxed opacity-0 animate-fade-up delay-2">
              Buy Men's Formal Shoes Online – Premium Leather, 100% Made in India
Handcrafted for lasting elegance and all-day wear. 
            </p>

            {/* CTA */}
            <div className="pt-6 opacity-0 animate-fade-up delay-3">
              <a
                href="#trending"
                className="group inline-flex items-center gap-6 border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold tracking-[0.2em] transition-all duration-500"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Side Branding */}
      <div className="absolute right-10 bottom-10 hidden lg:block opacity-0 animate-[fadeIn_2s_ease-out_forwards] delay-3">
        <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase [writing-mode:vertical-lr]">
          The Formales Luxury Edit 2024
        </p>
      </div>

    </div>
  );
}
