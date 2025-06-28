import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Athletic Performance"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full opacity-60 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 left-16 w-1 h-1 bg-blue-400 rounded-full opacity-80 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Brand Mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="inline-block">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
                SIWACH
              </h1>
              <div className="flex items-center justify-center mt-2">
                <div className="h-px bg-white w-16 mr-4" />
                <p className="text-sm md:text-base font-light tracking-[0.3em] text-gray-300 uppercase">
                  ENTERPRISES
                </p>
                <div className="h-px bg-white w-16 ml-4" />
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
              BUILT FOR THE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-pulse">
                BOLD
              </span>
            </h2>
            <h3 className="text-2xl md:text-4xl font-light text-gray-300 tracking-wide">
              WORN BY THE DRIVEN
            </h3>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            From the streets of India to the global stage. Premium sportswear engineered 
            for champions who refuse to settle for ordinary.
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
              className="group relative px-12 py-4 bg-white text-black font-bold text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">SHOP NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
            
            <Link
              to="/products?category=new"
              className="group px-12 py-4 border-2 border-white text-white font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">JOIN THE MOVEMENT</span>
            </Link>
          </motion.div>

          {/* Brand Stats */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 pt-20 max-w-2xl mx-auto"
          >
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-300">100K+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">Global Athletes</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">Premium Products</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">Countries</div>
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
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Brand Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-4 right-4 text-xs text-gray-500 tracking-widest hidden lg:block"
      >
        MADE IN INDIA • BUILT FOR THE WORLD
      </motion.div>
    </section>
  );
}