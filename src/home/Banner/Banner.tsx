'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import banner from '../../../public/assets/banner.jpg';
import { ArrowRight } from 'lucide-react';

const Banner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-16">
      {/* Decorative background gradient shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60 -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-60 translate-x-20 translate-y-20"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
            Launch Your Idea <br className="hidden md:block" /> <span className="text-indigo-600">Faster Than Ever</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            QuickLaunch helps you build and deploy stunning web apps in minutes —
            without worrying about setup, design, or deployment.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
            >
              Get Started Free <ArrowRight size={18} />
            </Link>
            <Link
              href="#learn-more"
              className="px-6 py-3 rounded-md border border-indigo-300 text-indigo-700 font-semibold hover:bg-indigo-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-10 lg:mb-0">
          <div className="relative w-[320px] sm:w-[400px] md:w-[480px] aspect-square">
            <Image
              src={banner}
              alt="QuickLaunch Illustration"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Subtle bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
