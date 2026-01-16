import { ArrowRight } from "lucide-react";

export default function AvyaktaIdolHome() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background font-[Inter]">
      {/* Google Fonts & Custom Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .animate-fade-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
      `}} />

      {/* SEO Heading */}
      <div className="sr-only">
        <h1>Avyakta Art Studio - Divine Idols & Sacred Sculptures</h1>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Left Content Column */}
          <div className="max-w-xl space-y-6 mt-20">
            {/* Subtitle */}
            <div className="flex items-center gap-3 opacity-0 animate-fade-up">
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="text-accent text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
                Avyakta Art Studio
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-5xl md:text-6xl lg:text-7xl leading-tight text-primary-heading opacity-0 animate-fade-up delay-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="italic font-semibold text-accent">
                Sculpting the
              </span>
              <br />
              <span className="not-italic font-light tracking-tight">
                 Unmanifest Divine
              </span>
            </h2>

            {/* Description */}
            <p className="text-secondary-text text-base md:text-lg font-light tracking-wide max-w-md leading-relaxed opacity-0 animate-fade-up delay-2">
              Where ancient tradition meets contemporary soul. Discover hand-carved masterpieces that bring sacred presence into your space.
            </p>

            {/* CTA */}
            <div className="pt-6 opacity-0 animate-fade-up delay-3">
              <a
                href="/products"
                className="group inline-flex items-center gap-6 border border-primary-heading bg-primary-heading text-white hover:bg-accent hover:border-accent px-8 py-4 text-sm font-semibold tracking-[0.2em] transition-all duration-500"
              >
                View Collection
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Decorative background circle */}
            <div className="absolute w-[500px] h-[500px] bg-primary-button/20 rounded-full blur-3xl opacity-50" />
            
            <img
              src="https://tartariatech.com//public/hero.png"
              alt="Divine Idol Masterpiece"
              className="relative z-10 w-full max-w-[500px] drop-shadow-2xl animate-float"
            />
          </div>

        </div>
      </div>

      {/* Side Branding */}
      <div className="absolute right-10 bottom-10 hidden lg:block opacity-60">
        <p className="text-muted-text text-[10px] tracking-[0.5em] uppercase [writing-mode:vertical-lr]">
          The Sacred Edit • 2026
        </p>
      </div>

    </div>
  );
}