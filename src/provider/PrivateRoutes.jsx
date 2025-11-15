import React, { use } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate, useLocation } from 'react-router'

const PrivateRoutes = ({children}) => {
  const {user,loading} = use(AuthContext)
  const location = useLocation()
  if(loading){
    return <p className='text-4xl text-center my-48 text-gray-500 font-semibold' >Loading...</p>
  }
  if(user && user?.email){
    return children
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoutes