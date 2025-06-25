import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Running',
    href: '/products?category=running',
    imageSrc: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/running_fw25_adizero_evo_sl_card_launch_d_a5b8e55d93.jpg',
    description: 'Shop Running Collection',
  },
  {
    name: 'Originals',
    href: '/products?category=originals',
    imageSrc: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/originals_fw25_taekwondo_card_sustain_d_12978e639b.jpg',
    description: 'Shop Originals Collection',
  },
  {
    name: 'Training',
    href: '/products?category=training',
    imageSrc: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_dropset_training_fw25_launch_hp_catlp_navigation_card_teaser_2_d_7051bb5ba3.jpg',
    description: 'Shop Training Collection',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Tiro 25 Essentials Sweat Hoodie',
    href: '/product/1',
    price: 65,
    imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7152905f14d14c8098daed61915be22f_9366/Tiro_25_Essentials_Sweat_Hoodie_Black_JX2229_000_plp_model.jpg',
    description: 'Black / Essential',
  },
  {
    id: 2,
    name: 'Adicolor Firebird Track Pants',
    href: '/product/2',
    price: 85,
    imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1b55cf4b41bb452a95cb5d2f00de1485_9366/adicolor_Firebird_Oversized_Track_Pants_Blue_JV7492_000_plp_model.jpg',
    description: 'Blue / Originals',
  },
  {
    id: 3,
    name: 'Teamgeist Adicolor Jersey',
    href: '/product/3',
    price: 55,
    imageSrc: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d673fcc3b4a94ea18be89dc06ae96172_9366/Teamgeist_Adicolor_Slim_Jersey_Black_JZ6709_000_plp_model.jpg',
    description: 'Black / Slim Fit',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/originals_fw25_tatemcraesuperstar_bnr_sustain_d_9bf87fca6e.jpg"
            alt="Superstar Collection"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-adihausDIN">
              Welcome to Siwach Enterprises
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl font-adihausDIN">
              Discover our collection of premium sportswear and shoes for every athlete and enthusiast.
            </p>
            <div className="mt-10">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition duration-150 ease-in-out font-adihausDIN"
              >
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative"
            >
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src={category.imageSrc}
                  alt={category.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured products section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={product.href}
              className="group relative"
            >
              <div className="relative w-full h-96 bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}