import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import FindPartner from './FindPartner';
import { CiSearch } from "react-icons/ci";


const FindPartners = () => {
    const allPartners = useLoaderData()
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false)
    const [sort,setSort] = useState('ad')

    
    const handleSearch = (e)=>{
      setSearch(e.target.value)
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },400)
      
    }
    
    let filterData = allPartners.filter(partner=>partner.subject.toLowerCase().includes(search.toLowerCase()))


    const handleSort=(type)=>{
      setSort(type)
    }
    const exSort = {
      "Beginner": 1,
      "Intermediate" : 2,
      "Advanced" : 3
    }
          
    if(sort==="ad"){
        filterData = [...filterData].sort((a,b)=>exSort[b.experienceLevel] - exSort[a.experienceLevel] )
      } else if(sort ==="in"){
        filterData = [...filterData].sort((a,b)=>{
          return Math.abs(exSort[a.experienceLevel] - 2) - Math.abs(exSort[b.experienceLevel] - 2)
        })
      } else if(sort ==="be"){
        filterData = [...filterData].sort((a,b)=>exSort[a.experienceLevel] - exSort[b.experienceLevel])
      }


  return (
    <div className='py-8 lg:px-10 px-5'>
      <h1 className='font-bold text-4xl text-center'>Find <span className='text-[#4F959D]'>All</span> Partner</h1>


      <div className='flex lg:flex-row flex-col gap-3 justify-between items-center mb-5 mt-5'>
        <div>
         <h2 className='text-xl font-bold'>Total Partners : <span className='text-[#4F959D]'>{filterData.length}</span></h2>

        <label className='text-[#4F959D] font-bold mt-2'>Sort By Experience : </label>
        <input type="radio" onClick={()=>handleSort("ad")} name="radio-4" className="radio w-5 h-5 ml-2 mr-1 radio-primary" defaultChecked />
        <label className='font-bold'>Advanced</label>
        <input type="radio" onClick={()=>handleSort("in")} name="radio-4" className="radio w-5 h-5 ml-2 mr-1 radio-primary" />
        <label className='font-bold'>Intermediate</label>
        <input type="radio" onClick={()=>handleSort("be")} name="radio-4" className="radio w-5 h-5 ml-2 mr-1 radio-primary" />
        <label className='font-bold'>Beginner</label>
        </div>

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
          {filterData.map(partner=><FindPartner key={partner._id} partner={partner}></FindPartner>) }
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