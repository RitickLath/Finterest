import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Explore = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const inputdata = useRef();
  const [stock, setStock] = useState("");
  const [suggestions, setSuggestion] = useState([]);

  const fetchSuggestions = async () => {
    if (inputdata.current.value.length >= 2) {
      const url = "https://yahoo-finance127.p.rapidapi.com/search/";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "68c1c0cec8msh45e46eecc42f001p1ff14fjsn4837e422b73e",
          "X-RapidAPI-Host": "yahoo-finance127.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url + inputdata.current.value, options);
        const data = await response.json();
        setSuggestion(data.quotes);
      } catch (e) {
        console.log("Error Occured in API Call " + e);
      }
    }
  };

  return (
    <div
      className={`overflow-hidden flex flex-col pt-8 lg:pt-12 items-center justify-center bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 w-[100%] pb-16 `}
    >
      <img
        className="w-[100%] sm:w-[90%] md:w-[70%] lg:w-[40%]"
        src="\Images\Finterest.png"
        alt=""
      />
      <h1 className="text-lg text-center mb-8">
        Stock analysis and screening tool for investors in India.{" "}
      </h1>

      {/* Input for stocks data */}
      <p className="text-xs mb-1 text-right ml-24 lg:ml-48">
        **As a non-premium customer, you have a limit of two searches for any
        stock.
      </p>
      <form
        onSubmit={(e) => {
          setStock(inputdata.current.value.toLowerCase());
          navigate(`${inputdata.current.value.toLowerCase()}`);
          e.preventDefault();
        }}
        className="w-[100%] text-center"
        action=""
      >
        <input
          list="browsers"
          onChange={fetchSuggestions}
          ref={inputdata}
          className="bg-[#242424] outline-none w-[100%] sm:w-[90%] md:w-[70%] lg:w-[50%] mb-6 px-4 py-3 rounded-md"
          type="text"
          placeholder="Search for a company"
          name=""
          id=""
        />

        <datalist id="browsers">
          {suggestions &&
            suggestions.map((element) => (
              <option
                key={element.shortname}
                value={element.shortname.toLowerCase()}
              />
            ))}
        </datalist>
        <button type="submit" className="hidden"></button>
      </form>

      {/*  */}

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
