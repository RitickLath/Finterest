import { useState } from "react";
import InputBox from "../InputBox";

const Mf = () => {
  const [totalInvestment, setTotalInvestment] = useState();
  const [expectedReturnRate, setExpectedReturnRate] = useState();
  const [time, setTime] = useState();
  // Solution values
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estReturn, setEstReturn] = useState(0);

  const calculateMutualFund = () => {
    // Convert annual expected return rate to monthly rate
    const monthlyRate = parseFloat(expectedReturnRate) / 12 / 100;

    // Total number of periods (months)
    const totalPeriods = parseInt(time) * 12;

    // Perform Mutual Fund calculation
    const futureValue =
      parseFloat(totalInvestment) * Math.pow(1 + monthlyRate, totalPeriods);

    // Set the state variables with calculated values
    setInvestedAmount(parseFloat(totalInvestment));
    setEstReturn(futureValue - parseFloat(totalInvestment));
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 sm:px-16 pt-8 pb-16">
      <h1 className="font-semibold text-3xl text-white mb-4">
        Mutual Fund Calculator
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
          labelText="Expected Return Rate (p.a)"
          value={expectedReturnRate}
          setValue={setExpectedReturnRate}
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
          onClick={calculateMutualFund}
        >
          Calculate
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-lg text-white mb-2">
          Invested Amount: $ {investedAmount}
        </h2>
        <h2 className="text-lg text-white">Estimated Return: $ {estReturn}</h2>
      </div>
    </div>
  );
};

export default Mf;
