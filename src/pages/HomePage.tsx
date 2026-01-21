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

import FootwearGrid from "./FootwearGrid";
import TrendingCollectionCard from "./TrendingCollectionCard";
import AutomaticArtSlider from "./AutomaticArtSlider";
import Testimonials from "./Testimonials";
import Seo from "../components/Seo";

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
   
    
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <Seo
        title="Avyact Arts - Handcrafted Artistry from India"
        description="Discover exquisite handcrafted murtis and sculptures at Avyact Arts. Hand-carved by Indian artisans, our unique pieces celebrate a rich heritage."
        keywords="Handcrafted murtis, Indian sculptures, Artisan art India, Traditional Indian crafts, Unique Indian artwork, Hand-carved murtis, Cultural art India"
        url="https://avyactarts.com/"
        
      />
      <Hero />

      {/* Features Section */}
      <section
        id="features"
        className="bg-background border-y border-border-divider/50"
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
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-500">
                        <feature.icon className="w-7 h-7 text-accent" />
                      </div>

                      <h3 className="font-bold text-primary-heading text-center mb-2 text-xs uppercase tracking-[0.2em]">
                        {feature.title}
                      </h3>

                      <p className="text-secondary-text text-xs text-center font-light leading-relaxed">
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
      <section className="py-10">
                <FootwearGrid />
      </section>
      
      {/* Trending Collection Card */}
      <TrendingCollectionCard />

      {/* Automatic Art Slider Section */}
      <section className="py-20">
        <AutomaticArtSlider />
      </section>

      {/* Testimonials Section */}
      <Testimonials />

    </div>
   
  );
};

export default HomePage;