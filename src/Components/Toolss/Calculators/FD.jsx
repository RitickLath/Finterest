import React, { useState } from "react";
import InputBox from "../InputBox";

const FD = () => {
  const [totalInvestment, setTotalInvestment] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [time, setTime] = useState("");
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estReturn, setEstReturn] = useState(0);

  const calculateFD = () => {
    const principalAmount = parseFloat(totalInvestment);
    const rate = parseFloat(rateOfInterest); // Annual interest rate
    const years = parseInt(time);

    // Calculate future value using FD formula
    const futureValue = principalAmount * Math.pow(1 + rate / 100, years);

    // Set the state variables with calculated values
    setInvestedAmount(principalAmount);
    setEstReturn(Math.ceil(futureValue - principalAmount));
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 sm:px-16 pt-8 pb-16">
      <h1 className="font-semibold text-3xl text-white mb-4">
        Fixed Deposit (FD) Calculator
      </h1>
      <div className="grid gap-6">
        <InputBox
          labelText="Total Investment"
          value={totalInvestment}
          setValue={setTotalInvestment}
          placeholder="$"
          type="number"
        />
        <InputBox
          labelText="Rate of Interest (p.a)"
          value={rateOfInterest}
          setValue={setRateOfInterest}
          placeholder="%"
          type="number"
        />
        <InputBox
          labelText="Time Period (Years)"
          value={time}
          setValue={setTime}
          placeholder="Years"
          type="number"
        />
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={calculateFD}
        >
          Calculate
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-lg text-white mb-2">
          Invested Amount: $ {investedAmount}
        </h2>
        <h2 className="text-lg text-white">Estimated Return: $ {estReturn}</h2>
        <h2 className="text-lg mt-3 text-white mb-2">
          Total Value: $ {investedAmount + estReturn}
        </h2>
      </div>
    </div>
  );
};

export default FD;
