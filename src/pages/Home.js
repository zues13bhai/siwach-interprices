import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  getFeaturedProducts, 
  getBestsellerProducts, 
  getTechProducts, 
  getNewProducts,
  getProductsByCategory 
} from '../data/products';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3 }
};

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 6);
  const bestsellerProducts = getBestsellerProducts().slice(0, 4);
  const techProducts = getTechProducts().slice(0, 4);
  const newProducts = getNewProducts().slice(0, 4);
  const menProducts = getProductsByCategory('running').slice(0, 3);
  const womenProducts = getProductsByCategory('lifestyle').slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://source.unsplash.com/1920x1080/?athletic,sports,premium,modern"
            alt="Premium Athletic Wear"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            BUILT FOR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              CHAMPIONS
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover premium athletic gear designed for those who refuse to settle for ordinary
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/products?category=running"
              className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop Men
            </Link>
            <Link
              to="/products?category=lifestyle"
              className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Shop Women
            </Link>
            <Link
              to="/products?category=tech"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Tech
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Top Deals Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              🔥 TOP DEALS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Limited time offers on our most popular products
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {bestsellerProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                {...scaleOnHover}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save ₹{product.originalPrice - product.price}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-gray-900">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              SHOP BY CATEGORY
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect gear for your athletic journey
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Men's Section */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8"
              {...fadeInUp}
              {...scaleOnHover}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black text-gray-900">🧍‍♂️ MEN'S COLLECTION</h3>
                <Link
                  to="/products?category=running"
                  className="text-blue-600 font-bold hover:text-blue-800 transition-colors"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {menProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{product.name}</h4>
                    <p className="text-gray-600 text-xs mb-2">{product.description.slice(0, 50)}...</p>
                    <span className="text-lg font-black text-blue-600">₹{product.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Women's Section */}
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8"
              {...fadeInUp}
              {...scaleOnHover}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black text-gray-900">👩‍🦰 WOMEN'S COLLECTION</h3>
                <Link
                  to="/products?category=lifestyle"
                  className="text-purple-600 font-bold hover:text-purple-800 transition-colors"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {womenProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{product.name}</h4>
                    <p className="text-gray-600 text-xs mb-2">{product.description.slice(0, 50)}...</p>
                    <span className="text-lg font-black text-purple-600">₹{product.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Products Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              🚀 TECH COLLECTION
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technology to enhance your performance
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {techProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                {...scaleOnHover}
                className="bg-gray-800 rounded-2xl overflow-hidden group border border-gray-700"
              >
                <div className="relative">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-white">₹{product.price.toLocaleString()}</span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              🆕 NEW ARRIVALS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh drops and latest innovations just landed
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {newProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                {...scaleOnHover}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group relative"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>
                <div className="relative">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    {product.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-gray-900">₹{product.price.toLocaleString()}</span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors"
                    >
                      New!
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              READY TO ELEVATE YOUR GAME?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of athletes who trust our premium gear to push their limits
            </p>
            <Link
              to="/products"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 text-xl font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              SHOP ALL PRODUCTS
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}