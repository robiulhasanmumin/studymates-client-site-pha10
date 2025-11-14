import React from "react";
import i1 from "../assets/study.jpg";
import study2 from "../assets/study2.jpg";
import study3 from "../assets/study3.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    // <div className="lg:h-[500px] h-[300px] relative">
    //   <img className="w-full h-full " src={i1} alt="" />
    //   <div className=" absolute bg-black top-0 w-full h-full opacity-70"></div>
    //   <div className=" absolute inset-0 flex flex-col lg:px-20 px-6 justify-center">
    //     <h1 className="lg:text-7xl text-5xl font-bold text-white">
    //       Study <span className="text-[#59abb4]">Mate...</span>
    //     </h1>
    //     <p className="text-white text-xl my-4">Find Your Perfect Study Partner</p>
    //     <div>
    //       <Link to="/findPartners" className=" btn px-8 py-2 shadow-none rounded-sm bg-[#4F959D] hover:bg-[#375e63] border-0 text-white">
    //       Find Partners</Link>
    //     </div>
    //   </div>
    // </div>
<div className="carousel w-full h-[450px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={study3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={i1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={study2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

);
};

export default Banner;
