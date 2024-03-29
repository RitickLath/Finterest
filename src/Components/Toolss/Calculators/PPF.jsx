import React, { useState } from "react";
import InputBox from "../InputBox";

const PPF = () => {
  const [yearlyInvestment, setYearlyInvestment] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const fixedInterestRate = 7.1; // Fixed interest rate for PPF
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estReturn, setEstReturn] = useState(0);

  const calculatePPF = () => {
    const yearlyAmount = parseFloat(yearlyInvestment);
    const years = parseInt(timePeriod);
    const rate = fixedInterestRate / 100; // Convert percentage to decimal

    // Calculate future value using PPF formula
    const futureValue =
      yearlyAmount * (((Math.pow(1 + rate, years) - 1) / rate) * (1 + rate));

    // Set the state variables with calculated values
    setInvestedAmount(Math.ceil(yearlyAmount * years));
    setEstReturn(Math.ceil(futureValue - yearlyAmount * years));
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 sm:px-16 pt-8 pb-16">
      <h1 className="font-semibold text-3xl text-white mb-4">PPF Calculator</h1>
      <div className="grid gap-6">
        <InputBox
          labelText="Yearly Investment"
          value={yearlyInvestment}
          setValue={setYearlyInvestment}
          placeholder="$"
          type="number"
        />
        <InputBox
          labelText="Time Period (Years)"
          value={timePeriod}
          setValue={setTimePeriod}
          placeholder="Years"
          type="number"
        />
        <div className="mt-12 flex flex-col gap-2 text-white">
          <label className="text-xl" htmlFor="">
            Rate of Interest (p.a)
          </label>
          <div className="flex items-center">
            <span className="text-lg mr-2">{fixedInterestRate}%</span>
            <span className="text-sm text-gray-400">(Fixed)</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={calculatePPF}
        >
          Calculate
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-lg text-white mb-2">
          Invested Amount: $ {investedAmount}
        </h2>
        <h2 className="text-lg text-white mb-2">
          Estimated Return: $ {estReturn}
        </h2>
        <h2 className="text-lg text-white">
          Total Value: $ {investedAmount + estReturn}
        </h2>
      </div>
    </div>
  );
};

export default PPF;
