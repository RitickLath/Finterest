import { useState } from "react";
import InputBox from "../InputBox";

const Ci = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("quarterly");
  // Solution values
  const [interest, setInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateCompoundInterest = () => {
    // Convert annual rate to the corresponding compounding frequency
    const effectiveRate =
      parseFloat(rate) /
      (compoundingFrequency === "quarterly"
        ? 4
        : compoundingFrequency === "semi-annually"
        ? 2
        : 1);

    // Convert time period to the corresponding number of compounding periods
    const totalPeriods =
      parseInt(time) *
      (compoundingFrequency === "quarterly"
        ? 4
        : compoundingFrequency === "semi-annually"
        ? 2
        : 1);

    // Calculate compound interest
    const compoundInterest =
      parseFloat(principal) * Math.pow(1 + effectiveRate / 100, totalPeriods) -
      parseFloat(principal);

    // Calculate total amount
    const amount = parseFloat(principal) + compoundInterest;

    // Set the state variables with calculated values
    setInterest(Math.ceil(compoundInterest));
    setTotalAmount(Math.ceil(amount));
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 sm:px-16 pt-8 pb-16">
      <h1 className="font-semibold text-3xl text-white mb-4">
        Compound Interest Calculator
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
        <div className="flex flex-col">
          <label className="text-xl" htmlFor="compoundingFrequency">
            Compounding Frequency
          </label>
          <select
            className="mt-3 outline-none w-[250px] px-3 py-2 rounded-md bg-[#2D2E2E]  text-white"
            id="compoundingFrequency"
            value={compoundingFrequency}
            onChange={(e) => setCompoundingFrequency(e.target.value)}
          >
            <option value="quarterly">Quarterly</option>
            <option value="semi-annually">Semi-Annually</option>
            <option value="annually">Annually</option>
          </select>
        </div>
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={calculateCompoundInterest}
        >
          Calculate
        </button>
      </div>
      <div className="mt-8 mb-12">
        <h2 className="text-lg text-white mb-2">
          Principal Amount: $ {principal}
        </h2>
        <h2 className="text-lg text-white mb-2">Interest: $ {interest}</h2>
        <h2 className="text-lg text-white">Total Amount: $ {totalAmount}</h2>
      </div>
    </div>
  );
};

export default Ci;
