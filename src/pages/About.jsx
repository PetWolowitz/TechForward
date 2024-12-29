import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';
import AnimatedTestimonial from '../components/AnimatedTestimonial';
import FeatureBlock from '../components/FeatureBlock';

const teamMembers = [
  {
    name: 'Marco Rossi',
    role: 'CEO & Fondatore',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Laura Bianchi',
    role: 'Direttore Tecnico',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Giuseppe Verdi',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

const values = [
  {
    icon: <Users className="h-8 w-8 text-purple-500" />,
    title: 'Il Nostro Team',
    description: 'Professionisti esperti dedicati all\'eccellenza e all\'innovazione continua.'
  },
  {
    icon: <Target className="h-8 w-8 text-purple-500" />,
    title: 'La Nostra Missione',
    description: 'Trasformare il futuro digitale attraverso soluzioni innovative e sostenibili.'
  },
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    title: 'I Nostri Valori',
    description: 'Qualità, integrità e innovazione sono al centro di tutto ciò che facciamo.'
  }
];

export default function About() {
  return (
    <div className="relative min-h-screen pt-20">
      {/* Sfondo */}
      <div
        className="
          absolute 
          inset-0 
          bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')]
          bg-cover
          bg-center
        "
      />
      {/* Overlay scuro (opzionale) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenuto */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Siamo un team di innovatori appassionati che trasformano idee in realtà digitali.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <AnimatedTestimonial
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              delay={index * 0.2}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <FeatureBlock
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
