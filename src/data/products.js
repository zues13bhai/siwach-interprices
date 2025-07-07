// Product data for the e-commerce store
export const products = [
  // Men's Collection
  {
    id: 1,
    name: 'Siwach X Velocity Pro',
    category: 'men',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Ultra-lightweight performance running shoes with advanced cushioning technology',
    fullDescription: 'Experience the pinnacle of running performance with the Siwach X Velocity Pro. Engineered with cutting-edge cushioning technology and ultra-lightweight materials, these shoes deliver unmatched comfort and speed. Perfect for marathon runners and fitness enthusiasts who demand excellence.',
    badge: 'BESTSELLER',
    sizes: ['7', '8', '9', '10', '11', '12'],
    specifications: [
      'Ultra-lightweight mesh upper',
      'Advanced cushioning midsole',
      'Carbon fiber plate technology',
      'Breathable moisture-wicking lining',
      'Durable rubber outsole with traction pattern'
    ],
    reviews: [
      { name: 'Arjun Sharma', rating: 5, comment: 'Best running shoes I\'ve ever owned!' },
      { name: 'Priya Patel', rating: 5, comment: 'Incredible comfort and performance.' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Urban Strike Hoodie',
    category: 'men',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium cotton blend hoodie with signature Siwach branding',
    fullDescription: 'Elevate your streetwear game with the Urban Strike Hoodie. Crafted from premium cotton blend fabric, this hoodie combines comfort with style. Features signature Siwach branding and a modern fit that\'s perfect for both gym sessions and casual outings.',
    badge: 'NEW DROP',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    specifications: [
      '80% Cotton, 20% Polyester blend',
      'Signature Siwach embroidered logo',
      'Kangaroo pocket design',
      'Ribbed cuffs and hem',
      'Machine washable'
    ],
    reviews: [
      { name: 'Rohit Kumar', rating: 4, comment: 'Great quality and fit!' },
      { name: 'Vikash Singh', rating: 5, comment: 'Love the design and comfort.' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: 'Elite Performance Shorts',
    category: 'men',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Moisture-wicking training shorts designed for peak performance',
    fullDescription: 'Dominate your training sessions with the Elite Performance Shorts. Featuring advanced moisture-wicking technology and a comfortable athletic fit, these shorts are designed to keep you cool and dry during intense workouts.',
    badge: 'LIMITED',
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: [
      'Moisture-wicking fabric technology',
      'Elastic waistband with drawstring',
      'Side pockets for essentials',
      'Quick-dry material',
      'Anti-odor treatment'
    ],
    reviews: [
      { name: 'Amit Verma', rating: 5, comment: 'Perfect for gym sessions!' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: 'Power Training Tank',
    category: 'men',
    price: 1999,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Breathable training tank for intense workout sessions',
    fullDescription: 'Stay cool and comfortable during your most intense training sessions with the Power Training Tank. Made from lightweight, breathable fabric that moves with your body.',
    badge: 'ESSENTIAL',
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: [
      'Lightweight breathable fabric',
      'Muscle-fit design',
      'Moisture-wicking technology',
      'Seamless construction',
      'Quick-dry material'
    ],
    reviews: [],
    inStock: true,
    featured: false
  },

  // Women's Collection
  {
    id: 5,
    name: 'Stealth Training Jacket',
    category: 'women',
    price: 6999,
    originalPrice: 8999,
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Weather-resistant training jacket with thermal regulation',
    fullDescription: 'Conquer any weather with the Stealth Training Jacket. Features advanced thermal regulation technology and weather-resistant materials to keep you comfortable in all conditions.',
    badge: 'PREMIUM',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    specifications: [
      'Weather-resistant outer shell',
      'Thermal regulation technology',
      'Breathable mesh lining',
      'Adjustable hood and cuffs',
      'Multiple secure pockets'
    ],
    reviews: [
      { name: 'Sneha Reddy', rating: 5, comment: 'Perfect for outdoor training!' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: 'Apex Training Tights',
    category: 'women',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Compression tights with muscle support and recovery technology',
    fullDescription: 'Experience superior support and recovery with the Apex Training Tights. Featuring graduated compression technology and muscle support zones for enhanced performance and faster recovery.',
    badge: 'PRO',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    specifications: [
      'Graduated compression technology',
      'Muscle support zones',
      'Four-way stretch fabric',
      'Moisture-wicking material',
      'Flatlock seams for comfort'
    ],
    reviews: [
      { name: 'Kavya Sharma', rating: 5, comment: 'Amazing support and comfort!' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: 'Flex Sports Bra',
    category: 'women',
    price: 2499,
    originalPrice: 3299,
    image: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-support sports bra for intense training sessions',
    fullDescription: 'Get the support you need with the Flex Sports Bra. Designed for high-intensity workouts with superior support and comfort technology.',
    badge: 'SUPPORT',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    specifications: [
      'High-impact support',
      'Moisture-wicking fabric',
      'Removable padding',
      'Racerback design',
      'Seamless construction'
    ],
    reviews: [],
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: 'Flow Yoga Set',
    category: 'women',
    price: 4999,
    originalPrice: 6499,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete yoga set with top and leggings for flexibility',
    fullDescription: 'Find your flow with the complete Flow Yoga Set. Includes matching top and leggings designed for maximum flexibility and comfort during yoga and meditation sessions.',
    badge: 'SET',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    specifications: [
      'Four-way stretch fabric',
      'Buttery-soft material',
      'High-waisted leggings',
      'Matching sports bra included',
      'Eco-friendly materials'
    ],
    reviews: [
      { name: 'Ananya Gupta', rating: 5, comment: 'Perfect for yoga practice!' }
    ],
    inStock: true,
    featured: false
  },

  // Tech Collection
  {
    id: 9,
    name: 'Quantum Fitness Tracker',
    category: 'tech',
    price: 15999,
    originalPrice: 19999,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Advanced fitness tracking with AI-powered performance insights',
    fullDescription: 'Revolutionize your fitness journey with the Quantum Fitness Tracker. Features AI-powered performance insights, comprehensive health monitoring, and seamless smartphone integration.',
    badge: 'TECH',
    sizes: ['One Size'],
    specifications: [
      'AI-powered performance analytics',
      'Heart rate monitoring',
      'GPS tracking',
      '7-day battery life',
      'Water-resistant design',
      'Smartphone app integration'
    ],
    reviews: [
      { name: 'Tech Reviewer', rating: 5, comment: 'Best fitness tracker in the market!' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: 'Sonic Wireless Earbuds',
    category: 'tech',
    price: 7999,
    originalPrice: 9999,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium wireless earbuds designed for athletes and fitness enthusiasts',
    fullDescription: 'Experience premium audio quality with the Sonic Wireless Earbuds. Designed specifically for athletes with sweat-resistant technology and secure fit for intense workouts.',
    badge: 'WIRELESS',
    sizes: ['One Size'],
    specifications: [
      'Active noise cancellation',
      'Sweat and water resistant',
      '8-hour battery life',
      'Quick charge technology',
      'Secure sport fit',
      'Premium audio drivers'
    ],
    reviews: [
      { name: 'Music Lover', rating: 4, comment: 'Great sound quality for workouts!' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 11,
    name: 'Smart Water Bottle',
    category: 'tech',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Smart hydration tracking with temperature control',
    fullDescription: 'Stay perfectly hydrated with the Smart Water Bottle. Features intelligent hydration tracking, temperature control, and smartphone connectivity to monitor your daily water intake.',
    badge: 'SMART',
    sizes: ['500ml', '750ml'],
    specifications: [
      'Hydration tracking technology',
      'Temperature control (hot/cold)',
      'Smartphone app connectivity',
      'LED hydration reminders',
      'Stainless steel construction',
      '24-hour temperature retention'
    ],
    reviews: [],
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: 'Performance Monitor Band',
    category: 'tech',
    price: 5999,
    originalPrice: 7499,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Real-time performance monitoring for serious athletes',
    fullDescription: 'Take your training to the next level with the Performance Monitor Band. Real-time biometric monitoring and performance analytics for serious athletes and fitness professionals.',
    badge: 'PRO',
    sizes: ['S', 'M', 'L'],
    specifications: [
      'Real-time biometric monitoring',
      'Performance analytics',
      'Heart rate variability tracking',
      'Recovery recommendations',
      'Professional athlete grade',
      'Cloud data synchronization'
    ],
    reviews: [
      { name: 'Pro Athlete', rating: 5, comment: 'Essential for serious training!' }
    ],
    inStock: true,
    featured: false
  },

  // New Arrivals (mix of categories)
  {
    id: 13,
    name: 'Power Grip Gloves',
    category: 'new',
    price: 1999,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional-grade training gloves with enhanced grip technology',
    fullDescription: 'Maximize your grip and protect your hands with the Power Grip Gloves. Professional-grade construction with enhanced grip technology for weightlifting and cross-training.',
    badge: 'NEW',
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: [
      'Enhanced grip technology',
      'Breathable mesh backing',
      'Reinforced palm padding',
      'Adjustable wrist support',
      'Machine washable'
    ],
    reviews: [],
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: 'Recovery Foam Roller',
    category: 'new',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional recovery tool for muscle therapy and flexibility',
    fullDescription: 'Accelerate your recovery with the professional-grade Recovery Foam Roller. Designed for deep tissue massage and improved flexibility.',
    badge: 'RECOVERY',
    sizes: ['Standard'],
    specifications: [
      'High-density foam construction',
      'Textured surface for deep massage',
      'Lightweight and portable',
      'Professional therapy grade',
      'Easy to clean'
    ],
    reviews: [],
    inStock: true,
    featured: false
  },
  {
    id: 15,
    name: 'Hydro Training Vest',
    category: 'new',
    price: 8999,
    originalPrice: 11999,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Innovative hydration vest for endurance training',
    fullDescription: 'Stay hydrated during long training sessions with the innovative Hydro Training Vest. Features integrated hydration system and lightweight design.',
    badge: 'INNOVATION',
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: [
      'Integrated hydration system',
      'Lightweight mesh construction',
      'Adjustable fit system',
      'Multiple storage pockets',
      'Reflective safety elements'
    ],
    reviews: [],
    inStock: true,
    featured: false
  },
  {
    id: 16,
    name: 'Elite Running Socks',
    category: 'new',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7432771/pexels-photo-7432771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Performance running socks with moisture-wicking technology',
    fullDescription: 'Complete your running setup with the Elite Running Socks. Features advanced moisture-wicking technology and cushioned support zones.',
    badge: 'COMFORT',
    sizes: ['S', 'M', 'L'],
    specifications: [
      'Moisture-wicking technology',
      'Cushioned support zones',
      'Seamless toe construction',
      'Arch support compression',
      'Blister prevention design'
    ],
    reviews: [],
    inStock: true,
    featured: false
  }
];

// Helper functions
export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const searchProducts = (query) => {
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};