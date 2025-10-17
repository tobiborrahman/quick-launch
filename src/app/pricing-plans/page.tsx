'use client';

import React from 'react';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$19',
    period: 'per month',
    features: [
      '1 Landing Page',
      'Basic Support',
      'Limited Templates',
    ],
  },
  {
    title: 'Pro',
    price: '$49',
    period: 'per month',
    features: [
      '5 Landing Pages',
      'Priority Support',
      'All Templates',
      'Analytics Dashboard',
    ],
  },
  {
    title: 'Enterprise',
    price: '$99',
    period: 'per month',
    features: [
      'Unlimited Landing Pages',
      'Dedicated Support',
      'Custom Templates',
      'Advanced Analytics',
      'Team Collaboration',
    ],
  },
];

const PricingPage: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen pt-36 pb-20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60 translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 -translate-x-16 translate-y-16"></div>

      {/* Hero */}
      <section className="text-center mb-16 px-6 md:px-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Choose the <span className="text-indigo-600">Perfect Plan</span> for Your Business
        </h1>
        <p className="text-gray-600 text-lg">
          Flexible pricing to fit businesses of all sizes. Launch your ideas faster with QuickLaunch.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{plan.title}</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
              <span className="text-gray-600 ml-1">{plan.period}</span>
            </div>

            <ul className="flex-1 mb-6 space-y-2 text-gray-600">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-indigo-600">✔</span> {f}
                </li>
              ))}
            </ul>

            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
        ))}
      </section>

      {/* Optional CTA */}
      <section className="text-center mt-20 px-6 md:px-10 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which plan?</h3>
        <p className="text-gray-600 mb-6">Contact us and we’ll help you pick the best plan for your business.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
        >
          Contact Sales
        </a>
      </section>
    </main>
  );
};

export default PricingPage;
