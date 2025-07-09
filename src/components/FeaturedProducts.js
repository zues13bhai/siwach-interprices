import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getEnhancedFeaturedProducts } from '../data/enhancedProducts';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const products = getEnhancedFeaturedProducts();

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              Premium Collection
            </span>
          </div>
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-4 font-bold text-lg tracking-wide hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            VIEW ALL PRODUCTS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}