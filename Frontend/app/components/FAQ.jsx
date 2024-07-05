// FAQ.js

"use client";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import '../assets/css/FAQ.css';
import { faqText } from "./Resourse";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active FAQ index

  // Function to toggle the active FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  return (
    <div className="lg:ps-24 lg:pe-24" id="FAQ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-xl lg:text-4xl md:text-4xl text-white mb-10 relative">
          {faqText.title}
        </h1>
        <div className="w-24 h-1 bg-green-500 mb-10 -mt-7"></div>
      </div>
      <div className="space-y-4 lg:w-full md:w-full">
        {/* Mapping through each FAQ item */}
        {faqText.faqs.map((faq, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md">
            {/* FAQ question and toggle icon */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="lg:text-xl md:text-xl text-lg text-white font-semibold">
                {faq.question}
              </h3>
              <span className="text-white text-2xl">
                {activeIndex === index ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
            </div>
            {/* FAQ answer with transition based on active state */}
            <div
              className={`transition-height ${
                activeIndex === index ? "transition-height-expanded" : ""
              }`}
            >
              <p className="mt-2 text-white lg:text-lg md:text-lg text-md">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
