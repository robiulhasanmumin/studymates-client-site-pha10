import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import FindPartner from './FindPartner';
import { CiSearch } from "react-icons/ci";


const FindPartners = () => {
    const allPartners = useLoaderData()
    console.log(allPartners);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false)

    const filterData = allPartners.filter(partner=>partner.subject.toLowerCase().includes(search.toLowerCase()))

    const handleSearch = (e)=>{
      setSearch(e.target.value)
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },400)

    }

  return (
    <div className='py-8 lg:px-10 px-5'>
      <h1 className='font-bold text-4xl text-center'>Find <span className='text-[#4F959D]'>All</span> Partner</h1>


      <div className='flex lg:flex-row flex-col gap-3 justify-between items-center mb-5 mt-5'>
        <h2 className='text-xl font-bold'>Our Partners : <span className='text-[#4F959D]'>{filterData.length}</span></h2>
        <label className='border-2 flex items-center gap-2 border-gray-500 px-3 py-2 rounded-md'>
          <CiSearch className='right-0 top-2' />
          <input type="search" className='outline-0' value={search} placeholder='Search By Subject' onChange={handleSearch} />
        </label>
      </div>


{
  loading ? 
  <p className='text-4xl text-center my-24 text-gray-500 font-semibold '>Loading...</p>
  :
          filterData.length > 0 ?
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
          {filterData.map(partner=><FindPartner key={partner.id} partner={partner}></FindPartner>) }
      </div>
      :
        <p className="text-4xl text-center my-24 text-gray-500 font-semibold " >
            OPPS!! PARTNERS NOT FOUND
          </p>
}


    </div>
  )
}

export default FindPartners