import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { removeFromCart, clearCart } from '../store/cartSlice';
import { TrashIcon } from '@heroicons/react/24/outline'; // ✅ Only used icon

export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveItem = (id, size) => {
    dispatch(removeFromCart({ id, size }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div>
              <h1 className="text-5xl font-black tracking-tight mb-6">
                YOUR CART IS
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  EMPTY
                </span>
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                Ready to gear up? Explore our premium collection and find your next performance essential.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-block bg-white text-black px-12 py-4 font-bold text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              START SHOPPING
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-5xl font-black tracking-tight mb-4">
                SHOPPING
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  CART
                </span>
              </h1>
              <p className="text-gray-400 font-light">
                {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            
            {items.length > 0 && (
              <button
                onClick={handleClearCart}
                className="mt-4 md:mt-0 text-red-400 hover:text-red-300 transition-colors duration-300 flex items-center gap-2"
              >
                <TrashIcon className="h-5 w-5" />
                Clear Cart
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900 border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full md:w-32 h-32 bg-gray-800 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                          <p className="text-gray-400 text-sm">Size: {item.size}</p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <p className="text-2xl font-black text-white">₹{item.totalPrice.toLocaleString()}</p>
                          <p className="text-sm text-gray-400">₹{item.price.toLocaleString()} each</p>
                        </div>
                      </div>

                      {/* Quantity and Remove */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-gray-400">Qty: {item.quantity}</span>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id, item.size)}
                          className="text-red-400 hover:text-red-300 transition-colors duration-300 flex items-center gap-2"
                        >
                          <TrashIcon className="h-5 w-5" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-900 border border-gray-800 p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-8">ORDER SUMMARY</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal ({totalQuantity} items)</span>
                    <span>₹{totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax</span>
                    <span>₹{Math.round(totalAmount * 0.18).toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between text-white text-xl font-bold">
                      <span>Total</span>
                      <span>₹{Math.round(totalAmount * 1.18).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-white text-black py-4 font-bold text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 block text-center"
                >
                  PROCEED TO BUY
                </Link>

                <Link
                  to="/products"
                  className="w-full mt-4 border-2 border-white text-white py-4 font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 block text-center"
                >
                  CONTINUE SHOPPING
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
