import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function ProductCard({ product, index = 0 }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes ? product.sizes[0] : 'One Size'
    };
    
    dispatch(addToCart(cartItem));
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-black border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white text-black px-3 py-1 text-xs font-bold tracking-wider">
            {product.badge}
          </span>
        </div>
      )}

      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold">
            -{discountPercentage}%
          </span>
        </div>
      )}

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
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
              <button 
                onClick={handleAddToCart}
                className="bg-transparent border-2 border-white text-white px-6 py-2 font-bold hover:bg-white hover:text-black transition-colors duration-200 transform hover:scale-105"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div className="text-xs text-blue-400 uppercase tracking-wider font-bold">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors duration-300 leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-400 leading-relaxed">
          {product.headline}
        </p>
        
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        )}

        <div className="flex items-center gap-3 pt-2">
          <span className="text-xl font-black text-white">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 bg-white text-black py-3 font-bold text-center hover:bg-gray-100 transition-colors duration-300"
          >
            BUY NOW
          </Link>
          <button
            onClick={handleAddToCart}
            className="flex-1 border-2 border-white text-white py-3 font-bold hover:bg-white hover:text-black transition-colors duration-300"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </motion.div>
  );
}