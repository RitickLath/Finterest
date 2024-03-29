import { useState } from "react";
import InputBox from "../InputBox";

const Si = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  // Solution values
  const [interest, setInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateSimpleInterest = () => {
    // Calculate simple interest
    const simpleInterest =
      (parseFloat(principal) * parseFloat(rate) * parseFloat(time)) / 100;

    // Calculate total amount
    const amount = parseFloat(principal) + simpleInterest;

    // Set the state variables with calculated values
    setInterest(Math.ceil(simpleInterest));
    setTotalAmount(Math.ceil(amount));
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 sm:px-16 pt-8 pb-16">
      <h1 className="font-semibold text-3xl text-white mb-4">
        Simple Interest Calculator
      </h1>
      <div className="grid gap-6">
        <InputBox
          labelText="Principal Amount"
          value={principal}
          setValue={setPrincipal}
          placeholder="$"
          type="number"
        />
        <InputBox
          labelText="Interest Rate (per annum)"
          value={rate}
          setValue={setRate}
          placeholder="%"
          type="number"
        />
        <InputBox
          labelText="Time Period (in years)"
          value={time}
          setValue={setTime}
          placeholder="Yr"
          type="number"
        />
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={calculateSimpleInterest}
        >
          Calculate
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-lg text-white mb-2">
          Principal Amount: $ {principal}
        </h2>
        <h2 className="text-lg text-white mb-2">Interest: $ {interest}</h2>
        <h2 className="text-lg text-white">Total Amount: $ {totalAmount}</h2>
      </div>
    </div>
  );
};

export default Si;
