import React from 'react';
import { FaStar, FaUserGraduate, FaLaptopHouse, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router';

const FindPartner = ({ partner }) => {
  const { _id, name, profileimage, subject, rating, studyMode, experienceLevel } = partner;

   const modeStyles = studyMode === "Online" 
    ? "bg-green-100 text-green-700 border-green-200" 
    : "bg-red-100 text-red-700 border-red-200";

  return (
    <div className="group relative bg-base-100 rounded-[2rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-200 overflow-hidden h-full flex flex-col justify-between">
      
      <div>
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-[1.5rem] h-[230px]">
          <img 
            src={profileimage || "https://i.ibb.co/Mgs9hyL/user.png"} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt={name} 
          />
          {/* Study Mode Badge on Image */}
          <div className="absolute top-3 right-3">
            <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider border backdrop-blur-md shadow-sm ${modeStyles}`}>
              {studyMode === "Online" ? <FaLaptopHouse /> : <FaMapMarkerAlt />}
              {studyMode}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-5 px-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-black text-base-content group-hover:text-[#4F959D] transition-colors truncate">
              {name}
            </h3>
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100 shrink-0">
              <FaStar className="text-amber-500 text-sm" />
              <span className="text-sm font-black text-amber-700">{rating}</span>
            </div>
          </div>

          <div className="space-y-2">
             <p className="text-[#4F959D] font-bold text-lg flex items-center gap-2">
               <span className="bg-[#4F959D]/10 px-3 py-0.5 rounded-md leading-relaxed">{subject}</span>
             </p>
             <p className="flex items-center gap-2 text-sm font-semibold opacity-60">
                <FaUserGraduate className="text-base-content/40" />
                {experienceLevel} Level
             </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 px-1">
        <Link 
          to={`/partnerDetails/${_id}`} 
          className="btn bg-[#4F959D] hover:bg-[#397177] border-none text-white w-full rounded-2xl shadow-lg shadow-[#4f959d]/20 transition-all hover:-translate-y-1 active:scale-95 font-bold"
        >
          View Profile
        </Link>
      </div>

      {/* Decorative Blur Background */}
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#4F959D]/5 rounded-full blur-3xl group-hover:bg-[#4F959D]/10 transition-all"></div>
    </div>
  );
};

export default FindPartner;