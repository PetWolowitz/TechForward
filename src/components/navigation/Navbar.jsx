import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';
import { NavbarContainer } from './NavbarContainer';

export function Navbar({ 
  logo = <Rocket className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />, 
  title = "TechForward", 
  links 
}) {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = links.map(link => ({
    ...link,
    active: location.pathname === link.to
  }));

  return (
    <NavbarContainer hidden={hidden}>
      {/* Container principale con padding responsive */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        {/* Logo e titolo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-1 sm:gap-1.5 py-1">
            {logo}
            <span className="text-xs sm:text-sm font-bold text-gray-900">
              {title}
            </span>
          </Link>
        </motion.div>

        {/* Links della navigazione */}
        <nav className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 -mx-2 px-2 sm:mx-0 sm:px-0">
          {navLinks.map(({ to, label, active }) => (
            <NavLink 
              key={to} 
              to={to} 
              active={active}
              className="whitespace-nowrap text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2"
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </NavbarContainer>
  );
}