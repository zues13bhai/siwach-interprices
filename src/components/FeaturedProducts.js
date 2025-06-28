import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Siwach X Velocity Runners',
    price: '₹4,999',
    originalPrice: '₹6,999',
    category: 'Running Shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'BESTSELLER'
  },
  {
    id: 2,
    name: 'Urban Strike Hoodie',
    price: '₹2,499',
    originalPrice: '₹3,499',
    category: 'Streetwear',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'NEW'
  },
  {
    id: 3,
    name: 'Elite Performance Shorts',
    price: '₹1,999',
    originalPrice: '₹2,799',
    category: 'Training',
    image: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'LIMITED'
  },
  {
    id: 4,
    name: 'Quantum Fitness Tracker',
    price: '₹8,999',
    originalPrice: '₹12,999',
    category: 'Tech',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'TECH'
  },
  {
    id: 5,
    name: 'Stealth Training Jacket',
    price: '₹3,999',
    originalPrice: '₹5,499',
    category: 'Outerwear',
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'PREMIUM'
  },
  {
    id: 6,
    name: 'Power Grip Gloves',
    price: '₹1,299',
    originalPrice: '₹1,899',
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'ESSENTIAL'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            FEATURED
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              COLLECTION
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our most coveted pieces, engineered for peak performance and unmatched style
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-black border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white text-black px-3 py-1 text-xs font-bold tracking-wider">
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-white text-black px-6 py-2 font-bold hover:bg-gray-100 transition-colors duration-200"
                    >
                      VIEW
                    </Link>
                    <button className="bg-transparent border-2 border-white text-white px-6 py-2 font-bold hover:bg-white hover:text-black transition-colors duration-200">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-white">
                    {product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            VIEW ALL PRODUCTS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}