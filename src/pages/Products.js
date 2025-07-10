import React, { useState, Fragment } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, StarIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { allProducts, getProductsByCategory } from '../data/products';

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
      { value: 'running', label: 'Running', checked: false },
      { value: 'training', label: 'Training', checked: false },
      { value: 'lifestyle', label: 'Lifestyle', checked: false },
      { value: 'soccer', label: 'Soccer', checked: false },
      { value: 'basketball', label: 'Basketball', checked: false },
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
      { value: 'Bestseller', label: 'Bestseller', checked: false },
      { value: 'New', label: 'New Arrivals', checked: false },
      { value: 'Premium', label: 'Premium', checked: false },
      { value: 'Tech', label: 'Tech', checked: false },
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
  let products = category ? getProductsByCategory(category) : allProducts;

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
        return (b.rating || 0) - (a.rating || 0);
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
      image: product.imageSrc,
      size: 'M' // Default size
    }));
  };

  const getCategoryTitle = () => {
    if (!category) return 'All Products';
    return category.charAt(0).toUpperCase() + category.slice(1) + ' Collection';
  };

  return (
    <div className="bg-white">
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <form className="mt-4 border-t border-gray-200">
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={`h-5 w-5 ${open ? '-rotate-180' : 'rotate-0'}`}
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
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
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
          className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24"
          {...fadeInUp}
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {getCategoryTitle()}
            </h1>
            <p className="mt-2 text-gray-600">
              {sortedProducts.length} products available
            </p>
          </div>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <button
                            onClick={() => setSortBy(option.value)}
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } ${
                              sortBy === option.value ? 'font-medium text-gray-900' : 'text-gray-500'
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
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
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
                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <ChevronDownIcon
                              className={`h-5 w-5 ${open ? '-rotate-180' : 'rotate-0'}`}
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
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
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
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="h-80 w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {product.badge}
                        </div>
                      )}
                      
                      {/* Discount */}
                      {product.originalPrice && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </div>
                      )}

                      {/* Quick Actions */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
                          >
                            Add to Cart
                          </button>
                          <Link
                            to={`/product/${product.id}`}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors transform hover:scale-105"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                        {product.rating && (
                          <div className="flex items-center">
                            <StarIcon className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-black text-gray-900">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                          )}
                        </div>
                        
                        {product.inStock ? (
                          <span className="text-green-600 text-sm font-bold">In Stock</span>
                        ) : (
                          <span className="text-red-600 text-sm font-bold">Out of Stock</span>
                        )}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No products found</h3>
                  <p className="text-gray-600 mb-8">Try adjusting your filters or search criteria.</p>
                  <Link
                    to="/products"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
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