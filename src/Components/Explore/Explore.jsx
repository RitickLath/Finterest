import { useRef, useState } from "react";

const Explore = () => {
  const inputdata = useRef();
  const [stock, setStock] = useState("hcl");

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white px-20 w-[100%] h-[86vh] ">
      <img
        className="w-[100%] sm:w-[90%] md:w-[70%] lg:w-[40%]"
        src="\Images\Finterest.png"
        alt=""
      />
      <h1 className="text-lg text-center mb-8">
        Stock analysis and screening tool for investors in India.{" "}
      </h1>
      <form
        onSubmit={(e) => {
          setStock(inputdata.current.value.toLowerCase());
          e.preventDefault();
        }}
        className="w-[100%] text-center"
        action=""
      >
        <input
          ref={inputdata}
          className="bg-[#0e1116] outline-none w-[100%] sm:w-[90%] md:w-[70%] lg:w-[50%] mb-6 px-4 py-3 rounded-sm"
          type="text"
          placeholder="Search for a company"
          name=""
          id=""
        />
        <button type="submit" className="hidden"></button>
      </form>

      <div>
        <div className="grid grid-cols-4 gap-2">
          <button className="px-2 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:border-[#0e1116]">
            Tata Motors
          </button>
          <button className="px-3 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:border-[#0e1116]">
            Infosys
          </button>
          <button className="px-2 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:border-[#0e1116]">
            Hindustan Unilever
          </button>
          <button className="px-3 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:border-[#0e1116]">
            Reliance
          </button>
          <button className="px-3 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:border-[#0e1116]">
            Maruti Suzuki
          </button>
          <button className="px-3 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:border-[#0e1116]">
            HDFC Bank
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
