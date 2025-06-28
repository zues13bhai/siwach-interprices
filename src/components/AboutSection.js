import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                THE SIWACH
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  LEGACY
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8" />
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Born from the streets of India, <strong className="text-white">Siwach Enterprises</strong> represents 
                the relentless spirit of those who dare to dream beyond boundaries. We don't just create sportswear; 
                we craft armor for the ambitious.
              </p>
              
              <p>
                Every stitch tells a story of innovation. Every design embodies the fusion of traditional Indian 
                craftsmanship with cutting-edge technology. We believe that greatness isn't just achieved—it's worn.
              </p>
              
              <p>
                From the bustling training grounds of Mumbai to the global stage, Siwach has become synonymous 
                with <strong className="text-blue-400">performance</strong>, <strong className="text-purple-400">style</strong>, 
                and <strong className="text-green-400">authenticity</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">2019</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-400 mb-2">1M+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-400 mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Stores</div>
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
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white text-black px-4 py-2 font-bold"
              >
                MADE IN INDIA
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 font-bold"
              >
                GLOBAL IMPACT
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-4xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-300 leading-relaxed">
            "We don't just equip athletes. We empower dreamers, fuel ambitions, and celebrate the 
            relentless pursuit of excellence that defines the human spirit."
          </blockquote>
          <div className="mt-6 text-lg font-bold text-blue-400">
            — Siwach Enterprises Mission
          </div>
        </motion.div>
      </div>
    </section>
  );
}