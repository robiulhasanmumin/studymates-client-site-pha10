import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import "../../src/index.css";
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import { MdLogout, MdDashboard } from "react-icons/md";
import { FaMoon, FaRegUserCircle, FaPlusCircle, FaUsers } from 'react-icons/fa';
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to LogOut from Study Mate?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#4F959D",
      confirmButtonText: "Yes, LogOut",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire("Logged Out!", "Successfully logged out.", "success");
          })
          .catch((error) => alert(error.message));
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => 
          `px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-[#4F959D] text-white' : 'hover:text-[#4F959D]'}`
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/findPartners" className={({ isActive }) => 
          `px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-[#4F959D] text-white' : 'hover:text-[#4F959D]'}`
        }>Find Partners</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => 
          `px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-[#4F959D] text-white' : 'hover:text-[#4F959D]'}`
        }>About Us</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/createPartnerProfile" className={({ isActive }) => 
              `px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-[#4F959D] text-white' : 'hover:text-[#4F959D]'}`
            }>Create Profile</NavLink>
          </li>
          <li>
            <NavLink to="/myConnection" className={({ isActive }) => 
              `px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-[#4F959D] text-white' : 'hover:text-[#4F959D]'}`
            }>Connections</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 shadow-sm transition-all duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-xl w-52 gap-2 border border-base-200">
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-black tracking-tight flex items-center gap-1">
          <span className="text-base-content">Study</span>
          <span className="text-[#4F959D]">Mate</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {/* Theme Toggle */}
        <button 
          onClick={handleTheme} 
          className="btn btn-ghost btn-circle swap swap-rotate text-xl text-[#4F959D] hover:bg-base-200 transition-transform active:scale-90"
        >
          {theme === "light" ? <FiSun /> : <FaMoon />}
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar hover:opacity-80 transition-opacity ring-2 ring-[#4F959D] ring-offset-2 rounded-full">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || "https://i.ibb.co/Mgs9hyL/user.png"} alt="User" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-xl w-56 border border-base-200">
              <li className="menu-title text-base-content/60 px-4 py-2 text-xs uppercase tracking-widest font-bold border-b border-base-200 mb-2">
                User Settings
              </li>
              <li>
                <Link to="/myProfile" className="flex items-center gap-3 py-3 hover:bg-base-200 rounded-lg">
                  <FaRegUserCircle className="text-lg text-[#4F959D]" /> My Profile
                </Link>
              </li>
               <li>
                <button onClick={handleLogOut} className="flex items-center gap-3 py-3 text-red-500 hover:bg-red-50 rounded-lg mt-1 font-semibold">
                  <MdLogout className="text-lg" /> LogOut
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login" className="btn btn-ghost text-[#4F959D] hidden sm:flex">Login</Link>
            <Link to="/register" className="btn bg-[#4F959D] hover:bg-[#397177] text-white border-none shadow-md px-6">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;