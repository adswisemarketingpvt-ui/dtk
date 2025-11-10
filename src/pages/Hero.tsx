// import React, { useEffect, useState } from "react";

// const mainShoeImage =
//   "https://www.dtkfootwear.com//White%20Floral%20Happy%20Dussehra%20Poster%20(2).png";

  

// export default function Hero() {
//   const [loaded, setLoaded] = useState(false);
//   const [errored, setErrored] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     try {
//       const link = document.createElement("link");
//       link.rel = "preload";
//       link.as = "image";
//       link.href = mainShoeImage;
//       link.setAttribute("importance", "high");
//       document.head.appendChild(link);
//       return () => {
//         try {
//           document.head.removeChild(link);
//         } catch (e) {}
//       };
//     } catch (e) {}
//   }, []);

//   // Generate floating particles
//   useEffect(() => {
//     const particleArray = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       top: Math.random() * 100,
//       size: Math.random() * 4 + 2,
//       duration: Math.random() * 3 + 2,
//       delay: Math.random() * 2,
//     }));
//     setParticles(particleArray);
//   }, []);

//   // Track mouse movement for parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const handleExploreClick = () => {
//     const target = document.getElementById("trending");
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       console.warn(
//         'Features section not found: add id="trending" to the target element.'
//       );
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white font-sans flex flex-col items-center justify-start relative overflow-hidden">

      
//       {/* Animated background particles */}
//       {particles.map((particle) => (
//         <div
//           key={particle.id}
//           className="absolute rounded-full bg-amber-300 opacity-20"
//           style={{
//             left: `${particle.left}%`,
//             top: `${particle.top}%`,
//             width: `${particle.size}px`,
//             height: `${particle.size}px`,
//             animation: `float ${particle.duration}s ease-in-out infinite`,
//             animationDelay: `${particle.delay}s`,
//           }}
//         />
//       ))}

//       {/* Animated gradient orbs */}
//       <div
//         className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30 animate-pulse-slow"
//         style={{
//           transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
//           transition: "transform 0.3s ease-out",
//         }}
//       />
//       <div
//         className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl opacity-20 animate-pulse-slower"
//         style={{
//           transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
//           transition: "transform 0.3s ease-out",
//         }}
//       />

//       <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 mb-0 pb-0 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-20">
//           {/* Image Section */}
//           <div className="flex justify-center items-center order-1 md:order-2 w-full">
//             <div
//               className="relative w-full max-w-4xl"
//               onMouseEnter={() => setIsHovering(true)}
//               onMouseLeave={() => setIsHovering(false)}
//             >
//               {/* Animated glow effect */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg blur-2xl transition-opacity duration-500 ${
//                   isHovering ? "opacity-40" : "opacity-20"
//                 }`}
//                 style={{
//                   transform: `scale(${isHovering ? 1.1 : 1})`,
//                   transition: "all 0.5s ease-out",
//                 }}
//               />

//               <div
//                 aria-hidden
//                 className="overflow-hidden w-full transition-colors duration-300 relative"
//                 style={{ minHeight: "340px" }}
//               >
//                 {/* Spinner */}
//                 <div
//                   className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
//                     loaded ? "opacity-0 pointer-events-none" : "opacity-100"
//                   }`}
//                 >
//                   <svg
//                     className="animate-spin h-10 w-10 text-amber-900"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                     ></path>
//                   </svg>
//                 </div>

//                 {/* Image with hover effect */}
//                 <img
//                   src={mainShoeImage}
//                   alt="Featured athletic shoe"
//                   loading="eager"
//                   decoding="async"
//                   fetchpriority="high"
//                   width={1200}
//                   height={800}
//                   onLoad={() => setLoaded(true)}
//                   onError={(e) => {
//                     setErrored(true);
//                     e.currentTarget.src =
//                       "https://placehold.co/600x600/CCCCCC/FFFFFF?text=Image+Not+Found";
//                     setLoaded(true);
//                   }}
//                   className={`w-full h-auto object-contain max-h-[80vh] rounded-lg transition-all duration-700 ${
//                     loaded ? "opacity-100" : "opacity-0"
//                   }`}
//                   style={{
//                     transform: `scale(${isHovering ? 1.05 : 1}) translate(${
//                       mousePosition.x * 0.5
//                     }px, ${mousePosition.y * 0.5}px)`,
//                     transition: "transform 0.3s ease-out",
//                   }}
//                 />
//               </div>

//               {/* Decorative animated dots */}
//               <div className="absolute -top-4 -right-4 w-20 h-20 opacity-30">
//                 <div className="grid grid-cols-4 gap-2">
//                   {[...Array(16)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"
//                       style={{ animationDelay: `${i * 0.1}s` }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Text Section */}
//           <div className="text-center md:text-left order-2 md:order-1">
          
            
//             <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 animate-fade-in-up">
//               Handcrafted Leather Shoes | Best Leather

  
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-900 to-orange-800 animate-gradient">
//               Shoes in India
//               </span>
//             </h1>

//             <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 animate-fade-in-up-delay">
//               Discover the true art of craftsmanship at DTK Footwear, home of the best leather shoes for discerning professionals. Founded in India, DTK Footwear celebrates our rich heritage by offering handcrafted shoes made entirely from original leather. We are proud to be recognized as one of the best shoe brands in India, delivering unmatched quality and style without importing a single pair. Each pair of leather shoes is carefully crafted in Pune by skilled artisans who pay close attention to detail and design. 


//             </p>

//             {/* Feature badges */}
//             <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8 animate-fade-in-up-delay-2">
//               {["Premium Quality", "Handcrafted", "100% Leather"].map(
//                 (feature, idx) => (
//                   <div
//                     key={idx}
//                     className="px-4 py-2 bg-white border-2 border-amber-200 rounded-full text-sm font-medium text-amber-900 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300 cursor-default hover:scale-105"
//                     style={{ animationDelay: `${idx * 0.1}s` }}
//                   >
//                     {feature}
//                   </div>
//                 )
//               )}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delay-3">
//               <button
//                 type="button"
//                 onClick={handleExploreClick}
//                 className="group relative bg-gradient-to-r from-amber-900 to-amber-800 text-white font-semibold py-4 px-8 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none rounded-lg overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   Explore Styles
//                   <svg
//                     className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slide-down {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes gradient {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out;
//         }

//         .animate-fade-in-up-delay {
//           animation: fade-in-up 0.8s ease-out 0.2s backwards;
//         }

//         .animate-fade-in-up-delay-2 {
//           animation: fade-in-up 0.8s ease-out 0.4s backwards;
//         }

//         .animate-fade-in-up-delay-3 {
//           animation: fade-in-up 0.8s ease-out 0.6s backwards;
//         }

//         .animate-slide-down {
//           animation: slide-down 0.6s ease-out;
//         }

//         .animate-gradient {
//           background-size: 200% auto;
//           animation: gradient 3s ease infinite;
//         }

//         .animate-pulse-slow {
//           animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }

//         .animate-pulse-slower {
//           animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }

//         @keyframes pulse {
//           0%,
//           100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.2;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



// // import React, { useEffect, useState } from "react";

// // // Diwali-themed Hero component with festive styling
// // const mainShoeImage =
// //   "https://www.dtkfootwear.com//White%20Floral%20Happy%20Dussehra%20Poster%20(2).png";

// // export default function Hero() {
// //   const [loaded, setLoaded] = useState(false);
// //   const [errored, setErrored] = useState(false);

// //   useEffect(() => {
// //     try {
// //       const link = document.createElement("link");
// //       link.rel = "preload";
// //       link.as = "image";
// //       link.href = mainShoeImage;
// //       link.setAttribute("importance", "high");
// //       document.head.appendChild(link);
// //       return () => {
// //         try {
// //           document.head.removeChild(link);
// //         } catch (e) {}
// //       };
// //     } catch (e) {}
// //   }, []);

// //   const handleExploreClick = () => {
// //     const target = document.getElementById("trending");
// //     if (target) {
// //       target.scrollIntoView({ behavior: "smooth", block: "start" });
// //     }
// //   };

// //   return (
// //     <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 font-sans flex flex-col items-center justify-start relative overflow-hidden">
// //       {/* Diwali decorative elements */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         {/* Floating diyas */}
// //         <div className="absolute top-10 left-10 animate-float">
// //           <div className="text-6xl opacity-20">🪔</div>
// //         </div>
// //         <div className="absolute top-32 right-20 animate-float-delayed">
// //           <div className="text-5xl opacity-15">🪔</div>
// //         </div>
// //         <div className="absolute bottom-20 left-1/4 animate-float">
// //           <div className="text-4xl opacity-10">✨</div>
// //         </div>
// //         <div className="absolute top-1/3 right-10 animate-float-delayed">
// //           <div className="text-5xl opacity-15">✨</div>
// //         </div>
        
// //         {/* Rangoli pattern corners */}
// //         <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
// //           <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600">
// //             <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.3"/>
// //             <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.5"/>
// //             <circle cx="50" cy="50" r="10" fill="currentColor"/>
// //           </svg>
// //         </div>
// //         <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
// //           <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600">
// //             <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.3"/>
// //             <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.5"/>
// //             <circle cx="50" cy="50" r="10" fill="currentColor"/>
// //           </svg>
// //         </div>
// //       </div>

// //       {/* Diwali Banner */}
// //       <div className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 py-3 text-center relative overflow-hidden">
// //         <div className="absolute inset-0 opacity-20">
// //           <div className="flex justify-around text-3xl animate-pulse">
// //             <span>🪔</span><span>✨</span><span>🪔</span><span>✨</span><span>🪔</span>
// //           </div>
// //         </div>
// //         <p className="text-white font-bold text-lg relative z-10">
// //           🎆 Diwali Special Sale - Up to 20% OFF! 🎆
// //         </p>
// //       </div>

// //       <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 mb-0 pb-0 relative z-10">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-20">
// //           {/* Image Section */}
// //           <div className="flex justify-center items-center order-1 md:order-2 w-full">
// //             <div className="relative w-full max-w-4xl">
// //               {/* Festive glow effect */}
// //               <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-lg blur-3xl opacity-30 animate-pulse"></div>
              
// //               <div
// //                 aria-hidden
// //                 className="overflow-hidden w-full transition-colors duration-300 relative"
// //                 style={{ minHeight: "340px" }}
// //               >
// //                 <div
// //                   className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
// //                     loaded ? "opacity-0 pointer-events-none" : "opacity-100"
// //                   }`}
// //                 >
// //                   <svg
// //                     className="animate-spin h-10 w-10 text-orange-600"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <circle
// //                       className="opacity-25"
// //                       cx="12"
// //                       cy="12"
// //                       r="10"
// //                       stroke="currentColor"
// //                       strokeWidth="4"
// //                     ></circle>
// //                     <path
// //                       className="opacity-75"
// //                       fill="currentColor"
// //                       d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
// //                     ></path>
// //                   </svg>
// //                 </div>

// //                 <img
// //                   src={mainShoeImage}
// //                   alt="Featured Diwali footwear collection"
// //                   loading="eager"
// //                   decoding="async"
// //                   fetchpriority="high"
// //                   width={1200}
// //                   height={800}
// //                   onLoad={() => setLoaded(true)}
// //                   onError={(e) => {
// //                     setErrored(true);
// //                     e.currentTarget.src =
// //                       "https://placehold.co/600x600/CCCCCC/FFFFFF?text=Image+Not+Found";
// //                     setLoaded(true);
// //                   }}
// //                   className={`w-full h-auto object-contain max-h-[80vh] rounded-lg transition-opacity duration-700 ${
// //                     loaded ? "opacity-100" : "opacity-0"
// //                   }`}
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Text Section */}
// //           <div className="text-center md:text-left order-2 md:order-1">
// //             {/* Diwali Greeting Badge */}
// //             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full mb-4 border-2 border-orange-300">
// //               <span className="text-2xl">🪔</span>
// //               <span className="text-orange-700 font-bold">Shubh Diwali!</span>
// //               <span className="text-2xl">✨</span>
// //             </div>

