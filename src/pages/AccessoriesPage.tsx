import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShoeImage {
  src: string;
  alt: string;
}

const shoeImages: ShoeImage[] = [
  { src: "https://i.pinimg.com/1200x/45/41/73/4541733fc416d9fac7d5bce17ba0eeef.jpg", alt: "Black Formal Shoe" },
  { src: "https://i.pinimg.com/736x/27/7c/4a/277c4ae128d146f6203766904fab635d.jpg", alt: "Brown Formal Shoe" },
  { src: "https://i.pinimg.com/736x/5c/d6/e7/5cd6e713b05f33e5aaeee1d95dd18dc4.jpg", alt: "Classic Leather Shoe" },
];

const CATALOGUE_URL = "https://www.dtkfootwear.com/Catalogue.pdf";

const AccessoriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showDetails, setShowDetails] = useState(false);
  const [showCatalogue, setShowCatalogue] = useState(false);

  return (
    <section className="text-white py-16 relative overflow-hidden">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-10 px-6 md:flex-nowrap">
        {/* Left Text Section */}
        <motion.div
          className="md:w-2/5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Wholesale / Bulk Orders
          </h2>
          <p className="text-black mb-6 leading-relaxed">
            Get exclusive pricing and offers on bulk purchases of formal shoes.
            Partner with DTK Footwear for premium quality, style, and comfort at
            wholesale rates.
          </p>

          {/* Minimum Orders + Actions */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="bg-[#1a1a1a] border border-[#eab12b] text-[#eab12b] inline-block px-4 py-2 rounded-md font-semibold">
              Minimum Order Quantity: 40 Pairs
            </div>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="bg-[#eab12b] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#c6951f] transition"
            >
              {showDetails ? "Hide Details" : "Learn More"}
            </button>

            {/* Catalogue actions */}
            <button
              onClick={() => setShowCatalogue(true)}
              className="bg-[#1a1a1a] border border-[#eab12b] text-[#eab12b] font-semibold px-6 py-3 rounded-md hover:bg-[#2a2a2a] transition"
            >
              View Catalogue
            </button>

            <a
              href={CATALOGUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#eab12b] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#c6951f] transition"
            >
              Download Catalogue
            </a>
          </div>
        </motion.div>

        {/* Image Grid Section */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:w-3/5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {shoeImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Expandable Details Section */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
            className="bg-amber-900 mt-10 py-12"
          >
            <div className="container mx-auto px-6 md:px-10 text-gray-300">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#eab12b] mb-6">
                Why Partner with DTK Footwear?
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Best Wholesale Pricing
                  </h4>
                  <p>
                    Enjoy competitive rates on all formal shoe ranges without
                    compromising on quality or design.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Premium Quality Assurance
                  </h4>
                  <p>
                    Each pair is crafted with care using top-grade leather and
                    modern manufacturing techniques.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Bulk & Fast Delivery
                  </h4>
                  <p>
                    Get reliable delivery for bulk orders anywhere in India with
                    guaranteed timelines.
                  </p>
                </div>
              </div>

              {/* MOQ Highlight Section */}
              <div className="mt-12 text-center">
                <div className="inline-block border border-[#eab12b] text-[#eab12b] px-6 py-3 rounded-md text-lg font-semibold mb-6">
                  Minimum Order Quantity (MOQ):{" "}
                  <span className="text-white font-bold">40 Pairs</span>
                </div>

                <p className="text-gray-300 mb-6">
                  Available for retailers, distributors, and corporate clients.
                  Get custom packaging and branding options on bulk orders.
                </p>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a
                    href="/#/contact"
                    className="inline-block bg-[#eab12b] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#c6951f] transition"
                  >
                    Contact Wholesale Team
                  </a>
                  <button
                    onClick={() => setShowCatalogue(true)}
                    className="inline-block bg-[#1a1a1a] border border-[#eab12b] text-[#eab12b] font-semibold px-8 py-3 rounded-md hover:bg-[#2a2a2a] transition"
                  >
                    View Catalogue
                  </button>
                  <a
                    href={CATALOGUE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#eab12b] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#c6951f] transition"
                  >
                    Download Catalogue
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Catalogue Modal */}
      <AnimatePresence>
        {showCatalogue && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-6xl h-[85vh] bg-[#1a1a1a] border border-[#eab12b] rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-[#eab12b]">
                <h4 className="text-[#eab12b] font-semibold text-base md:text-lg">
                  DTK Footwear – Product Catalogue
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href={CATALOGUE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#eab12b] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#c6951f] transition text-sm"
                  >
                    Open in New Tab
                  </a>
                  <button
                    onClick={() => setShowCatalogue(false)}
                    className="bg-transparent border border-[#eab12b] text-[#eab12b] font-semibold px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition text-sm"
                    aria-label="Close catalogue viewer"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="w-full h-[calc(85vh-56px)] bg-[#0f0f0f]">
                <iframe
                  title="DTK Footwear Catalogue"
                  src={CATALOGUE_URL}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AccessoriesPage;
