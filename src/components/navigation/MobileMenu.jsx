import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink';

export function MobileMenu({ isOpen, links }) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="md:hidden mt-2 sm:mt-3 border-t border-gray-200 pt-2 sm:pt-3 px-2 sm:px-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col space-y-0.5 sm:space-y-1">
        {links.map(({ to, label, active }) => (
          <NavLink 
            key={to} 
            to={to} 
            active={active}
            className="py-2 sm:py-2.5 px-3 sm:px-4 text-sm sm:text-base rounded-lg transition-colors"
          >
            {label}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
}