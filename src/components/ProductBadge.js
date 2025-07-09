import React from 'react';
import { motion } from 'framer-motion';
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
  'NEW DROP': {
    icon: '🆕',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
    label: 'New Drop'
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
  },
  'ESSENTIAL': {
    icon: '⚡',
    bgColor: 'bg-gray-600',
    textColor: 'text-white',
    label: 'Essential'
  },
  'SUPPORT': {
    icon: '💪',
    bgColor: 'bg-pink-500',
    textColor: 'text-white',
    label: 'Support'
  },
  'SET': {
    icon: '📦',
    bgColor: 'bg-teal-500',
    textColor: 'text-white',
    label: 'Set'
  },
  'WIRELESS': {
    icon: '📶',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    label: 'Wireless'
  },
  'SMART': {
    icon: '🧠',
    bgColor: 'bg-cyan-500',
    textColor: 'text-white',
    label: 'Smart'
  },
  'RECOVERY': {
    icon: '🔄',
    bgColor: 'bg-green-600',
    textColor: 'text-white',
    label: 'Recovery'
  },
  'INNOVATION': {
    icon: '💡',
    bgColor: 'bg-yellow-600',
    textColor: 'text-white',
    label: 'Innovation'
  },
  'COMFORT': {
    icon: '☁️',
    bgColor: 'bg-blue-400',
    textColor: 'text-white',
    label: 'Comfort'
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