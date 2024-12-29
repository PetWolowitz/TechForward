import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Projects';

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Chi Siamo" },
  { to: "/contact", label: "Contatti" }
];

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar links={navLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}