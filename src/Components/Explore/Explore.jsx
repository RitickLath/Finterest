import { useRef, useState } from "react";

const Explore = ({ isOpen, setIsOpen }) => {
  const inputdata = useRef();
  const [stock, setStock] = useState("");

  return (
    <div
      className={` overflow-hidden flex flex-col pt-8 lg:pt-12 items-center justify-center bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 w-[100%] pb-16 `}
    >
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
        <div className="flex flex-wrap justify-center gap-2 sm:w-[80%] lg:w-[80%]">
          <button className="px-2 py-1 border border-[white] rounded-md text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]">
            Tata Motors
          </button>
          <button className="px-3 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]">
            Infosys
          </button>
          <button className="px-2 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]">
            Hindustan Unilever
          </button>
          <button className="px-3 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]">
            Reliance
          </button>
          <button className="px-3 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]">
            Maruti Suzuki
          </button>
          <button className="px-3 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]">
            HDFC Bank
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
