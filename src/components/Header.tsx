import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'SHOES', href: '/' },
    { name: 'WHOLESALE', href: '/accessories' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Admin phone (tel: link)
  const adminPhoneDisplay = '+91 97302 66648';
  const adminPhoneTel = '+919730266648'; // no spaces for tel:

  return (
    <header className="bg-[#2e0e02] shadow-sm border-b border-gray-100 relative">
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div>
              <img
                className="h-12 w-32 pl-5"
                src="https://www.dtkfootwear.com/logo.png"
                alt="DTK Footwear Logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-amber-900 text-white rounded-full'
                    : 'text-white hover:bg-amber-100 rounded-full'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Desktop call button */}
            <a
              href={`tel:${adminPhoneTel}`}
              aria-label={`Call admin ${adminPhoneDisplay}`}
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-amber-900 text-white text-sm font-medium rounded-full shadow hover:opacity-95 transition"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{adminPhoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button and call icon */}
          <div className="flex items-center gap-2 md:hidden">
            {/* On small screens also show a compact call icon beside menu */}
            <a
              href={`tel:${adminPhoneTel}`}
              aria-label={`Call admin ${adminPhoneDisplay}`}
              className="p-2 rounded-full bg-amber-900 text-white"
              title={`Call ${adminPhoneDisplay}`}
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              className="p-2 text-amber-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-amber-900 text-white rounded-lg'
                      : 'text-amber-900 hover:bg-amber-100 rounded-lg'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile call row inside the menu (optional, as there's a floating button and one beside the menu toggle) */}
              {/* <a
                href={`tel:${adminPhoneTel}`}
                className="flex items-center gap-3 px-3 py-3 mt-2 bg-amber-900 text-white rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Call admin ${adminPhoneDisplay}`}
              >
                <Phone className="w-5 h-5" />
                <span>Call Admin</span>
                <span className="ml-auto text-sm opacity-90">{adminPhoneDisplay}</span>
              </a> */}
            </div>
          </div>
        )}
      </nav>

      {/* Floating quick-call button for mobile (bottom-right) */}
      <a
        href={`tel:${adminPhoneTel}`}
        className="fixed bottom-6 right-4 z-50 md:hidden inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-amber-900 text-white"
        aria-label={`Quick call ${adminPhoneDisplay}`}
        title={`Call ${adminPhoneDisplay}`}
      >
        <Phone className="w-6 h-6" />
      </a>
    </header>
  );
};

export default Header;