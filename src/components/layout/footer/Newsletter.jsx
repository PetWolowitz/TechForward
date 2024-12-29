import React from 'react';
import { motion } from 'framer-motion';

export function Newsletter() {
  return (
    <motion.div 
      className="col-span-1 lg:col-span-2 px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Stay Connected</h3>
      <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
        Join our newsletter to stay up to date with the latest innovations and updates.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 sm:gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-gray-700 
                   text-white text-sm sm:text-base placeholder:text-gray-500
                   focus:outline-none focus:border-purple-500"
        />
        <button className="px-4 sm:px-6 py-2 bg-purple-600 text-white text-sm sm:text-base 
                         rounded-lg hover:bg-purple-700 transition-colors">
          Subscribe
        </button>
      </form>
    </motion.div>
  );
}