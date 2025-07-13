import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { allProducts } from '../data/products'; // ✅ Correct import from your data file

const sizes = ['6', '7', '8', '9', '10', '11', '12'];

export default function ProductDetail() {
  const { id } = useParams(); // ✅ id is now available here
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [error, setError] = useState('');

  const product = allProducts.find((p) => p.id === parseInt(id)); // ✅ Inside component

  if (!product) {
    return <div className="text-center py-20 text-xl text-red-500">Product not found!</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        image: product.imageSrc || product.images?.[0], // Support both naming conventions
      })
    );

    setError('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <div className="flex flex-col">
          <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
            <img
              src={product.images?.[selectedImage] || product.imageSrc}
              alt={product.name}
              className="w-full h-full object-center object-cover"
            />
          </div>
          {product.images && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-accent' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-center object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">${product.price}</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>

          <div className="mt-6">
            <div>
              <h3 className="text-sm text-gray-600">Size</h3>
              <div className="mt-2">
                <div className="grid grid-cols-4 gap-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setError('');
                      }}
                      className={`${
                        selectedSize === size
                          ? 'border-accent bg-accent text-white'
                          : 'border-gray-300 bg-white text-gray-900'
                      } border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium hover:bg-gray-50`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={handleAddToCart}
                className="w-full bg-accent border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {product.details && (
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul role="list">
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
