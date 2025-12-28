// src/pages/ContactPage.tsx
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<{ type: 'idle' | 'sending' | 'success' | 'error'; text?: string }>({
    type: 'idle',
  });

  const EMAILJS_SERVICE_ID = 'service_s4z4954';
  const EMAILJS_TEMPLATE_ID = 'template_gy9ogyv';
  const EMAILJS_PUBLIC_KEY = 'Y4uZOXAoYAAPtZvA5';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'sending', text: 'Sending message...' });

    const templateParams = {
      name: formData.name || '-',
      email: formData.email || '-',
      phone: formData.phone || '-',
      subject: formData.subject || 'General Inquiry',
      message: formData.message || '-',
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus({ type: 'success', text: 'Message sent successfully!' });
      setTimeout(() => navigate('/thank-you'), 1500);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        text: 'Failed to send message. Please email contact@dtkfootwear.com directly.',
      });
      setTimeout(() => setStatus({ type: 'idle' }), 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: [
        ' Thergaon Pune, Maharashtra 411033',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9730266648'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@theformales.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: 11:00 AM - 5:00 PM'],
    },
  ];

  return (
    <div className="bg-[#FAF7F0] min-h-screen">
      
      {/* Hero Section - Charcoal with Terracotta Border */}
      <section className="bg-[#4A4947] py-24 border-b border-[#B17457]/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#B17457] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">Contact Us</h1>
          <p className="text-lg text-[#D8D2C2] max-w-2xl mx-auto leading-relaxed font-light">
            Whether you have a custom request or an inquiry about our artisanal collection, our expert team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-16 shadow-xl">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-10 text-center border border-[#FAF7F0] transition-colors hover:bg-white/80">
                <div className="w-12 h-12 bg-[#FAF7F0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-5 h-5 text-[#B17457]" />
                </div>
                <h3 className="text-xs font-bold text-black uppercase tracking-[0.2em] mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-[#4A4947] text-xs font-light tracking-wide leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-2xl rounded-sm p-8 md:p-16 border border-[#D8D2C2]/30">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif text-black mb-4">Send Us a Message</h2>
                <div className="w-12 h-0.5 bg-[#B17457] mx-auto mb-6"></div>
                <p className="text-[#4A4947] font-light text-sm italic">
                  Complete the form below and an advisor will contact you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label htmlFor="name" className="block text-[10px] font-bold text-[#4A4947] uppercase tracking-widest mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-b border-[#D8D2C2] focus:border-[#B17457] outline-none transition-colors bg-transparent text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-[10px] font-bold text-[#4A4947] uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-b border-[#D8D2C2] focus:border-[#B17457] outline-none transition-colors bg-transparent text-sm"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-[10px] font-bold text-[#4A4947] uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-b border-[#D8D2C2] focus:border-[#B17457] outline-none transition-colors bg-transparent text-sm"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-[#4A4947] uppercase tracking-widest mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-0 py-3 border-b border-[#D8D2C2] focus:border-[#B17457] outline-none transition-colors bg-transparent text-sm resize-none"
                    placeholder="How can we assist you?"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status.type === 'sending'}
                    className="w-full bg-black text-white py-5 px-8 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#B17457] transition-all duration-500 disabled:opacity-50 flex items-center justify-center shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-3" />
                    {status.type === 'sending' ? 'Sending Request...' : 'Send Message'}
                  </button>
                </div>

                {status.type === 'success' && (
                  <p className="text-center text-[#B17457] text-xs font-bold tracking-widest uppercase mt-4">
                    {status.text}
                  </p>
                )}
                {status.type === 'error' && (
                  <p className="text-center text-red-800 text-xs font-bold tracking-widest uppercase mt-4">
                    {status.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;