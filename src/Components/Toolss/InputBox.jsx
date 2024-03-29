import React from "react";

const InputBox = ({ labelText, value, setValue, placeholder, type }) => {
  return (
    <div className="flex flex-col gap-2 text-white">
      <label className="text-lg" htmlFor="">
        {labelText}
      </label>
      <input
        className="w-full max-w-[350px] bg-gray-800 text-white py-2 px-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
