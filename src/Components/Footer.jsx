import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal p-10 bg-black text-white">
  <aside>
    <p className='text-4xl font-bold'>
      Study <span className='text-[#4F959D]'>Mate</span>
    </p>
    <p>Find Your Perfect Study Partner</p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> 
<div>
<footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Robiul Hasan Mumin</p>
  </aside>
</footer>
</div>

    </div>
 )
}

export default Footer