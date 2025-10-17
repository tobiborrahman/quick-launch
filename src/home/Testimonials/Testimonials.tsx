'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Leo Johnson',
    role: 'Founder',
    company: 'Foodify',
    image: '/assets/man-1.jpg',
    quote:
      'QuickLaunch helped us launch our restaurant website in just two days. The design looks professional and mobile-friendly!',
  },
  {
    name: 'Daniel Kim',
    role: 'CEO',
    company: 'StyleNest',
    image: '/assets/man-2.jpg',
    quote:
      'An absolute game-changer. Our clothing brand got online fast — everything was intuitive and smooth.',
  },
  {
    name: 'Henry Roberts',
    role: 'Startup Consultant',
    company: 'BizUp',
    image: '/assets/man-3.jpg',
    quote:
      'QuickLaunch is the perfect choice for startups. I use it for all my clients to get their MVPs live fast!',
  },
  {
    name: 'Ahmed Ali',
    role: 'CTO',
    company: 'DevPro',
    image: '/assets/man-4.jpg',
    quote:
      'Their template saved our dev team days of setup time. Clean, scalable, and looks amazing.',
  },
  {
    name: 'Andrew Martin',
    role: 'Designer',
    company: 'DesignIQ',
    image: '/assets/man-5.jpg',
    quote:
      'As a designer, I love how customizable QuickLaunch is. I can adjust layouts quickly without coding headaches.',
  },
  {
    name: 'James Cooper',
    role: 'Marketing Lead',
    company: 'MarketWave',
    image: '/assets/man-6.jpg',
    quote:
      'Perfect for marketing teams. Easy to deploy landing pages that actually convert!',
  },
  {
    name: 'Hannah Lee',
    role: 'Freelancer',
    company: 'Self-employed',
    image: '/assets/man-7.jpg',
    quote:
      'QuickLaunch gave me the tools to showcase my freelance portfolio beautifully and professionally.',
  },
  {
    name: 'Michael Carter',
    role: 'Founder',
    company: 'StartupHub',
    image: '/assets/man-8.jpg',
    quote:
      'This is the fastest I’ve ever built and launched a startup website. Amazing workflow!',
  },
  {
    name: 'Alban Garcia',
    role: 'Marketing Strategist',
    company: 'AdVision',
    image: '/assets/man-9.jpg',
    quote:
      'Highly recommend for digital marketers. Everything is plug-and-play, yet visually stunning.',
  },
  {
    name: 'Carlos Fernandez',
    role: 'Entrepreneur',
    company: 'LaunchCo',
    image: '/assets/man-10.jpg',
    quote:
      'QuickLaunch lives up to its name — I was online within hours, and the support team was excellent!',
  },
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown = true;
    scrollRef.current.classList.add('grabbing');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    if (scrollRef.current) scrollRef.current.classList.remove('grabbing');
  };

  const handleMouseUp = () => {
    isDown = false;
    if (scrollRef.current) scrollRef.current.classList.remove('grabbing');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 overflow-hidden"
    >
      {/* Gradient bubbles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60 translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 -translate-x-16 translate-y-16"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our <span className="text-indigo-600">Clients Say</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Hear from entrepreneurs, designers, and marketers who launched their dreams with QuickLaunch.
        </p>

        {/* Carousel container */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full hover:bg-indigo-50 transition hidden sm:block"
          >
            <ChevronLeft className="text-indigo-600" size={24} />
          </button>

          {/* Scrollable wrapper */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-scroll scroll-smooth pb-4 select-none cursor-grab active:cursor-grabbing hide-scrollbar"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">“{t.quote}”</p>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full hover:bg-indigo-50 transition hidden sm:block"
          >
            <ChevronRight className="text-indigo-600" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
