import React, { useState, Fragment } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon, FunnelIcon, EyeIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, StarIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { getEnhancedProductsByCategory, enhancedProducts } from '../data/enhancedProducts';

const sortOptions = [
  { name: 'Most Popular', value: 'popular', current: true },
  { name: 'Best Rating', value: 'rating', current: false },
  { name: 'Newest', value: 'newest', current: false },
  { name: 'Price: Low to High', value: 'price-asc', current: false },
  { name: 'Price: High to Low', value: 'price-desc', current: false },
];

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'men', label: 'Men', checked: false },
      { value: 'women', label: 'Women', checked: false },
      { value: 'tech', label: 'Tech', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'Price Range',
    options: [
      { value: '0-5000', label: 'Under ₹5,000', checked: false },
      { value: '5000-10000', label: '₹5,000 - ₹10,000', checked: false },
      { value: '10000-15000', label: '₹10,000 - ₹15,000', checked: false },
      { value: '15000+', label: 'Above ₹15,000', checked: false },
    ],
  },
  {
    id: 'badge',
    name: 'Collection',
    options: [
      { value: 'BESTSELLER', label: 'Bestseller', checked: false },
      { value: 'NEW', label: 'New Arrivals', checked: false },
      { value: 'PREMIUM', label: 'Premium', checked: false },
      { value: 'TECH', label: 'Tech', checked: false },
    ],
  },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

export default function Products() {
  const [searchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedFilters, setSelectedFilters] = useState({});
  const dispatch = useDispatch();

  const category = searchParams.get('category');
  
  // Get products based on category
  let products = category ? getEnhancedProductsByCategory(category) : enhancedProducts;

  // Apply additional filters
  Object.keys(selectedFilters).forEach(filterType => {
    if (selectedFilters[filterType].length > 0) {
      products = products.filter(product => {
        if (filterType === 'category') {
          return selectedFilters[filterType].includes(product.category);
        }
        if (filterType === 'price') {
          return selectedFilters[filterType].some(range => {
            const [min, max] = range.split('-').map(Number);
            if (max) {
              return product.price >= min && product.price <= max;
            } else {
              return product.price >= min;
            }
          });
        }
        if (filterType === 'badge') {
          return selectedFilters[filterType].some(badge => 
            product.badge?.includes(badge)
          );
        }
        return true;
      });
    }
  });

  // Apply sorting
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      case 'rating':
        return (b.reviews?.length || 0) - (a.reviews?.length || 0);
      default:
        return b.featured ? 1 : -1;
    }
  });

  const handleFilterChange = (filterType, value, checked) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...(prev[filterType] || []), value]
        : (prev[filterType] || []).filter(v => v !== value)
    }));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes?.[0] || 'One Size'
    }));
  };

  const getCategoryTitle = () => {
    if (!category) return 'All Products';
    return category.charAt(0).toUpperCase() + category.slice(1) + ' Collection';
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-gray-900 py-4 pb-12 shadow-xl border-l border-gray-800">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-bold text-white">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-white"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <form className="mt-4 border-t border-gray-800">
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-b border-gray-800 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-transparent px-2 py-3 text-gray-400 hover:text-white">
                              <span className="font-medium text-white">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={`h-5 w-5 transform ${open ? '-rotate-180' : 'rotate-0'}`}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-accent focus:ring-accent"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-300"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-baseline justify-between border-b border-gray-800 pb-6 pt-8"
          {...fadeInUp}
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4 font-display">
              {getCategoryTitle().split(' ')[0]}
              <span className="block gradient-text">
                {getCategoryTitle().split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="text-gray-400 font-light">
              {sortedProducts.length} products available
            </p>
          </div>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-300 hover:text-white">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-300"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-xl bg-gray-900 shadow-dark ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-800">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <button
                            onClick={() => setSortBy(option.value)}
                            className={`${
                              active ? 'bg-gray-800' : ''
                            } ${
                              sortBy === option.value ? 'font-medium text-white' : 'text-gray-300'
                            } block px-4 py-2 text-sm w-full text-left`}
                          >
                            {option.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-300 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              {filters.map((section) => (
                <Disclosure as="div" key={section.id} className="border-b border-gray-800 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-transparent py-3 text-sm text-gray-400 hover:text-gray-300">
                          <span className="font-medium text-white">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <ChevronDownIcon
                              className={`h-5 w-5 transform ${open ? '-rotate-180' : 'rotate-0'}`}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-accent focus:ring-accent"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-300"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <motion.div 
                className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative card-premium overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-80 w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                          {product.badge}
                        </div>
                      )}
                      
                      {/* Discount */}
                      {product.originalPrice && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </div>
                      )}

                      {/* Quick Actions */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="flex gap-3">
                          <button className="p-3 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors duration-200 rounded-xl">
                            <EyeIcon className="h-5 w-5" />
                          </button>
                          <button className="p-3 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors duration-200 rounded-xl">
                            <HeartIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="p-3 bg-accent text-white hover:bg-accent-600 transition-colors duration-200 rounded-xl"
                          >
                            <ShoppingBagIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-accent uppercase tracking-wider font-bold">
                          {product.category}
                        </div>
                        {product.reviews?.length > 0 && (
                          <div className="flex items-center">
                            <StarIcon className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm text-gray-400 ml-1">
                              {(product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length).toFixed(1)}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300 leading-tight mb-3">
                        <Link to={`/product/${product.id}`}>
                          {product.name}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-black text-white">
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        
                        <span className={`text-xs font-bold ${
                          product.inStock ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {sortedProducts.length === 0 && (
                <motion.div
                  className="text-center py-12"
                  {...fadeInUp}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
                  <p className="text-gray-400 mb-8">Try adjusting your filters or search criteria.</p>
                  <Link
                    to="/products"
                    className="bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-accent-600 transition-colors"
                  >
                    View All Products
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}