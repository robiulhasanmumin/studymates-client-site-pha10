import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import FindPartner from './FindPartner';
import { CiSearch } from "react-icons/ci";
import { FaSortAmountDown, FaUsers } from "react-icons/fa";

const FindPartners = () => {
  const allPartners = useLoaderData();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('ad');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  const exSort = {
    "Beginner": 1,
    "Intermediate": 2,
    "Advanced": 3
  };

  let filterData = allPartners.filter(partner => 
    partner.subject.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting Logic
  if (sort === "ad") {
    filterData = [...filterData].sort((a, b) => exSort[b.experienceLevel] - exSort[a.experienceLevel]);
  } else if (sort === "in") {
    filterData = [...filterData].sort((a, b) => Math.abs(exSort[a.experienceLevel] - 2) - Math.abs(exSort[b.experienceLevel] - 2));
  } else if (sort === "be") {
    filterData = [...filterData].sort((a, b) => exSort[a.experienceLevel] - exSort[b.experienceLevel]);
  }

  return (
    <div className="min-h-screen bg-base-200/30 py-12 lg:px-10 px-5 transition-all duration-300">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="font-black text-4xl md:text-5xl mb-4">
          Find Your Perfect <span className="text-[#4F959D]">Study</span> Partner
        </h1>
        <p className="text-gray-500 text-lg">Browse through our community and connect with partners who match your goals.</p>
      </div>

      {/* Control Panel: Search & Sort */}
      <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-200 mb-10">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
          
          {/* Stats & Sort */}
          <div className="w-full lg:w-auto space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <FaUsers className="text-[#4F959D] text-xl" />
              <h2 className="text-xl font-bold">Total Partners: <span className="text-[#4F959D]">{filterData.length}</span></h2>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-sm font-bold flex items-center gap-1 opacity-70">
                <FaSortAmountDown /> Sort By:
              </span>
              <div className="join bg-base-200 p-1 rounded-xl">
                <button 
                  onClick={() => setSort("ad")} 
                  className={`join-item btn btn-sm border-none ${sort === 'ad' ? 'bg-[#4F959D] text-white' : 'btn-ghost'}`}
                >Advanced</button>
                <button 
                  onClick={() => setSort("in")} 
                  className={`join-item btn btn-sm border-none ${sort === 'in' ? 'bg-[#4F959D] text-white' : 'btn-ghost'}`}
                >Intermediate</button>
                <button 
                  onClick={() => setSort("be")} 
                  className={`join-item btn btn-sm border-none ${sort === 'be' ? 'bg-[#4F959D] text-white' : 'btn-ghost'}`}
                >Beginner</button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-1/3">
            <div className="relative group">
              <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400 group-focus-within:text-[#4F959D] transition-colors" />
              <input 
                type="search" 
                className="input input-bordered w-full pl-12 rounded-2xl focus:border-[#4F959D] focus:ring-0 bg-base-200/50 border-none"
                value={search} 
                placeholder="Search By Subject (e.g. React, Math)" 
                onChange={handleSearch} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partners Display */}
      {loading ? (
        <div className="flex flex-col items-center justify-center my-32 space-y-4">
           <span className="loading loading-spinner loading-lg text-[#4F959D]"></span>
           <p className="font-bold opacity-50">Updating list...</p>
        </div>
      ) : filterData.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {filterData.map(partner => (
            <div key={partner._id} className="animate__animated animate__fadeIn">
              <FindPartner partner={partner} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center my-32 space-y-6 animate__animated animate__pulse">
          <div className="text-8xl flex justify-center opacity-20">🔎</div>
          <p className="text-3xl text-gray-400 font-black italic">
             OOPS!! NO PARTNERS FOUND
          </p>
          <button onClick={() => setSearch("")} className="btn btn-link text-[#4F959D] no-underline">Clear Search</button>
        </div>
      )}
    </div>
  );
};

export default FindPartners;