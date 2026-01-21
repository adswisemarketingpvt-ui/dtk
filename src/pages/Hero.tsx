import { ArrowRight, ShieldCheck } from "lucide-react";


export default function AvyaktaIdolHome() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#FDFCF8] font-[Inter]">
      {/* Light Theme & Maratha Aesthetic Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;700&display=swap');
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pushpa-varsha {
          from { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(110vh) translateX(50px) rotate(360deg); opacity: 0; }
        }
        @keyframes sun-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-fade-up { animation: fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.5s; }
        .delay-3 { animation-delay: 0.7s; }
        .petal {
          position: absolute;
          background: #FF9933;
          border-radius: 50% 0 50% 50%;
          opacity: 0;
          animation: pushpa-varsha linear infinite;
        }
      `,
        }}
      />

      {/* Background Layer: Light Sandstone & Petals */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFF5E6] via-[#FDFCF8] to-[#F7F3E9]" />

        {/* Animated Petals (Pushpa Varsha) */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="petal"
            style={{
              width: Math.random() * 8 + 6 + "px",
              height: Math.random() * 8 + 6 + "px",
              left: Math.random() * 100 + "%",
              top: "-10%",
              animationDuration: Math.random() * 8 + 7 + "s",
              animationDelay: Math.random() * 5 + "s",
              backgroundColor: i % 2 === 0 ? "#FF9933" : "#FFD700",
            }}
          />
        ))}

        {/* Soft Sun/Halo Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#FF9933]/5 rounded-full blur-[140px] animate-sun-glow" />

        {/* Subtle "Rajmudra" Style Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[10rem] sm:text-[15rem] lg:text-[20rem] font-bold font-[Cinzel] whitespace-nowrap">
            SHIVAJI
          </span>
        </div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 py-16 lg:py-0">
          {/* Left Content Column */}
          <div className="max-w-xl space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Heading */}
            <h2
              className="text-5xl sm:text-6xl md:text-7xl leading-[1.1] text-[#2C2C2C] opacity-0 animate-fade-up delay-1"
              style={{ fontFamily: "'playfair display', serif" }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-12 h-[2px] bg-[#E67E22]"></div>
                <span className="text-[#E67E22] text-xs md:text-sm uppercase">
                  Established • 2026 • Avyakta
                </span>
              </div>
              <span className="text-[#E67E22] font-bold block text-4xl sm:text-5xl md:text-6xl mb-2">
                Traditional Sacred 
              </span>
              <span className="font-bold ">Craft</span>
            </h2>

            {/* Description */}
            <p className="text-[#555555] text-base md:text-lg font-light tracking-wide max-w-md leading-relaxed opacity-0 animate-fade-up delay-2">
              Handcrafted murtis made with devotion, traditional skill, and
              premium finishing for homes, temples, and gifting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-4 opacity-0 animate-fade-up delay-3 justify-center lg:justify-start">
              <a
                href="/products"
                className="group relative inline-flex items-center gap-4 bg-[#2C2C2C] text-white px-8 py-4 sm:px-10 sm:py-5 text-sm font-bold tracking-widest transition-all duration-300 hover:bg-[#E67E22]"
              >
                <span className="relative z-10 uppercase">
                  View Masterpieces
                </span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
              </a>

              
              <button className="flex items-center gap-3 text-[#E67E22] font-bold group">
                <ShieldCheck className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span className="text-xs uppercase tracking-[0.2em] border-b-2 border-[#E67E22]/20">
                  Pure Ashtadhatu Craft
                </span>
              </button>
              
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center items-center relative order-first lg:order-last">
            {/* Ornate Background Elements */}
            <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] border-[1px] border-[#E67E22]/10 rounded-full" />
            <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] border-[1px] border-[#E67E22]/5 rounded-full animate-pulse" />

            {/* The Main Statue Image */}
            <img
              src="https://tartariatech.com//public/hero.png"
              alt="Maratha Divine Idol"
              className="relative z-10 w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[520px] drop-shadow-[-20px_30px_50px_rgba(0,0,0,0.1)] animate-float"
            />
          </div>
        </div>
      </div>

      {/* Side Branding - Saffron Vertical Text */}
      <div className="absolute left-8 bottom-12 hidden lg:block">
        <p className="text-[#E67E22] text-[11px] font-bold tracking-[0.6em] uppercase [writing-mode:vertical-lr] rotate-180">
          ॥ क्षत्रिय कुलावतंस ॥
        </p>
      </div>

      <div className="absolute right-8 bottom-12 hidden lg:block">
        <p className="text-[#2C2C2C]/30 text-[11px] tracking-[0.6em] uppercase [writing-mode:vertical-lr]">
          Shivaji Maharaj Legacy • 2026
        </p>
      </div>
    </div>
  );
}
