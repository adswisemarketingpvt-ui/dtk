import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Globe, Heart } from "lucide-react";

// Scroll reveal hook
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [heroRef, heroVisible] = useScrollReveal();
  const [storyRef, storyVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [craftRef, craftVisible] = useScrollReveal();

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in every stitch and detail",
    },
    {
      icon: Users,
      title: "Heritage",
      description: "Three generations of master craftsmanship",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Responsible sourcing and eco-friendly practices",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Love for the art of fine shoemaking",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-12 sm:py-16 md:py-20">
        <div
          ref={heroRef}
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4 sm:mb-6">
              Our Heritage
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed px-4">
              For nearly four decades, we have been crafting exceptional
              footwear that embodies the perfect blend of traditional Italian
              craftsmanship and contemporary design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={storyRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Image */}
            <div
  className={`transition-all duration-1000 delay-100 ${
    storyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
  }`}
>
  <img
    src="https://www.dtkfootwear.com/Gemini_Generated_Image_waeyyjwaeyyjwaey.png"
    alt="DTK Footwear - About"
    className="w-full sm:h-64 md:h-96  shadow-lg  hover:shadow-2xl transition-shadow duration-300"
  />
</div>


            {/* Story Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                storyVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-4 sm:mb-6">
                Our Story
              </h2>

              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Hello, I'm <span className="font-bold">Dnyandev Kamble</span>, the founder of DTK Footwear. Crafting
                leather shoes isn't just a business for me — it's a lifelong
                passion. I personally oversee the creation of each pair of shoes
                in our factory. From selecting the finest leathers to
                meticulously crafting every stitch.
              </p>

              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                DTK Footwear is more than a label — it's a commitment to providing
                you with footwear that stands out in a crowd and stands the test of
                time. I have been selling for the past 3 years. We are a small
                business with over <span className="font-bold">2000+ happy customers</span>. Welcome to the DTK
                Footwear family.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
                Your journey in our shoes is not just a walk; it's a stride with
                craftsmanship, comfort and character.
              </p>

              {/* Founder Block */}
              <div className="flex items-center gap-3 sm:gap-4 bg-amber-50 p-4 rounded-lg hover:bg-amber-100 transition-colors duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src="https://www.dtkfootwear.com//OWNER.png"
                    alt="Dnyandev Kamble"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    Mr. Dnyandev Kamble
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Founder of DTK Footwear
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Reels Style Videos Section --- */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 transition-all duration-1000 ${
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              "https://www.dtkfootwear.com/public/aboutvideo/DTK%20Shoes%20video%203%20.mp4",
              "https://www.dtkfootwear.com/public/aboutvideo/DTK%20Shoes%20video%202%20.mp4",
              "https://www.dtkfootwear.com/public/aboutvideo/DTk%20Shoes%20video%201%20.mp4",
            ].map((src, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-[9/16] bg-black overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <video
                  controls
                  playsInline
                  muted
                  loop
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={valuesRef}
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              The principles that guide every decision we make and every shoe we
              craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 hover:transform hover:scale-105 ${
                  valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-amber-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-12 sm:py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={craftRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div
              className={`transition-all duration-1000 ${
                craftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-4 sm:mb-6">
                Master Craftsmanship
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Each pair of our shoes requires over 200 individual steps and
                8-12 hours of skilled work. Our master craftsmen use techniques
                passed down through generations, combined with modern
                innovations to create footwear that is both beautiful and
                durable.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "Hand-Selected Materials",
                    desc: "Only the finest Italian leather and premium components",
                  },
                  {
                    title: "Traditional Techniques",
                    desc: "Blake and Goodyear welted construction methods",
                  },
                  {
                    title: "Quality Control",
                    desc: "Every shoe inspected by our quality masters",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start hover:bg-white p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-amber-900 mb-1 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`grid grid-cols-2 gap-3 sm:gap-4 transition-all duration-1000 delay-300 ${
                craftVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {[
                "https://www.dtkfootwear.com//public/About/Gemini_Generated_Image_o0m4fto0m4fto0m4.png",
                "https://www.dtkfootwear.com/public/About/Gemini_Generated_Image_nqei0cnqei0cnqei.png",
                "https://www.dtkfootwear.com/public/About/Gemini_Generated_Image_70a8dv70a8dv70a8.png",
                "https://www.dtkfootwear.com/public/About/Gemini_Generated_Image_bngu2tbngu2tbngu.png",
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Craftsmanship ${idx + 1}`}
                  className={`w-full h-36 sm:h-48 object-cover shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    idx === 1
                      ? "mt-4 sm:mt-8"
                      : idx === 2
                      ? "-mt-2 sm:-mt-4"
                      : idx === 3
                      ? "mt-2 sm:mt-4"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
