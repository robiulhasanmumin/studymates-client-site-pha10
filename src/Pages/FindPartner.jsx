import React from 'react'
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router';

const FindPartner = ({partner}) => {
  const {_id,name,profileimage,subject,rating,studyMode,experienceLevel} = partner
  const mode = studyMode === "Online" ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100";
  
  return (
<div className="border-2 border-gray-300 rounded-2xl p-5">
  {/* content */}
    <img src={profileimage} className='w-full h-[220px] rounded-2xl' alt="Tailwind CSS 3D card" />
    <p className='text-2xl font-bold mt-3'>{name}</p>
      <p className='text-[18px]'><span className='text-[#4F959D] font-bold'>{subject}</span> - <span className='font-semibold'>{experienceLevel}</span></p> 
    <div className='flex justify-between mt-2'>
      <p className='flex gap-1 items-center text-gray-500 font-semibold'><FaStar className='text-amber-500' /> {rating}</p>
      <p className={`rounded-2xl px-2 ${mode}`}>{studyMode}</p>
    </div>
      <Link className='btn bg-[#4F959D] hover:bg-[#35757c] text-white w-full mt-3' to={`/partnerDetails/${_id}` }>View Profile</Link>
</div>

  )
}

export default FindPartner