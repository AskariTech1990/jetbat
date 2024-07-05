// Information.js

import Image from "next/image";
import React from "react";
import { informationText } from "./Resourse";

const Information = () => {
  return (
    <>
      <div className="mb-10">
        <div className="flex flex-col justify-center items-center entry-effect">
          {/* Main headline */}
          <h1 className="text-center lg:text-4xl md:text-4xl text-xl text-white mb-10 relative">
            {informationText.headline}
          </h1>
          {/* Underline */}
          <div className="w-24 h-1 bg-green-500 mb-10 -mt-7"></div>
          {/* Description */}
          {/* <p className="text-gray-300 text-sm lg:text-sm md:text-sm text-center -mt-10 mb-10">
            {informationText.description}
          </p> */}
          {/* Buttons */}
          <div className="flex flex-col md:flex-row">
            <button className="bg-green-500 text-black rounded-full py-2 px-6 mb-2 md:mb-0 md:mr-4">
              {informationText.buttons.startNow}
            </button>
            <button className="text-white rounded-full mb-3 py-2 px-6 border-t-2 mr-4 border-green-500">
           <a href="#banner">   {informationText.buttons.howItWorks}</a>
            </button>
          </div>
        </div>

        {/* Image sections */}
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center lg:gap-10 md:gap-8 mb-10">
          {informationText.images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full lg:w-1/3 md:w-1/2 p-4 ${
                index === 0 ? "md:animate-slide-in-left lg:animate-slide-in-left" : "lg:animate-slide-in-right md:animate-slide-in-right"
              }`}
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end text-white p-4">
                  <h1 className="text-xl lg:text-4xl md:text-4xl font-semibold">
                    {image.title}
                  </h1>
                  <p className="text-xs lg:text-sm md:text-sm mt-2">
                    {image.description}
                  </p>
                  <button className="button mt-4"><a href="#banner">{image.button}</a></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
