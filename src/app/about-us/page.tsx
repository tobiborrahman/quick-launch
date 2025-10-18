'use client';

import React from 'react';
import Image from 'next/image';

const aboutImages = [
  '/assets/about-us/team-collaboration.jpg',
  '/assets/about-us/abstract.jpg',
  '/assets/about-us/innovation.jpg',
  '/assets/about-us/startup.jpg'
];

const AboutPage: React.FC = () => {
  return (
    <main className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen overflow-hidden pt-36 pb-20">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60 translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 -translate-x-16 translate-y-16"></div>

      {/* Hero Banner */}
      <section className="text-center px-6 md:px-10 max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-indigo-600">QuickLaunch</span>
        </h1>
        <p className="text-gray-600 text-lg">
          QuickLaunch is dedicated to helping businesses launch beautiful, high-converting landing pages fast. Our mission is to simplify the process, empower creators, and deliver results.
        </p>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {aboutImages.map((src, idx) => (
            <div key={idx} className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`About image ${idx + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Description Sections */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 space-y-16 text-center md:text-left">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              To empower entrepreneurs and businesses to bring their ideas to life with fast, beautiful, and fully customizable landing pages.
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <Image src="/assets/about-us/mission.jpg" alt="Mission" fill className="object-cover" />
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg">
              To become the go-to platform for businesses of all sizes to quickly launch professional landing pages that convert and scale.
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <Image src="/assets/about-us/vision.jpg" alt="Vision" fill className="object-cover" />
          </div>
        </div>

        {/* Values */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">
              Innovation, simplicity, and customer success are at the core of everything we do. We strive to create tools that make life easier and drive measurable impact.
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <Image src="/assets/about-us/team.jpg" alt="Values" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
