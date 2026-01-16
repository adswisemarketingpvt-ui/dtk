// src/pages/ShippingPolicy.tsx
import React, { useEffect } from "react";
import { Truck, Package, Clock, ShieldCheck, HelpCircle, MapPin } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-secondary-text py-20 px-6">
      <div className="max-w-4xl mx-auto bg-card-background shadow-sm border border-border-divider/50 rounded-sm p-8 md:p-12">
        {/* H1 Heading */}
        <h1 className="text-3xl md:text-4xl font-serif text-primary-heading text-center mb-4">
          Shipping Policy — TheFormales
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-10"></div>

        {/* H2 Introduction */}
        <section className="mb-12 text-center">
          <h2 className="text-xl font-serif text-primary-heading mb-4">Our shipping promise</h2>
          <p className="text-secondary-text leading-relaxed max-w-2xl mx-auto">
            At TheFormales, we aim to deliver your formal leather shoes safely and on time across India. 
            Read the details below before placing your order so you know what to expect.
          </p>
        </section>

        <div className="space-y-10">
          {/* 1. Shipping Coverage */}
          <section>
            <h3 className="flex items-center text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">
              <MapPin className="mr-2 text-accent" size={20} /> 1. Shipping coverage
            </h3>
            <p className="leading-relaxed">
              We currently deliver to most pin codes across India using trusted courier partners. If your pincode is outside our serviceable area, our team will contact you before dispatch to confirm options (alternative delivery, store pickup, or cancellation).
            </p>
          </section>

          {/* 2. Shipping Charges */}
          <section>
            <h3 className="flex items-center text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">
              <Truck className="mr-2 text-accent" size={20} /> 2. Shipping charges & free shipping
            </h3>
            <p className="leading-relaxed">
              Shipping charges depend on your delivery location and the weight/size of the order. 
              The exact shipping fee is shown at checkout. In cases where additional charges apply (bulk/remote area), we’ll inform you after order confirmation. 
              <strong> Free shipping on orders</strong>, unless otherwise stated during promotions.
            </p>
          </section>

          {/* 3. Order Processing */}
          <section>
            <h3 className="flex items-center text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">
              <Clock className="mr-2 text-accent" size={20} /> 3. Order processing time
            </h3>
            <p className="leading-relaxed">
              We typically process confirmed orders within <strong>1–2 business days</strong> after payment confirmation. Processing time may be longer during high-sale periods or public holidays.
            </p>
          </section>

          {/* 4. Delivery Timelines */}
          <section className="bg-background p-6 rounded-sm">
            <h3 className="text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">4. Delivery timelines (business days)</h3>
            <ul className="list-disc list-inside space-y-2 text-secondary-text">
              <li><strong>Major cities & towns:</strong> 2–5 business days</li>
              <li><strong>Remote or difficult-to-reach areas:</strong> 5–8 business days</li>
            </ul>
            <p className="mt-3 text-sm italic">
              Delivery times are estimates and begin after the order has been dispatched. Occasional delays can occur due to courier availability, weather, or local restrictions.
            </p>
          </section>

          {/* 5. Tracking */}
          <section>
            <h3 className="flex items-center text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">
              <Package className="mr-2 text-accent" size={20} /> 5. Tracking your order
            </h3>
            <p className="leading-relaxed">
              Once your order is dispatched, we will share tracking details via <strong>WhatsApp and email</strong> so you can follow the shipment until delivery. If you do not receive tracking information within 48 hours of payment, please contact us.
            </p>
          </section>

          {/* 6. Inspecting Deliveries */}
          <section className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">6. Inspecting deliveries & reporting issues</h3>
            <p className="mb-4">Please check your package at the time of delivery. If the package appears damaged, refuse delivery and inform us immediately.</p>
            <p className="mb-4 font-semibold text-primary-heading">If product is damaged/incorrect, contact us within 48 hours with photos of:</p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>The outer packaging</li>
              <li>The product(s) and any visible damage</li>
              <li>Your order invoice</li>
            </ul>
            <p className="text-sm">Email: <span className="text-accent font-medium">theformales@gmail.com</span> | WhatsApp: <span className="text-accent font-medium">+91 8554868488</span></p>
          </section>

          {/* 7. Delayed Shipments */}
          <section>
            <h3 className="text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">7. Delayed shipments</h3>
            <p className="leading-relaxed">
              If your order is delayed beyond the estimated delivery window, contact our support team with your order number. We will coordinate with the courier partner and update you as soon as possible.
            </p>
          </section>

          {/* 8. International Shipping */}
          <section>
            <h3 className="text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">8. International shipping</h3>
            <p className="leading-relaxed text-muted-text">
              At present, we do not ship internationally. Orders are fulfilled only within India.
            </p>
          </section>

          {/* 9. Store Pickup */}
          <section>
            <h3 className="text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">9. Store pickup (Maharashtra)</h3>
            <p className="leading-relaxed">
              Select Store Pickup at checkout for eligible Maharashtra locations: <strong>Mumbai, Pune, Nagpur, Nashik, Aurangabad</strong>. You will receive a notification when your order is ready for collection.
            </p>
          </section>

          {/* 10. Important Notes */}
          <section>
            <h3 className="text-lg font-bold text-primary-heading uppercase tracking-wider mb-3">10. Important notes</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-secondary-text">
              <li>Delivery estimates exclude processing time.</li>
              <li>For Cash on Delivery (COD), additional fees may apply at checkout.</li>
              <li>We recommend retaining shipping receipts when returning items.</li>
            </ul>
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
                <a href="mailto:theformale@gmail.com" className="hover:underline">theformale@gmail.com</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-xs uppercase tracking-widest text-accent">Call/WA:</span>
                <a href="tel:+918554868488" className="hover:underline">+91 8554868488</a>
              </p>
            </div>
            <p className="text-[10px] mt-6 opacity-60 uppercase tracking-tighter">Mon–Sat, 10:00 AM – 6:00 PM IST</p>
          </div>
        </div>

        <p className="text-center text-[10px] text-muted-text mt-12 uppercase tracking-[0.2em]">
          TheFormales — Premium Formal Leather Shoes
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;