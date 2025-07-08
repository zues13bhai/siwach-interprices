import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

export default function StarRating({ rating, maxRating = 5, size = 'md', showNumber = false, className = '' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= rating;
    const isHalfFilled = i - 0.5 <= rating && i > rating;
    
    stars.push(
      <div key={i} className="relative">
        {isFilled ? (
          <StarIcon className={`${sizeClasses[size]} text-yellow-400`} />
        ) : isHalfFilled ? (
          <>
            <StarIconOutline className={`${sizeClasses[size]} text-gray-400 absolute`} />
            <div className="overflow-hidden w-1/2">
              <StarIcon className={`${sizeClasses[size]} text-yellow-400`} />
            </div>
          </>
        ) : (
          <StarIconOutline className={`${sizeClasses[size]} text-gray-400`} />
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center">
        {stars}
      </div>
      {showNumber && (
        <span className="text-sm text-gray-400 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}