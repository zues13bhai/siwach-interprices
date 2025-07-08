import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { XMarkIcon, TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { closeCart, removeFromCart, updateQuantity } from '../store/cartSlice';

export default function CartDrawer() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount, isOpen } = useSelector((state) => state.cart);

  const handleUpdateQuantity = (id, size, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart({ id, size }));
    } else {
      dispatch(updateQuantity({ id, size, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id, size) => {
    dispatch(removeFromCart({ id, size }));
  };

  const handleClose = () => {
    dispatch(closeCart());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-black border-l border-gray-800 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white">
                CART ({totalQuantity})
              </h2>
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">Your cart is empty</div>
                  <button
                    onClick={handleClose}
                    className="bg-white text-black px-6 py-3 font-bold hover:bg-gray-100 transition-colors duration-300"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.size}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 bg-gray-900 p-4 border border-gray-800"
                    >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover bg-gray-800"
                      />

                      {/* Product Details */}
                      <div className="flex-1 space-y-2">
                        <h4 className="text-white font-bold text-sm leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-xs">Size: {item.size}</p>
                        <p className="text-white font-bold">
                          ₹{item.totalPrice.toLocaleString()}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.size, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                            >
                              <MinusIcon className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-white font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.size, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                            >
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => handleRemoveItem(item.id, item.size)}
                            className="text-red-400 hover:text-red-300 transition-colors duration-200"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-800 p-6 space-y-4">
                <div className="flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span>₹{totalAmount.toLocaleString()}</span>
                </div>
                
                <div className="space-y-3">
                  <Link
                    to="/cart"
                    onClick={handleClose}
                    className="w-full bg-white text-black py-3 font-bold text-center block hover:bg-gray-100 transition-colors duration-300"
                  >
                    VIEW CART
                  </Link>
                  <Link
                    to="/checkout"
                    onClick={handleClose}
                    className="w-full border-2 border-white text-white py-3 font-bold text-center block hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    CHECKOUT
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}