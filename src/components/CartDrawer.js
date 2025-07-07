import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CartDrawer({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveItem = (id, size) => {
    dispatch(removeFromCart({ id, size }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-black shadow-xl border-l border-gray-800">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-2xl font-black text-white">
                          SHOPPING CART
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-300"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {items.length === 0 ? (
                            <div className="text-center py-12">
                              <p className="text-gray-400 mb-6">Your cart is empty</p>
                              <Link
                                to="/products"
                                onClick={() => setIsOpen(false)}
                                className="bg-white text-black px-6 py-3 font-bold hover:bg-gray-100 transition-colors duration-300"
                              >
                                START SHOPPING
                              </Link>
                            </div>
                          ) : (
                            <>
                              <div className="flex items-center justify-between mb-6">
                                <span className="text-sm text-gray-400">
                                  {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
                                </span>
                                <button
                                  onClick={handleClearCart}
                                  className="text-red-400 hover:text-red-300 text-sm transition-colors duration-300"
                                >
                                  Clear All
                                </button>
                              </div>

                              <ul className="-my-6 divide-y divide-gray-800">
                                {items.map((item, index) => (
                                  <motion.li
                                    key={`${item.id}-${item.size}`}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex py-6"
                                  >
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-gray-900 border border-gray-800">
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-white">
                                          <h3>
                                            <Link 
                                              to={`/product/${item.id}`}
                                              onClick={() => setIsOpen(false)}
                                              className="hover:text-blue-400 transition-colors duration-300"
                                            >
                                              {item.name}
                                            </Link>
                                          </h3>
                                          <p className="ml-4">₹{item.totalPrice.toLocaleString()}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-400">Size: {item.size}</p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-400">Qty {item.quantity}</p>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            onClick={() => handleRemoveItem(item.id, item.size)}
                                            className="font-medium text-red-400 hover:text-red-300 transition-colors duration-300"
                                          >
                                            <TrashIcon className="h-4 w-4" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {items.length > 0 && (
                      <div className="border-t border-gray-800 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-white mb-4">
                          <p>Subtotal</p>
                          <p>₹{totalAmount.toLocaleString()}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-400 mb-6">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="space-y-3">
                          <Link
                            to="/checkout"
                            onClick={() => setIsOpen(false)}
                            className="flex justify-center items-center w-full bg-white text-black px-6 py-3 font-bold text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                          >
                            CHECKOUT
                          </Link>
                          <Link
                            to="/cart"
                            onClick={() => setIsOpen(false)}
                            className="flex justify-center items-center w-full border-2 border-white text-white px-6 py-3 font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                          >
                            VIEW CART
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-400">
                          <p>
                            or{' '}
                            <button
                              type="button"
                              className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}