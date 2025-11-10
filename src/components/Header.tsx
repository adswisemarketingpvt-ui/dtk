import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'WHOLESALE', href: '/accessories' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Admin phone (tel: link)
  const adminPhoneDisplay = '+91 97657 58830';
  const adminPhoneTel = '+919765758830'; // no spaces for tel:

  // Make header transparent only on the home page
  const isHome = location.pathname === '/';

  const headerWrapperClass = isHome
    ? 'absolute inset-x-0 top-0 z-50 bg-transparent'
    : 'relative bg-[#2e0e02] shadow-sm border-b border-gray-100';

  // Link styles adjust based on whether header is transparent (home) or solid
  const desktopLinkBase =
    'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full';
  const desktopLinkActive = isHome
    ? 'bg-amber-900/90 text-white'
    : 'bg-amber-900 text-white';
  const desktopLinkInactive = isHome ? 'text-white hover:bg-white/10' : 'text-white hover:bg-amber-100';

  return (
    <header className={headerWrapperClass}>
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div>
              <img
                className={`h-12 w-32 pl-5 ${isHome ? '' : ''}`}
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
                className={`${desktopLinkBase} ${
                  isActive(item.href) ? desktopLinkActive : desktopLinkInactive
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Desktop call button */}
            <a
              href={`tel:${adminPhoneTel}`}
              aria-label={`Call admin ${adminPhoneDisplay}`}
              className={`ml-3 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full shadow transition ${
                isHome ? 'bg-amber-900/90 text-white' : 'bg-amber-900 text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{adminPhoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button and compact call icon */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Compact call icon */}
            <a
              href={`tel:${adminPhoneTel}`}
              aria-label={`Call admin ${adminPhoneDisplay}`}
              className={`p-2 rounded-full ${
                isHome ? 'bg-amber-900/90 text-white' : 'bg-amber-900 text-white'
              }`}
              title={`Call ${adminPhoneDisplay}`}
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              className={`${isHome ? 'text-white' : 'text-amber-900'} p-2`}
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
            {/* When header was transparent on home, the open menu should be readable => use white bg */}
            <div className={`${isHome ? 'bg-white' : 'bg-white'} px-2 pt-2 pb-3 space-y-1`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors rounded-lg ${
                    isActive(item.href)
                      ? 'bg-amber-900 text-white'
                      : 'text-amber-900 hover:bg-amber-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Optional: Mobile call row inside the menu */}
              <a
                href={`tel:${adminPhoneTel}`}
                className="flex items-center gap-3 px-3 py-3 mt-2 bg-amber-900 text-white rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Call admin ${adminPhoneDisplay}`}
              >
                <Phone className="w-5 h-5" />
                <span>Call Admin</span>
                <span className="ml-auto text-sm opacity-90">{adminPhoneDisplay}</span>
              </a>
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
