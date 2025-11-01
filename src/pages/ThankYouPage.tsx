import React, { useState, useEffect } from 'react';
import { CheckCircle, Home, Sparkles, Heart, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const [confetti, setConfetti] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate confetti on mount
  useEffect(() => {
    const confettiArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      color: ['#78350f', '#92400e', '#b45309', '#d97706', '#f59e0b'][Math.floor(Math.random() * 5)]
    }));
    setConfetti(confettiArray);

    // Generate sparkles periodically
    const sparkleInterval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        left: Math.random() * 100,
        top: Math.random() * 100
      };
      setSparkles(prev => [...prev, newSparkle]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 1500);
    }, 400);

    return () => clearInterval(sparkleInterval);
  }, []);

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex flex-col items-center justify-center text-center px-6 overflow-hidden relative">
      {/* Confetti */}
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full animate-bounce"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            animation: `fall ${piece.duration}s ease-in ${piece.delay}s`
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute opacity-0"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animation: 'sparkle 1.5s ease-out'
          }}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-2xl">
        {/* Success Icon with Pulse */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-40 animate-pulse" />
          <div className="relative bg-white rounded-full p-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <CheckCircle className="w-20 h-20 text-green-600 animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
        </div>

        {/* Animated Heading */}
        <h1 className="text-6xl font-serif font-bold text-amber-900 mb-4 animate-fade-in">
          Thank You!
        </h1>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-amber-400 animate-expand-right" />
          <Heart className="w-5 h-5 text-amber-600 animate-pulse" />
          <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-amber-400 animate-expand-left" />
        </div>

        {/* Message */}
        <p className="text-xl text-amber-800 mb-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Your message has been successfully sent!
        </p>
        <p className="text-lg text-amber-700 mb-10 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          Our team will get back to you shortly. We appreciate your interest.
        </p>

        {/* Interactive Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-900 to-amber-800 text-white py-4 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 group animate-slide-up"
          style={{ animationDelay: '0.7s' }}
        >
          <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          Back to Home
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </a>

        {/* Floating Shapes */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-900 to-amber-800 text-white p-4 rounded-full shadow-2xl hover:shadow-amber-900/50 hover:scale-110 transform transition-all duration-300 z-50 group animate-slide-up"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      )}

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
          100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand-right {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        @keyframes expand-left {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }

        .animate-expand-right {
          animation: expand-right 0.8s ease-out 0.5s backwards;
        }

        .animate-expand-left {
          animation: expand-left 0.8s ease-out 0.5s backwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ThankYouPage;