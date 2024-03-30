import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrayContext } from "../../Layout";

const Navbar = () => {
  const { setArray } = useContext(ArrayContext);

  const APICall = async () => {
    try {
      const url =
        "https://gnews.io/api/v4/search?q=stocks&lang=en&country=in&max=20&apikey=7a2023e067d4868c79baccd13cfcb3e2";
      const response = await fetch(url);
      if (!response.ok) {
        console.log("Error i getting response");
      }
      const jsondata = await response.json();
      setArray(jsondata.articles);
      //console.log(jsondata.articles);
    } catch (e) {
      console.log("Error Occured: " + e);
    }
  };

  return (
    <div>
      {/* bg-gradient-to-r from-[#111111] to-[#0c0c0c] */}
      <div className="bg-black text-white flex items-center justify-between px-12 overflow-hidden">
        {/* for all link apply hidden */}
        <img
          className="w-[85px] aspect-square py-2 mr-[25%] lg:mr-[30%]"
          src="\Images\Logo.png"
          alt=""
        />
        <Link className="px-2 sm:flex lg:flex md:flex" to="/explore">
          Explore
        </Link>
        <Link
          onClick={APICall}
          className="px-2 sm:flex lg:flex md:flex"
          to="/discover"
        >
          Discover
        </Link>

        <Link
          onClick={APICall}
          className="px-2 relative sm:flex lg:flex md:flex"
          to="/tools"
        >
          Tools
        </Link>
        <Link className="px-2  hidden sm:flex lg:flex md:flex" to="/insights">
          Insights
        </Link>
        <Link className="hidden sm:flex lg:flex md:flex" to="/signin">
          SignIn/SignUp{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// Discover -> Financial news
// Explore -> For stocks knowledge
// Tools -> For FInancial calculators
// Insights -> For fundamental analysis based stocks
