import React from 'react';
import { FaUsers, FaBookReader, FaHandshake, FaGlobe } from 'react-icons/fa';

const Statistics = () => {
  const stats = [
    { id: 1, icon: <FaUsers />, count: "1,200+", label: "Active Learners" },
    { id: 2, icon: <FaHandshake />, count: "450+", label: "Partners Found" },
    { id: 3, icon: <FaBookReader />, count: "80+", label: "Study Groups" },
    { id: 4, icon: <FaGlobe />, count: "15+", label: "Countries" },
  ];

  return (
    <div className="bg-[#4F959D] py-16 mt-14 mb-5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-2 group">
              <div className="text-4xl flex justify-center opacity-80 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h2 className="text-3xl md:text-5xl font-black">{stat.count}</h2>
              <p className="text-sm uppercase tracking-widest font-medium opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;