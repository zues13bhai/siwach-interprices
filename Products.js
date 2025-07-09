import React, { useState, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
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
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '7', label: '7', checked: false },
      { value: '8', label: '8', checked: false },
      { value: '9', label: '9', checked: false },
      { value: '10', label: '10', checked: false },
      { value: '11', label: '11', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'black', label: 'Black', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'red', label: 'Red', checked: false },
      { value: 'green', label: 'Green', checked: false },
    ],
  },
];

  const products = [
  {
    id: 1,
    name: 'Ultra Boost 21',
    href: '/product/1',
    price: 180,
    imageSrc: 'https://source.unsplash.com/featured/?sneakers,white',
    description: 'Running Shoes',
  },
  {
    id: 2,
    name: 'Air Zoom Pegasus 40',
    href: '/product/2',
    price: 130,
    imageSrc: 'https://source.unsplash.com/featured/?nike,running',
    description: 'Lightweight Training',
  },
  {
    id: 3,
    name: 'Metcon 8',
    href: '/product/3',
    price: 150,
    imageSrc: 'https://source.unsplash.com/featured/?training-shoes,black',
    description: 'Training Essentials',
  },
  {
    id: 4,
    name: 'Yeezy Boost 350 V2',
    href: '/product/4',
    price: 220,
    imageSrc: 'https://source.unsplash.com/featured/?yeezy,sneakers',
    description: 'Lifestyle Sneakers',
  },
  {
    id: 5,
    name: 'Predator Accuracy.3',
    href: '/product/5',
    price: 120,
    imageSrc: 'https://source.unsplash.com/featured/?soccer-shoes',
    description: 'Soccer Cleats',
  },
  {
    id: 6,
    name: 'Air Jordan 1 Retro High',
    href: '/product/6',
    price: 200,
    imageSrc: 'https://source.unsplash.com/featured/?jordan,basketball',
    description: 'Basketball Icon',
  },
  {
    id: 7,
    name: 'Nike React Infinity Run 3',
    href: '/product/7',
    price: 160,
    imageSrc: 'https://source.unsplash.com/featured/?running-shoes,grey',
    description: 'Stable Running',
  },
  {
    id: 8,
    name: 'Adidas Dame 8',
    href: '/product/8',
    price: 140,
    imageSrc: 'https://source.unsplash.com/featured/?adidas,basketball',
    description: 'Court Dominator',
  },
  {
    id: 9,
    name: 'Under Armour HOVR Phantom',
    href: '/product/9',
    price: 150,
    imageSrc: 'https://source.unsplash.com/featured/?training,white-shoes',
    description: 'Cushioned Training',
  },
  {
    id: 10,
    name: 'Puma Future Z 1.4',
    href: '/product/10',
    price: 130,
    imageSrc: 'https://source.unsplash.com/featured/?puma,soccer',
    description: 'Agile Control Cleats',
  },
  {
    id: 11,
    name: 'Reebok Nano X3',
    href: '/product/11',
    price: 125,
    imageSrc: 'https://source.unsplash.com/featured/?reebok,training-shoes',
    description: 'CrossFit Favorite',
  },
  {
    id: 12,
    name: 'Asics Gel-Kayano 30',
    href: '/product/12',
    price: 170,
    imageSrc: 'https://source.unsplash.com/featured/?asics,shoes',
    description: 'Stability Running',
  },
  {
    id: 13,
    name: 'Nike Blazer Mid ’77',
    href: '/product/13',
    price: 110,
    imageSrc: 'https://source.unsplash.com/featured/?nike,blazer',
    description: 'Retro Lifestyle',
  },
  {
    id: 14,
    name: 'New Balance Fresh Foam 1080',
    href: '/product/14',
    price: 160,
    imageSrc: 'https://source.unsplash.com/featured/?newbalance,running',
    description: 'Premium Runner',
  },
  {
    id: 15,
    name: 'Converse Chuck 70',
    href: '/product/15',
    price: 90,
    imageSrc: 'https://source.unsplash.com/featured/?converse,classic',
    description: 'Everyday Casual',
  },
  {
    id: 16,
    name: 'Nike LeBron 20',
    href: '/product/16',
    price: 210,
    imageSrc: 'https://source.unsplash.com/featured/?lebron,basketball',
    description: 'Elite Basketball',
  },
  {
    id: 17,
    name: 'Adidas Gazelle',
    href: '/product/17',
    price: 100,
    imageSrc: 'https://source.unsplash.com/featured/?adidas,gazelle',
    description: 'Timeless Style',
  },
  {
    id: 18,
    name: 'Vans Old Skool',
    href: '/product/18',
    price: 75,
    imageSrc: 'https://source.unsplash.com/featured/?vans,skate',
    description: 'Classic Skate',
  },
  {
    id: 19,
    name: 'Nike ZoomX Vaporfly Next%',
    href: '/product/19',
    price: 250,
    imageSrc: 'https://source.unsplash.com/featured/?vaporfly,nike',
    description: 'Racing Shoe',
  },
  {
    id: 20,
    name: 'Adidas NMD_R1',
    href: '/product/20',
    price: 140,
    imageSrc: 'https://source.unsplash.com/featured/?nmd,adidas',
    description: 'Modern Lifestyle',
  },
  {
    id: 21,
    name: 'Hoka One One Clifton 9',
    href: '/product/21',
    price: 145,
    imageSrc: 'https://source.unsplash.com/featured/?hoka,running',
    description: 'Max Cushion',
  },
  {
    id: 22,
    name: 'Nike Air Max 97',
    href: '/product/22',
    price: 175,
    imageSrc: 'https://source.unsplash.com/featured/?airmax97,nike',
    description: 'Streetwear Favorite',
  },
  {
    id: 23,
    name: 'Puma RS-X',
    href: '/product/23',
    price: 110,
    imageSrc: 'https://source.unsplash.com/featured/?puma,chunky-shoes',
    description: 'Bold Street Look',
  },
  {
    id: 24,
    name: 'Adidas Superstar',
    href: '/product/24',
    price: 95,
    imageSrc: 'https://source.unsplash.com/featured/?superstar,adidas',
    description: 'Iconic Shell Toe',
  },
  {
    id: 25,
    name: 'Nike Free RN 5.0',
    href: '/product/25',
    price: 100,
    imageSrc: 'https://source.unsplash.com/featured/?nike,free-running',
    description: 'Natural Movement',
  },
];
export const allProducts = products;

export default function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className="bg-white">
      <div>
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

                  {/* Filters */}
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
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
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
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}'s Collection` : 'All Products'}
            </h1>

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
                            <a
                              href={option.href}
                              className={`${active ? 'bg-gray-100' : ''} ${option.current ? 'font-medium text-gray-900' : 'text-gray-500'} block px-4 py-2 text-sm`}
                            >
                              {option.name}
                            </a>
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
          </div>

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
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
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
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {products.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.name}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">{product.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">${product.price}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}