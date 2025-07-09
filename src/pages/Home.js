import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getFeaturedProducts, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const menProducts = getProductsByCategory('men').slice(0, 4);
  const womenProducts = getProductsByCategory('women').slice(0, 4);
  const techProducts = getProductsByCategory('tech').slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Athletic Performance"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="mb-12">
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

            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
                BUILT FOR THE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-pulse">
                  BOLD
                </span>
              </h2>
              <h3 className="text-2xl md:text-4xl font-light text-gray-300 tracking-wide">
                WORN BY THE DRIVEN
              </h3>
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              From the streets of India to the global stage. Premium sportswear engineered 
              for champions who refuse to settle for ordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
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
                <span className="relative z-10">NEW ARRIVALS</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              FEATURED
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                PRODUCTS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Engineered for excellence. Designed for champions. Discover our most coveted pieces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Men's Collection */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                MEN'S
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  COLLECTION
                </span>
              </h2>
              <p className="text-gray-400 font-light">
                Premium athletic wear designed for peak performance
              </p>
            </div>
            <Link
              to="/products?category=men"
              className="hidden md:inline-block bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition-colors duration-300"
            >
              VIEW ALL
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Women's Collection */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                WOMEN'S
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  COLLECTION
                </span>
              </h2>
              <p className="text-gray-400 font-light">
                Empowering athletic elegance for the modern woman
              </p>
            </div>
            <Link
              to="/products?category=women"
              className="hidden md:inline-block bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition-colors duration-300"
            >
              VIEW ALL
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {womenProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Collection */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                TECH
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  COLLECTION
                </span>
              </h2>
              <p className="text-gray-400 font-light">
                Innovation meets performance in cutting-edge technology
              </p>
            </div>
            <Link
              to="/products?category=tech"
              className="hidden md:inline-block bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition-colors duration-300"
            >
              VIEW ALL
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}