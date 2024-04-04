import React, { useContext, useEffect } from "react";
import ToolCard from "./ToolCard";
import { calculators } from "../../Constants/Calculator";
import { FaCoins } from "react-icons/fa6";
import { ArrayContext } from "../../Layout";

const Tools = () => {
  const { setArray } = useContext(ArrayContext);

  useEffect(() => {
    const APICall = async () => {
      try {
        const url =
          "https://gnews.io/api/v4/search?q=stocks&lang=en&country=in&max=20&apikey=7a2023e067d4868c79baccd13cfcb3e2";
        const response = await fetch(url);
        if (!response.ok) {
          console.log("Error i getting response");
        }
        const jsondata = await response.json();
        setArray(jsondata.articles);
        //console.log(jsondata.articles);
      } catch (e) {
        console.log("Error Occured: " + e);
      }
    };
    APICall();
  }, []);

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

export default Tools;
