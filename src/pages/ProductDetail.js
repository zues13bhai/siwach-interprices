import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { getProductById } from '../data/products';
import { StarIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import ProductBadge from '../components/ProductBadge';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = getProductById(id);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight mb-6">
              PRODUCT NOT
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">
                FOUND
              </span>
            </h1>
            <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
            <Link
              to="/products"
              className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition-colors duration-300"
            >
              BROWSE PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
      setError('Please select a size');
      return;
    }

    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize || (product.sizes && product.sizes[0]) || 'One Size',
      quantity: quantity
    }));

    setError('');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to checkout would go here
    window.location.href = '/checkout';
  };

  const averageRating = product.reviews?.length > 0 
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length 
    : 0;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <StarIcon className="h-4 w-4 text-gray-400" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <StarIconSolid className="h-4 w-4 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<StarIcon key={i} className="h-4 w-4 text-gray-400" />);
      }
    }
    return stars;
  };
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start"
        >
          {/* Image gallery */}
          <div className="flex flex-col">
            <div className="aspect-square w-full overflow-hidden bg-gray-900 border border-gray-800">
              <img
                src={product.images ? product.images[selectedImage] : product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images && product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden bg-gray-900 border-2 transition-colors duration-300 ${
                      selectedImage === index ? 'border-blue-400' : 'border-gray-800 hover:border-gray-600'
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
          </div>

          {/* Product info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0"
          >
            {/* Badge */}
            {product.badge && (
              <div className="mb-4">
                <ProductBadge badge={product.badge} />
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            {product.reviews?.length > 0 && (
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {renderStars(averageRating)}
                  </div>
                  <span className="text-sm text-gray-400">
                    {averageRating.toFixed(1)}
                  </span>
                </div>
                <span className="text-sm text-gray-400">
                  ({product.reviews.length} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-white">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="text-green-400 text-sm font-bold">
                  Save ₹{(product.originalPrice - product.price).toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-8 space-y-6">
              {/* Tabs */}
              <div className="flex border-b border-gray-700">
                {['description', 'specs', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-bold uppercase tracking-wider transition-colors duration-300 ${
                      activeTab === tab
                        ? 'text-white border-b-2 border-blue-400'
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
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      {product.fullDescription}
                    </p>
                    {product.specifications && (
                      <div>
                        <h4 className="text-white font-bold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.specifications.map((spec, index) => (
                            <li key={index} className="text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'specs' && product.specifications && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="py-2 border-b border-gray-800">
                        <span className="text-gray-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {product.reviews?.length > 0 ? (
                      product.reviews.map((review, index) => (
                        <div key={index} className="bg-gray-900 border border-gray-800 p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <span className="font-bold text-white">{review.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400">No reviews yet. Be the first to review this product!</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 1 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Size</h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setError('');
                      }}
                      className={`py-3 px-4 text-center font-bold transition-all duration-300 ${
                        selectedSize === size
                          ? 'bg-white text-black'
                          : 'bg-gray-900 text-white border border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-900 border border-gray-700 text-white font-bold hover:border-gray-500 transition-colors duration-300"
                >
                  -
                </button>
                <span className="text-xl font-bold text-white w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-900 border border-gray-700 text-white font-bold hover:border-gray-500 transition-colors duration-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleBuyNow}
                className="w-full bg-white text-black py-4 font-bold text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                BUY NOW
              </button>
              
              <button
                onClick={handleAddToCart}
                className="w-full border-2 border-white text-white py-4 font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                ADD TO CART
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center gap-6 mb-8">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                  isWishlisted ? 'text-red-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                <HeartIcon className="h-5 w-5" />
                {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
              
              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300">
                <ShareIcon className="h-5 w-5" />
                Share
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-900 border border-gray-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Delivery Information</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>🚚 Free delivery on orders above ₹999</p>
                <p>⚡ Express delivery available</p>
                <p>💰 Cash on Delivery available</p>
                <p>🔄 Easy returns within 30 days</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}