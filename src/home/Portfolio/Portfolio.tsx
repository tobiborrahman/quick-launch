'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Foodify — Restaurant Website',
    description:
      'A sleek, high-converting restaurant landing page with integrated online ordering system.',
    image: '/assets/portfolio-1.jpg',
    link: '/portfolio/foodify',
  },
  {
    title: 'StyleNest — Clothing Brand Store',
    description:
      'Modern eCommerce landing built for fashion brands with seamless cart experience.',
    image: '/assets/portfolio-2.jpg',
    link: '/portfolio/stylenest',
  },
  {
    title: 'StartupHub — Business Launch Platform',
    description:
      'All-in-one startup toolkit landing page for entrepreneurs and small businesses.',
    image: '/assets/portfolio-3.jpg',
    link: '/portfolio/startuphub',
  },
  {
    title: 'DevPro — Web Development Agency',
    description:
      'Agency website highlighting web development, app design, and consulting services.',
    image: '/assets/portfolio-4.jpg',
    link: '/portfolio/devpro',
  },
  {
    title: 'DesignIQ — UI/UX Studio',
    description:
      'Creative agency landing showcasing stunning design portfolios and client success stories.',
    image: '/assets/portfolio-5.jpg',
    link: '/portfolio/designiq',
  },
  {
    title: 'MarketWave — Digital Marketing Firm',
    description:
      'Lead-generating landing page optimized for ad campaigns and marketing conversions.',
    image: '/assets/portfolio-6.jpg',
    link: '/portfolio/marketwave',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative bg-white py-20 overflow-hidden"
    >
      {/* background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-70 translate-x-20 -translate-y-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-70 -translate-x-20 translate-y-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-indigo-600">Portfolio</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Explore some of our best projects — built with passion, precision, and purpose.
        </p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(({ title, description, image, link }) => (
            <div
              key={title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="relative w-full h-56">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <Link
                  href={link}
                  className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
