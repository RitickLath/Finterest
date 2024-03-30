import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

export const ArrayContext = createContext();

function Layout() {
  const [array, setArray] = useState([]);

  return (
    <>
      <React.StrictMode>
        <ArrayContext.Provider value={{ array, setArray }}>
          <Navbar />
          <Outlet />
          <hr />
          <Footer />
        </ArrayContext.Provider>
      </React.StrictMode>
    </>
  );
}

export default Layout;
