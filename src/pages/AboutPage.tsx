import React from 'react';
import { Heart, Globe, ShieldCheck, Star, Users, History } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-background text-primary-body font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary-heading text-white overflow-hidden">
        <img 
          src="https://i.pinimg.com/1200x/c0/a4/7a/c0a47aac651b602e2db89164dcadd952.jpg?auto=format&fit=crop&q=80&w=2000" 
          alt="Artisan sculpting" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 text-white">Divine Artistry</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto italic text-white">
            "Bridging the gap between the earthly and the divine through handcrafted devotion."
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary-heading mb-6 flex items-center gap-2">
              <History className="text-accent" /> Our Legacy
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-secondary-text">
              Founded over three decades ago, <span className="font-semibold text-primary-heading">[Brand Name]</span> began as a small workshop of passionate sculptors in the heart of India. What started as a labor of love has grown into a global destination for authentic, high-quality Murtis.
            </p>
            <p className="text-lg leading-relaxed text-secondary-text">
              We don't just sell statues; we preserve a 5,000-year-old tradition of Vedic iconography. Every curve, posture, and attribute is meticulously crafted according to the <span className="italic">Shilpa Shastras</span> (ancient arts of sculpting).
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://tartariatech.com//public/Gemini_Generated_Image_7tzsay7tzsay7tzs.png?auto=format&fit=crop&q=80&w=800" 
              alt="Murti Crafting Process" 
            />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-card-background py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-primary-heading">Why Choose Our Devotional Art?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Star className="w-10 h-10 text-accent" />,
                title: "Premium Materials",
                desc: "We use only the finest Makrana marble, authentic bronze, and eco-friendly clay for our creations."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-accent" />,
                title: "Master Artisans",
                desc: "Our murtis are hand-carved by 4th-generation sculptors whose ancestors decorated historic temples."
              },
              {
                icon: <Globe className="w-10 h-10 text-accent" />,
                title: "Global Shipping",
                desc: "Custom-built wooden crates and secure handling ensure your deity reaches your home safely anywhere in the world."
              }
            ].map((value, index) => (
              <div key={index} className="bg-background p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-heading">{value.title}</h3>
                <p className="text-secondary-text leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <Heart className="w-16 h-16 text-secondary-accent mx-auto mb-6" />
        <h2 className="text-3xl font-serif mb-6 text-primary-heading">Our Philosophy</h2>
        <p className="text-xl text-secondary-text italic leading-relaxed">
          "We believe that a Murti is not just a piece of art, but a vessel for faith. Our mission is to provide every home with a sacred centerpiece that inspires peace, devotion, and positive energy."
        </p>
      </section>

      {/* Impact/Stats Table */}
      <section className="py-20 bg-primary-heading text-background">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="border-b border-button-hover">
                <th className="py-6 px-4 text-2xl font-serif text-background">10,000+</th>
                <th className="py-6 px-4 text-2xl font-serif text-background">50+</th>
                <th className="py-6 px-4 text-2xl font-serif text-background">100%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 text-background uppercase tracking-widest text-sm">Homes Blessed</td>
                <td className="py-4 text-background uppercase tracking-widest text-sm">Countries Served</td>
                <td className="py-4 text-background uppercase tracking-widest text-sm">Handcrafted Quality</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-serif mb-8 text-primary-heading">Bring the Divine Home Today</h2>
        <button className="bg-primary-button text-primary-heading px-10 py-4 rounded-full text-lg font-bold hover:bg-button-hover transition-colors shadow-lg">
          Explore the Collection
        </button>
      </section>
    </div>
  );
};

export default AboutPage;