'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactPage: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState<
		'idle' | 'sending' | 'success' | 'error'
	>('idle');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('sending');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (!res.ok) throw new Error('Failed');

			// setStatus('success');
			toast.success('Message sent successfully!');
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			console.error(error);
			// setStatus('error');
			toast.error('Something went wrong. Please try again.');
		}
	};

	return (
		<main className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen overflow-hidden">
			{/* Full-width Banner */}
			<section className="w-full bg-indigo-600 pt-36 pb-20 text-center relative overflow-hidden">
				<div className="absolute top-0 left-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-50 -translate-x-16 -translate-y-16"></div>
				<div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-50 translate-x-16 translate-y-16"></div>
				<h1 className="text-5xl md:text-6xl font-bold text-white z-10 relative">
					Contact <span className="text-yellow-300">QuickLaunch</span>
				</h1>
				<p className="text-white text-lg mt-4 z-10 relative">
					We’re here to help. Send us a message or reach out directly!
				</p>
			</section>

			{/* Contact Section */}
			<section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
				{/* Contact Form */}
				<div>
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Send a <span className="text-indigo-600">Message</span>
					</h2>
					<p className="text-gray-600 mb-8">
						Fill out the form below and we will get back to you as
						soon as possible.
					</p>

					<form
						onSubmit={handleSubmit}
						className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6"
					>
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
							{status === 'sending'
								? 'Sending...'
								: 'Send Message'}
						</button>
						{/* Status Message */}
						{status === 'success' && (
							<p className="text-indigo-600 font-medium -mt-4">
								Message sent successfully!
							</p>
						)}
						{status === 'error' && (
							<p className="text-red-600 font-medium">
								Something went wrong. Please try again.
							</p>
						)}
					</form>
				</div>

				{/* Contact Info */}
				<div className="flex flex-col justify-center gap-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Contact Info
					</h2>
					<div className="text-gray-600 text-lg flex flex-col gap-4">
						<div>
							<span className="font-semibold text-gray-900">
								Phone:
							</span>{' '}
							+8801316433225
						</div>
						<div>
							<span className="font-semibold text-gray-900">
								Address:
							</span>{' '}
							Dhaka, Bangladesh
						</div>
						<div>
							<span className="font-semibold text-gray-900">
								Email:
							</span>{' '}
							info@quicklaunch.com
						</div>
					</div>

					{/* Embedded Map */}
					<div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.914870103001!2d90.392102!3d23.810331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85d5f2c02c5%3A0x3f3d1f2d1c8a4e8c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1692020800000!5m2!1sen!2sus"
							width="100%"
							height="100%"
							allowFullScreen
							loading="lazy"
							className="border-0"
						></iframe>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ContactPage;
