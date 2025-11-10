// src/pages/HomePage.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  Shield,
  Headphones,
  Gift,
  Star,
} from "lucide-react";
import Hero from "./Hero";
import SEO from "../components/SEO"; // <-- added SEO import
import { products } from "../products/shoes";
import GoogleReview from "../components/GoogleReview";

/* === Scroll Reveal helper === */
type RevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number; // optional stagger delay
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
        "transition-all duration-700 ease-out will-change-transform",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
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
      title: "FREE WORLD DELIVERY",
      description: "Complimentary shipping on all orders",
    },
    {
      icon: Shield,
      title: "MONEY BACK GUARANTEE",
      description: "30-day satisfaction guarantee",
    },
    {
      icon: Headphones,
      title: "BEST ONLINE SUPPORT",
      description: "24/7 customer service excellence",
    },
    {
      icon: Gift,
      title: "SPECIAL GIFT CARD",
      description: "Exclusive rewards for loyal customers",
    },
  ];

  // primary page image for SEO (banner)
  const pageImage = "https://www.dtkfootwear.com/DTK%20Footwear%20Website%20(1).png";
  

  return (
    // Prevent horizontal overflow that can show white bars on mobile
    <div className="overflow-x-hidden">
      {/* SEO meta for the Home page */}
      <SEO
        title="DTK Footwear — Classic Shoes, Modern Style"
        description="DTK Footwear blends timeless craftsmanship with contemporary design — comfortable, classy formal shoes for every occasion."
        canonical="https://www.dtkfootwear.com/"
        image={pageImage}
        keywords={[
          "DTK Footwear",
          "formal shoes",
          "classic shoes",
          "comfortable shoes",
          "men's formal footwear",
        ]}
        siteName="DTK Footwear"
      />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section
        id="features"
        className="pt-0 mt-2 mb-2 bg-white md:mt-2 md:mb-2"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            {/* Scroll container */}
            <div
              className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory px-4"
              style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
            >
              {/* Mobile = justify-start | md+ = justify-center */}
              <div className="inline-flex items-center gap-6 lg:gap-20 py-4 justify-start md:justify-center w-full">
                {features.map((feature, index) => (
                  <Reveal
                    key={index}
                    delayMs={index * 100}
                    className="flex-shrink-0"
                  >
                    {/* Snap alignment + responsive widths */}
                    <div
                      className="flex flex-col items-center justify-center snap-start md:snap-center
                              min-w-[85%] sm:min-w-[70%] md:min-w-[200px] md:max-w-[220px] px-4"
                    >
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                        <feature.icon className="w-8 h-8 text-amber-900" />
                      </div>

                      <h3 className="font-bold text-amber-900 text-center mb-1 text-sm">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 text-xs text-center">
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

      {/* Full-width responsive image — constrained inside max-w container to avoid oversize */}
      <div className="w-full py-10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center py-10 ">
          <img
            src={pageImage}
            alt="DTK Footwear banner"
            // responsive safe image classes
            className="w-full h-auto object-contain block"
            loading="lazy"
          />
        </div>
      </div>

      {/* Trending Products */}
      <section id="trending" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Reveal
              as="h2"
              className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4"
            >
              Trending Products
            </Reveal>
            <Reveal
              as="p"
              delayMs={120}
              className="text-gray-600 max-w-2xl mx-auto px-2"
            >
              Discover our most sought-after footwear, crafted with precision
              and designed for the modern gentleman.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Reveal key={product.id} delayMs={i * 80}>
                <Link to={`/product/${product.id}`} className="group cursor-pointer block">
                  <div className="bg-white shadow-xl overflow-hidden transition-transform duration-300 transform-gpu border-l-4 border-amber-900 ring-1 ring-amber-100 rounded-2xl">

                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />

                      {/* Made in India badge (top-left) */}
                      {/* <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-amber-900 border border-amber-100">
                          Made in India
                        </span>
                      </div> */}

                      <div className="absolute top-4 right-4">
                        <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-colors">
                          <ArrowRight className="w-4 h-4 text-amber-900" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4 md:p-6">
                      
                      <h3 className="font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {product.category}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-amber-900">
                          ₹ {product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-gray-400 line-through">
                            ₹ {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
       (
    <section className="bg-[#f8f3ef] py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#5b3a1a] mb-4 tracking-wide">
          What Our Customers Say
        </h2>

        {/* Subheading */}
        <p className="text-[#7a5a3a] max-w-2xl mx-auto mb-10 text-lg">
          Every pair tells a story — here’s what our customers think about their DTK Footwear experience.
        </p>

        {/* Reviews container */}
        <div className="bg-white rounded-xl shadow-xl p-8 border border-[#e5d4c3] transition hover:shadow-2xl">
          <GoogleReview />
        </div>
        
      </div>
    </section>

      
    </div>
  );
};

export default HomePage;
