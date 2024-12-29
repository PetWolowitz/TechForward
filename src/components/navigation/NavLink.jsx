import React from 'react';
import { Link } from 'react-router-dom';

export function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`
        px-2 sm:px-2.5 
        py-0.5 sm:py-1 
        rounded-lg 
        text-xs sm:text-sm 
        font-medium 
        transition-colors
        ${
          active
            ? 'text-white bg-purple-600'
            : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
        }
      `}
    >
      {children}
    </Link>
  );
}