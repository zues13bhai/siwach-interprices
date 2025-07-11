// Premium Product Collection for Siwach Enterprises
export const products = [
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
    specifications: [
      'VelocityFoam™ midsole with 40% energy return',
      'Carbon fiber propulsion plate',
      'Engineered mesh upper with targeted ventilation',
      'Continental™ rubber outsole with grip zones',
      'Weight: 240g (size 9) - ultralight construction',
      'Drop: 8mm for optimal running efficiency'
    ],
    reviews: [
      { name: 'Arjun Sharma', rating: 5, comment: 'Broke my personal marathon record wearing these. Incredible energy return!' },
      { name: 'Priya Patel', rating: 5, comment: 'Most comfortable running shoes I\'ve ever owned. Worth every rupee.' }
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
    image: 'https://imgs.search.brave.com/EWNzEKvIzYdd4wr6K-jeZjdw0y7KKu2a8EvOuQt7bnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ3OTMyOTAxL2Mv/NTY5LzU2OS81NS81/L2lsLzVlNWY4OC81/NTE5MjkyNTY5L2ls/XzYwMHg2MDAuNTUx/OTI5MjU2OV81a3c1/LmpwZw',
    images: [
      'https://imgs.search.brave.com/EWNzEKvIzYdd4wr6K-jeZjdw0y7KKu2a8EvOuQt7bnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ3OTMyOTAxL2Mv/NTY5LzU2OS81NS81/L2lsLzVlNWY4OC81/NTE5MjkyNTY5L2ls/XzYwMHg2MDAuNTUx/OTI5MjU2OV81a3c1/LmpwZw'
  ],
    description: 'Where street culture meets athletic excellence',
    fullDescription: 'The Urban Strike Hoodie embodies the spirit of modern athleticism. Crafted from premium organic cotton blend with moisture-wicking technology, this hoodie transitions seamlessly from gym to street. Features include a hidden phone pocket with secure zipper, reinforced stress points for durability, and our signature reflective logo that catches light beautifully. Each piece is pre-washed for perfect fit and zero shrinkage.',
    badge: 'NEW DROP',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    specifications: [
      '70% Organic Cotton, 30% Recycled Polyester',
      'Moisture-wicking interior lining',
      'YKK premium zippers throughout',
      'Reinforced kangaroo pocket with hidden compartment',
      'Reflective Siwach logo with 3M technology',
      'Pre-shrunk fabric for consistent fit'
    ],
    reviews: [
      { name: 'Rohit Kumar', rating: 4, comment: 'Premium quality that you can feel. Love the hidden pocket!' },
      { name: 'Vikash Singh', rating: 5, comment: 'Perfect fit and the material is incredibly soft yet durable.' }
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
    image: 'https://imgs.search.brave.com/FxK5q_jBYBpZP6b3lnfbylvlaSlEQuqpDv7xuZa_RB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVhLzMw/LzE3LzVhMzAxNzk0/MzA0YWZmMDViMTM5/YTA4Zjc3YzlhZjBh/LmpwZw',
    images: [
      'https://imgs.search.brave.com/FxK5q_jBYBpZP6b3lnfbylvlaSlEQuqpDv7xuZa_RB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVhLzMw/LzE3LzVhMzAxNzk0/MzA0YWZmMDViMTM5/YTA4Zjc3YzlhZjBh/LmpwZw'
    ],
    description: 'Unleash your potential with unrestricted movement',
    fullDescription: 'Designed for athletes who demand perfection in every rep. The Elite Performance Shorts feature our revolutionary FlexWeave™ fabric that moves with your body while maintaining shape. Integrated compression zones provide muscle support, while the quick-dry technology keeps you comfortable during the most intense sessions. Laser-cut ventilation zones and flatlock seams ensure zero chafing.',
    badge: 'LIMITED',
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: [
      'FlexWeave™ 4-way stretch fabric technology',
      'Integrated compression zones for muscle support',
      'Quick-dry technology - 3x faster than cotton',
      'Laser-cut ventilation for optimal airflow',
      'Flatlock seams prevent chafing',
      'Secure zip pocket for essentials'
    ],
    reviews: [
      { name: 'Amit Verma', rating: 5, comment: 'These shorts are a game-changer for my training sessions!' }
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
    image: 'https://imgs.search.brave.com/CijMuEBZRXie7SVZlVfSQ31rc5bQ7-T-uUxoAyDb9cE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF1dTcwSHhuMVMu/anBn',
    images: [
      'https://imgs.search.brave.com/CijMuEBZRXie7SVZlVfSQ31rc5bQ7-T-uUxoAyDb9cE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF1dTcwSHhuMVMu/anBn'
    ],
    description: 'Sculpted for strength, engineered for endurance',
    fullDescription: 'The Power Training Tank is precision-cut for the serious athlete. Featuring our signature muscle-mapping technology, this tank provides targeted support where you need it most. The ultra-lightweight fabric feels like a second skin while advanced moisture management keeps you dry and focused.',
    badge: 'ESSENTIAL',
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: [
      'Muscle-mapping technology for targeted support',
      'Ultra-lightweight 120gsm fabric',
      'Advanced moisture management system',
      'Seamless construction for comfort',
      'Anti-microbial treatment',
      'Athletic fit with extended hem'
    ],
    reviews: [],
    inStock: true,
    featured: false
  },

  // Women's Collection - Empowering Athletic Elegance
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
    fullDescription: 'The Stealth Training Jacket represents the perfect fusion of style and performance. Engineered with our exclusive WeatherShield™ technology, it adapts to changing conditions while maintaining breathability. The sleek silhouette flatters your form while providing unrestricted movement. Features include laser-welded seams for waterproofing and strategically placed ventilation zones.',
    badge: 'PREMIUM',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    specifications: [
      'WeatherShield™ adaptive protection technology',
      'Laser-welded seams for complete waterproofing',
      'Strategic ventilation zones with YKK AquaGuard zippers',
      'Packable design - folds into its own pocket',
      'Reflective details for low-light visibility',
      'Feminine athletic cut with adjustable features'
    ],
    reviews: [
      { name: 'Sneha Reddy', rating: 5, comment: 'Perfect for outdoor training in any weather. Stylish and functional!' }
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
    image: 'https://imgs.search.brave.com/ZtQbsEOiWcGRBY5TTDFvKCEHRil9JaWBpEQeEPap4QY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92M2Fw/cGFyZWwuY29tL2Nk/bi9zaG9wL2ZpbGVz/L1YzX0FwcGFyZWxf/d29tZW5fc19ibGFj/a190ZW1wb19zY3J1/bmNoX2J1bV93b3Jr/b3V0X2d5bV9sZWdn/aW5nc19hbmRfZml0/bmVzc190aWdodHNf/Zm9yX3lvZ2FfcnVu/bmluZ19hbmRfcGls/YXRlc18tX2xpZmVz/dHlsZS5wbmc_dj0x/NzQxNzk2NzYyJndp/ZHRoPTI4NDQ',
    images: [
      'https://imgs.search.brave.com/ZtQbsEOiWcGRBY5TTDFvKCEHRil9JaWBpEQeEPap4QY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92M2Fw/cGFyZWwuY29tL2Nk/bi9zaG9wL2ZpbGVz/L1YzX0FwcGFyZWxf/d29tZW5fc19ibGFj/a190ZW1wb19zY3J1/bmNoX2J1bV93b3Jr/b3V0X2d5bV9sZWdn/aW5nc19hbmRfZml0/bmVzc190aWdodHNf/Zm9yX3lvZ2FfcnVu/bmluZ19hbmRfcGls/YXRlc18tX2xpZmVz/dHlsZS5wbmc_dj0x/NzQxNzk2NzYyJndp/ZHRoPTI4NDQ'
    ],
    description: 'Sculpt your strength with intelligent compression',
    fullDescription: 'Experience the future of athletic wear with the Apex Training Tights. Our proprietary GradualFit™ compression technology provides targeted support to key muscle groups, enhancing performance and accelerating recovery. The high-waisted design offers core support while the seamless construction eliminates pressure points. Crafted from Italian-milled fabric for unparalleled comfort.',
    badge: 'PRO',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    specifications: [
      'GradualFit™ graduated compression technology',
      'Italian-milled performance fabric',
      'High-waisted design with core support panel',
      'Seamless construction with bonded seams',
      'Quick-dry technology with odor resistance',
      'Side pocket for secure phone storage'
    ],
    reviews: [
      { name: 'Kavya Sharma', rating: 5, comment: 'These tights are incredible! Perfect compression and so comfortable.' }
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
    image: 'https://imgs.search.brave.com/OgQSuLJcFDRbAQ06I1mAPuqS2NkGQYQ8zg8LYIF4N30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2VhcmV0YWxhLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EYXlmbGV4/X1J1Y2hlZHN0cmFw/YmFuZGVhdWJyYV9T/aGFkb3dibGFja18x/MzUyLmpwZz92PTE3/MzcxMjE3MTYmd2lk/dGg9MzAw',
    images: [
      'https://imgs.search.brave.com/OgQSuLJcFDRbAQ06I1mAPuqS2NkGQYQ8zg8LYIF4N30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2VhcmV0YWxhLmNv/bS9jZG4vc2hvcC9m/aWxlcy9EYXlmbGV4/X1J1Y2hlZHN0cmFw/YmFuZGVhdWJyYV9T/aGFkb3dibGFja18x/MzUyLmpwZz92PTE3/MzcxMjE3MTYmd2lk/dGg9MzAw'
    ],
    description: 'Uncompromising support meets feminine elegance',
    fullDescription: 'The Flex Sports Bra redefines athletic support with its innovative design. Featuring our exclusive FlexSupport™ technology, it adapts to your movement while providing consistent support. The moisture-wicking fabric keeps you dry and comfortable, while the seamless construction ensures all-day comfort.',
    badge: 'SUPPORT',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    specifications: [
      'FlexSupport™ adaptive support technology',
      'Moisture-wicking performance fabric',
      'Removable padding with shape retention',
      'Racerback design for unrestricted movement',
      'Seamless construction for comfort',
      'Medium to high impact support rating'
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
    image: 'https://imgs.search.brave.com/hzwCtkbZnhlsXfpW34VVu0P7n7tw2Y1Y3ms-jI7IcuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjErTjNodnJGWkwu/anBn',
    images: [
      'https://imgs.search.brave.com/hzwCtkbZnhlsXfpW34VVu0P7n7tw2Y1Y3ms-jI7IcuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjErTjNodnJGWkwu/anBn'
    ],
    description: 'Find your center with mindful movement',
    fullDescription: 'The Flow Yoga Set embodies the harmony of mind, body, and spirit. Crafted from sustainable bamboo-blend fabric, this set offers buttery-soft comfort with natural antimicrobial properties. The coordinated pieces move with your practice, providing gentle support without restriction.',
    badge: 'SET',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    specifications: [
      'Sustainable bamboo-blend fabric',
      'Natural antimicrobial properties',
      'Four-way stretch for unrestricted movement',
      'High-waisted leggings with wide waistband',
      'Matching sports bra with light support',
      'Eco-friendly packaging and materials'
    ],
    reviews: [
      { name: 'Ananya Gupta', rating: 5, comment: 'Perfect for my yoga practice. The fabric is incredibly soft!' }
    ],
    inStock: true,
    featured: false
  },

  // Tech Collection - Innovation Meets Performance
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
    fullDescription: 'The Quantum Fitness Tracker represents the convergence of cutting-edge technology and athletic excellence. Powered by advanced AI algorithms, it provides real-time performance insights that adapt to your unique physiology. The aerospace-grade titanium construction ensures durability while maintaining an elegant profile. Features include precision GPS tracking, comprehensive health monitoring, and seamless integration with professional training platforms.',
    badge: 'TECH',
    sizes: ['One Size'],
    specifications: [
      'AI-powered performance analytics with machine learning',
      'Aerospace-grade titanium construction',
      'Multi-band GPS with precision tracking',
      '14-day battery life with solar charging',
      'Comprehensive health monitoring (HR, SpO2, stress)',
      'Professional athlete training platform integration'
    ],
    reviews: [
      { name: 'Tech Reviewer', rating: 5, comment: 'Revolutionary fitness tracking technology. Worth the investment!' }
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
    image: 'https://imgs.search.brave.com/VFYNzHC5xl4gVkp9Tb9gIBx3yxaWA21K9727I1Q8O_s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWFz/b25zdHdlbHZlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNC9zb3VuZHBl/YXRzLXNvbmljLXBy/by13aXJlbGVzcy1l/YXJidWRzLXFjX21h/aW4tMS5qcGc',
    images: [
      'https://imgs.search.brave.com/VFYNzHC5xl4gVkp9Tb9gIBx3yxaWA21K9727I1Q8O_s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWFz/b25zdHdlbHZlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNC9zb3VuZHBl/YXRzLXNvbmljLXBy/by13aXJlbGVzcy1l/YXJidWRzLXFjX21h/aW4tMS5qcGc'
    ],
    description: 'Immersive audio engineered for athletic excellence',
    fullDescription: 'The Sonic Wireless Earbuds deliver studio-quality audio in a design built for athletes. Featuring custom-tuned drivers and adaptive noise cancellation, they provide the perfect soundtrack to your training. The secure-fit design stays comfortable during the most intense workouts, while the sweat-resistant coating ensures durability.',
    badge: 'WIRELESS',
    sizes: ['One Size'],
    specifications: [
      'Custom-tuned 10mm dynamic drivers',
      'Adaptive noise cancellation technology',
      'IPX7 sweat and water resistance',
      '32-hour total battery life with case',
      'Secure-fit design with multiple ear tip sizes',
      'Low-latency gaming mode for perfect sync'
    ],
    reviews: [
      { name: 'Music Lover', rating: 4, comment: 'Exceptional sound quality and they never fall out during workouts!' }
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
    image: 'https://imgs.search.brave.com/urngwDyk9vvDH7ILZjRijGtXCusQ1Ei1TJHAhD0JSBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9udXBv/LmNvbS9jZG4vc2hv/cC9maWxlcy8yTnVw/b19EYXJrX2FuZF9C/bHVlX3dhdGVyX2Jv/dHRsZV9rb3BpZXIu/d2VicD92PTE3Mjc5/NjI4MDMmd2lkdGg9/MTQ0NQ',
    images: [
      'https://imgs.search.brave.com/urngwDyk9vvDH7ILZjRijGtXCusQ1Ei1TJHAhD0JSBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9udXBv/LmNvbS9jZG4vc2hv/cC9maWxlcy8yTnVw/b19EYXJrX2FuZF9C/bHVlX3dhdGVyX2Jv/dHRsZV9rb3BpZXIu/d2VicD92PTE3Mjc5/NjI4MDMmd2lkdGg9/MTQ0NQ'
    ],
    description: 'Intelligent hydration for peak performance',
    fullDescription: 'The Smart Water Bottle revolutionizes hydration with intelligent tracking and temperature control. Built-in sensors monitor your intake and provide personalized hydration recommendations based on your activity level and environmental conditions. The double-wall vacuum insulation maintains temperature for 24 hours.',
    badge: 'SMART',
    sizes: ['500ml', '750ml'],
    specifications: [
      'Intelligent hydration tracking with app integration',
      'Temperature control with 24-hour retention',
      'LED hydration reminders with customizable alerts',
      'Medical-grade stainless steel construction',
      'Wireless charging base included',
      'UV-C self-cleaning technology'
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
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    images: [
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    description: 'Professional-grade biometric monitoring',
    fullDescription: 'The Performance Monitor Band provides real-time biometric data used by professional athletes and sports scientists. Advanced sensors track heart rate variability, muscle oxygen saturation, and recovery metrics to optimize your training and prevent overexertion.',
    badge: 'PRO',
    sizes: ['S', 'M', 'L'],
    specifications: [
      'Professional-grade biometric sensors',
      'Real-time muscle oxygen saturation monitoring',
      'Heart rate variability analysis',
      'Recovery and training load recommendations',
      'Cloud-based data analytics platform',
      'Compatible with major training apps'
    ],
    reviews: [
      { name: 'Pro Athlete', rating: 5, comment: 'Essential tool for serious training. The data insights are incredible!' }
    ],
    inStock: true,
    featured: false
  },

  // New Arrivals - Latest Innovations
  {
    id: 13,
    name: 'Power Grip Gloves',
    category: 'new',
    price: 1999,
    originalPrice: 2499,
    image:  'https://imgs.search.brave.com/xD_KzF10ZwNURbVoXR5Q6QUmMtOhwzkqzEeZHS_bI6A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFIdDFUVnlWMUwu/anBn',
    images: [
      'https://imgs.search.brave.com/xD_KzF10ZwNURbVoXR5Q6QUmMtOhwzkqzEeZHS_bI6A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFIdDFUVnlWMUwu/anBn'
    ],
    description: 'Engineered grip technology for uncompromising performance',
    fullDescription: 'The Power Grip Gloves feature revolutionary grip technology developed in partnership with professional athletes. The textured palm surface provides 300% better grip than traditional gloves, while the breathable mesh backing keeps hands cool and dry during intense training sessions.',
    badge: 'NEW',
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: [
      'Revolutionary grip technology - 300% better grip',
      'Breathable mesh backing with moisture management',
      'Reinforced palm with strategic padding zones',
      'Adjustable wrist support with compression',
      'Machine washable with antimicrobial treatment',
      'Professional athlete tested and approved'
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
    image: 'https://imgs.search.brave.com/TCQx7w1BjIDd1XNnCpVQJHJIzUxFoWChWfOWiaxVebg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC8wazgxMm82/Mm5kdHcvMWN5a3Zo/ZkNsUEtOcVFYbnNG/T1lDTC8wMjRkMjA5/YjUxMTFmMWFhMGZm/OGI3YTZlZWNhNGVk/YS9LYXlsYUl0c2lu/ZXNfSGlnaEludGVu/c2l0eVN0cmVuZ3Ro/XzVfMTAyNHg2ODNf/MjdjM2E1M19lbjNm/ZDNjNWM2YWE4ODEy/MDQyNjM5YzEyZmMy/ODZiN2ZhLmpwZz93/PTEwMjQmcT04NQ',
    images: [
      'https://imgs.search.brave.com/TCQx7w1BjIDd1XNnCpVQJHJIzUxFoWChWfOWiaxVebg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC8wazgxMm82/Mm5kdHcvMWN5a3Zo/ZkNsUEtOcVFYbnNG/T1lDTC8wMjRkMjA5/YjUxMTFmMWFhMGZm/OGI3YTZlZWNhNGVk/YS9LYXlsYUl0c2lu/ZXNfSGlnaEludGVu/c2l0eVN0cmVuZ3Ro/XzVfMTAyNHg2ODNf/MjdjM2E1M19lbjNm/ZDNjNWM2YWE4ODEy/MDQyNjM5YzEyZmMy/ODZiN2ZhLmpwZz93/PTEwMjQmcT04NQ'
    ],
    description: 'Professional-grade recovery for elite athletes',
    fullDescription: 'The Recovery Foam Roller is precision-engineered for deep tissue massage and myofascial release. Its unique surface pattern mimics the hands of a professional massage therapist, providing targeted pressure points for optimal muscle recovery and flexibility enhancement.',
    badge: 'RECOVERY',
    sizes: ['Standard'],
    specifications: [
      'Professional-grade high-density foam core',
      'Precision-engineered surface pattern',
      'Mimics professional massage therapy techniques',
      'Lightweight yet durable construction',
      'Easy-clean antimicrobial surface',
      'Includes guided recovery app access'
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
    image: 'https://imgs.search.brave.com/jXASrwro3klAzuWlsslcTqxfAffZOcf7ZuvRDuOxc4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z29ydWNrLmNvbS9j/ZG4vc2hvcC9maWxl/cy9TUlRWZXN0c01h/eTE5MTU5XzQwMHgu/anBnP3Y9MTc0Nzky/Mzk4OQ',
    images: [
      'https://imgs.search.brave.com/jXASrwro3klAzuWlsslcTqxfAffZOcf7ZuvRDuOxc4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z29ydWNrLmNvbS9j/ZG4vc2hvcC9maWxl/cy9TUlRWZXN0c01h/eTE5MTU5XzQwMHgu/anBnP3Y9MTc0Nzky/Mzk4OQ'
    ],
    description: 'Revolutionary hydration system for endurance athletes',
    fullDescription: 'The Hydro Training Vest represents a breakthrough in endurance training gear. The integrated hydration system delivers precise fluid delivery while the lightweight mesh construction ensures optimal ventilation. Designed for marathon runners, cyclists, and endurance athletes who demand continuous hydration without compromise.',
    badge: 'INNOVATION',
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: [
      'Integrated 2-liter hydration system',
      'Precision fluid delivery with bite valve',
      'Ultra-lightweight mesh construction',
      'Adjustable fit system with compression zones',
      'Multiple storage compartments for nutrition',
      'Reflective safety elements for visibility'
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
    image: 'https://imgs.search.brave.com/qAOptNDRz_LSwHq3v9LisLXsJ8PbsA8zRjCKGED9xTE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdXJl/c3BvcnQuY28vY2Ru/L3Nob3AvZmlsZXMv/UFNfU29ja3NfNy5q/cGc_dj0xNzE5NDEz/NTQwJndpZHRoPTEy/MDA',
    images: [
      'https://imgs.search.brave.com/qAOptNDRz_LSwHq3v9LisLXsJ8PbsA8zRjCKGED9xTE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdXJl/c3BvcnQuY28vY2Ru/L3Nob3AvZmlsZXMv/UFNfU29ja3NfNy5q/cGc_dj0xNzE5NDEz/NTQwJndpZHRoPTEy/MDA'
    ],
    description: 'Precision-engineered comfort for every stride',
    fullDescription: 'The Elite Running Socks are meticulously crafted with zone-specific cushioning and moisture management. Each pair features targeted support areas that align with foot anatomy, providing comfort and performance enhancement for runners of all levels.',
    badge: 'COMFORT',
    sizes: ['S', 'M', 'L'],
    specifications: [
      'Zone-specific cushioning technology',
      'Advanced moisture-wicking fibers',
      'Seamless toe construction prevents blisters',
      'Targeted arch support with compression',
      'Antimicrobial treatment for freshness',
      'Reinforced heel and toe for durability'
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
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.fullDescription.toLowerCase().includes(query.toLowerCase())
  );
};

export const getProductsByPriceRange = (min, max) => {
  return products.filter(product => product.price >= min && product.price <= max);
};

export const getProductsByBadge = (badge) => {
  return products.filter(product => product.badge === badge);
};