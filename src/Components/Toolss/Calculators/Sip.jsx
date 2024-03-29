import { useState } from "react";
import InputBox from "../InputBox";

const Sip = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [time, setTime] = useState("");
  // Solution value
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estReturn, setEstReturn] = useState(0);

  const calculateSip = () => {
    // Convert annual expected return rate to monthly rate
    const monthlyRate = parseFloat(expectedReturn) / 12 / 100;

    // Total number of periods (months)
    const totalPeriods = parseInt(time) * 12;

    // Perform SIP calculation
    const futureValue =
      parseFloat(monthlyInvestment) *
      ((Math.pow(1 + monthlyRate, totalPeriods) - 1) / monthlyRate) *
      (1 + monthlyRate);

    // Set the state variables with calculated values
    setInvestedAmount(Math.ceil(parseFloat(monthlyInvestment) * totalPeriods));
    setEstReturn(
      Math.ceil(futureValue - parseFloat(monthlyInvestment) * totalPeriods)
    );
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 sm:px-16 pt-8 pb-16">
      <h1 className="font-semibold text-3xl text-white mb-4">SIP Calculator</h1>
      <div className="grid gap-6">
        <InputBox
          labelText="Monthly Investment"
          value={monthlyInvestment}
          setValue={setMonthlyInvestment}
          placeholder="$"
          type="number"
        />
        <InputBox
          labelText="Expected Return Rate (p.a)"
          value={expectedReturn}
          setValue={setExpectedReturn}
          placeholder="%"
          type="number"
        />
        <InputBox
          labelText="Time Period"
          value={time}
          setValue={setTime}
          placeholder="Yr"
          type="number"
        />
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={calculateSip}
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

export default Sip;
