import { Link } from "react-router-dom";

// remove overflow as

const Navbar = () => {
  return (
    <div>
      {/* bg-gradient-to-r from-[#111111] to-[#0c0c0c] */}
      <div className="bg-black text-white flex items-center justify-between px-12 overflow-hidden">
        <img
          className="w-[85px] py-2 mr-[25%] lg:mr-[30%]"
          src="public\Images\logo.png"
          alt=""
        />
        {/* for all link apply hidden */}
        <Link className="px-2 hidden sm:flex lg:flex md:flex" to="/explore">
          Explore
        </Link>
        <Link className="px-2  hidden sm:flex lg:flex md:flex" to="/discover">
          Discover
        </Link>
        <Link className="px-2  hidden sm:flex lg:flex md:flex" to="/tools">
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
