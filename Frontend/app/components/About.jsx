// About.js
import Image from "next/image";
import React from "react";
import bot from "../assets/bot.png";
import girl from "../assets/girl.png";
import bot2 from "../assets/bot2.png";
import { aboutText } from "./Resourse";

const About = () => {
  return (
    <>
      <div className="mb-10" id="about">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center lg:text-4xl md:text-4xl text-xl text-white mb-10 relative">
            {aboutText.title}
          </h1>
          <div className="w-24 h-1 bg-green-500 mb-10 -mt-7"></div>
          {/* <p className="text-gray-400 text-sm lg:text-lg md:text-lg text-center -mt-10 mb-10 p-5">
            {aboutText.subtitle}
          </p> */}
        </div>
        

        {aboutText.sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row md:flex-row justify-center items-center mb-10 ${
              index === 1
                ? "animate-slide-in-right-about md:animate-scale-in lg:animate-scale-in"
                : "md:animate-scale-in lg:animate-scale-in"
            } p-5`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="relative flex justify-center items-center">
                  <div
                    className={`absolute ${
                      index === 0
                        ? "bg-yellow-500"
                        : "bg-gradient-to-r from-gray-400"
                    } rounded-full blur-lg ms-4 w-32   h-32`}
                  ></div>
                  <Image
                    src={index === 0 ? bot : bot2}
                    width={index === 0 ? 1000 : 4000}
                    height={300}
                    alt={section.heading}
                    className={`relative z-10  ${
                      index % 2 === 0 ? "mr-10" : "mr-0" 
                    } `}
                  />
                </div>
                <div className="text-white ">
                  <h1 className="lg:text-4xl md:text-4xl text-lg font-semibold">
                    {section.heading}
                  </h1>
                  <p className=" text-sm lg:text-xl text-justify md:text-xl text-gray-200">
                    {section.content}
                  </p>
                  <div className="text-center lg:text-start md:text-start sm:text-start">
                    <button className="button"><a href="#banner">BUY NOW</a></button>
                  </div>
                </div>
              </>
            ) : (
              <>
                  <div className="text-white hidden lg:block md:block sm:block">
                    <h1 className="lg:text-4xl md:text-4xl text-lg font-semibold">
                      {section.heading}
                    </h1>
                    <p className="text-sm lg:text-xl  text-justify md:text-xl text-gray-200">
                      {section.content}
                    </p>
                    <div className="text-center lg:text-start md:text-start sm:text-start">
                      <button className="button"><a href="#banner">BUY NOW</a></button>
                    </div>
                  </div>
                  <div className="relative flex justify-center items-center ">
                    <div className="absolute bg-purple-500 lg:ms-32 md:ms-32  hidden lg:block md:block sm:block sm:ms-32 rounded-full blur-lg w-32 h-32"></div>
                    <Image
                      src={girl}
                      width={index === 1 ? 3000 : 4000} // Adjust width based on index (for responsiveness)
                      height={index === 1 ? 3000 : 4000} // Adjust height based on index (for responsiveness)
                      alt={section.heading}
                      className="relative z-10  mr-24 lg:mr-0 md:mr-0 sm:mr-0  hidden lg:block md:block sm:block"
                    />
                  </div>
                <div className="block lg:hidden md:hidden sm:hidden">
                  <div className="relative flex justify-center items-center">
                    <div className="absolute bg-purple-500 lg:w-[50rem] md:w-[35rem] lg:ms-32 md:ms-32 sm:ms-32 rounded-full blur-lg w-32 h-32"></div>
                    <Image
                      src={girl}
                      width={index === 1 ? 300 : 400} // Adjust width based on index (for responsiveness)
                      height={index === 1 ? 300 : 400} // Adjust height based on index (for responsiveness)
                      alt={section.heading}
                      className="relative z-10 mr-24 lg:mr-0 md:mr-0 sm:mr-0"
                    />
                  </div>
                  <div className="text-white">
                    <h1 className="lg:text-4xl md:text-4xl text-lg font-semibold">
                      {section.heading}
                    </h1>
                    <p className=" text-sm  text-justify lg:text-xl md:text-xl text-gray-200">
                      {section.content}
                    </p>
                    <div className="text-center lg:text-start md:text-start sm:text-start">
                      <button className="button"><a href="#banner">BUY NOW</a></button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
