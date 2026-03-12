import React from 'react';
import { FaStar, FaUserGraduate, FaLaptopHouse, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Partner = ({ partner }) => {
  const { _id, name, profileimage, subject, rating, studyMode, experienceLevel } = partner;
  
   const modeStyles = studyMode === "Online" 
    ? "bg-green-100 text-green-700 border-green-200" 
    : "bg-blue-100 text-blue-700 border-blue-200";

  return (
    <div className="group relative bg-base-100 rounded-3xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-200 overflow-hidden">
      
      {/* Image Section with Overlay */}
      <div className="relative overflow-hidden rounded-2xl h-[240px]">
        <img 
          src={profileimage || "https://i.ibb.co/Mgs9hyL/user.png"} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          alt={name} 
        />
        <div className="absolute top-3 right-3">
          <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${modeStyles} backdrop-blur-md shadow-sm`}>
            {studyMode === "Online" ? <FaLaptopHouse /> : <FaMapMarkerAlt />}
            {studyMode}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-5 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-black text-base-content group-hover:text-[#4F959D] transition-colors line-clamp-1">
              {name}
            </h3>
            <p className="flex items-center gap-2 text-sm font-medium opacity-70 mt-1">
              <FaUserGraduate className="text-[#4F959D]" />
              {experienceLevel}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
            <FaStar className="text-amber-500 text-sm" />
            <span className="text-sm font-bold text-amber-700">{rating}</span>
          </div>
        </div>

        {/* Subject Badge */}
        <div className="pt-2">
          <span className="text-[13px] font-bold uppercase tracking-wider text-[#4F959D] bg-[#4F959D]/10 px-3 py-1.5 rounded-md">
            {subject}
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link 
            to={`/partnerDetails/${_id}`} 
            className="btn bg-[#4F959D] hover:bg-[#397177] border-none text-white w-full rounded-xl shadow-lg shadow-[#4f959d]/20 transition-all active:scale-95"
          >
            View Profile
          </Link>
        </div>
      </div>

      {/* Subtle Background Glow on Hover */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#4F959D]/5 rounded-full blur-3xl group-hover:bg-[#4F959D]/10 transition-all duration-500"></div>
    </div>
  );
};

export default Partner;