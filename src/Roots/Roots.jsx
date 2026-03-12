import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import ScrollTop from '../Components/ScrollTop'

const Roots = () => {
  return (
    <div>
      <div className='sticky top-0 z-10'>

      <Navbar></Navbar>
      </div>
      <ScrollTop></ScrollTop>
      <div className='max-w-7xl mx-auto'>

      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Roots