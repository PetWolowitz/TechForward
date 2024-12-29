import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative min-h-screen pt-20">
      {/* Sfondo */}
      <div
        className="
          absolute
          inset-0
          bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80')]
          bg-cover
          bg-center
        "
      />
      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenuto */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Titolo responsive: più piccolo sui device piccoli, più grande sui device medi, ecc. */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Contattaci
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Siamo qui per aiutarti. Contattaci per qualsiasi domanda o richiesta.
          </p>
        </motion.div>

        {/* 
          Griglia: 
          - 1 colonna di default (mobile) 
          - 2 colonne da md in poi 
          - Gap variabile in base ai breakpoint
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Sezione informazioni contatto (leggero margine a destra su schermi >= md) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:mr-6 lg:mr-8 xl:mr-10 2xl:mr-12"
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">pietro.costa25@hotmail.it</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Telefono</h3>
                  <p className="text-gray-300">+39 327 35 56 ...</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Indirizzo</h3>
                  <p className="text-gray-300">Via voglia di programmare 22. Arignano</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sezione form contatto (leggero margine a sinistra su schermi >= md) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:ml-6 lg:ml-8 xl:ml-10 2xl:ml-12"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  placeholder="La tua email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  placeholder="Il tuo messaggio"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Invia Messaggio
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
