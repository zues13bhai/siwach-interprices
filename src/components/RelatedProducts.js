import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ProductCard from './ProductCard';
import { enhancedProducts } from '../data/enhancedProducts';

export default function RelatedProducts({ currentProductId, category, className = '' }) {
  const relatedProducts = enhancedProducts
    .filter(product => 
      product.id !== currentProductId && 
      (product.category === category || product.featured)
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  const scrollLeft = () => {
    const container = document.getElementById('related-products-container');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('related-products-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className={`py-16 bg-gray-950 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              YOU MIGHT ALSO
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                LIKE
              </span>
            </h2>
            <p className="text-gray-400 font-light">
              Discover more products from our premium collection
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-3 bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors duration-200"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors duration-200"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div
          id="related-products-container"
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {relatedProducts.map((product, index) => (
            <div key={product.id} className="flex-shrink-0 w-80">
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}