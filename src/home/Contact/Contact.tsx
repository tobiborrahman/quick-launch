'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Replace with your real backend API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60 translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 -translate-x-16 translate-y-16"></div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get in <span className="text-indigo-600">Touch</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Have questions or want to launch your project? Send us a message and we’ll get back to you in real-time!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8"
        >
         <div className='flex flex-col gap-6'>
           <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
         </div>

          {/* Status Message */}
          {status === 'success' && (
            <p className="text-indigo-600 font-medium -mt-4">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 font-medium">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
