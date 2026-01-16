import React, { useEffect, useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, useAnimation, useAnimationFrame } from 'framer-motion';

const testimonials = [
  { name: "Rajesh K.", location: "Mumbai", text: "The divine energy in the Ganpati idol we received is palpable. The fine detailing and the vibrant colors make it truly stand out.", rating: 5 },
  { name: "Anjali S.", location: "Pune", text: "Finding a studio that balances eco-friendly clay with such exquisite beauty is rare. Our custom Krishna idol is a masterpiece.", rating: 5 },
  { name: "Suresh V.", location: "Thane", text: "The proportions are perfect, and the delivery was exactly on time. Highly recommended for their professionalism.", rating: 5 },
  { name: "Meera P.", location: "Nashik", text: "It’s not just an idol; it’s a symbol of peace and positivity. Every guest at our ceremony asked about it.", rating: 5 },
  // Duplicate items for a seamless loop
  { name: "Rajesh K.", location: "Mumbai", text: "The divine energy in the Ganpati idol we received is palpable. The fine detailing and the vibrant colors make it truly stand out.", rating: 5 },
  { name: "Anjali S.", location: "Pune", text: "Finding a studio that balances eco-friendly clay with such exquisite beauty is rare. Our custom Krishna idol is a masterpiece.", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Devotee Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-heading">
            Trusted by <span className="text-accent italic">Devotees</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Scrolling Container */}
        <div className="relative flex overflow-hidden group">
          <motion.div 
            className="flex gap-6"
            animate={{
              x: ['0%', '-50%'], // Moves halfway (since we duplicated the list)
            }}
            transition={{
              ease: "linear",
              duration: 25, // Adjust speed here (higher = slower)
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 60 } }} // Optional: Slows down on hover
          >
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[350px] bg-card-background p-8 rounded-2xl shadow-sm border border-border-divider relative"
              >
                <div className="absolute top-4 right-6 text-border-divider">
                  <Quote size={40} fill="currentColor" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary-button text-primary-button" />
                  ))}
                </div>

                <p className="text-secondary-text font-light leading-relaxed mb-6 italic min-h-[100px]">
                  "{item.text}"
                </p>

                <div className="flex flex-col border-t border-border-divider pt-4">
                  <span className="font-bold text-primary-heading text-sm tracking-wide">{item.name}</span>
                  <span className="text-accent text-xs uppercase tracking-widest font-medium">{item.location}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;