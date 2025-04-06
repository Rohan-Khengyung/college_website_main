import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="pt-16">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="College campus"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to ISMT British College
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Your gateway to British education in Nepal. Join our globally recognized programs in Hotel Management, IT, and Business Administration.
            </p>
            <div className="space-x-4">
              <button 
                onClick={() => {
                  const navbar = document.querySelector('nav');
                  const applyButton = navbar?.querySelector('button:last-child');
                  applyButton?.click();
                }}
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-lg font-semibold"
              >
                Apply Now
              </button>
              <a 
                href="#programs"
                className="inline-block border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-md text-lg font-semibold"
              >
                Our Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;