// src/pages/AboutPage.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, ShieldCheck, Heart, Sparkles, Trophy, Award, Users, Zap, Globe, MapPin, Footprints } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "100% Made in India",
      description: "From leather clusters in Agra to finishing units in Kanpur, every pair is shaped by skilled hands that understand balance and fit.",
      color: "bg-[#B17457]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Artisanal Integrity",
      description: "We partner directly with experienced Indian artisans who have spent years perfecting leatherwork and shoemaking.",
      color: "bg-[#D8D2C2]"
    },
    {
      icon: <Footprints className="w-8 h-8" />,
      title: "Built for Endurance",
      description: "Strong soles designed for Indian roads and genuine leather uppers that remain breathable through long hours.",
      color: "bg-[#4A4947]"
    }
  ];

  const stats = [
    { number: "2025", label: "Founded", icon: <Trophy className="w-6 h-6" /> },
    { number: "100%", label: "Indian Sourced", icon: <MapPin className="w-6 h-6" /> },
    { number: "Zero", label: "Rushed Assembly", icon: <Zap className="w-6 h-6" /> },
    { number: "Premium", label: "Handmade Quality", icon: <Award className="w-6 h-6" /> }
  ];

  const timeline = [
    { 
      year: "The Spark", 
      title: "The Simple Frustration", 
      description: "Identifying that formal shoes either looked good but wore out quickly, or came with inflated prices that didn't justify quality." 
    },
    { 
      year: "The Path", 
      title: "Craftsmanship First", 
      description: "Choosing artisan partnerships over mass-production. Every pair is shaped by hands that understand balance and durability." 
    },
    { 
      year: "2025", 
      title: "The Formales Launch", 
      description: "Born to solve the lack of well-made, fairly priced formal shoes that actually last. Proudly Indian." 
    }
  ];

  return (
    <div id='about' className="min-h-screen bg-[#FAF7F0] overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-28">
        <div 
          className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <span className="text-[#B17457] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">About The Formales</span>
          <h1 className="text-5xl md:text-8xl font-serif text-black mb-8 tracking-tight">
            Refined in design. <span className="text-[#B17457] italic">Reliable</span> in wear.
          </h1>
          <p className="text-lg text-[#4A4947] max-w-2xl mx-auto leading-loose font-light uppercase tracking-widest">
            Premium formal shoes for men, designed and manufactured entirely in India.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-32">
          {/* Mission Card */}
          <div className={`group bg-white p-12 rounded-sm shadow-sm transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} border-l-4 border-[#B17457]`}>
            <div className="w-16 h-16 bg-[#FAF7F0] flex items-center justify-center text-[#B17457] mb-8 group-hover:bg-[#B17457] group-hover:text-white transition-all duration-500">
              <Target size={28} />
            </div>
            <h2 className="text-3xl font-serif text-black mb-6">Our Belief</h2>
            <p className="text-[#4A4947] text-md leading-relaxed font-light">
              We believe Indian craftsmanship, when given the right platform, can match global standards in quality, comfort, and finish. We solve the problem of poorly made footwear through fair pricing and lasting quality.
            </p>
          </div>

          {/* Vision Card */}
          <div className={`group bg-[#4A4947] p-12 rounded-sm shadow-xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} border-l-4 border-[#D8D2C2]`}>
            <div className="w-16 h-16 bg-white/5 flex items-center justify-center text-[#D8D2C2] mb-8 group-hover:bg-[#D8D2C2] group-hover:text-[#4A4947] transition-all duration-500">
              <Eye size={28} />
            </div>
            <h2 className="text-3xl font-serif text-white mb-6">Our Foundation</h2>
            <p className="text-[#D8D2C2]/80 text-md leading-relaxed font-light">
              "Made in India" is our foundation, not a marketing phrase. By keeping manufacturing local, we maintain complete control over craftsmanship and support long-term livelihoods for artisan communities.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-black mb-4">Durability & Comfort</h2>
            <div className="w-16 h-0.5 bg-[#B17457] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="bg-white p-10 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-700 text-center group relative overflow-hidden border border-[#D8D2C2]/20"
                onMouseEnter={() => setHoveredValue(i)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`text-[#B17457] mb-6 flex justify-center transition-all duration-700 ${hoveredValue === i ? 'scale-110' : 'scale-100'}`}>
                  {v.icon}
                </div>
                <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-[0.2em]">{v.title}</h3>
                <p className="text-[#4A4947] text-sm leading-relaxed font-light">{v.description}</p>
                <div className={`mt-8 h-0.5 bg-[#B17457] transition-all duration-700 ${hoveredValue === i ? 'w-full' : 'w-0'} mx-auto`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="my-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white py-12 px-6 text-center border border-[#FAF7F0]"
              >
                <div className="text-[#B17457] flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-serif text-black mb-2">{stat.number}</div>
                <div className="text-[10px] text-[#4A4947] uppercase tracking-[0.3em] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="my-32">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif text-black mb-4 uppercase tracking-widest">How The Formales Began</h2>
            <div className="w-16 h-0.5 bg-[#B17457] mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#D8D2C2]"></div>
            
            {timeline.map((item, i) => (
              <div 
                key={i} 
                className={`relative mb-20 ${i % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} max-w-2xl group`}
              >
                <div className={`bg-white p-10 shadow-sm border border-[#D8D2C2]/30 ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <span className="text-[#B17457] font-serif italic text-2xl mb-4 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[#4A4947] text-sm font-light leading-relaxed">{item.description}</p>
                </div>
                <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#B17457] rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Professionals Choose Us Section */}
        <div className="my-32 bg-[#4A4947] rounded-sm p-16 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="text-center mb-16">
              <Globe className="w-10 h-10 mx-auto mb-6 text-[#B17457]" />
              <h2 className="text-4xl font-serif mb-6 uppercase tracking-widest">Why Professionals Choose The Formales</h2>
              <p className="text-[#D8D2C2] text-xs tracking-[0.2em] uppercase">Practical Footwear for Global Sensibilities</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Indian Foot Structure", desc: "Fits specifically designed for Indian feet, ensuring comfort during modern workdays and long hours." },
                { title: "Transparent Pricing", desc: "Honest, fair pricing without unnecessary brand markups or middleman costs." },
                { title: "Natural Materials", desc: "Genuine leather uppers that age naturally and remain breathable, unlike fast-fashion alternatives." }
              ].map((reason, i) => (
                <div key={i} className="text-center border-t border-white/10 pt-8">
                    <h4 className="text-sm font-bold mb-4 text-[#B17457] uppercase tracking-[0.2em]">{reason.title}</h4>
                    <p className="text-[#D8D2C2] text-sm font-light leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center py-20 border-t border-[#D8D2C2]/30">
            <h2 className="text-4xl font-serif text-black mb-8">Ready to step into confidence?</h2>
            <p className="text-[#4A4947] mb-12 max-w-lg mx-auto font-light">
              Every purchase strengthens Indian manufacturing and preserves traditional skills. Step into footwear built with local skill.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#B17457] transition-all">
                Shop The Collection
              </button>
              <button className="px-12 py-5 border border-black text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                Our Artisans
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}