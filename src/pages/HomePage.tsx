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
import { products } from "../products/shoes";

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

  return (
    // Prevent horizontal overflow that can show white bars on mobile
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="pt-0 mt-0 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-center">
      {/* Wrapper: allows horizontal scroll, uses snap for nice paging */}
      <div className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {/* Inline row: gap is 6 on small screens, 20 on large (desktop) */}
        <div className="inline-flex items-center gap-6 lg:gap-20 py-4  justify-center w-full">
          {features.map((feature, index) => (
            <Reveal key={index} delayMs={index * 100} className="flex-shrink-0 snap-center">
              {/* full width on small screens, fixed min width on md+ */}
              <div className="flex flex-col items-center justify-center min-w-full md:min-w-[200px] max-w-full md:max-w-[220px] px-4">
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
      <div className="w-full py-10  ">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center py-10 ">
          <img
            src="https://www.dtkfootwear.com/3.png"
            alt="DTK Footwear banner"
            // responsive safe image classes
            className="w-full h-auto object-contain block"
            // optional: loading="lazy"
            loading="lazy"
          />
        </div>
      </div>

      {/* Trending Products */}
      <section className="py-10 bg-white">
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
                <Link
                  to={`/product/${product.id}`}
                  className="group cursor-pointer block"
                >
                  <div className="bg-white shadow-lg overflow-hidden transition-transform duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                     
                      <div className="absolute top-4 right-4">
                        <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-colors">
                          <ArrowRight className="w-4 h-4 text-amber-900" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 ${
                              idx < product.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <h3 className="font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {product.category}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-amber-900">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-gray-400 line-through">
                            ${product.originalPrice}
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

      {/* About Section */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg"
                alt="Handcrafted Shoes"
                className="w-full h-64 md:h-96 object-cover shadow-lg"
              />
            </div>
            <div>
              <Reveal
                as="h2"
                className="text-2xl md:text-4xl font-serif font-bold text-amber-900 mb-6"
              >
                About Us
              </Reveal>
              <Reveal
                delayMs={80}
                className="text-gray-700 mb-6 leading-relaxed"
              >
                For over three decades, we have been dedicated to crafting
                exceptional footwear that combines traditional craftsmanship
                with contemporary design. Each pair of shoes tells a story of
                dedication, precision, and timeless elegance.
              </Reveal>
              <Reveal
                delayMs={160}
                className="text-gray-700 mb-8 leading-relaxed"
              >
                Our master artisans use only the finest materials and
                time-honored techniques to create shoes that are not just
                beautiful, but built to last a lifetime.
              </Reveal>
              <Reveal delayMs={220}>
                <Link
                  to="/about"
                  className="inline-flex items-center bg-amber-900 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-800 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Shoes CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-900 to-orange-900 p-10 md:p-12 text-center text-white relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10">
              <Reveal
                as="h2"
                className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6"
              >
                Custom Size Shoes
              </Reveal>
              <Reveal
                as="p"
                delayMs={80}
                className="text-base md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Can't find your perfect fit? We create bespoke shoes tailored to
                your exact measurements. Our master craftsmen will create a
                unique pair just for you, ensuring perfect comfort and style.
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 max-w-4xl mx-auto">
                <Reveal delayMs={120}>
                  <div className="bg-white bg-opacity-10 p-4 md:p-6  backdrop-blur-sm rounded">
                    <div className="text-2xl md:text-3xl mb-2">📏</div>
                    <h3 className="font-bold mb-1">Precise Measurements</h3>
                    <p className="text-sm opacity-90">
                      Professional foot measurement and fitting
                    </p>
                  </div>
                </Reveal>

                <Reveal delayMs={180}>
                  <div className="bg-white bg-opacity-10 p-4 md:p-6 backdrop-blur-sm rounded">
                    <div className="text-2xl md:text-3xl mb-2">🎨</div>
                    <h3 className="font-bold mb-1">Custom Design</h3>
                    <p className="text-sm opacity-90">
                      Choose materials, colors, and style details
                    </p>
                  </div>
                </Reveal>

                <Reveal delayMs={240}>
                  <div className="bg-white bg-opacity-10 p-4 md:p-6 backdrop-blur-sm rounded">
                    <div className="text-2xl md:text-3xl mb-2">⏱️</div>
                    <h3 className="font-bold mb-1">4-6 Weeks Delivery</h3>
                    <p className="text-sm opacity-90">
                      Handcrafted with care and precision
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Button */}
      <div className="space-y-4 w-full flex justify-center items-center text-center mb-20 px-4">
        <button
          onClick={() => {
            const message = `🦶 *CUSTOM SIZE SHOES INQUIRY*

Hello! I'm interested in ordering custom size shoes.

👞 *Service Details:*
• Custom measurements and fitting
• Personalized design options
• Premium materials selection
• 4-6 weeks handcrafted delivery
• Starting from $599

📋 *Next Steps:*
Please provide information about:
• Available appointment times for measurement
• Design consultation process
• Material and color options
• Pricing for different styles
• Timeline and delivery details

I would like to schedule a consultation to discuss my custom shoe requirements.

Thank you for offering this bespoke service! 👞✨`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/+9765758830?text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");
          }}
          className="text-white bg-gradient-to-r from-amber-900 to-orange-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:opacity-90 transition-colors inline-flex items-center"
        >
          <span className="mr-2">💬</span>
          Get Custom Quote via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default HomePage;
