import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { searchEnhancedProducts } from '../data/enhancedProducts';

export default function SearchBar({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        const searchResults = searchEnhancedProducts(query).slice(0, 6);
        setResults(searchResults);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);

  const handleClose = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
      onClick={handleClose}
    >
      <div className="max-w-4xl mx-auto px-4 pt-20">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 border border-gray-700 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center p-6 border-b border-gray-700">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 mr-4" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products, categories, or brands..."
              className="flex-1 bg-transparent text-white text-xl placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={handleClose}
              className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading && (
              <div className="p-6 text-center">
                <div className="animate-spin w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full mx-auto"></div>
                <p className="text-gray-400 mt-2">Searching...</p>
              </div>
            )}

            {!isLoading && query.length > 2 && results.length === 0 && (
              <div className="p-6 text-center">
                <p className="text-gray-400">No products found for "{query}"</p>
              </div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="p-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Search Results ({results.length})
                </h3>
                <div className="space-y-4">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={handleClose}
                      className="group flex items-center gap-4 p-3 hover:bg-gray-800 transition-colors duration-200"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover bg-gray-800"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors duration-200">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-400 line-clamp-1">
                          {product.description}
                        </p>
                        <p className="text-lg font-bold text-white mt-1">
                          ₹{product.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-xs text-blue-400 uppercase tracking-wider font-bold">
                        {product.category}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {query.length <= 2 && (
              <div className="p-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Running Shoes', 'Hoodies', 'Fitness Tracker', 'Training Shorts', 'Wireless Earbuds'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}