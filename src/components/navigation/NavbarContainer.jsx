import React from 'react';
import { motion } from 'framer-motion';

export function NavbarContainer({ children, hidden }) {
  return (
    <motion.nav
      variants={{
        visible: { x: 0 },
        hidden: { x: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-auto z-50"
    >
      <div className="bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg 
                      px-3 sm:px-4 py-1.5 sm:py-2 w-full sm:w-auto">
        {children}
      </div>
    </motion.nav>
  );
}