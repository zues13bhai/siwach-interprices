import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'men',
    name: "Men's Collection",
    description: 'Engineered for peak performance and urban style',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    href: '/products?category=men',
    featured: 'Velocity Pro Series',
    stats: '200+ Products'
  },
  {
    id: 'women',
    name: "Women's Collection",
    description: 'Where elegance meets athletic excellence',
    image: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    href: '/products?category=women',
    featured: 'Stealth Training Series',
    stats: '150+ Products'
  },
  {
    id: 'tech',
    name: 'Tech Collection',
    description: 'Revolutionary technology for the modern athlete',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    href: '/products?category=tech',
    featured: 'Quantum Series',
    stats: '50+ Products'
  },
  {
    id: 'new',
    name: 'New Arrivals',
    description: 'Latest innovations and cutting-edge designs',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    href: '/products?category=new',
    featured: 'Fresh Drops',
    stats: 'Weekly Updates'
  }
];

export default function CategoryShowcase() {
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
              Explore Collections
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            BUILT FOR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              CHAMPIONS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Discover premium collections designed for athletes who demand excellence in every detail.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden bg-black border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
                index === 0 ? 'md:col-span-2 md:h-96' : 'h-80'
              }`}
            >
              <Link to={category.href} className="block h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-end p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-blue-400 uppercase tracking-wider font-bold">
                        {category.featured}
                      </span>
                      <span className="text-xs text-gray-400">
                        {category.stats}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-300 max-w-md leading-relaxed font-light">
                      {category.description}
                    </p>

                    <div className="flex items-center gap-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                      <span className="font-bold">EXPLORE COLLECTION</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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