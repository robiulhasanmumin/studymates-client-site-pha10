import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useLoaderData, useParams } from 'react-router'

const PartnerDetails = () => {
  const partnerData = useLoaderData()
  const {id} = useParams()
  const [data, setData] = useState({})

  const {subject,name,profileimage,studyMode,rating, availabilityTime,location,description,experienceLevel,patnerCount,email} = data

  useEffect(()=>{

    const findPartner = partnerData.find(partner=>partner.id == id)
    setData(findPartner)

  },[partnerData,id])

  if(!data){
     return <p className='text-center text-4xl my-20 text-gray-500'>Loading...</p>
  }

    const mode = studyMode === "Online" ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100";

  return (
    <div className='flex flex-col md:flex-row gap-8 px-10 py-20 items-center'>
      <div className='flex-1'>
       <img src={profileimage} className='rounded-md h-[350px] w-full' alt="" />
      </div>
       <div className='flex-1 space-y-2'>
        <p className={`rounded-2xl px-2 ${mode} w-fit`}>{studyMode}</p>
        <p className='text-3xl font-bold'>{name}</p>
        <p className='font-semibold text-[14px]'><span className='font-bold text-lg text-[#4F959D]'>{subject}</span></p>
        <p className='font-semibold'>{availabilityTime}</p>
        <p className='text-gray-500'>{description}</p>
        <p className='flex gap-2 text-xl font-semibold'><FaStar className='text-amber-500' /> {rating}</p>
        <a href='https://play.google.com/store/apps/category/FAMILY?hl=en' target='_blank'  className='bg-blue-500 inline-block text-white font-semibold px-6 py-3 rounded-md'>Download Link</a>
       </div>
    </div>
  )
}

export default PartnerDetails