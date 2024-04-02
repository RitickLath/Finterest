import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import background from "../../../public/Images/background1.png";
import background1 from "../../../public/Images/1.svg";
import background2 from "../../../public/Images/2.svg";
import background3 from "../../../public/Images/6.svg";

const StockMarket = () => {
  let { id } = useParams();

  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-7 sm:px-8 pt-8 w-[100%] pb-8 md:px-12 ">
      <div className="lg:flex">
        <div className="lg:w-[70%]">
          <h1 className="text-xl font-serif mb-6">NAME OF STOCK: API</h1>
          <h2 className="text-xl font-serif">ABOUT</h2>
          <p className="text-sm sm:text-base text-[#7d8291] max-w-[600px]">
            Description: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Similique natus quis doloremque minima ratione velit optio,
            distinctio expedita non molestias laboriosam, recusandae architecto
            sequi in vero corporis reprehenderit aliquid eveniet?
          </p>
          <br />
          <h2 className="text-xl font-serif">KEY POINTS</h2>

          {/* Table of Informations */}
          <div className="border-[1px] grid md:grid-cols-3 md:gap-x-12 gap-y-2 mt-2 max-w-[700px] px-2 md:py-4 md:px-4">
            {/* Data-1 */}

            <div className="flex justify-between mt-2 px-7 md:px-2 mb-1">
              <h1 className="text-[#7d8291]">Market Cap</h1>
              <h1>Data</h1>
            </div>
            <hr className="border-gray-700 w-full md:hidden" />

            {/* Data-2 */}

            <div className="flex justify-between mt-2 px-7 md:px-2 mb-1">
              <h1 className="text-[#7d8291]">Current price</h1>
              <h1>Data</h1>
            </div>
            <hr className="border-gray-700 w-full md:hidden" />
            {/* Data-3 */}

            <div className="flex justify-between mt-2 px-7 md:px-2 mb-1">
              <h1 className="text-[#7d8291]">High/Low</h1>
              <h1>Data</h1>
            </div>
            <hr className="border-gray-700 w-full md:hidden" />
            {/* Data-4 */}

            <div className="flex justify-between mt-2 px-7 md:px-2 mb-1">
              <h1 className="text-[#7d8291]">Stock P/E</h1>
              <h1>Data</h1>
            </div>
            <hr className="border-gray-700 w-full md:hidden" />
            {/* Data-5 */}

            <div className="flex justify-between mt-2 px-7 md:px-2 mb-1">
              <h1 className="text-[#7d8291]">Book Value</h1>
              <h1>Data</h1>
            </div>
            <hr className="border-gray-700 w-full md:hidden" />

            {/* Data-6 */}

            <div className="flex justify-between mt-2 px-7 md:px-2 mb-1">
              <h1 className="text-[#7d8291]">Divident Yield</h1>
              <h1>Data</h1>
            </div>
            <hr className="border-gray-700 w-full md:hidden" />

            {/* Data-7 */}

            <div className="flex justify-between mt-2 px-7 md:px-2 mb-1">
              <h1 className="text-[#7d8291]">ROCEp</h1>
              <h1>Data</h1>
            </div>
            <hr className="border-gray-700 w-full md:hidden" />

            {/* Data-8 */}

            <div className="flex justify-between mt-2 px-7 md:px-2 mb-1">
              <h1 className="text-[#7d8291]">ROE</h1>
              <h1>Data</h1>
            </div>
            <hr className="border-gray-700 w-full md:hidden" />

            {/* Data-9 */}

            <div className="flex justify-between mt-2 px-7 md:px-2 mb-1">
              <h1 className="text-[#7d8291]">Face Value</h1>
              <h1>Data</h1>
            </div>
            <hr className="border-gray-700 w-full md:hidden" />
          </div>
        </div>
        <div className="hidden lg:block">
          <img className="w-[500px] mix-blend-screen" src={background3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StockMarket;
