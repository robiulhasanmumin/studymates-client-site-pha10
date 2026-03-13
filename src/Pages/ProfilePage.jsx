import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Link } from 'react-router';
import { FaEnvelope, FaUserEdit, FaHome, FaUserCircle } from 'react-icons/fa';

const ProfilePage = () => {
  const { user } = use(AuthContext);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5 py-12 bg-base-200/50">
      <div className="max-w-md w-full bg-base-100 rounded-[3rem] shadow-xl overflow-hidden border border-base-200">
        
        {/* Profile Header Background */}
        <div className="h-32 bg-[#4F959D] relative">
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="relative">
              {user?.photoURL ? (
                <img 
                  src={user?.photoURL} 
                  className="h-32 w-32 rounded-full border-4 border-base-100 object-cover shadow-lg" 
                  alt="User Profile" 
                />
              ) : (
                <FaUserCircle className="h-32 w-32 text-gray-300 bg-base-100 rounded-full border-4 border-base-100 shadow-lg" />
              )}
              <div className="absolute bottom-1 right-2 bg-green-500 h-5 w-5 rounded-full border-2 border-base-100 shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="pt-16 pb-10 px-8 text-center">
          <h2 className="text-3xl font-black text-base-content tracking-tight">
            {user?.displayName || "Anonymous User"}
          </h2>
          
          <div className="flex items-center justify-center gap-2 mt-2 text-gray-500 font-medium">
            <FaEnvelope className="text-[#4F959D]" />
            <span>{user?.email}</span>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {/* Action Buttons */}
            {/* <Link 
              to="/updateProfile" 
              className="btn btn-outline border-[#4F959D] text-[#4F959D] hover:bg-[#4F959D] hover:border-[#4F959D] rounded-2xl flex items-center gap-2 group transition-all"
            >
              <FaUserEdit className="group-hover:scale-110 transition-transform" />
              Edit Profile
            </Link> */}

            <Link 
              to="/" 
              className="btn bg-[#4F959D] hover:bg-[#397177] text-white border-none rounded-2xl flex items-center gap-2 shadow-lg shadow-[#4f959d]/20 transition-all active:scale-95"
            >
              <FaHome />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="bg-base-200 py-4 px-8 text-center border-t border-base-300">
          <p className="text-xs font-bold uppercase tracking-widest opacity-40">
            Study Mate Community Member
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;