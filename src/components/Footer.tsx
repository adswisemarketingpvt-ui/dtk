import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaStore } from "react-icons/fa";
 


const Footer = () => {
  return (
    <footer className="bg-[#2e0e02] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              className="h-14 w-auto mb-4"
              src="https://www.dtkfootwear.com/logo.png"
              alt="DTK Footwear Logo"
            />
            <p className="text-amber-100 mb-4 leading-relaxed max-w-xs">
             Crafting exceptional footwear, each pair tells a story of dedication, precision, and timeless elegance.
            </p>

            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.instagram.com/dtkfootwear?igsh=MW1ub2NjeG1hdTM0NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-white transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1DEHb67kZh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-white transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dnyandev-kamble-75b61a26a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-white transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://www.indiamart.com/dtk-footwear/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-white transition-colors p-2 rounded-full"
                aria-label="IndiaMART"
              >
                <FaStore size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links + Policies group for small screens */}
          <div className="sm:col-span-2 md:col-span-2 grid grid-cols-2 gap-8 text-center md:text-left">
            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-amber-100 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#/about" className="text-amber-100 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#/contact" className="text-amber-100 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/#/accessories" className="text-amber-100 hover:text-white transition-colors">
                    Wholesale
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-semibold mb-6 text-lg">Policies</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/#/return-policy"
                    className="text-amber-100 hover:text-white transition-colors"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/#/shipping-policy"
                    className="text-amber-100 hover:text-white transition-colors"
                  >
                    Shipping Policy
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/#/privacy-policy"
                    className="text-amber-100 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/#/terms-conditions"
                    className="text-amber-100 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-300 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-amber-100 text-sm">
                  Shop No 3, near Gavane Hospital, Gujar Nagar, Laxman Nagar,
                  Thergaon, Pimpri-Chinchwad, Maharashtra-411033
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-300 mr-2 flex-shrink-0" />
                <span className="text-amber-100 text-sm">
                  +91 9765758830 / +91 9021220354
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-300 mr-2 flex-shrink-0" />
                <span className="text-amber-100 text-sm">
                  contact@dtkfootwear.com
                </span>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-amber-300 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-amber-100 text-sm">
                  Mon-Sat: 9AM-7PM
                  <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            <span className="text-gray-400">Powered By</span>{" "}
            <span className="text-gray-400 font-bold">ads</span>
            <span className="text-cyan-400 font-bold">wise</span>{" "}
            <span className="text-gray-400 font-bold">marke</span>
            <span className="text-cyan-400 font-bold">ting</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
