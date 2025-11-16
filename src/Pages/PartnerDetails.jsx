import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar, FaUsers } from 'react-icons/fa'
import { useLoaderData, useNavigate, useParams } from 'react-router'
import Swal from 'sweetalert2'

const PartnerDetails = () => {
  const partnerData = useLoaderData()
  const {id} = useParams()
  const [data, setData] = useState({})
  const navigate  = useNavigate()
  const [install, setInstall] = useState(false)

  const {_id,subject,name,profileimage,studyMode,rating, availabilityTime,location,description,experienceLevel,patnerCount,email} = data

  useEffect(()=>{

    
    const findPartner = partnerData.find(partner=>partner._id == id)
    setData(findPartner)
    if(findPartner){
      axios.get(`http://localhost:3000/connection/${findPartner.email}/${findPartner._id}`)
      .then(res=>setInstall(res.data.exist))
      .catch(err=>alert(err))

    }

  },[partnerData, id ])

  if(!data || !data._id){
     return <p className='text-center text-4xl my-20 text-gray-500'>Loading...</p>
  }

    const mode = studyMode === "Online" ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100";

    const handleAddPartner=async()=>{
        const newConnection = {
partnerId:_id,          
name : name,
profileimage: profileimage,
subject:subject,
studyMode:studyMode,
availabilityTime:availabilityTime,
location: location,
description:description,
experienceLevel:experienceLevel,
rating:rating,
patnerCount:patnerCount,
email:email
        }

    try{
       const res = await axios.post("http://localhost:3000/connection",newConnection) 
       if(res.data.insertedId){
        Swal.fire({
  title: "Good job!",
  text: "Add Partner Successfully!",
  icon: "success"
});
setInstall(true)

       }
    }
    catch(error){
       console.log(error)
       Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
});
    }


  }

  return (
    <div className='flex flex-col md:flex-row gap-8 px-10 py-20 items-center'>
      <div className='flex-1'>
       <img src={profileimage} className='rounded-md h-[400px] w-full' alt="" />
      </div>
       <div className='flex-1 space-y-2'>
        <p className={`rounded-2xl px-2 ${mode} w-fit`}>{studyMode}</p>
        <p className='text-3xl font-bold'>{name}</p>
        <p className='font-semibold text-[14px]'><span className='font-bold text-lg text-[#4F959D]'>{subject}</span></p>
        <p className='font-semibold'>{availabilityTime}</p>
        <p className='text-gray-500'>{description}</p>


        <div className='flex gap-12 my-4'>
          <div>
            <p className='text-xl font-bold'>Rating</p>
             <p className='flex gap-2 text-lg items-center font-semibold'><FaStar className='text-amber-500' /> {rating}</p>
          </div>
          <div>
            <p className='text-xl font-bold'>Partner</p>
             <p className='flex gap-2 text-xl items-center font-semibold'><FaUsers /> {patnerCount}</p>
          </div>
          <div>
            <p className='text-xl font-bold'>Experience</p>
             <p className='flex gap-2 text-xl items-center font-semibold'> {experienceLevel}</p>
          </div>
        </div>

        <p className='text-xl text-gray-500 my-5'><span className='font-semibold'>Contact :</span> {location} - {email}</p>

      <div className='flex gap-3'>
        <button onClick={handleAddPartner} disabled={install} className='btn bg-[#4F959D] disabled:bg-gray-500 disabled:cursor-not-allowed inline-block text-white font-semibold px-5 rounded-md'>{install ? "Already Added" : "Add Partner"}</button>
        <button onClick={()=>navigate(-1)} className='btn bg-[#4F959D] inline-block text-white font-semibold px-5 rounded-md'>Go Back</button>

      </div>
       </div>
    </div>
  )
}

export default PartnerDetails