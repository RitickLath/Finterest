import { useState } from "react";
import InputBox from "../InputBox";

const Gratuity = () => {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [yearsOfService, setYearsOfService] = useState("");
  const [gratuityAmount, setGratuityAmount] = useState("");

  const calculateGratuity = () => {
    const salary = parseFloat(monthlySalary);
    const years = parseInt(yearsOfService);

    // Calculate gratuity using the formula
    const gratuity = salary * (15 / 26) * years;

    // Update state with calculated gratuity amount
    setGratuityAmount(gratuity.toFixed(2)); // Round to two decimal places
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 sm:px-16 pt-8 pb-16">
      <h1 className="font-semibold text-3xl text-white mb-4">
        Gratuity Calculator
      </h1>
      <div className="grid gap-6">
        <InputBox
          labelText="Monthly Salary (DA + Basic)"
          value={monthlySalary}
          setValue={setMonthlySalary}
          placeholder="$"
          type="number"
        />
        <InputBox
          labelText="Years of Service"
          value={yearsOfService}
          setValue={setYearsOfService}
          placeholder="Years"
          type="number"
        />
      </div>
      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={calculateGratuity}
        >
          Calculate
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-lg text-white">
          Gratuity Amount: ${Math.ceil(gratuityAmount)}
        </h2>
      </div>
    </div>
  );
};

export default Gratuity;
