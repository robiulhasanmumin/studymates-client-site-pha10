import React from "react";
import i1 from "../assets/i1.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="lg:h-[500px] h-[300px] relative">
      <img className="w-full h-full " src={i1} alt="" />
      <div className=" absolute bg-black top-0 w-full h-full opacity-60"></div>
      <div className=" absolute inset-0 flex flex-col lg:px-20 px-6 justify-center">
        <h1 className="lg:text-7xl text-5xl font-bold text-white">
          Study <span className="text-[#4F959D]">Mate...</span>
        </h1>
        <p className="text-white text-xl my-4">Find Your Perfect Study Partner</p>
        <div>
          <Link to="/findPartners" className=" btn px-8 py-2 shadow-none rounded-sm bg-[#4F959D] hover:bg-[#375e63] border-0 text-white">
          Find Partners</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
