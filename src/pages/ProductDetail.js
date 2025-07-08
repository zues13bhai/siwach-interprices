import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { addToCart } from '../store/cartSlice';
import { getProductById } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const productData = getProductById(id);
    if (productData) {
      setProduct(productData);
      setSelectedSize(productData.sizes ? productData.sizes[0] : 'One Size');
    } else {
      navigate('/products');
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize
    };
    
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(cartItem));
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const nextImage = () => {
    setSelectedImage((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Loading product...</p>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400">
            <span 
              onClick={() => navigate('/products')}
              className="hover:text-white cursor-pointer transition-colors duration-300"
            >
              Products
            </span>
            <span className="mx-2">/</span>
            <span 
              onClick={() => navigate(`/products?category=${product.category}`)}
              className="hover:text-white cursor-pointer transition-colors duration-300 capitalize"
            >
              {product.category}
            </span>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-900 overflow-hidden group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black px-3 py-1 text-xs font-bold tracking-wider">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Discount Badge */}
                {discountPercentage > 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold">
                      -{discountPercentage}%
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 bg-gray-900 overflow-hidden border-2 transition-colors duration-300 ${
                        selectedImage === index ? 'border-blue-400' : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Product Title & Rating */}
              <div>
                <div className="text-sm text-blue-400 uppercase tracking-wider font-bold mb-2">
                  {product.category}
                </div>
                <h1 className="text-4xl font-black tracking-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-300 font-light mb-6">
                  {product.headline}
                </p>
                
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-white font-bold">{product.rating}</span>
                    </div>
                    <span className="text-gray-400">({product.reviews} reviews)</span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-white">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="bg-red-500 text-white px-2 py-1 text-sm font-bold">
                    SAVE {discountPercentage}%
                  </span>
                )}
              </div>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 1 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border-2 font-bold transition-colors duration-300 ${
                          selectedSize === size
                            ? 'border-white bg-white text-black'
                            : 'border-gray-600 text-white hover:border-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-gray-800 text-white font-bold hover:bg-gray-700 transition-colors duration-300"
                  >
                    -
                  </button>
                  <span className="text-xl font-bold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-gray-800 text-white font-bold hover:bg-gray-700 transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-white text-black py-4 font-bold text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  BUY NOW
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 border-2 border-white text-white py-4 font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  ADD TO CART
                </button>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className={`font-bold ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Product Details Tabs */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t border-gray-800 pt-12"
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-800 mb-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-bold uppercase tracking-wider transition-colors duration-300 ${
                    activeTab === tab
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === 'description' && (
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-gray-800">
                      <span className="text-gray-400 font-medium">{key}</span>
                      <span className="text-white font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="text-center py-12">
                  <h4 className="text-2xl font-bold text-white mb-4">Customer Reviews</h4>
                  <p className="text-gray-400 mb-6">
                    {product.reviews} verified reviews with an average rating of {product.rating}/5
                  </p>
                  <div className="bg-gray-900 border border-gray-800 p-6 max-w-md mx-auto">
                    <p className="text-gray-300 italic mb-4">
                      "Exceptional quality and performance. Exactly what I was looking for!"
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">- Verified Customer</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}