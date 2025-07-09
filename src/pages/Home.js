import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import CategoryShowcase from '../components/CategoryShowcase';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white overflow-hidden"
    >
      <HeroCarousel />
      <CategoryShowcase />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
    </motion.div>
  );
}