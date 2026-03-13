import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar, FaUsers, FaGraduationCap, FaClock, FaMapMarkerAlt, FaEnvelope, FaChevronLeft, FaPlusCircle, FaCheckCircle, FaBookOpen } from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const PartnerDetails = () => {
  const partnerData = useLoaderData();
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [install, setInstall] = useState(false);

  useEffect(() => {
    const findPartner = partnerData.find((partner) => partner._id == id);
    setData(findPartner);
    if (findPartner) {
      axios
        .get(
          `https://study-mates-server-site.vercel.app/connection/${findPartner.email}/${findPartner._id}`
        )
        .then((res) => setInstall(res.data.exist))
        .catch((err) => console.error(err));
    }
  }, [partnerData, id]);

  if (!data || !data._id) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-[#4F959D]"></span>
      </div>
    );
  }

  const {
    _id,
    subject,
    name,
    profileimage,
    studyMode,
    rating,
    availabilityTime,
    location,
    description,
    experienceLevel,
    patnerCount,
    email,
  } = data;

  const modeBadge =
    studyMode === "Online"
      ? "bg-green-100 text-green-700 border-green-200"
      : "bg-blue-100 text-blue-700 border-blue-200";

  const handleAddPartner = async () => {
    const newConnection = {
      partnerId: _id,
      name,
      profileimage,
      subject,
      studyMode,
      availabilityTime,
      location,
      description,
      experienceLevel,
      rating,
      patnerCount,
      email,
    };

    try {
      const res = await axios.post(
        "https://study-mates-server-site.vercel.app/connection",
        newConnection
      );
      if (res.data.insertedId) {
        Swal.fire({
          title: "Connected!",
          text: "Partner added to your connection list.",
          icon: "success",
          confirmButtonColor: "#4F959D",
        });
        setInstall(true);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-200/50 py-12 px-5 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 font-bold text-gray-500 hover:text-[#4F959D] transition-colors mb-8 group"
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Partners
        </button>

        <div className="bg-base-100 rounded-[2.5rem] shadow-xl overflow-hidden border border-base-300 p-8 md:p-12 flex flex-col lg:flex-row items-start gap-12">
          
          {/* Left: Image & Quick Stats - Reduced Size & Gucue */}
          <div className="w-full lg:w-1/3 flex flex-col items-center flex-shrink-0">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-3xl border-4 border-base-200 shadow-inner mb-6">
              <img
                src={profileimage}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                alt={name}
              />
               <div className="absolute top-4 right-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border-2 shadow-sm ${modeBadge}`}>
                    {studyMode}
                  </span>
                </div>
            </div>

            {/* Quick Stats Grid Under Image */}
            <div className="w-full grid grid-cols-2 gap-4 bg-base-200/50 p-5 rounded-3xl border border-base-300">
                <div className="text-center space-y-1">
                  <p className="flex items-center justify-center gap-1.5 text-gray-400 font-bold text-xs uppercase tracking-wider">
                    <FaStar className="text-amber-500" /> Rating
                  </p>
                  <p className="text-xl font-black">{rating}</p>
                </div>
                <div className="text-center space-y-1">
                  <p className="flex items-center justify-center gap-1.5 text-gray-400 font-bold text-xs uppercase tracking-wider">
                    <FaUsers className="text-[#4F959D]" /> Count
                  </p>
                  <p className="text-xl font-black">{patnerCount}</p>
                </div>
            </div>
          </div>

          {/* Right: Content Section - Expanded */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div>
              <div className="flex items-center gap-3 text-[#4F959D] font-bold text-lg mb-2">
                 <FaBookOpen /> <span>{subject}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-base-content leading-tight">
                {name}
              </h1>
               <p className="flex items-center gap-2 text-base-content font-semibold mt-3 p-3 bg-base-200/70 rounded-xl w-fit">
                    <FaGraduationCap className="text-[#4F959D]" /> Level: {experienceLevel}
                </p>
            </div>

            <p className="text-gray-500 leading-relaxed text-lg bg-base-100 p-6 rounded-3xl shadow-inner border border-base-200">
              {description}
            </p>

            {/* Contact & Availability Info Grid */}
            <div className="space-y-4 pt-6 border-t border-base-200">
                <h3 className="text-sm font-bold opacity-50 uppercase tracking-widest mb-3">Availability & Contact</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 text-base-content font-medium">
                        <div className="w-10 h-10 rounded-xl bg-base-200/70 flex items-center justify-center text-[#4F959D]">
                            <FaClock />
                        </div>
                        <span>{availabilityTime}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base-content font-medium">
                        <div className="w-10 h-10 rounded-xl bg-base-200/70 flex items-center justify-center text-[#4F959D]">
                            <FaEnvelope />
                        </div>
                        <span>{email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base-content font-medium col-span-1 md:col-span-2">
                        <div className="w-10 h-10 rounded-xl bg-base-200/70 flex items-center justify-center text-[#4F959D]">
                            <FaMapMarkerAlt />
                        </div>
                        <span>{location}</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="pt-10">
                <button
                  onClick={handleAddPartner}
                  disabled={install}
                  className={`flex-1 btn h-16 rounded-3xl border-none font-bold text-xl shadow-lg transition-all active:scale-95 ${
                    install 
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                    : "bg-[#4F959D] hover:bg-[#397177] text-white shadow-[#4f959d]/30"
                  }`}
                >
                  {install ? (
                    <span className="flex items-center gap-3"><FaCheckCircle /> Already Connected</span>
                  ) : (
                    <span className="flex items-center gap-3"><FaPlusCircle /> Add to Connection</span>
                  )}
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;