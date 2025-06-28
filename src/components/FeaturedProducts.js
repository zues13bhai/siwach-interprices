import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Siwach X Velocity Pro',
    category: 'Running Shoes',
    price: '₹8,999',
    originalPrice: '₹12,999',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'BESTSELLER',
    description: 'Ultra-lightweight performance running shoes with advanced cushioning technology'
  },
  {
    id: 2,
    name: 'Urban Strike Hoodie',
    category: 'Streetwear',
    price: '₹4,999',
    originalPrice: '₹6,999',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'NEW DROP',
    description: 'Premium cotton blend hoodie with signature Siwach branding'
  },
  {
    id: 3,
    name: 'Elite Performance Shorts',
    category: 'Training Gear',
    price: '₹2,999',
    originalPrice: '₹3,999',
    image: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'LIMITED',
    description: 'Moisture-wicking training shorts designed for peak performance'
  },
  {
    id: 4,
    name: 'Quantum Fitness Tracker',
    category: 'Sports Tech',
    price: '₹15,999',
    originalPrice: '₹19,999',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'TECH',
    description: 'Advanced fitness tracking with AI-powered performance insights'
  },
  {
    id: 5,
    name: 'Stealth Training Jacket',
    category: 'Outerwear',
    price: '₹6,999',
    originalPrice: '₹8,999',
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'PREMIUM',
    description: 'Weather-resistant training jacket with thermal regulation'
  },
  {
    id: 6,
    name: 'Power Grip Gloves',
    category: 'Accessories',
    price: '₹1,999',
    originalPrice: '₹2,499',
    image: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'ESSENTIAL',
    description: 'Professional-grade training gloves with enhanced grip technology'
  },
  {
    id: 7,
    name: 'Apex Training Tights',
    category: 'Compression Wear',
    price: '₹3,499',
    originalPrice: '₹4,999',
    image: 'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'PRO',
    description: 'Compression tights with muscle support and recovery technology'
  },
  {
    id: 8,
    name: 'Sonic Wireless Earbuds',
    category: 'Audio Tech',
    price: '₹7,999',
    originalPrice: '₹9,999',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'WIRELESS',
    description: 'Premium wireless earbuds designed for athletes and fitness enthusiasts'
  }
];

export default function FeaturedProducts() {
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
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-black border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-white text-black px-3 py-1 text-xs font-bold tracking-wider">
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-4">
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-white text-black px-6 py-2 font-bold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                    >
                      VIEW
                    </Link>
                    <button className="bg-transparent border-2 border-white text-white px-6 py-2 font-bold hover:bg-white hover:text-black transition-colors duration-200 transform hover:scale-105">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div className="text-xs text-blue-400 uppercase tracking-wider font-bold">
                  {product.category}
                </div>
                <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xl font-black text-white">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>
              </div>
            </motion.div>
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