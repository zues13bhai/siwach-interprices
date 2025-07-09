import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TruckIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function DeliveryEstimator({ className = '' }) {
  const [pincode, setPincode] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkDelivery = async () => {
    if (!pincode || pincode.length !== 6) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock delivery estimation logic
      const deliveryOptions = [
        {
          type: 'Standard',
          days: '3-5',
          price: 'Free',
          icon: TruckIcon,
          description: 'Free delivery on orders above ₹999'
        },
        {
          type: 'Express',
          days: '1-2',
          price: '₹99',
          icon: ClockIcon,
          description: 'Fastest delivery option'
        }
      ];

      setDeliveryInfo({
        available: true,
        pincode,
        options: deliveryOptions,
        cod: true
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={`bg-gray-900 border border-gray-800 p-6 ${className}`}>
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <MapPinIcon className="h-5 w-5 text-blue-400" />
        Delivery Information
      </h3>

      <div className="space-y-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="Enter PIN code"
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
          />
          <button
            onClick={checkDelivery}
            disabled={isLoading || pincode.length !== 6}
            className="px-6 py-3 bg-blue-500 text-white font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
          >
            {isLoading ? 'Checking...' : 'Check'}
          </button>
        </div>

        {deliveryInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="text-sm text-green-400 font-bold">
              ✅ Delivery available to {deliveryInfo.pincode}
            </div>

            <div className="space-y-3">
              {deliveryInfo.options.map((option, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800 border border-gray-700">
                  <div className="flex items-center gap-3">
                    <option.icon className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="text-white font-bold">{option.type} Delivery</div>
                      <div className="text-xs text-gray-400">{option.description}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">{option.days} days</div>
                    <div className="text-sm text-gray-400">{option.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {deliveryInfo.cod && (
              <div className="text-sm text-gray-400 flex items-center gap-2">
                <span className="text-green-400">💰</span>
                Cash on Delivery available
              </div>
            )}
          </motion.div>
        )}

        {!deliveryInfo && !isLoading && (
          <div className="text-sm text-gray-400">
            Enter your PIN code to check delivery options and estimated delivery time.
          </div>
        )}
      </div>
    </div>
  );
}