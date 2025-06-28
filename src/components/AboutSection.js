import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm font-bold tracking-[0.3em] text-blue-400 uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
                THE SIWACH
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  LEGACY
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                <strong className="text-white font-bold">Started in India. Built for the world.</strong> Siwach Enterprises 
                emerged from the bustling streets of Mumbai with a singular vision: to create premium sportswear 
                that embodies the relentless spirit of Indian athletes.
              </p>
              
              <p>
                We don't just manufacture products; we engineer experiences. Every stitch tells a story of 
                innovation, every design embodies the fusion of traditional Indian craftsmanship with 
                cutting-edge global technology.
              </p>
              
              <p>
                From local training grounds to international arenas, Siwach has become synonymous with 
                <strong className="text-blue-400"> performance</strong>, 
                <strong className="text-white"> authenticity</strong>, and 
                <strong className="text-blue-400"> bold ambition</strong>.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gray-900/50 border border-gray-800 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                "To empower every athlete with gear that doesn't just perform—it inspires. We're building 
                India's first global sports lifestyle brand, ready to collaborate with industry giants 
                like Adidas and Nike."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">2019</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">1M+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Retail Partners</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Siwach Athletes"
                className="w-full h-[600px] object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Brand Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white text-black px-4 py-2 font-bold tracking-wider"
              >
                MADE IN INDIA
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-blue-500 text-white px-4 py-2 font-bold tracking-wider"
              >
                GLOBAL VISION
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center space-y-4 p-6 border border-gray-800 bg-gray-900/30 hover:border-gray-600 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Innovation</h3>
            <p className="text-gray-400">Pushing boundaries with cutting-edge technology and design</p>
          </div>

          <div className="text-center space-y-4 p-6 border border-gray-800 bg-gray-900/30 hover:border-gray-600 transition-colors duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Quality</h3>
            <p className="text-gray-400">Premium materials and craftsmanship in every product</p>
          </div>

          <div className="text-center space-y-4 p-6 border border-gray-800 bg-gray-900/30 hover:border-gray-600 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Community</h3>
            <p className="text-gray-400">Building a global network of athletes and dreamers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}