import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import { FaUser, FaLink, FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';

const Register = () => {
  const [err, setErr] = useState("");
  const { googleSignIn, createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setErr("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordValidation.test(password)) {
      setErr("Password must contain at least 1 Uppercase, 1 Lowercase and 6 characters.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              title: "Registration Successful!",
              text: `Welcome to Study Mate, ${name}!`,
              icon: "success",
              confirmButtonColor: "#4F959D",
            });
            navigate("/");
          })
          .catch((error) => {
            setErr(error.message);
          });
      })
      .catch((error) => {
        setErr(error.message);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: `Welcome ${user.displayName}!`,
          text: "Logged In Successfully With Google",
          icon: "success",
          confirmButtonColor: "#4F959D",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl rounded-[2.5rem] overflow-hidden border border-base-300">
        
        {/* Top Header */}
        <div className="bg-[#4F959D] py-8 text-white text-center">
          <h1 className="text-3xl font-black">Join Community</h1>
          <p className="opacity-80 mt-1 font-medium">Create your account to find study partners</p>
        </div>

        <div className="card-body p-8 md:p-10">
          <form onSubmit={handleRegister} className="space-y-4">
            
            {/* Name Input */}
            <div className="form-control">
              <label className="label font-bold text-sm flex gap-2">
                <FaUser className="text-[#4F959D]" /> Full Name
              </label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                className="input input-bordered rounded-xl bg-base-200 border-none focus:ring-2 focus:ring-[#4F959D]" 
                required 
              />
            </div>

            {/* Photo URL Input */}
            <div className="form-control">
              <label className="label font-bold text-sm flex gap-2">
                <FaLink className="text-[#4F959D]" /> Photo URL
              </label>
              <input 
                type="text" 
                name="photo" 
                placeholder="https://example.com/photo.jpg" 
                className="input input-bordered rounded-xl bg-base-200 border-none focus:ring-2 focus:ring-[#4F959D]" 
                required 
              />
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label font-bold text-sm flex gap-2">
                <FaEnvelope className="text-[#4F959D]" /> Email Address
              </label>
              <input 
                type="email" 
                name="email" 
                placeholder="example@mail.com" 
                className="input input-bordered rounded-xl bg-base-200 border-none focus:ring-2 focus:ring-[#4F959D]" 
                required 
              />
            </div>

            {/* Password Input */}
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
            </div>

            <button type="submit" className="btn bg-[#4F959D] hover:bg-[#397177] text-white w-full border-none rounded-xl mt-4 shadow-lg shadow-[#4f959d]/20 font-bold">
              Create Account
            </button>
          </form>

          <div className="divider opacity-50">OR</div>

          <button 
            onClick={handleGoogleLogin} 
            type="button"
            className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content w-full rounded-xl flex items-center gap-2 font-bold"
          >
            <FaGoogle className="text-red-500" /> Register with Google
          </button>

          <p className="text-center mt-6 font-medium">
            Already have an account? 
            <Link to="/login" className="text-[#4F959D] ml-2 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;