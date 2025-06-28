import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { logout } from '../store/authSlice';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Men', href: '/products?category=men' },
  { name: 'Women', href: '/products?category=women' },
  { name: 'Tech', href: '/products?category=tech' },
  { name: 'New', href: '/products?category=new' },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.totalQuantity);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <Link to="/" className="flex items-center">
                  <span className="text-2xl font-black text-white tracking-tighter">
                    SIWACH
                  </span>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:space-x-8">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-200 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Right Side Icons */}
              <div className="hidden md:flex md:items-center md:space-x-4">
                {/* Cart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link to="/cart" className="relative p-2 text-white hover:text-blue-400 transition-colors duration-200">
                    <ShoppingBagIcon className="h-6 w-6" />
                    {cartItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black bg-white rounded-full"
                      >
                        {cartItems}
                      </motion.span>
                    )}
                  </Link>
                </motion.div>

                {/* User Menu */}
                {isAuthenticated ? (
                  <Menu as="div" className="relative">
                    <Menu.Button className="bg-transparent rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2">
                      <UserIcon className="h-6 w-6 text-white" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-black border border-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <Link
                            to="/profile"
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-800"
                          >
                            Your Profile
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
                          >
                            Sign out
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <Link
                      to="/login"
                      className="bg-white text-black px-4 py-2 text-sm font-bold hover:bg-gray-100 transition-colors duration-200"
                    >
                      SIGN IN
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-800 pt-4 mt-4">
                <Link
                  to="/cart"
                  className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium flex items-center"
                >
                  <ShoppingBagIcon className="h-5 w-5 mr-2" />
                  Cart ({cartItems})
                </Link>
                {!isAuthenticated && (
                  <Link
                    to="/login"
                    className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}