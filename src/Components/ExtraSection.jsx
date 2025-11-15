import React from 'react'

const ExtraSection = () => {
   const reviews = [
    {
      name: "Rahim Hasan, CSE, Du",
      text: "This platform helped me find a perfect study partner. Highly recommended!",
    },
    {
      name: "Nusrat Jahan, EEE, BUET",
      text: "Very easy to use and great for consistent study sessions.",
    },
    {
      name: "Sakib Ahmed, CSE, NSU",
      text: "I improved my learning speed after finding my study partner here.",
    },
  ]


  return (
    <div className='lg:px-10 px-5 mb-20'>
      <div>
      <h1 className='text-center text-3xl font-bold mt-16 mb-7'>How It <span className='text-[#4F959D]'>Works</span></h1>
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='p-5 shadow rounded-xl flex-1 border-2 border-gray-200'>
          <h2 className='text-xl font-semibold mb-2'>1. Create Profile</h2>
          <p className='text-gray-500'>Set up your study partner profile with your skills, interests and study schedule.</p>
        </div>
        <div className='p-5 shadow rounded-xl flex-1 border-2 border-gray-200'>
          <h2 className='text-xl font-semibold mb-2'>2. Connect Partners</h2>
          <p className='text-gray-500'>Find partners who match your study method and subject preference.</p>
        </div>
        <div className='p-5 shadow rounded-xl flex-1 border-2 border-gray-200'>
          <h2 className='text-xl font-semibold mb-2'>3. Start Studying</h2>
          <p className='text-gray-500'>Begin learning together through online or offline sessions.</p>
        </div>
      </div>
      </div>


      <div>
      <h1 className='text-center text-3xl font-bold mt-12 mb-7'>What <span className='text-[#4F959D]'>Students</span> Say</h1>
      <div className='flex flex-col lg:flex-row gap-5'>
         {
          reviews.map((review,index)=>(
            <div key={index} className='flex-1 p-5 shadow rounded-xl border-2 border-gray-200'>
              <p className='text-gray-500'>{review.text}</p>
              <p className='text-gray-500 font-bold mt-2'>- {review.name}</p>
            </div>
          ))
         }
      </div>
      </div>
    </div>
  )
}

export default ExtraSection