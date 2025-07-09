import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const megaMenuData = {
  men: {
    title: "Men's Collection",
    categories: [
      {
        name: 'Footwear',
        items: [
          { name: 'Running Shoes', href: '/products?category=men&type=running', image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Training Shoes', href: '/products?category=men&type=training', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Lifestyle Sneakers', href: '/products?category=men&type=lifestyle', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300' }
        ]
      },
      {
        name: 'Apparel',
        items: [
          { name: 'Hoodies & Sweatshirts', href: '/products?category=men&type=hoodies', image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Training Shorts', href: '/products?category=men&type=shorts', image: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Performance Tees', href: '/products?category=men&type=tees', image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=300' }
        ]
      }
    ],
    featured: {
      title: 'Featured Collection',
      subtitle: 'Velocity Pro Series',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      href: '/products?featured=velocity-pro'
    }
  },
  women: {
    title: "Women's Collection",
    categories: [
      {
        name: 'Footwear',
        items: [
          { name: 'Running Shoes', href: '/products?category=women&type=running', image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Training Shoes', href: '/products?category=women&type=training', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Lifestyle Sneakers', href: '/products?category=women&type=lifestyle', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300' }
        ]
      },
      {
        name: 'Apparel',
        items: [
          { name: 'Sports Bras', href: '/products?category=women&type=bras', image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Leggings & Tights', href: '/products?category=women&type=leggings', image: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Training Jackets', href: '/products?category=women&type=jackets', image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=300' }
        ]
      }
    ],
    featured: {
      title: 'Featured Collection',
      subtitle: 'Stealth Training Series',
      image: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=400',
      href: '/products?featured=stealth-training'
    }
  },
  tech: {
    title: 'Tech Collection',
    categories: [
      {
        name: 'Wearables',
        items: [
          { name: 'Fitness Trackers', href: '/products?category=tech&type=trackers', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Smart Watches', href: '/products?category=tech&type=watches', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Heart Rate Monitors', href: '/products?category=tech&type=monitors', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300' }
        ]
      },
      {
        name: 'Audio',
        items: [
          { name: 'Wireless Earbuds', href: '/products?category=tech&type=earbuds', image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Sports Headphones', href: '/products?category=tech&type=headphones', image: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=300' },
          { name: 'Bluetooth Speakers', href: '/products?category=tech&type=speakers', image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=300' }
        ]
      }
    ],
    featured: {
      title: 'Featured Collection',
      subtitle: 'Quantum Series',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      href: '/products?featured=quantum-series'
    }
  }
};

export default function MegaMenu({ activeMenu, onClose }) {
  if (!activeMenu || !megaMenuData[activeMenu]) return null;

  const menuData = megaMenuData[activeMenu];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gray-800 shadow-2xl z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-black text-white mb-8 tracking-tight">
              {menuData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.categories.map((category, index) => (
                <div key={category.name}>
                  <h3 className="text-lg font-bold text-blue-400 mb-4 uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={onClose}
                        className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover bg-gray-800 group-hover:scale-105 transition-transform duration-200"
                          loading="lazy"
                        />
                        <span className="flex-1">{item.name}</span>
                        <ChevronRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          <div className="lg:col-span-1">
            <Link
              to={menuData.featured.href}
              onClick={onClose}
              className="group block bg-gray-900 border border-gray-800 overflow-hidden hover:border-gray-600 transition-colors duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={menuData.featured.image}
                  alt={menuData.featured.subtitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-blue-400 uppercase tracking-wider font-bold mb-2">
                  {menuData.featured.title}
                </p>
                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {menuData.featured.subtitle}
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Explore the latest innovations
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}