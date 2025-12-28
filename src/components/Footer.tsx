// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaStore,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    // Background: Dark Charcoal (#4A4947) for a sophisticated, grounded finish
    <footer className="bg-[#4A4947] text-white border-t border-[#D8D2C2]/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              className="h-16 w-auto mb-6 brightness-0 invert" // Ensures logo is white against charcoal
              src="https://theformales.in/Untitled.png"
              alt="DTK Footwear Logo"
            />
            <p className="text-[#D8D2C2] mb-8 leading-relaxed max-w-xs text-sm font-light">
              Crafting exceptional footwear, each pair tells a story of
              dedication, precision, and timeless elegance.
            </p>

            <div className="flex space-x-3">
              {/* Social Icons: Warm Stone bg, Terracotta on hover */}
              {[
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/dtkfootwear",
                },
                {
                  icon: FaFacebookF,
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1DEHb67kZh/",
                },
                {
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/dnyandev-kamble-75b61a26a",
                },
                {
                  icon: FaStore,
                  label: "IndiaMART",
                  href: "https://www.indiamart.com/dtk-footwear/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D8D2C2]/10 text-white hover:bg-[#B17457] hover:text-white transition-all duration-300 p-3 rounded-sm border border-[#D8D2C2]/20"
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
            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-[#B17457]">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Contact", path: "/contact" },
                  { name: "Wholesale", path: "/wholesale" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => window.scrollTo(0, 0)} // Smoothly resets scroll to top
                      className="text-[#D8D2C2] hover:text-[#B17457] transition-colors text-sm font-light tracking-wide"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-[#B17457]">
                Policies
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/return-policy"
                    className="text-[#D8D2C2] hover:text-[#B17457] transition-colors text-sm font-light tracking-wide"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="text-[#D8D2C2] hover:text-[#B17457] transition-colors text-sm font-light tracking-wide"
                  >
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-6 text-sm uppercase tracking-[0.2em] text-[#B17457]">
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-start justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-[#B17457] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#D8D2C2] text-xs leading-relaxed font-light">
                  Thergaon Pune, Maharashtra 411033
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 text-[#B17457] mr-3 flex-shrink-0" />
                <span className="text-[#D8D2C2] text-xs font-light tracking-wider">
                  +91 9730266648
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 text-[#B17457] mr-3 flex-shrink-0" />
                <span className="text-[#D8D2C2] text-xs font-light">
                  contact@theformales.com
                </span>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <Clock className="w-4 h-4 text-[#B17457] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-[#D8D2C2] text-xs font-light italic leading-relaxed">
                  Mon-Sat: 9AM-7PM
                  <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#D8D2C2]/10 mt-16 pt-8 text-center">
          <p className="text-[#D8D2C2]/60 text-xs tracking-[0.2em] uppercase">
            Powered By <span className="text-white font-bold">Ads</span>
            <span className="text-[#B17457] font-bold">wise</span>{" "}
            <span className="text-white font-bold">marke</span>
            <span className="text-[#B17457] font-bold">ting</span>
          </p>
          <p className="text-[#D8D2C2]/40 text-[10px] mt-4 tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} TheFormales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
