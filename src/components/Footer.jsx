import React from 'react';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />, href: "https://github.com/PetWolowitz", label: "GitHub" },
  { icon: <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />, href: "https://www.linkedin.com/in/pietro-costa-6289992b7/", label: "LinkedIn" }
];

const contactInfo = [
  { icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />, text: "pietro.costa25@hotmail.it" },
  { icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />, text: "+39 327 35 56 ..." },
  { icon: <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Torino, italia" }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Newsletter Section */}
          <motion.div
            className="col-span-1 lg:col-span-2 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Stay Connected!</h3>
            <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
              Join our newsletter to stay up to date with the latest innovations and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-gray-700 text-white text-sm sm:text-base focus:outline-none focus:border-purple-500"
              />
              <button className="px-4 sm:px-6 py-2 bg-purple-600 text-white text-sm sm:text-base rounded-lg hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-6 px-2 sm:px-0"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Contact:</h4>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="break-all">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="px-2 sm:px-0"
          >
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Follow Us:</h4>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 sm:p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800 px-2 sm:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-center text-sm sm:text-base text-gray-400">
            © {new Date().getFullYear()} PurpleCoast INC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}