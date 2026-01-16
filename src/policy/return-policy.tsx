// src/pages/ReturnPolicy.tsx
import React, { useEffect } from "react";
import { RefreshCcw, CheckCircle2, AlertCircle, Truck, CreditCard, ShieldCheck, Mail, Phone } from 'lucide-react';

const ReturnPolicy: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-secondary-text py-20 px-6">
      <div className="max-w-4xl mx-auto bg-card-background shadow-sm border border-border-divider/50 rounded-sm p-8 md:p-12">
        
        {/* H1 Heading */}
        <h1 className="text-3xl md:text-4xl font-serif text-primary-heading text-center mb-4">
          Return Policy — TheFormales
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-10"></div>

        {/* H2 Introduction */}
        <section className="mb-12 text-center">
          <h2 className="text-xl font-serif text-primary-heading mb-4 uppercase tracking-widest">Our promise</h2>
          <p className="text-secondary-text leading-relaxed max-w-2xl mx-auto italic">
            At TheFormales, we want you to love your formal leather shoes. If a purchase doesn’t meet your expectations because of size or a manufacturing fault, we make returns straightforward and transparent.
          </p>
        </section>

        <div className="space-y-12">
          
          {/* When can you return? */}
          <section>
            <h2 className="text-xl font-serif text-primary-heading mb-4 border-b border-border-divider pb-2">When can you return?</h2>
            <p className="mb-4">You can request a return within <strong>30 days</strong> from the delivery or purchase date for the following reasons:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 bg-background p-4 rounded-sm border border-border-divider/30">
                <CheckCircle2 className="text-accent" size={20} />
                <span>Incorrect size received</span>
              </li>
              <li className="flex items-center gap-3 bg-background p-4 rounded-sm border border-border-divider/30">
                <AlertCircle className="text-accent" size={20} />
                <span>Manufacturing defects</span>
              </li>
            </ul>
          </section>

          {/* Return eligibility */}
          <section>
            <h2 className="text-xl font-serif text-primary-heading mb-4 border-b border-border-divider pb-2">Return eligibility — what we require</h2>
            <p className="mb-4 text-sm font-medium text-primary-heading">To ensure fast processing, items must meet the following:</p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span> 
                Shoes are unused and unworn (only try on indoors).
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> 
                Original shoe box, packaging, and tags are intact and included.
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> 
                No visible signs of wear, scuffing, soiling, or odor.
              </li>
            </ul>
            <div className="mt-4 p-4 bg-secondary-accent/10 border-l-2 border-secondary-accent/20 text-xs text-secondary-accent">
              Note: Returns that show evidence of use will not be accepted.
            </div>
          </section>

          {/* Charges & Shipping */}
          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-serif text-primary-heading mb-4 border-b border-border-divider pb-2">Return charges</h2>
              <div className="flex items-start gap-3">
                <CreditCard className="text-accent mt-1" size={20} />
                <p className="text-sm">A <strong>₹20 return processing fee</strong> applies to each return request.</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-serif text-primary-heading mb-4 border-b border-border-divider pb-2">Return shipping</h2>
              <div className="flex items-start gap-3">
                <Truck className="text-accent mt-1" size={20} />
                <p className="text-sm">Customers are responsible for return shipping costs. We recommend using a tracked method to avoid loss.</p>
              </div>
            </div>
          </section>

          {/* Steps to Return */}
          <section className="bg-card-background border border-border-divider p-8">
            <h2 className="text-xl font-serif text-primary-heading mb-6 text-center">How to return — simple steps</h2>
            <div className="space-y-6">
              {[
                { step: "01", text: "Contact us via email or phone within 30 days providing order number and reason." },
                { step: "02", text: "Receive instructions and return address from our support team." },
                { step: "03", text: "Pack shoes securely in original box with all tags and accessories." },
                { step: "04", text: "Ship package and share the tracking number with us." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <span className="text-2xl font-serif italic text-accent/40">{item.step}</span>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-center text-muted-text uppercase tracking-widest">
              Processing takes 3–7 business days from receipt.
            </p>
          </section>

          {/* Refunds & Exchanges */}
          <section className="bg-primary-heading text-white p-8 rounded-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-accent">Refunds</h2>
                <p className="text-xs text-secondary-text leading-relaxed">
                  Once approved, refunds go to original payment method. Bank/UPI/Card refunds take 3–10 business days.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-accent">Exchanges</h2>
                <p className="text-xs text-secondary-text leading-relaxed">
                  If you need a different size, we’ll help you exchange based on availability. Follow return steps and we will guide you.
                </p>
              </div>
            </div>
          </section>

          {/* Warranty */}
          <section className="border-t border-border-divider pt-10">
            <h2 className="text-xl font-serif text-primary-heading mb-4 flex items-center gap-2">
              <ShieldCheck className="text-accent" /> 1-Year Warranty
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              All TheFormales products include a 1-year warranty covering manufacturing defects (seams, sole separation, faulty stitching). This does <strong>not</strong> cover normal wear and tear, misuse, or accidental damage.
            </p>
            <p className="text-sm font-medium text-primary-body">To claim: Email photos and order details to theformales@gmail.com.</p>
          </section>
        </div>

        {/* Need Help Section */}
        <div className="mt-20 pt-10 border-t border-border-divider/50 text-center">
          <h2 className="text-2xl font-serif text-primary-heading mb-6">Need help?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:theformales@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={18} className="text-accent" /> theformales@gmail.com
            </a>
            <a href="tel:+918554868488" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={18} className="text-accent" /> +91 8554868488
            </a>
          </div>
          <p className="text-[10px] text-muted-text mt-8 uppercase tracking-[0.2em]">Mon–Sat, 10:00 AM – 6:00 PM IST</p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;