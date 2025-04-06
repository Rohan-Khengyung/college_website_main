import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">Get in touch with us for any inquiries</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Address</h3>
                <p className="text-gray-600">123 Education Street, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Phone</h3>
                <p className="text-gray-600">+977 1 234 5678</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Email</h3>
                <p className="text-gray-600">info@ismtbritishcollege.edu.np</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;