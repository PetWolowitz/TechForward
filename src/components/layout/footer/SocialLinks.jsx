import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si';

const socialLinks = [
  { 
    icon: <SiGithub className="h-5 w-5 sm:h-6 sm:w-6" />, 
    href: "https://github.com/PetWolowitz", 
    label: "GitHub" 
  },
  { 
    icon: <SiTwitter className="h-5 w-5 sm:h-6 sm:w-6" />, 
    href: "#", 
    label: "Twitter" 
  },
  { 
    icon: <SiLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />, 
    href: "https://www.linkedin.com/in/pietro-costa-6289992b7/", 
    label: "LinkedIn" 
  }
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="px-4 sm:px-0"
    >
      <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Follow Us</h4>
      <div className="flex gap-3 sm:gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 sm:p-3 rounded-full bg-white/5 text-gray-400 
                     hover:text-white hover:bg-white/10 transition-colors"
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}