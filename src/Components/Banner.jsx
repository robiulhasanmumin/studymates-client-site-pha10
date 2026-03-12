import React from "react";
import i1 from "../assets/study.jpg";
import study2 from "../assets/study2.jpg";
import study3 from "../assets/study3.jpg";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    {
      id: "slide1",
      prev: "#slide3",
      next: "#slide2",
      image: study3,
      title: "Unlock Your Potential Together",
      description: "Find study partners who share your goals and excel in your learning journey.",
    },
    {
      id: "slide2",
      prev: "#slide1",
      next: "#slide3",
      image: i1,
      title: "Collaborative Learning Made Easy",
      description: "Connect with expert peers in Web Development, Data Science, and more.",
    },
    {
      id: "slide3",
      prev: "#slide2",
      next: "#slide1",
      image: study2,
      title: "Master New Skills Faster",
      description: "Study smarter, not harder. Join a community of dedicated learners today.",
    },
  ];

  return (
    <div className="carousel w-full h-[550px] overflow-hidden">
      {slides.map((slide) => (
        <div key={slide.id} id={slide.id} className="carousel-item relative w-full group">
          {/* Image with Overlay */}
          <div className="w-full h-full relative">
            <img src={slide.image} className="w-full h-full object-cover" alt="Banner" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 lg:w-1/2 text-white space-y-5">
            <h1 className="text-4xl md:text-6xl font-black leading-tight animate__animated animate__fadeInUp">
              {slide.title.split(" ").map((word, i) => 
                word === "Together" || word === "Easy" || word === "Faster" ? 
                <span key={i} className="text-[#4F959D]"> {word}</span> : ` ${word}`
              )}
            </h1>
            <p className="text-lg md:text-xl opacity-80 max-w-lg">
              {slide.description}
            </p>
            <div className="flex gap-4">
              <Link 
                to="/findPartners" 
                className="btn bg-[#4F959D] hover:bg-[#397177] border-none text-white px-8 rounded-full shadow-lg transition-all hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/about" 
                className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-8 rounded-full hidden sm:flex"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={slide.prev} className="btn btn-circle bg-black/30 border-none text-white hover:bg-[#4F959D]">❮</a>
            <a href={slide.next} className="btn btn-circle bg-black/30 border-none text-white hover:bg-[#4F959D]">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;