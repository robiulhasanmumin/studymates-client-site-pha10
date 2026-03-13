import React from 'react';
import { FaBullseye, FaLightbulb, FaHandsHelping, FaRocket } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      id: 1,
      icon: <FaBullseye className="text-3xl" />,
      title: "Our Mission",
      description: "To create a global community where students can easily find the right partners to study, collaborate, and succeed together."
    },
    {
      id: 2,
      icon: <FaLightbulb className="text-3xl" />,
      title: "The Vision",
      description: "We believe learning is more effective when shared. Our vision is to break the isolation in online and offline education."
    },
    {
      id: 3,
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Community First",
      description: "Every feature we build is focused on making connections easier and safer for learners of all levels."
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section of About Page */}
      <section className="bg-[#4F959D]/5 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 animate__animated animate__fadeInDown">
            Empowering Students to <br />
            <span className="text-[#4F959D]">Learn Together</span>
          </h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto leading-relaxed">
            Study Mate is more than just a platform; it's a movement to make education collaborative, 
            accessible, and engaging for everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((f) => (
              <div key={f.id} className="p-8 rounded-[2.5rem] bg-base-200/50 hover:bg-base-100 border border-transparent hover:border-[#4F959D]/20 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#4F959D] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#4f959d]/30">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="opacity-70 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-base-200/30">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students studying" 
                className="rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <FaRocket />
                  </div>
                  <div>
                    <p className="text-sm opacity-60">Founded in</p>
                    <p className="font-black text-xl">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Why We Started <br />
              <span className="text-[#4F959D]">Study Mate?</span>
            </h2>
            <p className="text-lg opacity-70 leading-relaxed">
              We realized that many students struggle to stay motivated while studying alone. 
              Whether it's preparing for an exam or learning a new coding language, 
              having a partner makes a world of difference.
            </p>
            <p className="text-lg opacity-70 leading-relaxed">
              Our platform simplifies the process of finding the right partner based on 
              experience levels, subjects, and study modes. We are here to bridge the gap.
            </p>
            <div className="pt-4">
              <button className="btn bg-[#4F959D] hover:bg-[#397177] border-none text-white px-10 rounded-full shadow-lg transition-transform hover:scale-105">
                Join Our Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;