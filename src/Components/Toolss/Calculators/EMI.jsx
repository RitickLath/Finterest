import { useState } from "react";
import InputBox from "../InputBox";

const EMI = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [monthlyEMI, setMonthlyEMI] = useState("");
  const [totalInterest, setTotalInterest] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / (12 * 100); // Monthly interest rate
    const n = parseInt(loanTenure) * 12; // Loan tenure in months

    // Calculate EMI
    const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // Calculate total interest and total amount
    const totalInterest = EMI * n - P;
    const totalAmount = P + totalInterest;

    // Update state with calculated values
    setMonthlyEMI(EMI.toFixed(2)); // Round to two decimal places
    setTotalInterest(totalInterest.toFixed(2)); // Round to two decimal places
    setTotalAmount(totalAmount.toFixed(2)); // Round to two decimal places
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 sm:px-16 pt-8 pb-16">
      <h1 className="font-semibold text-3xl text-white mb-4">EMI Calculator</h1>
      <div className="grid gap-6">
        <InputBox
          labelText="Loan Amount"
          value={loanAmount}
          setValue={setLoanAmount}
          placeholder="$"
          type="number"
        />
        <InputBox
          labelText="Interest Rate (%)"
          value={interestRate}
          setValue={setInterestRate}
          placeholder="%"
          type="number"
        />
        <InputBox
          labelText="Loan Tenure (Years)"
          value={loanTenure}
          setValue={setLoanTenure}
          placeholder="Years"
          type="number"
        />
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={calculateEMI}
        >
          Calculate
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-lg text-white">
          Monthly EMI: ${Math.ceil(monthlyEMI)}
        </h2>
        <h2 className="text-lg text-white">
          Total Interest: ${Math.ceil(totalInterest)}
        </h2>
        <h2 className="text-lg text-white">
          Total Amount: ${Math.ceil(totalAmount)}
        </h2>
      </div>
    </div>
  );
};

export default EMI;
