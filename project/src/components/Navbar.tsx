import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import ApplicationForm from './ApplicationForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <>
      <nav className="bg-blue-900 text-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">ISMT British College</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:bg-blue-800 px-3 py-2 rounded-md">Home</a>
                <a href="#programs" className="hover:bg-blue-800 px-3 py-2 rounded-md">Programs</a>
                <a href="#about" className="hover:bg-blue-800 px-3 py-2 rounded-md">About</a>
                <a href="#contact" className="hover:bg-blue-800 px-3 py-2 rounded-md">Contact</a>
                <button 
                  onClick={() => setShowApplicationForm(true)}
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md"
                >
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Home</a>
              <a href="#programs" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Programs</a>
              <a href="#about" className="block hover:bg-blue-800 px-3 py-2 rounded-md">About</a>
              <a href="#contact" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Contact</a>
              <button 
                onClick={() => {
                  setShowApplicationForm(true);
                  setIsOpen(false);
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <ApplicationForm 
        isOpen={showApplicationForm} 
        onClose={() => setShowApplicationForm(false)} 
      />
    </>
  );
};

export default Navbar;