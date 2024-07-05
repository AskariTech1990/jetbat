/*---------------------------------------------------------------------------------------
  Tokenomics Component
  This component displays information about the tokenomics of the Jebat AI project.

  Purpose:
  - Provides details about the token distribution and economic model of $JEBAT.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.
  - Graph component: Displays a graphical representation of token allocation.

  Design:
  - Uses Tailwind CSS for styling, ensuring responsive and visually appealing layout.
  - Includes an image representation and textual description of tokenomics.

  Content:
  - Displays key information about $JEBAT token distribution:
    - Presale, Staking/Reward, Project Fund, Marketing, and Dex/Cex liquidity percentages.
  - Integrates an image for visual appeal and a graph component for visualizing token allocation.

  Designed to inform users about the token distribution strategy and economic principles 
  of $JEBAT, enhancing understanding and transparency for potential investors and users.

---------------------------------------------------------------------------------------*/
import React from "react";
import Graph from "./Graph";
import "../assets/css/Tokenomics.css";
import Image from "next/image";
import image from "../assets/bot.png";

// Import tokenomicsText object
import { tokenomicsText } from "./Resourse";

const Tokenomics = () => {
  const { headline, tokenInformation, distribution } = tokenomicsText;

  return (
    <>
      <div
        className="bg-black text-center lg:ps-32 lg:pe-32 md:ps-32 md:pe-32 "
        id="token"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-4xl text-white mb-10 relative">
            {headline}
          </h1>
          <div className="w-24 h-1 bg-green-500 mb-10 -mt-7"></div>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center  lg:ms-32">
          {/* Image Section */}
          <section className="mb-20">
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <Image src={image} alt="image" />
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    {/* Token Information */}
                    <small className="badge">{tokenInformation.badge}</small>
                    <small className="badge-p">
                      {tokenInformation.description}
                    </small>
                    {/* Token Distribution Details */}
                    <div className="description">
                      <ul>
                        {distribution.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      {/* Additional Information */}
                      <p className="card-footer"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Graph Section */}
          <Graph />
          
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
