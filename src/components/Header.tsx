// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'PRODUCTS', href: '/products' },
    // { name: 'WHOLESALE', href: '/wholesale' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const adminPhoneDisplay = '+91 99215 17752';
  const adminPhoneTel = '+919921517752'; 

  const isHome = location.pathname === '/';

  const headerWrapperClass = isHome
    ? 'absolute inset-x-0 top-0 z-50 bg-transparent'
    : 'relative bg-card-background shadow-lg border-b border-border-divider/10';

  // Link styles
  const desktopLinkBase =
    'px-4 py-2 text-[11px] font-bold transition-all duration-300 rounded-sm tracking-[0.2em] uppercase';
  
  const desktopLinkActive = 'text-accent border-b-2 border-accent';

  const desktopLinkInactive = 'text-primary-heading hover:text-accent hover:border-b-2 hover:border-accent border-b-2 border-transparent opacity-90 hover:opacity-100';

  return (
    <header className={headerWrapperClass}>
      <nav className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="transition-transform duration-500 hover:scale-105">
              <img
                className="h-16 w-auto ml-6"
                src="http://tartariatech.com/public/Logo-01.png"
                alt="DTK Footwear Logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${desktopLinkBase} ${
                  isActive(item.href) ? desktopLinkActive : desktopLinkInactive
                }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href={`tel:${adminPhoneTel}`}
              className="ml-8 inline-flex items-center gap-3 px-6 py-3 text-[10px] font-black rounded-sm tracking-[0.2em] bg-primary-button text-primary-heading hover:bg-button-hover transition-all duration-500 shadow-xl uppercase"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{adminPhoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-5 md:hidden">
            <a
              href={`tel:${adminPhoneTel}`}
              className="p-3 rounded-full bg-primary-button text-primary-heading shadow-lg"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              className="text-primary-heading p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-9 h-9 text-secondary-text" /> : <Menu className="w-9 h-9 text-primary-heading" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[60] bg-background transition-all duration-500">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="bg-card-background px-8 py-8 flex items-center justify-between">
                 <span className="text-secondary-text font-bold tracking-[0.3em] text-xs uppercase">Navigation</span>
                 <X className="w-9 h-9 text-primary-heading cursor-pointer" onClick={() => setIsMenuOpen(false)} />
              </div>

              <div className="flex-1 px-8 py-12 space-y-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-3xl font-serif tracking-tight transition-colors ${
                      isActive(item.href)
                        ? 'text-accent'
                        : 'text-primary-heading'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile call row */}
              <div className="p-8 border-t border-border-divider/30">
                <a
                  href={`tel:${adminPhoneTel}`}
                  className="flex items-center justify-center gap-4 py-5 w-full bg-primary-button text-primary-heading rounded-sm font-bold tracking-[0.2em] text-xs shadow-2xl uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span>Call {adminPhoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Quick Call (Mobile Only) */}
      <a
        href={`tel:${adminPhoneTel}`}
        className="fixed bottom-10 right-8 z-50 md:hidden flex items-center justify-center w-16 h-16 rounded-full shadow-2xl bg-primary-button text-primary-heading border border-accent/50"
        aria-label="Quick call"
      >
        <Phone className="w-7 h-7" />
      </a>
    </header>
  );
};

export default Header;