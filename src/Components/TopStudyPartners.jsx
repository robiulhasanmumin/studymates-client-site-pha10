import React, { useEffect, useState } from 'react'
import Partner from './Partner'
import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa'



const TopStudyPartners = () => {
  const [partners, setPartners] = useState([])
  useEffect(()=>{
   fetch("http://localhost:3000/partner")
   .then(res=>res.json())
   .then(data=>setPartners(data))
  },[])
  

  
  return (
    <div className='lg:px-10'>
      <h1 className='text-center text-3xl font-bold mt-10 mb-7'>Top <span className='text-[#4F959D]'>Study</span> Partners</h1>
       <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
        {
          partners.slice(0,6).map(partner=><Partner key={partner.id} partner={partner}></Partner>)
        }
       </div>
       <div className='flex justify-center my-10'>
               <Link to="findPartners" className='btn bg-[#4F959D] text-white hover:bg-[#35757c]'>Find All Partners <FaArrowRight /></Link>
       </div>
    </div>
  )
}

export default TopStudyPartners