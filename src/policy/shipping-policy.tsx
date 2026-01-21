// src/pages/ShippingPolicy.tsx
import React, { useEffect } from "react";
import { Truck, Package, Clock, ShieldCheck, HelpCircle, MapPin, Globe } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-secondary-text py-20 px-6">
      <div className="max-w-4xl mx-auto bg-card-background shadow-sm border border-border-divider/50 rounded-sm p-8 md:p-12">
        {/* H1 Heading */}
        <h1 className="text-3xl md:text-4xl font-serif text-primary-heading text-center mb-4">
          Shipping Policy — Avyact Arts
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-10"></div>

        {/* H2 Introduction */}
        <section className="mb-12 text-center">
          <h2 className="text-xl font-serif text-primary-heading mb-4">Our Shipping Promise</h2>
          <p className="text-secondary-text leading-relaxed max-w-2xl mx-auto">
            At Avyact Arts, we are committed to delivering our sacred, handcrafted murtis to your doorstep safely and on time, no matter where you are in the world. 
            Please read the details below to understand our process.
          </p>
        </section>

        <div className="space-y-10">
          {/* 1. Shipping Coverage */}
          <section>
            <h3 className="flex items-center text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">
              <Globe className="mr-2 text-accent" size={20} /> 1. Shipping Coverage
            </h3>
            <p className="leading-relaxed">
              We proudly ship worldwide, serving devotees and art collectors across the globe. We partner with trusted international couriers like DHL, FedEx, and others to ensure reliable delivery.
            </p>
          </section>

          {/* 2. Shipping Charges & Customs */}
          <section>
            <h3 className="flex items-center text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">
              <Truck className="mr-2 text-accent" size={20} /> 2. Shipping Charges & Customs
            </h3>
            <p className="leading-relaxed mb-2">
              Shipping charges are calculated at checkout based on your delivery location, and the size and weight of the artwork.
            </p>
            <p className="leading-relaxed font-semibold">
              For international orders, please note that customs duties, taxes, and import fees are not included in our prices and are the responsibility of the recipient. These charges are determined by the destination country's customs office.
            </p>
          </section>

          {/* 3. Order Processing */}
          <section>
            <h3 className="flex items-center text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">
              <Clock className="mr-2 text-accent" size={20} /> 3. Order Processing Time
            </h3>
            <p className="leading-relaxed">
              For in-stock items, we typically process and dispatch orders within <strong>3–5 business days</strong>. For custom commissions or made-to-order pieces, the creation and processing time will be communicated to you individually.
            </p>
          </section>

          {/* 4. Secure Packaging */}
          <section className="bg-background p-6 rounded-sm">
             <h3 className="flex items-center text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">
              <ShieldCheck className="mr-2 text-accent" size={20} /> 4. Secure Packaging & Insurance
            </h3>
            <p className="leading-relaxed">
              Every murti is a priceless piece of art. We take extraordinary care in packaging. Each piece is wrapped in multiple layers of protective material and placed in a custom-built, durable wooden crate or reinforced box to prevent damage during transit. All our shipments are fully insured.
            </p>
          </section>

          {/* 5. Delivery Timelines */}
          <section>
            <h3 className="text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">5. Estimated Delivery Timelines</h3>
            <ul className="list-disc list-inside space-y-2 text-secondary-text">
              <li><strong>Within India:</strong> 5–10 business days</li>
              <li><strong>International (major countries):</strong> 7–21 business days</li>
            </ul>
            <p className="mt-3 text-sm italic">
              These are estimates and begin after an order has been dispatched. Delays can occur due to customs clearance, weather, or local restrictions.
            </p>
          </section>

          {/* 6. Tracking */}
          <section>
            <h3 className="flex items-center text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">
              <Package className="mr-2 text-accent" size={20} /> 6. Tracking Your Order
            </h3>
            <p className="leading-relaxed">
              Once your order is dispatched, we will send you the tracking details via <strong>email and/or WhatsApp</strong>. You can use this to monitor your shipment's journey to you.
            </p>
          </section>

          {/* 7. Inspecting Deliveries */}
          <section className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">7. Inspecting Deliveries & Reporting Damage</h3>
            <p className="mb-4">It is crucial to inspect the package upon delivery. If the crate or box appears significantly damaged, please take photos before opening, refuse the delivery if possible, and contact us immediately.</p>
            <p className="mb-4 font-semibold text-primary-heading">If the artwork inside is damaged, you must contact us within 48 hours of delivery with photos of:</p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>The outer packaging/crate</li>
              <li>The inner packaging materials</li>
              <li>The damage to the artwork</li>
              <li>Your order invoice</li>
            </ul>
            <p className="text-sm">Email: <span className="text-accent font-medium">contact@avyactarts.com</span></p>
          </section>
        </div>

        {/* Need Help Section */}
        <div className="mt-16 pt-10 border-t border-border-divider/50 text-center">
          <h2 className="flex items-center justify-center text-2xl font-serif text-primary-heading mb-6">
            <HelpCircle className="mr-2 text-accent" /> Need help?
          </h2>
          <div className="bg-primary-heading text-white p-8 rounded-sm inline-block w-full max-w-md">
            <p className="text-sm mb-4 text-secondary-text">Our customer support team is here to help:</p>
            <div className="space-y-3">
              <p className="flex items-center justify-center gap-2">
                <span className="text-xs uppercase tracking-widest text-accent">Email:</span>
                <a href="mailto:contact@avyactarts.com" className="hover:underline">avyaktaart555@gmail.com</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xs uppercase tracking-widest text-accent">Call/WA:</span>
                <a href="tel:+919921517752" className="hover:underline">+91 99215 17752</a>
              </p>
            </div>
            <p className="text-[10px] mt-6 opacity-60 uppercase tracking-tighter">Mon–Sat, 10:00 AM – 6:00 PM IST</p>
          </div>
        </div>

        <p className="text-center text-[10px] text-muted-text mt-12 uppercase tracking-[0.2em]">
          Avyact Arts — Handcrafted Divine Murtis
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;