// //             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
// //               Classic Shoes,
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-600"> Festive Style</span>
// //             </h1>
// //             <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
// //               Celebrate this Diwali with DTK Footwear's exclusive collection. Step into the festival of lights with elegance, comfort, and traditional charm. ✨
// //             </p>
            
// //             {/* Diwali Offer Badge */}
// //             <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg inline-block mb-6 shadow-lg">
// //               <p className="font-bold text-xl">🎉 Special Diwali Offers 🎉</p>
// //               <p className="text-sm">Limited Time Only!</p>
// //             </div>

// //             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
// //               <button
// //                 type="button"
// //                 onClick={handleExploreClick}
// //                 className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-3 px-8 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none rounded-full hover:shadow-xl"
// //               >
// //                 🪔 Explore Diwali Collection
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </main>

// //       <style>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-20px); }
// //         }
// //         @keyframes float-delayed {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-15px); }
// //         }
// //         .animate-float {
// //           animation: float 3s ease-in-out infinite;
// //         }
// //         .animate-float-delayed {
// //           animation: float-delayed 4s ease-in-out infinite;
// //           animation-delay: 1s;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DTKFootwearHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=1920&q=90",
      title: "Handcrafted Leather Shoes",
      subtitle: "DTK Footwear - Best Leather Shoes in India",
      description: "Discover the true art of craftsmanship"
    },
    {
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=1920&q=90",
      title: "100% Original Leather",
      subtitle: "Crafted with Passion in Pune",
      description: "Each pair tells a story of excellence"
    },
    {
      image: "https://www.dtkfootwear.com/slide%203.png?w=1920&q=90",
      title: "For Discerning Professionals",
      subtitle: "Best Shoe Brand in India",
      description: "Unmatched quality and timeless style"
    },
    {
      image: "https://www.dtkfootwear.com/slide4.png?w=1920&q=90",
      title: "Artisan Excellence",
      subtitle: "Skilled Craftsmen, Perfect Details",
      description: "Every stitch reflects our dedication"
    },
    {
      image: "https://www.dtkfootwear.com/slide5.png?w=1920&q=90",
      title: "Modern Meets Traditional",
      subtitle: "Contemporary Design, Classic Elegance",
      description: "The finest leather shoes made in India"
    }
  ];

  // Auto Slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1 className='mt-5'>Handcrafted Leather Shoes | DTK Footwear - Best Leather Shoes in India</h1>
        <p>
          Discover the true art of craftsmanship at DTK Footwear, home of the best leather shoes for discerning professionals. 
          Founded in India, DTK Footwear celebrates our heritage by offering handcrafted shoes made entirely from original leather. 
          Every stitch reflects our passion and dedication, ensuring exceptional quality and style.
        </p>
      </div>

      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={slide.image}
                alt={`${slide.title} - DTK Footwear handcrafted leather shoes`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl space-y-4 sm:space-y-6">
                  {/* Title */}
                  <h2 
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 delay-500 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p 
                    className={`text-xl sm:text-2xl md:text-3xl text-amber-400 font-semibold transition-all duration-700 delay-700 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p 
                    className={`text-base sm:text-lg md:text-xl text-white/90 max-w-2xl transition-all duration-700 delay-900 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  {/* <div 
                    className={`pt-4 sm:pt-6 transition-all duration-700 delay-1000 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <a 
                      href="#collection"
                      className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg text-white transform hover:scale-105 transition-all shadow-2xl shadow-amber-500/30"
                    >
                      <span>Shop the Collection</span>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div> */}

                  {/* Extra Info - First Slide Only */}
                  {index === 0 && (
                    <div 
                      className={`pt-6 sm:pt-8 space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80 max-w-2xl transition-all duration-700 delay-1200 ${
                        index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <p>
                        At <strong className="text-amber-400">DTK Footwear</strong>, we are home of the best leather shoes for discerning professionals. 
                        Each pair is carefully crafted in <strong className="text-white">Pune</strong> by skilled artisans who pay close attention to detail and design.
                      </p>
                      <p>
                        Every stitch and finish reflects our passion and dedication, ensuring exceptional quality and style. 
                        We stay in tune with modern trends while honoring the timeless elegance of classic footwear.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-40 p-2 sm:p-3 md:p-4 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white group-hover:text-amber-400 transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 p-2 sm:p-3 md:p-4 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white group-hover:text-amber-400 transition-colors" />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 sm:w-12 h-2 sm:h-2.5 bg-amber-500' 
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
