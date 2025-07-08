// Enhanced Product Collection for Siwach Enterprises
export const enhancedProducts = [
  // Men's Collection - Premium Athletic Wear
  {
    id: 1,
    name: 'Siwach X Velocity Pro',
    category: 'men',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    description: 'Engineered for champions who refuse to compromise on performance',
    fullDescription: 'The Siwach X Velocity Pro represents the pinnacle of athletic engineering. Crafted with aerospace-grade materials and precision-tuned for elite performance, these shoes deliver unparalleled speed and comfort. Each pair features our proprietary VelocityFoam™ technology, providing 40% more energy return than traditional running shoes. Hand-assembled by master craftsmen and tested by Olympic athletes.',
    badge: 'BESTSELLER',
    sizes: ['7', '8', '9', '10', '11', '12'],
    specifications: {
      'Material': 'VelocityFoam™ midsole with carbon fiber plate',
      'Weight': '240g (size 9)',
      'Drop': '8mm',
      'Upper': 'Engineered mesh with targeted ventilation',
      'Outsole': 'Continental™ rubber with grip zones',
      'Warranty': '1 Year'
    },
    features: [
      'VelocityFoam™ midsole with 40% energy return',
      'Carbon fiber propulsion plate',
      'Engineered mesh upper with targeted ventilation',
      'Continental™ rubber outsole with grip zones',
      'Weight: 240g (size 9) - ultralight construction',
      'Drop: 8mm for optimal running efficiency'
    ],
    reviews: [
      { 
        id: 1,
        name: 'Arjun Sharma', 
        rating: 5, 
        comment: 'Broke my personal marathon record wearing these. Incredible energy return!',
        date: '2024-01-15',
        verified: true
      },
      { 
        id: 2,
        name: 'Priya Patel', 
        rating: 5, 
        comment: 'Most comfortable running shoes I\'ve ever owned. Worth every rupee.',
        date: '2024-01-10',
        verified: true
      }
    ],
    tags: ['running', 'performance', 'marathon', 'lightweight'],
    inStock: true,
    featured: true,
    deliveryEstimate: 'Arrives in 2-3 days',
    returnPolicy: '30-day free returns',
    warranty: '1 Year Manufacturer Warranty'
  },
  {
    id: 2,
    name: 'Urban Strike Hoodie',
    category: 'men',
    price: 4999,
    originalPrice: 6999,
    image: 'https://imgs.search.brave.com/EWNzEKvIzYdd4wr6K-jeZjdw0y7KKu2a8EvOuQt7bnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ3OTMyOTAxL2Mv/NTY5LzU2OS81NS81/L2lsLzVlNWY4OC81/NTE5MjkyNTY5L2ls/XzYwMHg2MDAuNTUx/OTI5MjU2OV81a3c1/LmpwZw',
    images: [
      'https://imgs.search.brave.com/EWNzEKvIzYdd4wr6K-jeZjdw0y7KKu2a8EvOuQt7bnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ3OTMyOTAxL2Mv/NTY5LzU2OS81NS81/L2lsLzVlNWY4OC81/NTE5MjkyNTY5L2ls/XzYwMHg2MDAuNTUx/OTI5MjU2OV81a3c1/LmpwZw'
    ],
    description: 'Where street culture meets athletic excellence',
    fullDescription: 'The Urban Strike Hoodie embodies the spirit of modern athleticism. Crafted from premium organic cotton blend with moisture-wicking technology, this hoodie transitions seamlessly from gym to street. Features include a hidden phone pocket with secure zipper, reinforced stress points for durability, and our signature reflective logo that catches light beautifully.',
    badge: 'NEW',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    specifications: {
      'Material': '70% Organic Cotton, 30% Recycled Polyester',
      'Fit': 'Regular fit with athletic cut',
      'Care': 'Machine wash cold, tumble dry low',
      'Features': 'Moisture-wicking, Hidden pockets',
      'Origin': 'Made in India',
      'Warranty': '6 Months'
    },
    features: [
      '70% Organic Cotton, 30% Recycled Polyester',
      'Moisture-wicking interior lining',
      'YKK premium zippers throughout',
      'Reinforced kangaroo pocket with hidden compartment',
      'Reflective Siwach logo with 3M technology',
      'Pre-shrunk fabric for consistent fit'
    ],
    reviews: [
      { 
        id: 1,
        name: 'Rohit Kumar', 
        rating: 4, 
        comment: 'Premium quality that you can feel. Love the hidden pocket!',
        date: '2024-01-12',
        verified: true
      }
    ],
    tags: ['hoodie', 'streetwear', 'cotton', 'urban'],
    inStock: true,
    featured: true,
    deliveryEstimate: 'Arrives in 3-5 days',
    returnPolicy: '30-day free returns',
    warranty: '6 Months Quality Guarantee'
  },

  // Women's Collection
  {
    id: 5,
    name: 'Stealth Training Jacket',
    category: 'women',
    price: 6999,
    originalPrice: 8999,
    image: 'https://imgs.search.brave.com/qP48qxMfbfFNo0G-8eZa1yHvihyqXjcp0le6ZJZ6DiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjErLU9mYjBYMkwu/anBn',
    images: [
      'https://imgs.search.brave.com/qP48qxMfbfFNo0G-8eZa1yHvihyqXjcp0le6ZJZ6DiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjErLU9mYjBYMkwu/anBn'
    ],
    description: 'Conquer every element with sophisticated protection',
    fullDescription: 'The Stealth Training Jacket represents the perfect fusion of style and performance. Engineered with our exclusive WeatherShield™ technology, it adapts to changing conditions while maintaining breathability. The sleek silhouette flatters your form while providing unrestricted movement.',
    badge: 'PREMIUM',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    specifications: {
      'Material': 'WeatherShield™ adaptive fabric',
      'Waterproof': 'Yes - 10,000mm rating',
      'Breathability': '10,000g/m²/24hr',
      'Fit': 'Athletic feminine cut',
      'Weight': '320g',
      'Warranty': '2 Years'
    },
    features: [
      'WeatherShield™ adaptive protection technology',
      'Laser-welded seams for complete waterproofing',
      'Strategic ventilation zones with YKK AquaGuard zippers',
      'Packable design - folds into its own pocket',
      'Reflective details for low-light visibility',
      'Feminine athletic cut with adjustable features'
    ],
    reviews: [
      { 
        id: 1,
        name: 'Sneha Reddy', 
        rating: 5, 
        comment: 'Perfect for outdoor training in any weather. Stylish and functional!',
        date: '2024-01-08',
        verified: true
      }
    ],
    tags: ['jacket', 'waterproof', 'training', 'women'],
    inStock: true,
    featured: true,
    deliveryEstimate: 'Arrives in 2-4 days',
    returnPolicy: '30-day free returns',
    warranty: '2 Years Weather Protection Guarantee'
  },

  // Tech Collection
  {
    id: 9,
    name: 'Quantum Fitness Tracker',
    category: 'tech',
    price: 15999,
    originalPrice: 19999,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    description: 'Your personal performance scientist on your wrist',
    fullDescription: 'The Quantum Fitness Tracker represents the convergence of cutting-edge technology and athletic excellence. Powered by advanced AI algorithms, it provides real-time performance insights that adapt to your unique physiology. The aerospace-grade titanium construction ensures durability while maintaining an elegant profile.',
    badge: 'TECH',
    sizes: ['One Size'],
    specifications: {
      'Display': '1.4" AMOLED Always-On',
      'Battery': '14 days with solar charging',
      'Water Rating': '10ATM + Swim-proof',
      'Connectivity': 'Bluetooth 5.2, WiFi, GPS',
      'Sensors': 'Heart rate, SpO2, Stress, Sleep',
      'Warranty': '2 Years'
    },
    features: [
      'AI-powered performance analytics with machine learning',
      'Aerospace-grade titanium construction',
      'Multi-band GPS with precision tracking',
      '14-day battery life with solar charging',
      'Comprehensive health monitoring (HR, SpO2, stress)',
      'Professional athlete training platform integration'
    ],
    reviews: [
      { 
        id: 1,
        name: 'Tech Reviewer', 
        rating: 5, 
        comment: 'Revolutionary fitness tracking technology. Worth the investment!',
        date: '2024-01-05',
        verified: true
      }
    ],
    tags: ['fitness tracker', 'smartwatch', 'AI', 'titanium'],
    inStock: true,
    featured: true,
    deliveryEstimate: 'Arrives in 1-2 days',
    returnPolicy: '15-day free returns',
    warranty: '2 Years Comprehensive Warranty'
  }
];

// Helper functions
export const getEnhancedProductsByCategory = (category) => {
  if (category === 'all') return enhancedProducts;
  return enhancedProducts.filter(product => product.category === category);
};

export const getEnhancedFeaturedProducts = () => {
  return enhancedProducts.filter(product => product.featured);
};

export const getEnhancedProductById = (id) => {
  return enhancedProducts.find(product => product.id === parseInt(id));
};

export const searchEnhancedProducts = (query) => {
  return enhancedProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.fullDescription.toLowerCase().includes(query.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
};

export const getProductsByPriceRange = (min, max) => {
  return enhancedProducts.filter(product => product.price >= min && product.price <= max);
};

export const getProductsByBadge = (badge) => {
  return enhancedProducts.filter(product => product.badge === badge);
};

export const getProductRecommendations = (productId, limit = 4) => {
  const currentProduct = getEnhancedProductById(productId);
  if (!currentProduct) return [];
  
  return enhancedProducts
    .filter(product => 
      product.id !== productId && 
      (product.category === currentProduct.category || product.featured)
    )
    .slice(0, limit);
};