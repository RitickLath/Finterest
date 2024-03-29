import React from "react";
import ToolCard from "./ToolCard";
import { calculators } from "../../Constants/Calculator";
import { FaCoins } from "react-icons/fa6";

export const Tools = () => {
  return (
    // bg-gradient-to-r from-[#111111] to-[#0c0c0c]
    <div className="overflow-hidden bg-gradient-to-r from-[#111111] to-[#0c0c0c]  text-white px-4 sm:px-16 pt-8 w-[100%] pb-8 ">
      <h1 className="flex text-xl font-serif font-semibold sm:text-3xl lg:text-4xl">
        <span className="pr-3">
          {" "}
          <FaCoins />
        </span>
        Financial Calculator
      </h1>
      <p className="pb-6 pt-2 px-2">
        Your one-stop destination for all your financial calculations and
        planning needs.
      </p>
      <div className="flex justify-center sm:justify-start">
        {/* if below flex creates problem "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2" also remove m-2 from card */}
        <div className="flex flex-wrap justify-center sm:justify-start">
          {calculators.map((element, index) => (
            <ToolCard
              key={index}
              name={element.name}
              description={element.description}
              to={element.to}
              img={element.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
