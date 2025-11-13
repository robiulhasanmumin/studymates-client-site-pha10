import React from 'react'

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-9xl font-bold text-blue-500'>404</h1>
      <p className='text-4xl text-gray-600'>Page Not Found</p>
      <Link to="/" className='btn bg-blue-500 text-white mt-5'>Go Back To Home</Link>
    </div>
  )
}

export default ErrorPage