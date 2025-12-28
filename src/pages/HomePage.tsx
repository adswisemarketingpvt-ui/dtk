// src/pages/HomePage.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
 Star,
  RefreshCw,
  ShieldCheck
} from "lucide-react";
import Hero from "./Hero";
import { products } from "../products/shoes";
import FootwearGrid from "./FootwearGrid";
import TrendingCollectionCard from "./TrendingCollectionCard";

/* === Scroll Reveal helper === */
type RevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number; 
  className?: string;
};

function Reveal({
  children,
  as = "div",
  delayMs = 0,
  className = "",
}: RevealProps) {
  const Tag = as as any;
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "transition-all duration-1000 ease-out will-change-transform",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

const HomePage = () => {
  const features = [
    {
      icon: Truck,
      title: "FREE PAN-INDIA SHIPPING",
      description: "Delivery Hassle-Free on All Orders.",
    },
    {
      icon: ShieldCheck,
      title: "PROUDLY INDIAN MADE",
      description: "Support local artisans with every pair.",
    },
    {
      icon: Star,
      title: "GENUINE LEATHER SUPPORT",
      description: "Superior quality that resists wear.",
    },
    {
      icon: RefreshCw,
      title: "SIMPLE SIZE EXCHANGES",
      description: "Perfect fit guaranteed.​",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F0]">
      {/* Hero Section */}
      <Hero />

      {/* Features Section - Luxury Parchment Background */}
      <section
        id="features"
        className="bg-[#FAF7F0] border-y border-[#D8D2C2]/50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <div
              className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory px-4"
              style={{
                scrollPaddingLeft: "1rem",
                scrollPaddingRight: "1rem",
              }}
            >
              <div className="inline-flex items-center gap-6 lg:gap-20 py-12 justify-start md:justify-center w-full">
                {features.map((feature, index) => (
                  <Reveal
                    key={index}
                    delayMs={index * 150}
                    className="flex-shrink-0"
                  >
                    <div
                      className="flex flex-col items-center justify-center snap-start md:snap-center
                                 min-w-[85%] sm:min-w-[70%] md:min-w-[200px] md:max-w-[220px] px-4"
                    >
                      {/* Icon Circle: Terracotta Accent bg, Dark Charcoal icon */}
                      <div className="w-16 h-16 bg-[#B17457]/10 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-500">
                        <feature.icon className="w-7 h-7 text-[#B17457]" />
                      </div>

                      <h3 className="font-bold text-black text-center mb-2 text-xs uppercase tracking-[0.2em]">
                        {feature.title}
                      </h3>

                      <p className="text-[#4A4947] text-xs text-center font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </section>
      

      {/* Grid section */}
      <FootwearGrid />
      {/* Trending Collection Card */}
      <TrendingCollectionCard />


      {/* Trending Products */}
      <section id="/trending" className="py-10 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Reveal
              as="h2"
              className="text-4xl md:text-5xl font-serif text-black mb-6 tracking-tight"
            >
              Trending Collection
            </Reveal>
            <div className="w-12 h-1 bg-[#B17457] mx-auto mb-6"></div>
            <Reveal
              as="p"
              delayMs={120}
              className="text-[#4A4947] max-w-2xl mx-auto px-2 opacity-90 font-light leading-loose"
            >
              Discover our most sought-after footwear, crafted with precision
              and designed for the modern gentleman.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, i) => (
              <Reveal key={product.id} delayMs={i * 80}>
                <Link
                  to={`/product/${product.id}`}
                  className="group cursor-pointer block h-full"
                >
                  {/* Product Card - Clean White on Luxury Parchment Background */}
                  <div className="bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden h-full flex flex-col border border-[#D8D2C2]/30">
                    <div className="relative overflow-hidden bg-gray-50 flex-grow-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* Primary Button Color: B17457 */}
                      <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <button className="bg-[#B17457] p-3 rounded-full shadow-lg">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow text-center items-center">
                      <p className="text-[#B17457] font-bold text-[10px] mb-2 uppercase tracking-[0.3em]">
                        {product.category}
                      </p>
                      
                      {/* Product Title - Black */}
                      <h3 className="font-medium text-black text-xl mb-4 group-hover:text-[#B17457] transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Price Section */}
                      <div className="mt-auto flex flex-col items-center">
                        <div className="flex items-center gap-3">
                           <span className="text-2xl font-light text-black">
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-[#4A4947] line-through opacity-50">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        {product.originalPrice > product.price && (
                           <span className="mt-2 text-[#B17457] text-[10px] font-black tracking-widest uppercase">
                            Exclusive Offer: Save ₹{(product.originalPrice - product.price).toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Subtle Decorative Line */}
                      <div className="mt-6 w-0 group-hover:w-full h-px bg-[#B17457] transition-all duration-700"></div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* comming soon.... */}

     <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#B17457]">
      {/* Background Image */}
      <img
        src="https://theformales.in/Slider_Belts.webp"
        alt="Premium Belts Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for better text legibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Content Container - Flexbox layout to push items to top and bottom */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between items-center py-16 px-4 text-center">
        
        {/* TOP SECTION: New Arrival */}
        <div className="animate-fade-in-down">
          <h2 className="text-sm md:text-lg font-bold tracking-[0.4em] text-white uppercase drop-shadow-lg border-b border-white/30 pb-2">
            New Arrival
          </h2>
        </div>

        {/* BOTTOM SECTION: Coming Soon & Details */}
        <div className="flex flex-col items-center">
          {/* Main "Coming Soon" Text */}
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white uppercase leading-[0.8] drop-shadow-2xl">
            Coming <span className="text-transparent stroke-text">Soon ...</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-white text-base md:text-lg font-light max-w-lg mx-auto drop-shadow-md opacity-90">
            Our exclusive slider belt collection is dropping shortly. <br className="hidden md:block" />
            Be the first to experience the perfect fit.
          </p>

          {/* Action Button */}
          <button className="mt-8 px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 rounded-none shadow-xl">
            Notify Me
          </button>
        </div>
      </div>

      {/* Custom Styles for Stroke effect */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px white;
        }
        @media (min-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 2.5px white;
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
    </div>
  );
};

export default HomePage;