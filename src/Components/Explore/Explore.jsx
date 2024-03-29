import { useRef, useState } from "react";

const Explore = () => {
  const inputdata = useRef();
  const [stock, setStock] = useState("");

  return (
    <div className="overflow-hidden flex flex-col pt-8 lg:pt-12 items-center justify-center bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 w-[100%] pb-16 ">
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
          className="bg-[#242424] outline-none w-[100%] sm:w-[90%] md:w-[70%] lg:w-[50%] mb-6 px-4 py-3 rounded-md"
          type="text"
          placeholder="Search for a company"
          name=""
          id=""
        />
        <button type="submit" className="hidden"></button>
      </form>

      <div>
        <div className="grid grid-cols-4 gap-2">
          <button className="px-2 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[#0e1116]">
            Tata Motors
          </button>
          <button className="px-3 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[#0e1116]">
            Infosys
          </button>
          <button className="px-2 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[#0e1116]">
            Hindustan Unilever
          </button>
          <button className="px-3 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[#0e1116]">
            Reliance
          </button>
          <button className="px-3 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[#0e1116]">
            Maruti Suzuki
          </button>
          <button className="px-3 py-1 border border-[#0e1116] rounded-md text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[#0e1116]">
            HDFC Bank
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
