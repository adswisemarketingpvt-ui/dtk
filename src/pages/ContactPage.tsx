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
      
      // Update status to success
      setStatus({ type: 'success', text: 'Message sent successfully!' });
      
      // Optional: Clear form
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Navigate to Thank You page after a short delay so user sees the success state
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        text: 'Failed to send message. Please email avyaktaart555@gmail.com directly.',
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
      details: ['NH 04, Kamthadi, Nasrapur, Bhor, Pune-412213'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 99215 17752'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['avyaktaart555@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: 11:00 AM - 5:00 PM'],
    },
  ];

  return (
    <div id='contact' className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary-heading text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://mediumaquamarine-quetzal-462306.hostingersite.com//f05892df31e16a189ab2b5afa0fa7d91.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4 text-white">
            Get In <span className="text-[#E67E22]"> Touch</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto italic text-white/90">
            Whether you have a custom request or an inquiry about our artisanal collection, our expert team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-16 shadow-xl">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card-background p-10 text-center border border-background transition-colors hover:bg-card-background/80">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xs font-bold text-primary-heading uppercase tracking-[0.2em] mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-secondary-text text-xs font-light tracking-wide leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-card-background shadow-2xl rounded-sm p-8 md:p-16 border border-border-divider/30">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif text-primary-heading mb-4">Send Us a Message</h2>
                <div className="w-12 h-0.5 bg-accent mx-auto mb-6"></div>
                <p className="text-secondary-text font-light text-sm italic">
                  Complete the form below and an advisor will contact you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label htmlFor="name" className="block text-[10px] font-bold text-secondary-text uppercase tracking-widest mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-b border-border-divider focus:border-accent outline-none transition-colors bg-transparent text-sm text-primary-body"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-[10px] font-bold text-secondary-text uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-b border-border-divider focus:border-accent outline-none transition-colors bg-transparent text-sm text-primary-body"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-[10px] font-bold text-secondary-text uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-b border-border-divider focus:border-accent outline-none transition-colors bg-transparent text-sm text-primary-body"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-secondary-text uppercase tracking-widest mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-0 py-3 border-b border-border-divider focus:border-accent outline-none transition-colors bg-transparent text-sm resize-none text-primary-body"
                    placeholder="How can we assist you?"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status.type === 'sending'}
                    className="w-full bg-primary-button text-primary-heading py-5 px-8 text-xs font-bold uppercase tracking-[0.3em] hover:bg-button-hover transition-all duration-500 disabled:opacity-50 flex items-center justify-center shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-3" />
                    {status.type === 'sending' ? 'Sending Request...' : 'Send Message'}
                  </button>
                </div>

                {status.type === 'success' && (
                  <p className="text-center text-accent text-xs font-bold tracking-widest uppercase mt-4">
                    {status.text}
                  </p>
                )}
                {status.type === 'error' && (
                  <p className="text-center text-red-500 text-xs font-bold tracking-widest uppercase mt-4">
                    {status.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="w-full h-[450px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border-t border-border-divider/50 shadow-inner">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.136437343603!2d73.8447883!3d18.2941014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc293f0b0000001%3A0xc0688a4a58145217!2sAvyact%20Arts!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;