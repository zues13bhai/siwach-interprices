import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Marathon Runner',
    location: 'Mumbai, India',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'Siwach gear helped me break my personal record at the Mumbai Marathon. The comfort and performance are unmatched—every step feels effortless.',
    rating: 5,
    achievement: 'Personal Best: 2:45:30'
  },
  {
    id: 2,
    name: 'Arjun Patel',
    role: 'Fitness Influencer',
    location: 'Delhi, India',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'From the gym to the streets, Siwach delivers premium quality that matches my lifestyle. The urban aesthetic is absolutely fire.',
    rating: 5,
    achievement: '2.5M Followers'
  },
  {
    id: 3,
    name: 'Sneha Reddy',
    role: 'Yoga Instructor',
    location: 'Bangalore, India',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'The flexibility and breathability of Siwach activewear is perfect for my practice. It moves with me, not against me.',
    rating: 5,
    achievement: 'Certified Instructor'
  },
  {
    id: 4,
    name: 'Rohit Kumar',
    role: 'Cricket Player',
    location: 'Chennai, India',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'Professional-grade equipment that performs under pressure. Siwach understands what athletes need to excel at the highest level.',
    rating: 5,
    achievement: 'State Team Captain'
  }
];

const brandPartners = [
  { name: 'Adidas', logo: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Nike', logo: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Puma', logo: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Under Armour', logo: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=200' }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-bold tracking-[0.3em] text-blue-400 uppercase">
              Social Proof
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            ATHLETE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              STORIES
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Real athletes, real results. Discover how Siwach is transforming performance across India and beyond.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-gray-800 p-8 hover:border-gray-600 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-500/10"
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
              <blockquote className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300 font-light">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
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
                <div className="text-right">
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Achievement</div>
                  <div className="text-sm text-white font-bold">{testimonial.achievement}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Partners */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {brandPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-300 group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
        >
          <div className="space-y-2">
            <div className="text-4xl font-black text-blue-400">4.9/5</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-white">100K+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Reviews</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-blue-400">98%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-white">1M+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Athletes</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}