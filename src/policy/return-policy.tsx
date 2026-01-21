// src/pages/ReturnPolicy.tsx
import React, { useEffect } from "react";
import { RefreshCcw, CheckCircle2, AlertCircle, XCircle, ShieldCheck, Mail, Phone, Gem } from 'lucide-react';

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
          Return & Refund Policy — Avyact Arts
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-10"></div>

        {/* H2 Introduction */}
        <section className="mb-12 text-center">
          <h2 className="text-xl font-serif text-primary-heading mb-4 uppercase tracking-widest">Our Commitment to You</h2>
          <p className="text-secondary-text leading-relaxed max-w-2xl mx-auto italic">
            At Avyact Arts, each murti is a sacred piece of art crafted with immense care. We want you to feel confident in your purchase. Our return policy is designed to be transparent and to address issues with damage or incorrect items fairly.
          </p>
        </section>

        <div className="space-y-12">
          
          {/* When can you return? */}
          <section>
            <h2 className="text-xl font-serif text-primary-heading mb-4 border-b border-border-divider pb-2">Conditions for Return</h2>
            <p className="mb-4">You may request a return or report an issue under the following circumstances:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 bg-background p-4 rounded-sm border border-border-divider/30">
                <AlertCircle className="text-accent" size={20} />
                <span>Item damaged during transit</span>
              </li>
              <li className="flex items-center gap-3 bg-background p-4 rounded-sm border border-border-divider/30">
                <XCircle className="text-accent" size={20} />
                <span>Incorrect item received</span>
              </li>
            </ul>
            <p className="mt-4 text-sm">For damage claims, you <strong>must contact us within 48 hours</strong> of delivery. For other issues, the return window is <strong>14 days</strong> from the date of delivery.</p>
          </section>

          {/* Non-Returnable Items */}
          <section className="bg-secondary-accent/10 border-l-4 border-secondary-accent/20 p-6">
            <h2 className="text-xl font-serif text-primary-heading mb-4">Non-Returnable Items</h2>
             <p className="font-semibold text-primary-heading">Custom-made and commissioned artworks are non-returnable and non-refundable.</p>
            <p className="mt-2 text-sm leading-relaxed">
              These pieces are created specifically for you. Once you approve the design and work begins, the sale is final. We will work closely with you throughout the creation process to ensure your vision is realized.
            </p>
          </section>

          {/* Return eligibility */}
          <section>
            <h2 className="text-xl font-serif text-primary-heading mb-4 border-b border-border-divider pb-2">Return Eligibility</h2>
            <p className="mb-4 text-sm font-medium text-primary-heading">To be eligible for a return, the artwork must be:</p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="text-accent">•</span> 
                In its original, unused, and unaltered condition.
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span> 
                Returned with all original packaging, including crates, boxes, and protective materials.
              </li>
            </ul>
          </section>

          {/* Steps to Return */}
          <section className="bg-card-background border border-border-divider p-8">
            <h2 className="text-xl font-serif text-primary-heading mb-6 text-center">How to Initiate a Return</h2>
            <div className="space-y-6">
              {[
                { step: "01", text: "Contact us via email with your order number and the reason for the return. For damaged items, include clear photos of the packaging and the artwork." },
                { step: "02", text: "Our team will review your request and provide you with detailed instructions and a return authorization if approved." },
                { step: "03", text: "Securely pack the artwork in its original packaging to prevent further damage." },
                { step: "04", text: "Ship the package using a tracked and insured shipping method. You are responsible for return shipping costs." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <span className="text-2xl font-serif italic text-accent/40">{item.step}</span>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Refunds & Replacements */}
          <section className="bg-primary-heading text-white p-8 rounded-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-accent">Refunds</h2>
                <p className="text-xs text-secondary-text leading-relaxed">
                  Once your return is received and inspected, we will notify you of the approval or rejection. If approved, your refund will be processed to the original method of payment within 7-10 business days.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-accent">Replacements</h2>
                <p className="text-xs text-secondary-text leading-relaxed">
                  If your artwork was damaged, we will offer a replacement if a similar piece is available. As many items are one-of-a-kind, a replacement may not be possible, in which case a full refund will be issued.
                </p>
              </div>
            </div>
          </section>

          {/* Authenticity Guarantee */}
          <section className="border-t border-border-divider pt-10">
            <h2 className="text-xl font-serif text-primary-heading mb-4 flex items-center gap-2">
              <Gem className="text-accent" /> Authenticity & Craftsmanship
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              We guarantee that every artwork from Avyact Arts is an authentic, handcrafted piece made by our skilled artisans using the materials described. Natural variations are a part of the handmade process and are not considered defects.
            </p>
          </section>
        </div>

        {/* Need Help Section */}
        <div className="mt-20 pt-10 border-t border-border-divider/50 text-center">
          <h2 className="text-2xl font-serif text-primary-heading mb-6">Need help?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:contact@avyactarts.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={18} className="text-accent" /> avyaktaart555@gmail.com
            </a>
            <a href="tel:+919921517752" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={18} className="text-accent" /> +91 99215 17752
            </a>
          </div>
          <p className="text-[10px] text-muted-text mt-8 uppercase tracking-[0.2em]">Mon–Sat, 10:00 AM – 6:00 PM IST</p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;