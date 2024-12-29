import React from 'react';
import { motion } from 'framer-motion';

export function Copyright() {
  return (
    <motion.div 
      className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800 px-4 sm:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
    >
      <p className="text-center text-sm sm:text-base text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </motion.div>
  );
}