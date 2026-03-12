import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 bg-base-100 p-8 md:p-16 rounded-[40px] shadow-xl">
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black">Get in <span className="text-[#4F959D]">Touch</span></h2>
            <p className="opacity-70">Have questions? We're here to help you find your next study partner.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-[#4F959D]/10 text-[#4F959D] rounded-2xl"><FaEnvelope /></div>
                <div><p className="text-sm opacity-60">Email Us</p><p className="font-bold">support@studymate.com</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-[#4F959D]/10 text-[#4F959D] rounded-2xl"><FaPhoneAlt /></div>
                <div><p className="text-sm opacity-60">Call Us</p><p className="font-bold">+880 1234-567890</p></div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="input input-bordered w-full bg-base-200 border-none focus:ring-2 focus:ring-[#4F959D]" />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full bg-base-200 border-none focus:ring-2 focus:ring-[#4F959D]" />
            <textarea placeholder="Your Message" className="textarea textarea-bordered w-full bg-base-200 border-none h-32 focus:ring-2 focus:ring-[#4F959D]"></textarea>
            <button className="btn bg-[#4F959D] hover:bg-[#397177] text-white w-full border-none shadow-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;