import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary-grey text-primary-white font-jost pt-20 pb-10 px-6 md:px-12 lg:px-24">
      {/* Newsletter Section */}
      <div className="flex flex-col items-center text-center mb-24">
        <h2 className="text-white text-2xl font-medium tracking-widest mb-4">GET 10% OFF</h2>
        <p className="text-sm mb-8">Be the first to get the latest news about trends, promotions, and much more!</p>
        <div className="flex w-full max-w-xl">
          <input
            type="email"
            placeholder="Your email address"
            className="grow bg-primary-white border-none px-5 py-4 text-sm text-primary-black focus:ring-1 focus:ring-gray-500 outline-none"
          />
          <button className="bg-[#555555] text-white lg:px-10 px-8 py-4  text-xs font-bold tracking-widest hover:bg-[#666666] transition-colors">
            JOIN
          </button>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        {/* Brand & Address */}
        <div className="lg:col-span-1">
          <div className="mb-8">
            {/* UOMO Logo Placeholder */}
            <span className="text-white text-3xl font-black tracking-tighter">UOMO</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            1418 River Drive, Suite 35 Cottonhall, CA 9622<br />
            United States
          </p>
          <div className="text-sm text-white mb-8">
            <p className="mb-1">sale@uomo.com</p>
            <p className="font-semibold">+1 246-345-0695</p>
          </div>
          <div className="flex space-x-5">
            {/* Social Icons */}
            <a href="#" className="hover:text-white transition-colors text-sm"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition-colors text-sm"><FaTwitter /> </a>
            <a href="#" className="hover:text-white transition-colors text-sm"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition-colors text-sm"><FaYoutube /> </a>
            <a href="#" className="hover:text-white transition-colors text-sm"><FaPinterestP />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-xs font-bold tracking-widest mb-8 uppercase">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Affiliates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white text-xs font-bold tracking-widest mb-8 uppercase">Shop</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Men</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Women</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white text-xs font-bold tracking-widest mb-8 uppercase">Help</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Find a Store</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Legal & Privacy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gift Card</a></li>
          </ul>
        </div>

        {/* Opening Time */}
        <div>
          <h3 className="text-white text-xs font-bold tracking-widest mb-8 uppercase">Opening Time</h3>
          <div className="space-y-4 text-sm">
            <p>Mon — Fri: 8AM — 9PM</p>
            <p>Sat: 9 AM — 8 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-800 mb-8" />
    </footer>
  );
};

export default Footer;

