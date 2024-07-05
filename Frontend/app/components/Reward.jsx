"use client";
import React, { useState } from "react";
import '../assets/css/Reward.css';
import { rewardText } from "./Resourse";

const Reward = () => {
  const [amount, setAmount] = useState(1); // State to track the amount of $JEBAT tokens purchased
  const [price, setPrice] = useState(0.000125); // State to track the price of $JEBAT tokens
  
  // Calculate the current value of $JEBAT based on amount and price
  const value = amount * price;

  return (
    <>
      {/* Reward Calculator Section */}
      <div className="bg-black text-white text-center" id="reward">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center lg:text-4xl md:text-xl text-white mb-10 relative">
            {rewardText.headline}
          </h1>
          <div className="w-24 h-1 bg-green-500 mb-10 -mt-7"></div>
        </div>
        {/* Description of $JEBAT and its potential */}
        <p className="text-center text-lg mb-10">
          {rewardText.description}
        </p>
        {/* Section for purchase information */}
        <div className="flex justify-center flex-col lg:flex-row md:flex-row items-center lg:gap-[12rem] md:gap-44 gap-8 p-5">
          <section className="text-center lg:text-start md:text-start">
            <h1 className="lg:text-4xl md:text-4xl text-xl font-semibold">
              {rewardText.readyToBuy.title}
            </h1>
            <p className="max-w-96 text-white text-lg">
              {rewardText.readyToBuy.content}
            </p>
            <button className="button"><a href="#banner">{rewardText.readyToBuy.button}</a></button>
          </section>

          {/* Returns Calculator */}
          <section className="flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-green border-2 border-green-500 w-full max-w-[20rem]">
              <h1 className="text-2xl font-bold text-center text-black mb-4">
                {rewardText.returnsCalculator.title}
              </h1>
              <p className="text-center mb-6 text-black">
                {rewardText.returnsCalculator.description}
              </p>
              {/* Input field for $JEBAT amount */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  {rewardText.returnsCalculator.inputLabel}
                </label>
                <div className="flex items-center border border-gray-300 p-2 rounded">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex w-64 lg:w-64 md:w-64 p-2 outline-none text-black"
                    placeholder={rewardText.returnsCalculator.amountPlaceholder}
                  />
                  <span className="ml-2">{rewardText.returnsCalculator.amountSymbol}</span>
                </div>
              </div>
              {/* Slider for adjusting token price */}
              <div className="mb-6 text-center text-gray-500">
                {rewardText.returnsCalculator.sliderLabel} ${price}
              </div>
              <div className="flex items-center mb-6">
                <input
                  type="range"
                  min="0"
                  max="0.01"
                  step="0.0001"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="w-full slider"
                />
              </div>
              {/* Display calculated value based on current inputs */}
              {/* <input
                    type="text"
                    value={`$${amount}`}
                    readOnly
                    className="bg-transparent w-64 text-green-500 text-4xl outline-none border-none"
                  /> */}
              <div className="text-center text-green-500 font-bold">
                $JEBAT {rewardText.returnsCalculator.valueLabel}
                <div className="text-4xl text-green-500">
                  <input
                    type="text"
                    value={`$${value >= 1 ? value.toFixed(2) : value.toFixed(6)}`}
                    readOnly
                    className="bg-transparent lg:w-64 md:w-64 w-72 text-center text-green-500 text-lg outline-none border-none"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Reward;
