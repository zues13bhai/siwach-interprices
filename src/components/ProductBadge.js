import React from 'react';
import { motion } from 'framer-motion';

const badgeConfig = {
  'BESTSELLER': {
    icon: '🔥',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
    label: 'Bestseller'
  },
  'NEW': {
    icon: '🆕',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
    label: 'New Arrival'
  },
  'LIMITED': {
    icon: '⚡',
    bgColor: 'bg-yellow-500',
    textColor: 'text-black',
    label: 'Limited Edition'
  },
  'VERIFIED': {
    icon: '✅',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
    label: 'Verified'
  },
  'PREMIUM': {
    icon: '💎',
    bgColor: 'bg-purple-500',
    textColor: 'text-white',
    label: 'Premium'
  },
  'TECH': {
    icon: '🚀',
    bgColor: 'bg-indigo-500',
    textColor: 'text-white',
    label: 'Tech'
  },
  'PRO': {
    icon: '⭐',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
    label: 'Pro'
  },
  'SALE': {
    icon: '💰',
    bgColor: 'bg-red-600',
    textColor: 'text-white',
    label: 'On Sale'
  }
};

export default function ProductBadge({ badge, className = '', animated = true }) {
  if (!badge || !badgeConfig[badge]) return null;

  const config = badgeConfig[badge];

  const BadgeComponent = (
    <div className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold tracking-wider ${config.bgColor} ${config.textColor} ${className}`}>
      <span className="text-xs">{config.icon}</span>
      <span>{config.label}</span>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        {BadgeComponent}
      </motion.div>
    );
  }

  return BadgeComponent;
}