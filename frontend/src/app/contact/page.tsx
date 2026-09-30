'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      if (response.ok) {
        alert('Thank you for reaching out! We will get back to you shortly.');
        setFormState({ name: '', email: '', company: '', phone: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F4C81] mb-4">Contact Our Experts</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need a full network infrastructure overhaul or specific IT support, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">Call Us</h3>
              <p className="text-gray-600 mb-1">Sales & Support</p>
              <p className="font-semibold text-[#0F4C81]">+91 90176-24622</p>
            </div>

            <div
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">Email Us</h3>
              <p className="text-gray-600 mb-1">General Inquiries</p>
              <p className="font-semibold text-[#0F4C81]">sahilsinhmar981@gmail.com</p>
            </div>

            <div
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">Visit HQ</h3>
              <p className="text-gray-600">
                123 Enterprise Blvd, IT Tower, <br/>
                Mohali, India 10001
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Request a Quotation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all"
                    placeholder="Tech Solutions Inc."
                    value={formState.company}
                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help? *</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Describe your IT infrastructure needs..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Send Message <Send className="w-5 h-5" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
