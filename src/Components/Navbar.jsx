import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import "../../src/index.css"
import { AuthContext } from '../provider/AuthContext'
import Swal from 'sweetalert2'

const Navbar = () => {
  const {user,logOut} = use(AuthContext)
  const links = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/findPartners">Find Partners</NavLink></li>

  </>

  const handleLogOut=()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You want to LogOut this app?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "green",
      confirmButtonColor: "red",
      confirmButtonText: "LogOut",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Logged Out Successfully!",
              icon: "success",
            });
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    });
  }
  return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Study <span className='text-[#4F959D]'>Mate</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>

  <div className="navbar-end">
    {
      user ? 

      <>
          <Link to="/" onClick={handleLogOut} className="btn bg-[#4F959D] text-white">LogOut</Link>
          <div className="dropdown dropdown-end">
  <img src={user.photoURL} tabIndex={0} role="button" className="cursor-pointer w-[45px] h-[45px] rounded-full mr-4"></img>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
      </>
      :

          <>
    <Link to="/login" className="btn bg-[#4F959D] text-white">Login</Link>
    <Link to="/register" className="btn bg-[#4F959D] text-white ml-2">Register</Link>

          </>
    }
  </div>
</div>

)
}

export default Navbar