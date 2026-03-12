import React from 'react';
import { FaUserPlus, FaSearch, FaComments, FaGraduationCap } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-4xl text-[#4F959D]" />,
      title: "Create Account",
      description: "Join our community by signing up. It takes less than a minute to get started."
    },
    {
      id: 2,
      icon: <FaSearch className="text-4xl text-[#4F959D]" />,
      title: "Find Partners",
      description: "Search for study partners based on your subjects, skills, or specific topics."
    },
    {
      id: 3,
      icon: <FaComments className="text-4xl text-[#4F959D]" />,
      title: "Connect & Chat",
      description: "Send requests to potential partners and start discussing your study plans."
    },
    {
      id: 4,
      icon: <FaGraduationCap className="text-4xl text-[#4F959D]" />,
      title: "Learn Together",
      description: "Collaborate on projects, solve problems, and achieve your academic goals together."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            How It <span className="text-[#4F959D]">Works</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Get started with Study Mate in four simple steps and find the perfect partner for your learning journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              <div className="bg-base-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#4F959D] text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className="mb-6 p-4 bg-base-200 rounded-full group-hover:bg-[#4F959D]/10 transition-colors">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#4F959D] opacity-30">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;