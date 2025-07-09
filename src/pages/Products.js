import React, { useState, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon, FunnelIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

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
      { value: 'new', label: 'New Arrivals', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'Price Range',
    options: [
      { value: '0-2000', label: 'Under ₹2,000', checked: false },
      { value: '2000-5000', label: '₹2,000 - ₹5,000', checked: false },
      { value: '5000-10000', label: '₹5,000 - ₹10,000', checked: false },
      { value: '10000+', label: 'Above ₹10,000', checked: false },
    ],
  },
  {
    id: 'badge',
    name: 'Collection',
    options: [
      { value: 'BESTSELLER', label: 'Bestseller', checked: false },
      { value: 'NEW', label: 'New', checked: false },
      { value: 'NEW DROP', label: 'New Drop', checked: false },
      { value: 'PREMIUM', label: 'Premium', checked: false },
      { value: 'TECH', label: 'Tech', checked: false },
      { value: 'LIMITED', label: 'Limited', checked: false },
    ],
  },
];

export default function Products() {
  const [searchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedFilters, setSelectedFilters] = useState({});

  const category = searchParams.get('category') || 'all';
  let products = getProductsByCategory(category);

  // Apply filters
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
          return selectedFilters[filterType].includes(product.badge);
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

  const getCategoryTitle = () => {
    switch (category) {
      case 'men': return "Men's Collection";
      case 'women': return "Women's Collection";
      case 'tech': return "Tech Collection";
      case 'new': return "New Arrivals";
      default: return "All Products";
    }
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
                                    className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-400 focus:ring-blue-400"
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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline justify-between border-b border-gray-800 pb-6 pt-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              {getCategoryTitle().split(' ')[0]}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-gray-900 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-800">
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
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-400 focus:ring-blue-400"
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
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {sortedProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
                  <p className="text-gray-400">Try adjusting your filters or search criteria.</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}