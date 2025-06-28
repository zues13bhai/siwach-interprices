import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Marathon Runner',
    location: 'Mumbai, India',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'Siwach gear helped me break my personal record. The comfort and performance are unmatched. Every step feels like flying.',
    rating: 5
  },
  {
    id: 2,
    name: 'Arjun Patel',
    role: 'Fitness Influencer',
    location: 'Delhi, India',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'From the gym to the streets, Siwach delivers premium quality that matches my lifestyle. Absolutely love the urban aesthetic.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sneha Reddy',
    role: 'Yoga Instructor',
    location: 'Bangalore, India',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'The flexibility and breathability of Siwach activewear is perfect for my practice. It moves with me, not against me.',
    rating: 5
  },
  {
    id: 4,
    name: 'Rohit Kumar',
    role: 'Cricket Player',
    location: 'Chennai, India',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'Professional grade equipment that performs under pressure. Siwach understands what athletes need to excel.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            ATHLETE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              STORIES
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real athletes, real results. Discover how Siwach is transforming performance across India
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-gray-800 p-8 hover:border-gray-600 transition-all duration-300 group"
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-blue-400">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-black text-blue-400">4.9/5</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-purple-400">50K+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-green-400">98%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-yellow-400">1M+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Athletes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}