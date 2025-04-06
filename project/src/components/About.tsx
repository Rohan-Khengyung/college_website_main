import React from 'react';
import { Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">About ISMT British College</h2>
            <p className="text-gray-600 mb-6">
              ISMT British College is a premier institution offering British education in partnership with leading Sunderland University. Our commitment to academic excellence and practical learning prepares students for global success.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-orange-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-blue-900">20+ Years</h4>
                  <p className="text-sm text-gray-600">of Excellence</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-orange-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-blue-900">5000+</h4>
                  <p className="text-sm text-gray-600">Alumni Worldwide</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Campus life"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;