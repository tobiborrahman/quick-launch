'use client';

import React from 'react';
import { Globe, Brush, Megaphone, Store, Shirt, Rocket, MessageSquare, Code } from 'lucide-react';

const services = [
  { title: 'Restaurants', icon: Store, description: 'Launch your restaurant’s online presence with an elegant, fast landing page that drives orders.' },
  { title: 'Clothing Brands', icon: Shirt, description: 'Showcase your fashion line with style — modern eCommerce-ready design for your brand.' },
  { title: 'All Kinds of Startups', icon: Rocket, description: 'From fintech to fitness — QuickLaunch helps you launch any startup landing page quickly.' },
  { title: 'Web Development', icon: Code, description: 'Full-stack and front-end solutions tailored to your business’s needs and goals.' },
  { title: 'UI/UX Design', icon: Brush, description: 'Design that delights users — modern, clean, and user-focused interfaces.' },
  { title: 'Digital Marketing', icon: Megaphone, description: 'Boost traffic and conversions with SEO, ads, and content strategies that work.' },
  { title: 'Consultation', icon: MessageSquare, description: 'Get personalized strategy sessions to plan, launch, and scale your online business.' },
  { title: 'E-Commerce Solutions', icon: Globe, description: 'Launch your online store with product management, checkout, and analytics built-in.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 py-20 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60 translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 -translate-x-16 translate-y-16"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Landing Pages for <span className="text-indigo-600">All Your Businesses</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Whether you’re a restaurant, a fashion brand, or a tech startup — QuickLaunch helps you get your dream site live fast.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
