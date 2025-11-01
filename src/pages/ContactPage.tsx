import React, { useState , useEffect} from 'react';
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

  // EmailJS credentials
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

      setTimeout(() => {
        navigate('/thank-you');
      }, 1500); // Redirect after 1.5s

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        text: 'Failed to send message. Please try again or email contact@dtkfootwear.com directly.',
      });

      setTimeout(() => setStatus({ type: 'idle' }), 8000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: [
        'Shop No 3, near Gavane Hospital,',
        'Gujar Nagar, Laxman Nagar, Thergaon,',
        'Pimpri-Chinchwad, Maharashtra-411033',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 97657 58830', '+91 90212 20354'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@dtkfootwear.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: 11:00 AM - 5:00 PM', 'Holidays: Closed'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="contact" className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-amber-900 mb-6">Contact Us</h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            We're here to help with any questions about our handcrafted luxury footwear.
            Reach out to our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Have a question about our products or need assistance? We'd love to hear from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phonr Number *
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-colors"
                      placeholder="Enter your Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  className="w-full bg-amber-900 text-white py-4 px-6 rounded-full font-medium hover:bg-amber-800 transition-colors flex items-center justify-center disabled:opacity-60"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {status.type === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status.type === 'success' && (
                  <p className="text-center text-green-600 mt-4">{status.text}</p>
                )}
                {status.type === 'error' && (
                  <p className="text-center text-red-600 mt-4">{status.text}</p>
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
