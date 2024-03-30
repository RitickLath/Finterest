import { useState } from "react";
import InputBox from "../InputBox";
import RightSide from "./RightSide";

const Inflation = () => {
  const [currentCost, setCurrentCost] = useState("");
  const [inflationRate, setInflationRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [futureValue, setFutureValue] = useState("");

  const calculateFutureValue = () => {
    const current = parseFloat(currentCost);
    const rate = parseFloat(inflationRate) / 100; // Convert percentage to decimal
    const years = parseInt(timePeriod);

    // Calculate future value using compound interest formula
    const future = current * Math.pow(1 + rate, years);

    // Update state with calculated future value
    setFutureValue(Math.ceil(future)); // Round to two decimal places
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 sm:px-16 pt-8 pb-16">
      <div className="flex">
        {/* Left Side */}
        <div className="w-full lg:w-[50%]">
          <h1 className="font-semibold text-3xl text-white mb-4">
            Inflation Calculator
          </h1>
          <div className="grid gap-6">
            <InputBox
              labelText="Current Cost"
              value={currentCost}
              setValue={setCurrentCost}
              placeholder="$"
              type="number"
            />
            <InputBox
              labelText="Rate of Inflation (%)"
              value={inflationRate}
              setValue={setInflationRate}
              placeholder="%"
              type="number"
            />
            <InputBox
              labelText="Time Period (years)"
              value={timePeriod}
              setValue={setTimePeriod}
              placeholder="Years"
              type="number"
            />
          </div>
          <div className="mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={calculateFutureValue}
            >
              Calculate
            </button>
          </div>
          <div className="mt-8">
            <h2 className="text-lg text-white">Current Cost: ${currentCost}</h2>
            <h2 className="text-lg text-white">
              Cost Increase: ${futureValue - currentCost}
            </h2>
            <h2 className="text-lg text-white">
              Future Value Adjusted for Inflation: ${futureValue}
            </h2>
          </div>
        </div>
        {/* Right Side */}
        <RightSide />
      </div>
    </div>
  );
};

export default Inflation;
