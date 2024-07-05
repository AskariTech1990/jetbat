"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdClose } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../assets/Jebat_AI_Logo.png";
import { FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { headerText } from "./Resourse";
import { toast } from "react-toastify";
import Web3Modal from 'web3modal'; 
const Header = () => {
  // State variables for menu and dropdown visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [showAuditModal, setShowAuditModal] = useState(false); // State for audit modal
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdown visibility in desktop and mobile menus
  const handleDropDown = () => {
    setIsDropdown(!isDropdown);
  };

  // Open audit modal
  const handleAudit = () => {
    setShowAuditModal(true);
  };

  // Close audit modal
  const closeAuditModal = () => {
    setShowAuditModal(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const web3Modal = new Web3Modal();
      const provider = await web3Modal.connect();
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0];

      const data = {
        email,
        content,
        walletAddress
      }
      const response = await fetch('https://2lkz6gq8-3002.inc1.devtunnels.ms/feedback/record-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully! Our Team Will Contact You');
        setEmail('');
        setContent('');
        onClose(); // Close the modal after successful submission
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      onclose()
    }
  };


  const handleFeedBack = () => {
    setIsOpen(true);
  };
  const onClose = ()=>{
    setIsOpen(false)
  }

  return (
    <header className="bg-black text-white p-4 md:p-6 lg:p-8 mb-20 lg:-mb-20 md:mb-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">
          <Image src={logo} alt={headerText.logoAlt} width={80} />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:block mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6">
            {/* About dropdown */}
            <li className="mb-2 md:mb-0">
              <a
                href="#"
                className="flex items-center relative hover:text-green-500"
                onClick={handleDropDown}
              >
                {headerText.navigation.about}{" "}
                <MdOutlineKeyboardArrowDown className="text-xl" />
              </a>
              {/* Dropdown menu */}
              {isDropdown && (
                <ul className="absolute top-20 flex justify-center ps-2 flex-col bg-transparent">
                  {headerText.navigation.dropdown.map((item, index) => (
                    <li
                      key={index}
                      onClick={handleDropDown}
                      className="hover:text-green-500 cursor-pointer"
                    >
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Other navigation links */}
            <li className="mb-2 md:mb-0">
              <a
                href="/whitepaper.pdf"
                target="_blank"
                className="hover:text-green-500"
              >
                {headerText.navigation.whitepaper}
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a
                href="#"
                onClick={handleAudit}
                className="hover:text-green-500"
              >
                {headerText.navigation.audit}
              </a>
            </li>
            <li className="mb-2 md:mb-0 cursor-pointer">
              <a
                onClick={handleFeedBack}
                className="hover:text-green-500"
              >
                               {headerText.navigation.contact}
              </a>
            </li>
          </ul>
        </nav>

        {/* Social media icons and mobile menu toggle */}
        <div className="flex items-center space-x-4">
          {/* Social media icons (hidden on mobile) */}
          <a href="https://www.alchemy.com/faucets/ethereum-sepolia" target="_blank" className="hidden md:block">
            <RiTwitterXLine className="text-2xl hover:text-green-500" />
          </a>
          <a href="https://telegram.org/" target="_blank" className="hidden md:block">
            <FaTelegramPlane className="text-2xl hover:text-green-500" />
          </a>
          <a href="https://www.facebook.com/?sk=welcome" target="_blank" className="hidden md:block">
            <FaFacebook className="text-2xl hover:text-green-500" />
          </a>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden text-5xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed z-40 top-0 right-0 h-full w-full bg-gradient-to-t from-black to-green-500 text-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4 mt-3">
          <button
            className="text-5xl"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <MdClose />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4 mt-5">
          {/* Mobile dropdown for 'About' section */}
          <li>
            <a
              href="#"
              className="flex items-center relative hover:text-black"
              onClick={handleDropDown}
            >
              {headerText.navigation.about}{" "}
              <MdOutlineKeyboardArrowDown className="text-xl" />
            </a>
            {/* Mobile dropdown menu */}
            {isDropdown && (
              <ul className="mt-2 flex flex-col">
                {headerText.navigation.dropdown.map((item, index) => (
                  <li
                    key={index}
                    onClick={toggleMenu}
                    className="hover:text-black cursor-pointer"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* Other mobile navigation links */}
          <li>
            <a
              href="/whitepaper.pdf"
              target="_blank"
              className="hover:text-green-500"
            >
              {headerText.navigation.whitepaper}
            </a>
          </li>
          <li>
            <a href="#" onClick={handleAudit} className="hover:text-green-500">
              {headerText.navigation.audit}
            </a>
          </li>
          <li className="mb-2 md:mb-0">
              <a
                onClick={handleFeedBack}
                className="hover:text-green-500"
              >
                {headerText.navigation.contact}
              </a>
            </li>
          {/* Social media icons */}
          <div className="flex flex-wrap gap-6 justify-center items-center space-y-2 mt-4">
          <a href="https://www.alchemy.com/faucets/ethereum-sepolia" target="_blank" >
              <RiTwitterXLine className="text-2xl hover:text-green-500" />
            </a>
            <a href="https://telegram.org/" target="_blank" >
              <FaTelegramPlane className="text-2xl hover:text-green-500" />
            </a>
            <a href="https://www.facebook.com/?sk=welcome" target="_blank" >
              <FaFacebook className="text-2xl hover:text-green-500" />
            </a>
          </div>
        </ul>
      </div>

      {/* Audit modal */}
      {showAuditModal && (
        <div className="fixed inset-0 bg-opacity-50 flex h-32 lg:mt-20 md:mt-20 sm:mt-20 mt-72  justify-center z-50 p-5">
          <div className="bg-white shadow-lg rounded-lg p-6 relative">
            <p className="text-lg text-black">
              Jebat AI smart contract is currently pending Audit.
            </p>
            <button
              onClick={closeAuditModal}
              className="mt-4 bg-green-500 text-white px-4 py-2 absolute -top-9 -right-3 rounded-full hover:bg-green-600"
            >
              x
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-5">
          <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>
          <div className="modal-container bg-white w-full max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content p-4">
            <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message:
                  </label>
                  <textarea
                    id="content"
                    className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
