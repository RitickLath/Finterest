import { Link } from "react-router-dom";

// remove overflow as hidden

const Navbar = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white flex items-center justify-between px-12">
        <img
          className="w-[80px] py-2 mr-[25%] lg:mr-[30%]"
          src="\Images\Logo.png"
          alt=""
        />

        <Link className="px-2 hidden lg:flex md:flex" to="/explore">
          Explore
        </Link>
        <Link className="px-2 hidden lg:flex md:flex" to="/discover">
          Discover
        </Link>
        <Link className="px-2 hidden lg:flex md:flex" to="/tools">
          Tools
        </Link>
        <Link className="px-2 hidden lg:flex md:flex" to="/insights">
          Insights
        </Link>
        <Link className=" hidden lg:flex md:flex" to="/signin">
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
