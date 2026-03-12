import React, { useEffect, useState } from "react";
import Partner from "./Partner";
import { Link } from "react-router";
import { FaArrowRight, FaUsers } from "react-icons/fa";

const TopStudyPartners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://study-mates-server-site.vercel.app/partner")
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12 bg-base-100">
      <div className="container mx-auto lg:px-10 px-5">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-[#4F959D]"></span>
            <span className="text-[#4F959D] font-bold tracking-widest uppercase text-sm">Our Community</span>
            <span className="h-[2px] w-8 bg-[#4F959D]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black">
            Top <span className="text-[#4F959D]">Study</span> Partners
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Connect with our most active learners and build your dream study circle today.
          </p>
        </div>

        {/* Loading State or Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="loading loading-dots loading-lg text-[#4F959D]"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {partners.slice(0, 6).map((partner) => (
              <div key={partner._id || partner.id} className="hover:-translate-y-2 transition-transform duration-300">
                 <Partner partner={partner} />
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/findPartners"
            className="group btn bg-[#4F959D] text-white border-none hover:bg-[#35757c] px-10 rounded-full shadow-lg shadow-[#4f959d]/20 transition-all"
          >
            Find All Partners 
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopStudyPartners;