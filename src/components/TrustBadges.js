import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  TruckIcon, 
  CreditCardIcon, 
  ChatBubbleLeftRightIcon,
  StarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const trustFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Secure Payments',
    description: '256-bit SSL encryption',
    color: 'text-green-400'
  },
  {
    icon: TruckIcon,
    title: 'Free Shipping',
    description: 'On orders above ₹999',
    color: 'text-blue-400'
  },
  {
    icon: CreditCardIcon,
    title: 'Easy Returns',
    description: '30-day return policy',
    color: 'text-purple-400'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: '24/7 Support',
    description: 'Expert customer care',
    color: 'text-orange-400'
  },
  {
    icon: StarIcon,
    title: 'Premium Quality',
    description: 'Verified by athletes',
    color: 'text-yellow-400'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Shipping',
    description: 'Worldwide delivery',
    color: 'text-indigo-400'
  }
];

export default function TrustBadges({ className = '' }) {
  return (
    <section className={`py-16 bg-gray-950 border-t border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Choose Siwach Enterprises?
          </h2>
          <p className="text-gray-400 font-light">
            Trusted by athletes worldwide for premium quality and exceptional service
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-4 bg-gray-900 border border-gray-800 group-hover:border-gray-600 transition-colors duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-white font-bold text-sm mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800"
        >
          <div className="text-center">
            <div className="text-3xl font-black text-blue-400 mb-2">1M+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-white mb-2">500+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Premium Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-400 mb-2">50+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-white mb-2">4.9★</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}