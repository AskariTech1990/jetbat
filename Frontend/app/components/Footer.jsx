// Footer.js

import Image from 'next/image';
import React from 'react';
import logo from "../assets/Jebat_AI_Logo.png";
import { footerText } from './Resourse';
import { FaTelegramPlane, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-green-900 to-black text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo section */}
        <div className="flex flex-col items-center text-center mb-4 -ms-5 lg:ms-0 md:ms-0 sm:ms-0  md:mb-0">
          <Image src={logo} alt={footerText.sections.logoAlt} className="w-24 h-auto mb-2" />
        </div>
        
        {/* Navigation links section */}
        <div className="w-full md:w-auto flex flex-col lg:items-center lg:me-20 md:me-20 md:items-center sm:items-center items-start mb-4 md:mb-0">
          <ul className="list-none p-0">
            {footerText.sections.navigation.map((navItem, index) => (
              <li key={index} className="mb-2 hover:text-green-500 cursor-pointer">
                <a href={navItem.href}>{navItem.label}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Legal links section */}
        {/* <div className="w-full md:w-auto flex flex-col lg:items-center md:items-center sm:items-center items-start mb-4 md:mb-0">
          <ul className="list-none p-0">
            {footerText.sections.legal.map((legalItem, index) => (
              <li key={index} className="mb-2 hover:text-green-500 cursor-pointer">
                {legalItem.label}
              </li>
            ))}
          </ul>
        </div> */}
        
        {/* Address section */}
        <div className="w-full md:w-auto flex flex-row lg:flex-col md:flex-col sm:flex-col gap-3 lg:items-center md:items-center sm:items-center items-start">
            {/* {footerText.sections.address.map((addressLine, index) => (
              <li key={index} className="mb-2">{addressLine}</li>
            ))} */}
                       <a href="https://www.alchemy.com/faucets/ethereum-sepolia" target="_blank" >
              <RiTwitterXLine className="text-2xl hover:text-green-500" />
            </a>
            <a href="https://telegram.org/" target="_blank" >
              <FaTelegramPlane className="text-2xl hover:text-green-500" />
            </a>
            <a href="https://www.facebook.com/?sk=welcome" target="_blank" >
              <FaFacebook className="text-2xl hover:text-green-500" />
            </a>
            {/* <button>
              <FaInstagram className="text-2xl hover:text-green-500" />
            </button>
            <button>
              <FaYoutube className="text-2xl hover:text-green-500" />
            </button> */}
        </div>
      </div>

      {/* Horizontal line */}
      <hr className='mt-5 mb-5'/>

      {/* Copyright text */}
      <p className='text-center '>{footerText.copyright}</p>
    </footer>
  );
};

export default Footer;
