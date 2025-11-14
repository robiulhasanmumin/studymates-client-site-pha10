import React, { use } from 'react'
import { AuthContext } from '../provider/AuthContext'
import { Link } from 'react-router'

const ProfilePage = () => {
  const {user} = use(AuthContext)
  return (
    <div className='flex flex-col items-center py-24 space-y-2'>
        <img src={user?.photoURL} className='h-[150px] w-[150px] rounded-full' alt="" />
        <p className='text-3xl font-bold mt-2'>{user?.displayName}</p>
        <p className='text-[18px] text-gray-500'>Email: {user?.email}</p>
        <div className='flex gap-4 mt-2'>
          <Link to="/" className='btn bg-[#4F959D] text-white'>Go Back To Home</Link>
        </div>
    </div>
  )
}

export default ProfilePage