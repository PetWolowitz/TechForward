import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Pietro.costa25@hotmail.it" },
  { icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />, text: "+39 327 35 56" },
  { icon: <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Torino, Italia" }
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="px-4 sm:px-0" // Aggiunto padding orizzontale su mobile
    >
      <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Contact</h4>
      <ul className="space-y-3 sm:space-y-4">
        {contactInfo.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
          >
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            <span className="break-all">{item.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}