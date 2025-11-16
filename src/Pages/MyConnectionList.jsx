import React from 'react'

const MyConnectionList = ({connection}) => {
    const {name,profileimage,subject,studyMode} = connection
      const mode = studyMode === "Online" ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100";


  return (
    <div className='flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center mt-3 bg-white p-3 rounded-md border-2 border-gray-300 shadow'>
      <div className='flex gap-5 items-center'>
        <img src={profileimage} className='w-[60px] h-[50px] rounded-lg' alt="" />
        <div>
          <p className='text-xl font-bold'>{name} <span className={`text-[12px] font-medium ${mode} rounded-2xl px-2 ml-2`}>{studyMode}</span></p>
          <p className='text-[#4F959D] text-[17px] font-bold'>{subject}</p>
          <div className='flex gap-5 items-center'>
          </div>
        </div>
      </div>
      <div>
        <button className='bg-[#4F959D] text-white px-5 py-2 rounded-md font-semibold mr-4'>Update</button>
        <button className='bg-red-500 text-white px-5 py-2 rounded-md font-semibold'>Delete</button>
      </div>
    </div>
  )
}

export default MyConnectionList