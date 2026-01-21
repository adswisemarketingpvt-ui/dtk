import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  { 
    name: "Vinayak Deshmukh", 
    location: "Pune", 
    text: "अत्यंत देखणी आणि सात्विक मूर्ती! अव्यक्त आर्ट्सने बनवलेली ही मूर्ती आमच्या देवघराची शोभा वाढवतेय. फिनिशिंग अप्रतिम आहे.", 
    rating: 5 
  },
  { 
    name: "Priyanka Sharma", 
    location: "Indore", 
    text: "I ordered a custom Krishna idol for gifting. The premium finishing and the devotion visible in the eyes of the murti is soul-stirring.", 
    rating: 5 
  },
  { 
    name: "Amit Patil", 
    location: "Kolhapur", 
    text: "शिवरायांची ही मूर्ती बघून अंगावर शहारे येतात. मूर्तीमधील बारकावे आणि पारंपारिक कौशल्य खरोखरच कौतुकास्पद आहे. जय शिवराय!", 
    rating: 5 
  },
  { 
    name: "Sandeep Kulkarni", 
    location: "Mumbai", 
    text: "Authentic craftsmanship. It's rare to find such traditional skills preserved so well. Perfect for our new home temple.", 
    rating: 5 
  },
  { 
    name: "Ananya Iyer", 
    location: "Chennai", 
    text: "The idol was packed with extreme care and reached me in perfect condition. The aura of the sculpture is truly divine.", 
    rating: 5 
  },
  { 
    name: "Rahul More", 
    location: "Satara", 
    text: "मूर्ती बघताच मन प्रसन्न झाले. मातीचा वापर आणि नैसर्गिक रंगकाम यामुळे मूर्ती जिवंत वाटते. धन्यवाद अव्यक्त टीम!", 
    rating: 5 
  },
  // Duplicated for seamless loop
  { 
    name: "Vinayak Deshmukh", 
    location: "Pune", 
    text: "अत्यंत देखणी आणि सात्विक मूर्ती! अव्यक्त आर्ट्सने बनवलेली ही मूर्ती आमच्या देवघराची शोभा वाढवतेय. फिनिशिंग अप्रतिम आहे.", 
    rating: 5 
  },
  { 
    name: "Priyanka Sharma", 
    location: "Indore", 
    text: "I ordered a custom Krishna idol for gifting. The premium finishing and the devotion visible in the eyes of the murti is soul-stirring.", 
    rating: 5 
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-[#FDFCF8] overflow-hidden border-t border-[#E67E22]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <span className="text-[#E67E22] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block font-[Cinzel]">
            Anubhav • Devotee Stories
          </span>
          <h2 className="text-4xl md:text-5xl text-[#2C2C2C] font-serif ">
            Trusted by <span className="text-[#E67E22] ">the Faithful</span>
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6">
             <div className="w-12 h-[1px] bg-[#E67E22]/30" />
             <div className="w-2 h-2 rotate-45 bg-[#E67E22]" />
             <div className="w-12 h-[1px] bg-[#E67E22]/30" />
          </div>
        </div>

        {/* Marquee Scrolling Container */}
        <div className="relative flex overflow-hidden group">
          {/* Subtle Side Fades for elegant transition */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FDFCF8] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FDFCF8] to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex gap-8"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              ease: "linear",
              duration: 35, // Smooth slow drift
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 80 } }} // Slows on hover
          >
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white p-10 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#E67E22]/10 relative group/card hover:border-[#E67E22]/40 transition-colors duration-500"
              >
                {/* Decoration: Subtle Background Icon */}
                <div className="absolute bottom-6 right-6 text-[#E67E22]/5 group-hover/card:text-[#E67E22]/10 transition-colors">
                  <Quote size={80} fill="currentColor" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#E67E22] text-[#E67E22]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#555555] font-light leading-relaxed mb-8 italic text-sm md:text-base min-h-[100px] relative z-10">
                  "{item.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col border-t border-[#F5F5F5] pt-6 relative z-10">
                  <span className="font-bold text-[#2C2C2C] text-sm tracking-widest uppercase font-[Cinzel]">{item.name}</span>
                  <span className="text-[#E67E22] text-[10px] uppercase tracking-[0.2em] font-semibold mt-1">{item.location}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Decorative Vertical Text */}
        <div className="mt-20 flex justify-center opacity-30">
             <p className="text-[10px] tracking-[0.8em] font-[Cinzel] text-[#2C2C2C] uppercase">Handcrafted in Bharat</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;