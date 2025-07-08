import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/products';

const categories = [
  { id: 'all', name: 'All Products', count: 16 },
  { id: 'men', name: "Men's Collection", count: 4 },
  { id: 'women', name: "Women's Collection", count: 4 },
  { id: 'tech', name: 'Tech & Accessories', count: 4 },
  { id: 'new', name: 'New Arrivals', count: 4 }
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'newest', name: 'Newest First' },
  { id: 'rating', name: 'Highest Rated' }
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setSelectedCategory(category);
    
    let filteredProducts = getProductsByCategory(category);
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    setProducts(filteredProducts);
  }, [searchParams, sortBy]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

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
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              {currentCategory?.name.toUpperCase() || 'ALL PRODUCTS'}
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Discover premium sportswear and tech designed for champions. 
              Every piece engineered for performance and style.
            </p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 font-bold text-sm tracking-wider transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-white text-black'
                    : 'border-2 border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Sort Options */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-between items-center border-b border-gray-800 pb-6"
          >
            <div className="text-gray-400">
              Showing {products.length} products
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-900 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          {/* Empty State */}
          {products.length === 0 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your filters or browse all products.</p>
              <button
                onClick={() => handleCategoryChange('all')}
                className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                VIEW ALL PRODUCTS
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}