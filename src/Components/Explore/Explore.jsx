import { Input } from "postcss";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

const Explore = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const inputdata = useRef();
  const [stock, setStock] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const ImageRef = useRef(null);
  const [inputData, setInputData] = useState("");

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
        const response = await fetch(url + inputData, options);
        const data = await response.json();
        setSuggestion(data.quotes);
        console.log("API call of suggetsion is made");
      } catch (e) {
        console.log("Error Occured in API Call " + e);
      }
    }
  };

  const HandleNavigate = (e) => {
    e.preventDefault();
    const inputValue = inputdata.current.value.toLowerCase();
    if (suggestions && suggestions.length > 0) {
      const matchedElement = suggestions.find(
        (element) => element.shortname.toLowerCase() === inputValue
      );
      if (matchedElement) {
        navigate(`${matchedElement.symbol}`);
      }
    } else {
      // Navigate with the input value if no match is found
      alert("No Such Stock Exists of API Limit is crossed");
    }
  };

  useEffect(() => {
    inputdata.current.focus();
  }, []);

  useEffect(() => {
    // Calculate the starting position based on the screen width
    gsap.from(".img", {
      x: -1000, // Start position: move from the middle of the screen
      duration: 1,
      delay: 1,
      scale: -1,
    });

    gsap.to(".img", {
      x: 0, // Start position: move from the middle of the screen
      duration: 1,
      delay: 1,
      scale: 1,
    });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchSuggestions();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [inputData]);

  return (
    <div
      className={`overflow-hidden flex flex-col pt-8 lg:pt-12 items-center justify-center bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white px-4 w-[100%] pb-16 `}
    >
      <img
        ref={ImageRef}
        className="img w-[100%] sm:w-[90%] md:w-[70%] lg:w-[40%]"
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
        onSubmit={HandleNavigate}
        className="w-[100%] text-center"
        action=""
      >
        <input
          list="browsers"
          onChange={(e) => setInputData(e.target.value)}
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
              <option key={element.shortname} value={element.shortname} />
            ))}
        </datalist>
        <button type="submit" className="hidden"></button>
      </form>

      {/*  */}

      <div>
        <div className="flex flex-wrap justify-center gap-2 sm:w-[80%] lg:w-[80%]">
          <Link
            to="/explore/TTM"
            className="px-2 py-1 border border-[white] rounded-md text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]"
          >
            Tata Motors
          </Link>
          <Link
            to="/explore/INFY"
            className="px-3 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]"
          >
            Infosys
          </Link>
          <Link
            to="/explore/HINDUNILVR"
            className="px-2 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]"
          >
            Hindustan Unilever
          </Link>
          <Link
            to="/explore/RELIANCE"
            className="px-3 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]"
          >
            Reliance
          </Link>
          <Link
            to="/explore/MARUTI"
            className="px-3 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]"
          >
            Maruti Suzuki
          </Link>
          <Link
            to="/explore/HDFCBANK"
            className="px-3 py-1 border border-[white] rounded-md border-1 text-gray-300 text-sm hover:bg-[#242424] hover:text-white focus:outline-none focus:border-[white]"
          >
            HDFC Bank
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
