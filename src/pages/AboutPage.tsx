// import React, { useEffect, useRef, useState } from "react";
// import { Award, Users, Globe, Heart } from "lucide-react";

// // Scroll reveal hook
// const useScrollReveal = () => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return [ref, isVisible];
// };

// const AboutPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [heroRef, heroVisible] = useScrollReveal();
//   const [storyRef, storyVisible] = useScrollReveal();
//   const [valuesRef, valuesVisible] = useScrollReveal();
//   const [craftRef, craftVisible] = useScrollReveal();

//   const values = [
//     {
//       icon: Award,
//       title: "Excellence",
//       description: "Uncompromising quality in every stitch and detail",
//     },
//     {
//       icon: Users,
//       title: "Heritage",
//       description: "Three generations of master craftsmanship",
//     },
//     {
//       icon: Globe,
//       title: "Sustainability",
//       description: "Responsible sourcing and eco-friendly practices",
//     },
//     {
//       icon: Heart,
//       title: "Passion",
//       description: "Love for the art of fine shoemaking",
//     },
//   ];

//   return (
//     <div className="overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-12 sm:py-16 md:py-20">
//         <div
//           ref={heroRef}
//           className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
//             heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="text-center">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4 sm:mb-6">
//               Our Heritage
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed px-4">
//               For nearly four decades, we have been crafting exceptional
//               footwear that embodies the perfect blend of traditional Italian
//               craftsmanship and contemporary design.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-12 sm:py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div
//             ref={storyRef}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
//           >
//             {/* Image */}
//             <div
//   className={`transition-all duration-1000 delay-100 ${
//     storyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//   }`}
// >
//   <img
//     src="https://www.dtkfootwear.com/dtk%20about.png"
//     alt="DTK Footwear - About"
//     className="w-full sm:h-64 md:h-96  shadow-lg  hover:shadow-2xl transition-shadow duration-300"
//   />
// </div>


//             {/* Story Content */}
//             <div
//               className={`transition-all duration-1000 delay-300 ${
//                 storyVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//               }`}
//             >
//               <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-4 sm:mb-6">
//                 Our Story
//               </h2>

//               <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
//                 Hello, I'm <span className="font-bold">Dnyandev Kamble</span>, the founder of DTK Footwear. Crafting
//                 leather shoes isn't just a business for me — it's a lifelong
//                 passion. I personally oversee the creation of each pair of shoes
//                 in our factory. From selecting the finest leathers to
//                 meticulously crafting every stitch.
//               </p>

//               <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
//                 DTK Footwear is more than a label — it's a commitment to providing
//                 you with footwear that stands out in a crowd and stands the test of
//                 time. I have been selling for the past 3 years. We are a small
//                 business with over <span className="font-bold">2000+ happy customers</span>. Welcome to the DTK
//                 Footwear family.
//               </p>

//               <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
//                 Your journey in our shoes is not just a walk; it's a stride with
//                 craftsmanship, comfort and character.
//               </p>

//               {/* Founder Block */}
//               <div className="flex items-center gap-3 sm:gap-4 bg-amber-50 p-4 rounded-lg hover:bg-amber-100 transition-colors duration-300">
//                 <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md flex-shrink-0">
//                   <img
//                     src="https://www.dtkfootwear.com//OWNER.png"
//                     alt="Dnyandev Kamble"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-base sm:text-lg font-semibold text-gray-900">
//                     Mr. Dnyandev Kamble
//                   </p>
//                   <p className="text-xs sm:text-sm text-gray-600">
//                     Founder of DTK Footwear
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* --- Reels Style Videos Section --- */}
//           {/* <div
//             className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 transition-all duration-1000 ${
//               storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             {[
//               "https://www.dtkfootwear.com/public/aboutvideo/DTK%20Shoes%20video%203%20.mp4",
//               "https://www.dtkfootwear.com/public/aboutvideo/DTK%20Shoes%20video%202%20.mp4",
//               "https://www.dtkfootwear.com/public/aboutvideo/DTk%20Shoes%20video%201%20.mp4",
//             ].map((src, idx) => (
//               <div
//                 key={idx}
//                 className="relative w-full aspect-[9/16] bg-black overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
//               >
//                 <video
//                   controls
//                   playsInline
//                   muted
//                   loop
//                   className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//                 >
//                   <source src={src} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-12 sm:py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div
//             ref={valuesRef}
//             className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
//               valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-3 sm:mb-4">
//               Our Values
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
//               The principles that guide every decision we make and every shoe we
//               craft.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className={`text-center transition-all duration-700 hover:transform hover:scale-105 ${
//                   valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-amber-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
//                   <value.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-2 sm:mb-3">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Craftsmanship Section */}
//       <section className="py-12 sm:py-16 bg-amber-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div
//             ref={craftRef}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
//           >
//             <div
//               className={`transition-all duration-1000 ${
//                 craftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-4 sm:mb-6">
//                 Master Craftsmanship
//               </h2>
//               <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
//                 Each pair of our shoes requires over 200 individual steps and
//                 8-12 hours of skilled work. Our master craftsmen use techniques
//                 passed down through generations, combined with modern
//                 innovations to create footwear that is both beautiful and
//                 durable.
//               </p>

