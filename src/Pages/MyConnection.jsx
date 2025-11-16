import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import MyConnectionList from './MyConnectionList'

const MyConnection = () => {
  const connectionData = useLoaderData()
      const [loading, setLoading] = useState(false)

  return (
      <div className="py-8 px-12">
      <h1 className='font-bold text-4xl text-center'>My <span className='text-[#4F959D]'>Partner</span> Connection</h1>

      <div className="flex md:flex-row flex-col justify-between items-center mt-8">
        <p className="text-[22px] font-bold mb-5 md:mb-0">
          Partner Count - <span className='text-[#4F959D]'>{connectionData.length}</span>
        </p>

      </div>


{
  loading ? 
    <p className='text-4xl text-center my-24 text-gray-500 font-semibold '>Loading...</p>
:
  connectionData.length > 0 ?
        <div className='mt-5'>
        {
          connectionData.map(connection=><MyConnectionList key={connection._id} connection={connection}></MyConnectionList>)
        }
      </div>
  :
 <p className="text-4xl text-center my-24 text-gray-500 font-semibold " >
            OPPS!! PARTNERS NOT FOUND
          </p>}
    </div> 
  )
}

export default MyConnection