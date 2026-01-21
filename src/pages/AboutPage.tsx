import React from "react";
import {
  Heart,
  Globe,
  ShieldCheck,
  Star,
  History,
  Sparkles,
  Gift,
  PenSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  
  return (
    <div className="bg-background text-primary-body font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary-heading text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover "
        >
          {/* Replace the src below with your actual video file URL */}
          <source
            src="https://mediumaquamarine-quetzal-462306.hostingersite.com//f05892df31e16a189ab2b5afa0fa7d91.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 text-primary-heading">
            Divine  <span className="text-[#E67E22]">Artistry</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto italic text-secondary-text">
            Bridging the gap between the earthly and the divine through
            handcrafted devotion.
          </p>
        </div>
      </section>


      {/* Our Story Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary-heading mb-6 flex items-center gap-2">
              <History className="text-accent" /> Our{" "}
              <span className="text-[#E67E22]">Legacy</span>
            </h2>
            <p className="text-lg font-bold leading-relaxed mb-2 text-primary-heading">
              About Avyakta Art
            </p>
            <p className="text-lg leading-relaxed mb-4 text-secondary-text">
              Avyakt means that which is unseen, formless, and beyond words-the
              subtle, serene, divine essence from which every form takes birth.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-secondary-text">
              At Avyakt Art Studio, we give shape to this very Avyakt.
            </p>
            <p className="text-lg leading-relaxed text-secondary-text">
              Lord Mahavishnu is the cosmic consciousness pervading the entire
              universe. “Vishvaṁ viśati iti Vishnuḥ” - He who enters and
              pervades all existence. By His presence, life, movement, and
              consciousness arise in the world. This all-pervading, formless
              divinity is the essence we call Avyakt.
            </p>
          </div>
          <div className=" overflow-hidden shadow-2xl">
            <img
              src="https://tartariatech.com//public/Gemini_Generated_Image_7tzsay7tzsay7tzs.png?auto=format&fit=crop&q=80&w=800"
              alt="Murti Crafting Process"
            />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className=" py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center font-bold mb-16 text-primary-heading">
            Why Choose Our{" "}
            <span className="text-[#E67E22]">Devotional Art?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Star className="w-10 h-10 text-accent" />,
                title: "Premium Materials",
                desc: "We use only the finest Makrana marble, authentic bronze, and eco-friendly clay for our creations.",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-accent" />,
                title: "Master Artisans",
                desc: "Our murtis are hand-carved by 4th-generation sculptors whose ancestors decorated historic temples.",
              },
              {
                icon: <Globe className="w-10 h-10 text-accent" />,
                title: "Global Shipping",
                desc: "Custom-built wooden crates and secure handling ensure your deity reaches your home safely anywhere in the world.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-heading">
                  {value.title}
                </h3>
                <p className="text-secondary-text leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-primary-heading">
            Avyact Arts Services – Custom Art,{" "}
            <span className="text-[#E67E22]">Design & Creative Solutions </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: <Sparkles className="w-10 h-10 text-accent" />,
                title: "Spiritual Miniatures",
                desc: "Our spiritual miniatures beautifully capture divine forms, sacred moments, and meditative expressions, bringing peace and positivity into any space. Each piece is crafted with devotion and fine detailing, making it perfect for homes, temples, and spiritual gifting.",
              },
              {
                icon: <History className="w-10 h-10 text-accent" />,
                title: "Historical Miniatures",
                desc: "Inspired by iconic personalities, events, and royal heritage, our historical miniatures reflect timeless stories and cultural pride. These artworks preserve history in artistic form, making them ideal for collectors, institutions, and heritage enthusiasts.",
              },
              {
                icon: <Gift className="w-10 h-10 text-accent" />,
                title: "Corporate Gift Miniatures",
                desc: "Our corporate gift miniatures offer a unique blend of art and elegance, designed to leave a lasting impression. Thoughtfully crafted, they are ideal for corporate gifting, celebrations, and milestones, adding a meaningful and premium touch to professional relationships.",
              },
              {
                icon: <PenSquare className="w-10 h-10 text-accent" />,
                title: "Customised Miniatures",
                desc: "We create customised miniatures tailored to your vision, theme, or requirement. From personal memories to brand-specific concepts, each piece is uniquely designed to tell your story with precision, creativity, and artistic excellence.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card-background p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-heading">
                  {service.title}
                </h3>
                <p className="text-secondary-text leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <Heart className="w-16 h-16 text-secondary-accent mx-auto mb-6" />
        <h2 className="text-3xl font-serif mb-6 text-primary-heading">
          Our Philosophy
        </h2>
        <p className="text-xl text-secondary-text italic leading-relaxed">
          "We believe that a Murti is not just a piece of art, but a vessel for
          faith. Our mission is to provide every home with a sacred centerpiece
          that inspires peace, devotion, and positive energy."
        </p>
      </section>

     

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-serif mb-8 text-primary-heading">
          Bring the Divine Home Today
        </h2>
        <Link to="/contact" >
        <button  className="bg-primary-button text-primary-heading px-10 py-4 rounded-full text-lg font-bold hover:bg-button-hover transition-colors shadow-lg">
          Explore the Collection
        </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
