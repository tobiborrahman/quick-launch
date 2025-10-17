'use client';

import React from 'react';
import { Cpu, LayoutDashboard, Users, Globe, Activity } from 'lucide-react';

const featuresData = [
  {
    title: 'Fast Deployment',
    description:
      'Launch your landing pages instantly with our optimized deployment system.',
    icon: <Cpu size={36} className="text-white" />,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    title: 'Customizable Templates',
    description:
      'Choose from a wide variety of templates and fully customize them to match your brand.',
    icon: <LayoutDashboard size={36} className="text-white" />,
    gradient: 'from-green-400 via-teal-400 to-cyan-500',
  },
  {
    title: 'Team Collaboration',
    description:
      'Collaborate with your team in real-time and manage multiple projects effortlessly.',
    icon: <Users size={36} className="text-white" />,
    gradient: 'from-yellow-400 via-orange-400 to-red-500',
  },
  {
    title: 'Global Reach',
    description:
      'Our hosting and infrastructure ensures your pages are fast anywhere in the world.',
    icon: <Globe size={36} className="text-white" />,
    gradient: 'from-blue-400 via-indigo-500 to-purple-500',
  },
  {
    title: 'Analytics & Insights',
    description:
      'Track performance, conversions, and user engagement with built-in analytics.',
    icon: <Activity size={36} className="text-white" />,
    gradient: 'from-pink-400 via-red-400 to-orange-500',
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden pt-36 pb-20">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-50 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-50 translate-x-16 translate-y-16"></div>

      {/* Page Header */}
      <section className="text-center mb-20 px-6 md:px-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Explore <span className="text-indigo-600">Features</span>
        </h1>
        <p className="text-gray-600 text-lg">
          QuickLaunch provides powerful tools and features to help you build, launch, and grow your business effortlessly.
        </p>
      </section>

      {/* Features Sections */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {featuresData.map((feature, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            {/* Icon & Gradient Circle */}
            <div
              className={`flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${feature.gradient} shadow-lg flex-shrink-0`}
            >
              {feature.icon}
            </div>

            {/* Description */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FeaturesPage;
