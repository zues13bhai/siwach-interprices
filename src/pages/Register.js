import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    // Simulate registration process
    setTimeout(() => {
      if (formData.name && formData.email && formData.password) {
        // Simulate successful registration
        dispatch(login({
          email: formData.email,
          name: formData.name
        }));
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight mb-4">
              JOIN THE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                MOVEMENT
              </span>
            </h1>
            <p className="text-gray-400 font-light">
              Create your account and become part of the Siwach family
            </p>
          </div>

          {/* Registration Form */}
          <motion.form
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {error && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 text-sm"
              >
                {error}
              </motion.div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-gray-800 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-gray-800 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-gray-800 transition-all duration-300"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-gray-800 transition-all duration-300"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black py-4 font-bold text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {isLoading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
            </button>
          </motion.form>

          {/* Additional Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm mb-4">
                Already have an account?
              </p>
              <Link
                to="/login"
                className="inline-block border-2 border-white text-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                SIGN IN
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}