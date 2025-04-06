import React, { useState } from 'react';
import { BookOpen, Users, Calendar } from 'lucide-react';
import ProgramDetails from './ProgramDetails';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const programs = [
    {
      title: "BSc (Hons) Computer Systems Engineering (IT)",
      description: "A comprehensive 3-year program focusing on computer systems engineering and information technology.",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      duration: "3 Years",
      intake: "Spring/Fall",
      details: {
        overview: "This program provides students with a strong foundation in computer systems engineering and IT, combining theoretical knowledge with practical skills in software development, networking, and systems design.",
        highlights: [
          "Industry-aligned curriculum developed with UK university partners",
          "Hands-on experience with latest technologies and tools",
          "Professional certification opportunities",
          "Industry internship programs",
          "State-of-the-art computer labs and learning resources"
        ],
        career: [
          "Software Developer",
          "Systems Engineer",
          "Network Administrator",
          "IT Consultant",
          "Database Administrator",
          "Cloud Computing Specialist",
          "DevOps Engineer"
        ],
        eligibility: [
          "Completion of 10+2 or equivalent in Science/Computer Science",
          "Minimum 50% aggregate marks in 10+2",
          "English language proficiency",
          "Successful completion of entrance test and interview"
        ]
      }
    },
    {
      title: "Bachelor in Business Administration (BBA)",
      description: "A dynamic 3-year program designed to develop future business leaders and entrepreneurs.",
      icon: <Users className="h-8 w-8 text-orange-500" />,
      duration: "3 Years",
      intake: "Spring/Fall",
      details: {
        overview: "The BBA program offers a comprehensive business education focusing on management principles, marketing strategies, finance, and entrepreneurship skills required in today's global business environment.",
        highlights: [
          "International business curriculum",
          "Case study based learning",
          "Industry expert sessions",
          "Business research projects",
          "Leadership development programs"
        ],
        career: [
          "Business Analyst",
          "Marketing Manager",
          "Finance Executive",
          "Human Resource Manager",
          "Entrepreneur",
          "Project Manager",
          "Management Consultant"
        ],
        eligibility: [
          "Completion of 10+2 or equivalent in any stream",
          "Minimum 50% aggregate marks in 10+2",
          "English language proficiency",
          "Successful completion of entrance test and interview"
        ]
      }
    },
    {
      title: "Bachelor in Hotel Management (BHM)",
      description: "A specialized 3-year program preparing students for the global hospitality industry.",
      icon: <Calendar className="h-8 w-8 text-orange-500" />,
      duration: "3 Years",
      intake: "Spring/Fall",
      details: {
        overview: "The BHM program provides comprehensive training in hospitality management, combining theoretical knowledge with practical experience in all aspects of hotel operations and management.",
        highlights: [
          "International hospitality standards",
          "Professional kitchen and training restaurant",
          "Industry internships",
          "International faculty",
          "Global placement opportunities"
        ],
        career: [
          "Hotel Manager",
          "Restaurant Manager",
          "Food and Beverage Director",
          "Event Manager",
          "Cruise Line Manager",
          "Tourism Consultant",
          "Hospitality Entrepreneur"
        ],
        eligibility: [
          "Completion of 10+2 or equivalent in any stream",
          "Minimum 50% aggregate marks in 10+2",
          "English language proficiency",
          "Successful completion of entrance test and interview"
        ]
      }
    }
  ];

  return (
    <div id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our internationally recognized degree programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Duration: {program.duration}</p>
                <p className="text-sm text-gray-500">Next Intake: {program.intake}</p>
              </div>
              <button 
                onClick={() => setSelectedProgram(index)}
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProgram !== null && (
        <ProgramDetails
          isOpen={true}
          onClose={() => setSelectedProgram(null)}
          program={programs[selectedProgram]}
        />
      )}
    </div>
  );
};

export default Programs;