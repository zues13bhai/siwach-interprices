import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Athletic Performance"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
              SIWACH
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-widest text-gray-300">
              ENTERPRISES
            </p>
          </motion.div>

          {/* Slogan */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            BUILT FOR THE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              BOLD
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Unleash your potential with premium sportswear designed for champions. 
            Where performance meets style, and dreams become reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Link
              to="/products"
              className="group relative px-12 py-4 bg-white text-black font-bold text-lg rounded-none hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">SHOP NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
            
            <Link
              to="/products?category=new"
              className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-none hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              NEW ARRIVALS
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-400">50K+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Athletes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-purple-400">100+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-green-400">25+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Countries</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}