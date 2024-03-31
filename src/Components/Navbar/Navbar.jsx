import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ArrayContext } from "../../Layout";

const Navbar = ({ isOpen, setIsOpen }) => {
  const { setArray } = useContext(ArrayContext);
  // const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-black text-white flex items-center justify-between px-12 overflow-hidden">
        <img
          className="w-[85px] aspect-square py-2 mr-[25%] lg:mr-[30%]"
          src="\Images\Logo.png"
          alt=""
        />
        {/* For mobile view */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
          {!isOpen ? (
            <div className="absolute left-0 top-0 z-10 w-full h-screen bg-[#242424] px-12 py-8">
              <div className="flex w-full justify-end">
                <button
                  onClick={toggleMenu}
                  className=" text-gray-500 hover:text-white focus:text-white focus:outline-none"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M6.707 6.707a1 1 0 011.414 0L12 10.586l4.879-4.879a1 1 0 111.414 1.414L13.414 12l4.879 4.879a1 1 0 01-1.414 1.414L12 13.414l-4.879 4.879a1 1 0 01-1.414-1.414L10.586 12 5.707 7.121a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col w-full h-[80%] pt-16 text-xl font-semibold justify-between items-center">
                <Link
                  onClick={toggleMenu}
                  className="px-2 sm:flex lg:flex md:flex"
                  to="/explore"
                >
                  Explore
                </Link>
                <Link
                  onClick={() => {
                    APICall();
                    toggleMenu();
                  }}
                  className="px-2 sm:flex lg:flex md:flex"
                  to="/discover"
                >
                  Discover
                </Link>
                <Link
                  onClick={() => {
                    APICall();
                    toggleMenu();
                  }}
                  className="px-2 relative sm:flex lg:flex md:flex"
                  to="/tools"
                >
                  Tools
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="px-2 sm:flex lg:flex md:flex"
                  to="/insights"
                >
                  Insights
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="sm:flex lg:flex md:flex"
                  to="/signin"
                >
                  SignIn/SignUp{" "}
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* more than small */}
        <div className={`sm:flex items-center hidden`}>
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
          <Link className="px-2 hidden sm:flex lg:flex md:flex" to="/insights">
            Insights
          </Link>
          <Link className="hidden sm:flex lg:flex md:flex" to="/signin">
            SignIn/SignUp{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
