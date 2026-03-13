import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import { FaEnvelope, FaLock, FaGoogle, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const { googleSignIn, logIn, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setErr("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Welcome Back!",
          text: "Logged In Successfully!",
          icon: "success",
          confirmButtonColor: "#4F959D",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setErr("Invalid email or password. Please try again.");
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: `Hi, ${user.displayName}!`,
          text: "Logged In Successfully With Google",
          icon: "success",
          confirmButtonColor: "#4F959D",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl rounded-[2.5rem] overflow-hidden border border-base-300">
        
        {/* Header Section */}
        <div className="bg-[#4F959D] py-8 text-white text-center">
          <div className="flex justify-center mb-2">
             <FaSignInAlt size={40} />
          </div>
          <h1 className="text-3xl font-black">Welcome Back</h1>
          <p className="opacity-80 mt-1 font-medium">Log in to continue your journey</p>
        </div>

        <div className="card-body p-8 md:p-10">
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email Field */}
            <div className="form-control">
              <label className="label font-bold text-sm flex gap-2">
                <FaEnvelope className="text-[#4F959D]" /> Email Address
              </label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                className="input input-bordered rounded-xl bg-base-200 border-none focus:ring-2 focus:ring-[#4F959D]" 
                required 
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label font-bold text-sm flex gap-2">
                <FaLock className="text-[#4F959D]" /> Password
              </label>
              <input 
                type="password" 
                name="password" 
                placeholder="••••••••" 
                className="input input-bordered rounded-xl bg-base-200 border-none focus:ring-2 focus:ring-[#4F959D]" 
                required 
              />
              {err && <p className="text-red-500 text-xs mt-2 font-medium">{err}</p>}
              
              <div className="flex justify-end mt-2">
                <button type="button" className="text-xs font-bold text-[#4F959D] hover:underline">
                  Forgot password?
                </button>
              </div>
            </div>

            <button type="submit" className="btn bg-[#4F959D] hover:bg-[#397177] text-white w-full border-none rounded-xl mt-4 shadow-lg shadow-[#4f959d]/20 font-bold">
              Sign In
            </button>
          </form>

          <div className="divider opacity-50 font-bold text-xs uppercase tracking-widest my-6">OR</div>

          {/* Google Login */}
          <button 
            onClick={handleGoogleLogin} 
            type="button"
            className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content w-full rounded-xl flex items-center gap-2 font-bold"
          >
            <FaGoogle className="text-red-500" /> Sign In with Google
          </button>

          <p className="text-center mt-8 font-medium">
            New to Study Mate? 
            <Link to="/register" className="text-[#4F959D] ml-2 hover:underline font-bold">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;