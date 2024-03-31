import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { dummyData } from "./Constants/dummyNews";
export const ArrayContext = createContext();

function Layout() {
  const [array, setArray] = useState(dummyData);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <React.StrictMode>
        <ArrayContext.Provider value={{ array, setArray }}>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen ? (
            <div>
              <Outlet isOpen={isOpen} setIsOpen={setIsOpen} />
              <hr className="border-gray-800 shadow-md" />
              <Footer />
            </div>
          ) : (
            <h1>hey</h1>
          )}
        </ArrayContext.Provider>
      </React.StrictMode>
    </>
  );
}

export default Layout;
