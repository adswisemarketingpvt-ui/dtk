// src/pages/AccessoriesPage.tsx
import React, { useState } from 'react';
import { Package, Truck, ShieldCheck, Clock, ChevronRight, CheckCircle2, Users, TrendingUp } from 'lucide-react';

export default function WholesalePage() {
  const [quantity, setQuantity] = useState(100);

  const benefits = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Bulk Order Discounts",
      description: "Save up to 40% on orders of 100+ pairs. Our tiered system rewards your business growth."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Nationwide premium shipping within 5-7 business days. Fully tracked and insured."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Every pair undergoes strict artisanal quality control. 100% satisfaction guaranteed."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Turnaround",
      description: "From order confirmation to delivery in record time. Reliable inventory management."
    }
  ];

  const pricingTiers = [
    { min: 50, max: 99, discount: "15%", price: "42.50", label: "Starter" },
    { min: 100, max: 249, discount: "25%", price: "37.50", label: "Business" },
    { min: 250, max: 499, discount: "35%", price: "32.50", label: "Premium" },
    { min: 500, max: null, discount: "40%", price: "30.00", label: "Enterprise" }
  ];

  const calculatePrice = (qty: number) => {
    if (qty < 100) return 42.50;
    if (qty < 250) return 37.50;
    if (qty < 500) return 32.50;
    return 30.00;
  };

  const totalPrice = (quantity * calculatePrice(quantity)).toLocaleString();

  return (
    <div id='wholesale' className="min-h-screen bg-[#FAF7F0]">
      
      {/* Hero Section - Deep Charcoal with Terracotta Accents */}
      <div className="relative overflow-hidden bg-[#4A4947]">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/45/41/73/4541733fc416d9fac7d5bce17ba0eeef.jpg" 
            alt="Wholesale Background" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        
        {/* Terracotta Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B17457]/20 to-transparent z-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-28 z-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#B17457]/10 text-[#B17457] px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] mb-8 border border-[#B17457]/30 uppercase">
              <Users className="w-4 h-4" />
              <span>B2B Wholesale Program</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
              Wholesale <span className="text-[#B17457] italic">Excellence</span>
            </h1>
            
            <p className="text-lg text-[#D8D2C2] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Partner with DTK Footwear to provide your customers with premium formal shoes crafted for the modern gentleman. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#B17457] text-white px-10 py-4 rounded-sm font-bold hover:bg-[#a06346] transition-all tracking-widest text-xs uppercase shadow-xl">
                Request Quote <ChevronRight className="inline w-4 h-4 ml-2" />
              </button>
              
              <button className="bg-transparent text-white px-10 py-4 rounded-sm font-bold hover:bg-white/5 transition-all border border-white/20 tracking-widest text-xs uppercase">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black mb-4 tracking-tight">Partner Benefits</h2>
          <div className="w-16 h-0.5 bg-[#B17457] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-sm shadow-sm border border-[#D8D2C2]/30 hover:border-[#B17457] transition-all group"
            >
              <div className="text-[#B17457] mb-6 group-hover:scale-110 transition-transform duration-500">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-wider">{benefit.title}</h3>
              <p className="text-[#4A4947] text-sm leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Pricing Calculator */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-sm p-12 shadow-2xl border-t-8 border-[#B17457]">
          <h2 className="text-3xl font-serif text-black mb-2 text-center">Savings Calculator</h2>
          <p className="text-[#4A4947]/60 text-center mb-12 uppercase tracking-widest text-[10px] font-bold">Adjust volume for corporate pricing</p>
          
          <div className="bg-[#FAF7F0] rounded-sm p-8 mb-10 border border-[#D8D2C2]/50">
            <div className="flex justify-between items-end mb-6">
              <label className="text-black font-bold text-xs tracking-[0.2em] uppercase">Order Quantity</label>
              <span className="text-4xl font-light text-[#B17457]">{quantity} <span className="text-xs font-bold text-[#4A4947]/40 tracking-widest">PAIRS</span></span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="1000" 
              step="50"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full h-1 bg-[#D8D2C2] rounded-lg appearance-none cursor-pointer accent-[#B17457]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#4A4947] rounded-sm p-10 text-center">
              <div className="text-[#D8D2C2]/50 text-[10px] tracking-[0.2em] uppercase mb-2">Price per Unit</div>
              <div className="text-4xl font-light text-white">₹{calculatePrice(quantity)}</div>
              <div className="text-[#B17457] text-[10px] mt-6 font-black tracking-[0.2em] flex items-center justify-center gap-2 uppercase">
                <TrendingUp className="w-4 h-4" />
                SAVE {quantity >= 500 ? '40%' : quantity >= 250 ? '35%' : '25%'}
              </div>
            </div>

            <div className="bg-[#B17457] rounded-sm p-10 text-center">
              <div className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-2">Estimated Total</div>
              <div className="text-4xl font-light text-white">₹{totalPrice}</div>
              <div className="text-white text-[10px] mt-6 font-black tracking-[0.2em] uppercase">
                ✓ Priority Fulfillment
              </div>
            </div>
          </div>

          <button className="w-full bg-black text-white py-6 rounded-sm font-bold hover:bg-[#B17457] transition-all tracking-[0.3em] uppercase text-xs shadow-xl">
            Inquire About This Batch
          </button>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="max-w-7xl mx-auto px-6 py-24 bg-[#D8D2C2]/10">
        <h2 className="text-3xl font-serif text-black mb-16 text-center uppercase tracking-[0.2em]">Wholesale Tiers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`bg-white rounded-sm p-10 border-t-2 transition-all duration-500 ${
                quantity >= tier.min && (tier.max === null || quantity <= tier.max)
                ? 'border-[#B17457] shadow-2xl scale-105 z-10'
                : 'border-[#D8D2C2]/30 opacity-60'
              }`}
            >
              <div className="text-[#B17457] text-[10px] font-black uppercase tracking-[0.3em] mb-6">{tier.label}</div>
              <div className="text-4xl font-serif text-black mb-1">₹{tier.price}</div>
              <div className="text-[#4A4947]/40 text-[10px] mb-8 uppercase tracking-widest font-bold">Unit Price</div>
              
              <div className="bg-[#B17457] text-white px-4 py-1 text-[9px] font-black tracking-[0.1em] inline-block mb-8 uppercase">
                {tier.discount} OFF RRP
              </div>
              
              <div className="text-black text-xs font-bold border-t border-[#D8D2C2]/20 pt-6">
                {tier.min}{tier.max ? ` - ${tier.max}` : '+'} Units
              </div>

              {quantity >= tier.min && (tier.max === null || quantity <= tier.max) && (
                <div className="mt-6 text-[#B17457] text-[9px] font-black flex items-center gap-2 uppercase tracking-[0.2em]">
                  <CheckCircle2 className="w-4 h-4" />
                  Active Tier
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-serif text-black mb-20 text-center uppercase tracking-[0.2em]">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-16">
          {[
            { step: "01", title: "Selection", desc: "Curate your collection from our catalog." },
            { step: "02", title: "Quotation", desc: "Receive tailored pricing and logistics." },
            { step: "03", title: "Processing", desc: "Secure payment and quality check." },
            { step: "04", title: "Dispatch", desc: "Express delivery to your facility." }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="text-8xl font-serif text-[#D8D2C2]/20 absolute -top-12 left-0 z-0 transition-colors group-hover:text-[#B17457]/10 duration-500">
                {item.step}
              </div>
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-[0.2em]">{item.title}</h3>
                <p className="text-[#4A4947] text-xs leading-loose font-light uppercase tracking-widest">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-6 py-24 pb-32">
        <div className="bg-[#4A4947] rounded-sm p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B17457]/5 rounded-full -mr-32 -mt-32"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight">
            Scale Your Business <br/><span className="text-[#B17457] italic">With TheFormales</span>
          </h2>
          <p className="text-[#D8D2C2] text-sm mb-12 max-w-xl mx-auto font-light leading-loose uppercase tracking-[0.2em]">
            Join our network of premium retailers. Benefit from shared growth and unmatched quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#B17457] text-white px-12 py-5 rounded-sm font-bold hover:bg-[#a06346] transition-all tracking-[0.3em] text-[10px] uppercase shadow-2xl">
              Contact Sales Team
            </button>
            <button className="bg-transparent text-white px-12 py-5 rounded-sm font-bold hover:bg-white/5 transition-all border border-[#B17457] tracking-[0.3em] text-[10px] uppercase">
              Download Full Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}