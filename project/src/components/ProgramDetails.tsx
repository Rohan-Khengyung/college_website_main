import React from 'react';
import { X } from 'lucide-react';

interface ProgramDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  program: {
    title: string;
    description: string;
    details: {
      overview: string;
      highlights: string[];
      career: string[];
      eligibility: string[];
    };
  };
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ isOpen, onClose, program }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-4">{program.title}</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Program Overview</h3>
            <p className="text-gray-600">{program.details.overview}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Program Highlights</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {program.details.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Career Opportunities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {program.details.career.map((opportunity, index) => (
                <li key={index}>{opportunity}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Eligibility</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {program.details.eligibility.map((criteria, index) => (
                <li key={index}>{criteria}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Close
          </button>
          <button
            onClick={() => {
              const navbar = document.querySelector('nav');
              const applyButton = navbar?.querySelector('button:last-child');
              applyButton?.click();
              onClose();
            }}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;