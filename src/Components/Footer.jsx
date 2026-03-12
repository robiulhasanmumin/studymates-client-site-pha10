import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-neutral-content transition-colors duration-300">
      <footer className="footer container mx-auto p-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Brand Section */}
        <aside className="max-w-xs">
          <p className='text-4xl font-black tracking-tight mb-2'>
            Study <span className='text-[#4F959D]'>Mate</span>
          </p>
          <p className="text-sm opacity-70 leading-relaxed">
            Connecting students worldwide to find their perfect study partners. 
            Collaborate, learn, and grow together in a community built for success.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-[#4F959D] text-xl transition-all"><FaFacebook /></a>
            <a href="#" className="hover:text-[#4F959D] text-xl transition-all"><FaTwitter /></a>
            <a href="#" className="hover:text-[#4F959D] text-xl transition-all"><FaGithub /></a>
            <a href="#" className="hover:text-[#4F959D] text-xl transition-all"><FaLinkedin /></a>
          </div>
        </aside>

        {/* Quick Links */}
        <nav>
          <h6 className="footer-title text-white opacity-100 border-b border-[#4F959D] pb-1 mb-2">Explore</h6>
          <Link to="/" className="link link-hover hover:text-[#4F959D]">Home</Link>
          <Link to="/findPartners" className="link link-hover hover:text-[#4F959D]">Find Partners</Link>
          <Link to="/about" className="link link-hover hover:text-[#4F959D]">About Us</Link>
          <Link to="/contact" className="link link-hover hover:text-[#4F959D]">Contact Support</Link>
        </nav>

        {/* Categories */}
        <nav>
          <h6 className="footer-title text-white opacity-100 border-b border-[#4F959D] pb-1 mb-2">Categories</h6>
          <a className="link link-hover hover:text-[#4F959D]">Web Development</a>
          <a className="link link-hover hover:text-[#4F959D]">Data Science</a>
          <a className="link link-hover hover:text-[#4F959D]">Mathematics</a>
          <a className="link link-hover hover:text-[#4F959D]">Physics</a>
        </nav>

        {/* Newsletter */}
        <form onSubmit={(e) => e.preventDefault()}>
          <h6 className="footer-title text-white opacity-100 border-b border-[#4F959D] pb-1 mb-2">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-neutral-content opacity-70">Stay updated with latest study sessions.</span>
            </label>
            <div className="join mt-2">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item bg-neutral-800 border-none focus:outline-none w-full" />
              <button className="btn bg-[#4F959D] hover:bg-[#397177] border-none text-white join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>

      {/* Copyright Section */}
      <div className="border-t border-white/10">
        <footer className="footer footer-center p-6 text-sm opacity-60">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All rights reserved by <span className="font-bold text-[#4F959D]">Robiul Hasan Mumin</span></p>
          </aside>
        </footer>
      </div>
    </div>
  );
}

export default Footer;