import axios from "axios";
import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthContext";
import { useNavigate } from "react-router";
import { FaUser, FaLink, FaBook, FaClock, FaStar, FaUsers, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const CreatePartnerProfile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const newPartner = {
      name: data.name,
      profileimage: data.photo,
      subject: data.subject,
      studyMode: data.studymode,
      availabilityTime: data.time,
      location: data.location,
      description: data.description,
      experienceLevel: data.experience,
      rating: Number(data.rating),
      patnerCount: Number(data.partner),
      email: data.email,
    };

    try {
      const res = await axios.post(
        "https://study-mates-server-site.vercel.app/partner",
        newPartner
      );
      if (res.data.insertedId) {
        Swal.fire({
          title: "Successfully Created!",
          text: "Your partner profile is now live.",
          icon: "success",
          confirmButtonColor: "#4F959D",
        });
        e.target.reset();
        navigate("/findPartners");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden border border-base-300">
        <div className="bg-[#4F959D] p-8 text-white text-center">
          <h1 className="text-3xl md:text-4xl font-black">Create Partner Profile</h1>
          <p className="opacity-80 mt-2 font-medium">Find your ideal study buddy by sharing your details</p>
        </div>

        <form onSubmit={handleCreate} className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaUser className="text-[#4F959D]" /> Full Name
              </label>
              <input type="text" name="name" placeholder="John Doe" className="input input-bordered focus:border-[#4F959D] rounded-xl bg-base-200/50 border-none" required />
            </div>

            {/* Email (Read Only) */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaEnvelope className="text-[#4F959D]" /> Email Address
              </label>
              <input type="email" name="email" defaultValue={user?.email} className="input input-bordered bg-base-300 rounded-xl border-none cursor-not-allowed" readOnly />
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaLink className="text-[#4F959D]" /> Profile Image URL
              </label>
              <input type="text" name="photo" placeholder="https://image-link.com" className="input input-bordered rounded-xl bg-base-200/50 border-none focus:border-[#4F959D]" required />
            </div>

            {/* Subject */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaBook className="text-[#4F959D]" /> Subject of Study
              </label>
              <input type="text" name="subject" placeholder="e.g. React.js, Physics" className="input input-bordered rounded-xl bg-base-200/50 border-none focus:border-[#4F959D]" required />
            </div>

            {/* Study Mode */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaMapMarkerAlt className="text-[#4F959D]" /> Study Mode
              </label>
              <select name="studymode" className="select select-bordered rounded-xl bg-base-200/50 border-none focus:border-[#4F959D]" required defaultValue="">
                <option value="" disabled italic>Select Mode</option>
                <option>Online</option>
                <option>Offline</option>
              </select>
            </div>

            {/* Availability */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaClock className="text-[#4F959D]" /> Availability Time
              </label>
              <select name="time" className="select select-bordered rounded-xl bg-base-200/50 border-none focus:border-[#4F959D]" required defaultValue="">
                <option value="" disabled italic>Select Schedule</option>
                <option>Morning (7 AM - 12 PM)</option>
                <option>Afternoon (1 PM - 5 PM)</option>
                <option>Evening (6 PM - 10 PM)</option>
                <option>Night (10 PM - 2 AM)</option>
              </select>
            </div>

            {/* Experience */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaUserGraduate className="sr-only" /> Experience Level
              </label>
              <select name="experience" className="select select-bordered rounded-xl bg-base-200/50 border-none focus:border-[#4F959D]" required defaultValue="">
                <option value="" disabled italic>Select Experience</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaStar className="text-amber-500" /> Initial Rating (1-5)
              </label>
              <input type="number" name="rating" defaultValue={4.5} max={5} min={1} step={0.1} className="input input-bordered rounded-xl bg-base-200/50 border-none focus:border-[#4F959D]" required />
            </div>

            {/* Partner Count */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaUsers className="text-[#4F959D]" /> Max Partners Needed
              </label>
              <input type="number" name="partner" defaultValue={1} className="input input-bordered rounded-xl bg-base-200/50 border-none focus:border-[#4F959D]" required />
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="label font-bold flex gap-2 items-center">
                <FaMapMarkerAlt className="text-[#4F959D]" /> Your Location
              </label>
              <input type="text" name="location" placeholder="e.g. Dhaka, Bangladesh" className="input input-bordered rounded-xl bg-base-200/50 border-none focus:border-[#4F959D]" required />
            </div>
          </div>

          {/* Description */}
          <div className="form-control mt-6">
            <label className="label font-bold">Tell us about your study goals</label><br />
            <textarea
              name="description"
              placeholder="Briefly describe what you're looking for in a partner..."
              className="textarea textarea-bordered rounded-2xl w-full bg-base-200/50 border-none focus:border-[#4F959D] h-32"
              required
            ></textarea>
          </div>

          <div className="mt-10">
            <button type="submit" className="btn bg-[#4F959D] hover:bg-[#397177] text-white w-full rounded-2xl border-none shadow-xl shadow-[#4f959d]/20 text-lg font-bold">
              Post Partner Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

 import { FaUserGraduate } from 'react-icons/fa';

export default CreatePartnerProfile;