//               <div className="space-y-3 sm:space-y-4">
//                 {[
//                   {
//                     title: "Hand-Selected Materials",
//                     desc: "Only the finest Italian leather and premium components",
//                   },
//                   {
//                     title: "Traditional Techniques",
//                     desc: "Blake and Goodyear welted construction methods",
//                   },
//                   {
//                     title: "Quality Control",
//                     desc: "Every shoe inspected by our quality masters",
//                   },
//                 ].map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-start hover:bg-white p-3 rounded-lg transition-all duration-300"
//                   >
//                     <div className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
//                     <div>
//                       <h4 className="font-bold text-amber-900 mb-1 text-sm sm:text-base">
//                         {item.title}
//                       </h4>
//                       <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div
//               className={`grid grid-cols-2 gap-3 sm:gap-4 transition-all duration-1000 delay-300 ${
//                 craftVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//               }`}
//             >
//               {[
//                 "https://www.dtkfootwear.com//public/About/Gemini_Generated_Image_o0m4fto0m4fto0m4.png",
//                 "https://www.dtkfootwear.com/public/About/Gemini_Generated_Image_nqei0cnqei0cnqei.png",
//                 "https://www.dtkfootwear.com/public/About/Gemini_Generated_Image_70a8dv70a8dv70a8.png",
//                 "https://www.dtkfootwear.com/public/About/Gemini_Generated_Image_bngu2tbngu2tbngu.png",
//               ].map((src, idx) => (
//                 <img
//                   key={idx}
//                   src={src}
//                   alt={`Craftsmanship ${idx + 1}`}
//                   className={`w-full h-36 sm:h-48 object-cover shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${
//                     idx === 1
//                       ? "mt-4 sm:mt-8"
//                       : idx === 2
//                       ? "-mt-2 sm:-mt-4"
//                       : idx === 3
//                       ? "mt-2 sm:mt-4"
//                       : ""
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;
// AboutPage.tsx
import React, { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Star, Award, RotateCcw, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Fix: define ref and visibility state
  const storyRef = useRef<HTMLDivElement | null>(null);
  const [storyVisible, setStoryVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const el = storyRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setStoryVisible(entry.isIntersecting);
          // If you want the animation to happen only once, uncomment:
          // if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  

  const collections = [
    {
      title: "Formal Classics",
      description: "Black and brown leather shoes made for the boardroom.",
      image: "https://www.dtkfootwear.com//public/About/sing3.png"
    },
    {
      title: "Casual Loafers",
      description: "Effortless comfort for daily wear.",
      image: "https://www.dtkfootwear.com//public/About/sing2.png"
    },
    {
      title: "Brogues & Monk Straps",
      description: "A statement for every occasion.",
      image: "https://www.dtkfootwear.com//public/About/sing1.png?w=500&h=500&fit=crop"
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Unmatched Comfort",
      description: "Designed to support long wear without strain."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Genuine Leather",
      description: "We never compromise on material integrity."
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Easy Returns",
      description: "30-day hassle-free return policy."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Made in India",
      description: "Supporting skilled local artisans."
    }
  ];

  const faqs = [
    {
      question: "How can I confirm leather authenticity?",
      answer: "Every DTK shoe comes with a certificate of authenticity. Our leather has natural grain patterns and a distinctive smell that synthetic materials cannot replicate."
    },
    {
      question: "How do I choose the right size?",
      answer: "We provide a detailed sizing guide on each product page. If you're between sizes, we recommend sizing up for comfort. Our customer service team is always available for personalized advice."
    },
    {
      question: "Do you ship pan-India?",
      answer: "Yes! We deliver to all major cities and towns across India with reliable courier partners. Shipping is free on orders above ₹2,999."
    },
    {
      question: "What's the return policy?",
      answer: "We offer a 30-day hassle-free return policy. If you're not completely satisfied, simply contact us and we'll arrange a pickup at no extra cost."
    },
    {
      question: "How do I care for my leather shoes?",
      answer: "Clean with a soft brush, apply leather conditioner monthly, and store in a cool, dry place. Avoid direct sunlight and moisture. We include a care guide with every purchase."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100 to-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
                Crafted to Last.<br />
                <span className="text-amber-700">Designed to Impress.</span>
              </h1>
              <p className="text-xl text-stone-600">
                Discover the craftsmanship behind India's best leather shoes.
              </p>
              <button
                onClick={() => navigate("/")}
                className="bg-amber-700 text-white px-8 py-4  text-lg font-semibold hover:bg-amber-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Shop the Collection
              </button>
            </div>

            {/* Image Grid - Vertical and Horizontal */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* Vertical Image */}
              <div className="relative overflow-hidden shadow-xl">
                <img
                  src="https://www.dtkfootwear.com//public/About/hero1.png?w=400&h=600&fit=crop"
                  alt="Classic leather shoe detail"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Right Column - Two Horizontal Images Stacked */}
              <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden shadow-xl flex-1">
                  <img
                    src="https://www.dtkfootwear.com/public/About/Gemini_Generated_Image_o0m4fto0m4fto0m4.png"
                    alt="Premium leather shoes collection"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="relative overflow-hidden shadow-xl flex-1">
                  <img
                    src="https://www.dtkfootwear.com/public/About/Gemini_Generated_Image_nqei0cnqei0cnqei.png"
                    alt="Handcrafted leather loafers"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with IntersectionObserver */}
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
                src="https://www.dtkfootwear.com/dtk%20about.png"
                alt="DTK Footwear - About"
                className="w-full sm:h-64 md:h-96 object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-md"
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
                Hello, I'm <span className="font-bold">Dnyandev Kamble</span>, the founder of DTK
                Footwear. Crafting leather shoes isn't just a business for me — it's a lifelong
                passion. I personally oversee the creation of each pair of shoes in our factory —
                from selecting the finest leathers to meticulously crafting every stitch.
              </p>

              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                DTK Footwear is more than a label — it's a commitment to providing you with footwear
                that stands out in a crowd and stands the test of time. I have been selling for the
                past 3 years. We are a small business with over{" "}
                <span className="font-bold">2000+ happy customers</span>. Welcome to the DTK
                Footwear family.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
                Your journey in our shoes is not just a walk; it's a stride with craftsmanship,
                comfort and character.
              </p>

              {/* Founder Block */}
              <div className="flex items-center gap-3 sm:gap-4 bg-amber-50 p-4 rounded-lg hover:bg-amber-100 transition-colors duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src="https://www.dtkfootwear.com/OWNER.png"
                    alt="Dnyandev Kamble"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    Mr. Dnyandev Kamble
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">Founder of DTK Footwear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-800 mb-6">
              Craftsmanship You Can Trust
            </h2>
            <div className="space-y-4 text-black text-lg leading-relaxed max-w-4xl">
              <p>
                Each DTK shoe passes through skilled hands — stitched, shaped, and polished by artisans who've spent decades perfecting their craft. We use 100% genuine leather, premium soles, and strict quality checks to ensure comfort, durability, and lasting elegance.
              </p>
              <p className="text-amber-500 font-semibold text-xl">
                This isn't factory-made footwear. It's heritage in every step.
              </p>
            </div>
          </div>

          {/* Three Process Images */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Image 1 - Cutting Leather */}
            <div className="relative overflow-hidden  shadow-2xl group">
              <img 
                src="https://www.dtkfootwear.com//public/About/1.jpg" 
                alt="Artisan cutting premium leather"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-lg">Premium Leather Selection</p>
              </div>
            </div>

            {/* Image 2 - Stitching */}
            <div className="relative overflow-hidden  shadow-2xl group">
              <img 
                src="https://www.dtkfootwear.com//public/About/2.jpg?w=600&h=400&fit=crop" 
                alt="Hand-stitching leather shoes"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-lg">Expert Hand-Stitching</p>
              </div>
            </div>

            {/* Image 3 - Polishing */}
            <div className="relative overflow-hidden  shadow-2xl group">
              <img 
                src="https://www.dtkfootwear.com//public/About/3.jpg?w=600&h=400&fit=crop" 
                alt="Polishing finished leather shoes"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-lg">Final Polish & Quality Check</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Signature Range</h2>
            <p className="text-xl text-stone-600">Explore our most loved collections</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group bg-white  shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{collection.title}</h3>
                  <p className="text-stone-600">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-stone-600 text-lg">
            Each pair reflects our core – <span className="font-semibold text-stone-900">premium quality, handcrafted perfection, and modern design.</span>
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100 to-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Why Choose DTK Footwear</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-amber-50 transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-700 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-xl text-stone-700">
            Elevate every step – from office formals to stylish casuals, <span className="font-bold text-amber-700">confidence comes standard.</span>
          </p>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">FAQs</h2>
            <p className="text-xl text-stone-600">Find answers to what matters most</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-stone-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-stone-50 transition"
                >
                  <span className="text-lg font-semibold text-stone-900 text-left">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-700 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 py-4 bg-amber-50 border-t-2 border-stone-200">
                    <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100 to-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Still thinking it over?</h2>
          <p className="text-xl text-stone-600 mb-8">Take a look at our bestsellers or reach out for personalized size advice.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button 
            onClick={() => navigate("/tranding")}
            
            className="bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-800 transition shadow-lg">
              Explore Now
            </button> */}
            <button 
            onClick={() => navigate("/contact")}
            className="bg-amber-900 text-amber-100 border-2 border-amber-700 px-8 py-4  text-lg font-semibold hover:bg-amber-800 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
