import React from 'react';
import { Menu, X, GraduationCap, BookOpen, Users, Calendar, Award, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;