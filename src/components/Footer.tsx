// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaStore,
  FaQuora,
  FaPinterest,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card-background text-secondary-text border-t border-border-divider">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              className="h-16 w-auto mb-6"
              src="http://tartariatech.com/public/Logo-01.png"
              alt="DTK Footwear Logo"
            />
            <p className="text-secondary-text mb-8 leading-relaxed max-w-xs text-sm font-light">
              Creating divine murtis with skill, tradition, and premium
              craftsmanship.
            </p>

            <div className="flex space-x-3">
              {[
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/the.formales",
                },
                {
                  icon: FaFacebookF,
                  label: "Facebook",
                  href: "https://www.facebook.com/share/17TGZCbzkQ/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-primary-heading hover:bg-primary-button hover:text-primary-heading transition-all duration-300 p-3 rounded-sm border border-border-divider"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links + Policies group */}
          <div className="sm:col-span-2 md:col-span-2 grid grid-cols-2 gap-8 text-center md:text-left">
            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-primary-heading">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Contact", path: "/contact" },
                  { name: "Products", path: "/products" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-secondary-text hover:text-accent transition-colors text-sm font-light tracking-wide"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-primary-heading">
                Policies
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/return-policy"
                    className="text-secondary-text hover:text-accent transition-colors text-sm font-light tracking-wide"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="text-secondary-text hover:text-accent transition-colors text-sm font-light tracking-wide"
                  >
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-primary-heading">
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-start justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-text text-xs leading-relaxed font-light">
                  NH 04, Kamthadi, Nasrapur, Bhor, Pune-412213
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                <span className="text-secondary-text text-xs font-light tracking-wider">
                  +91 99215 17752
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                <span className="text-secondary-text text-xs font-light">
                  avyaktaart555@gmail.com
                </span>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <Clock className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-text text-xs font-light italic leading-relaxed">
                  Mon-Sat: 9AM-7PM
                  <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border-divider mt-16 pt-8 text-center">
          <p className="text-muted-text text-[10px] mt-4 tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} Avyakta Art . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
