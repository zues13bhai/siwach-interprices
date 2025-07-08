import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import ProductBadge from './ProductBadge';
import StarRating from './StarRating';

export default function QuickView({ product, isOpen, onClose }) {
  const dispatch = useDispatch();

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0]
    }));
    onClose();
  };

  const averageRating = product.reviews?.length > 0 
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length 
    : 0;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden bg-black border border-gray-800 text-left align-middle shadow-xl transition-all">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <ProductBadge badge={product.badge} />
                      </div>
                    )}
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors duration-200"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-8 space-y-6">
                    <div>
                      <div className="text-xs text-blue-400 uppercase tracking-wider font-bold mb-2">
                        {product.category}
                      </div>
                      <h2 className="text-2xl font-black text-white mb-4">
                        {product.name}
                      </h2>
                      
                      {product.reviews?.length > 0 && (
                        <div className="flex items-center gap-2 mb-4">
                          <StarRating rating={averageRating} size="sm" />
                          <span className="text-sm text-gray-400">
                            ({product.reviews.length} reviews)
                          </span>
                        </div>
                      )}

                      <p className="text-gray-300 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-black text-white">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    {product.features && (
                      <div>
                        <h4 className="text-white font-bold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-gray-300 flex items-start text-sm">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="space-y-3 pt-4">
                      <button
                        onClick={handleAddToCart}
                        className="w-full bg-white text-black py-4 font-bold text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <ShoppingBagIcon className="h-5 w-5" />
                        ADD TO CART
                      </button>
                      
                      <div className="flex gap-3">
                        <button className="flex-1 border-2 border-white text-white py-3 font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                          <HeartIcon className="h-5 w-5" />
                          WISHLIST
                        </button>
                        <button
                          onClick={onClose}
                          className="flex-1 border-2 border-gray-600 text-gray-400 py-3 font-bold hover:border-gray-500 hover:text-gray-300 transition-all duration-300"
                        >
                          VIEW DETAILS
                        </button>
                      </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="text-sm text-gray-400 pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-400">✅</span>
                        Free delivery on orders above ₹999
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400">🚚</span>
                        {product.deliveryEstimate || 'Fast delivery available'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}