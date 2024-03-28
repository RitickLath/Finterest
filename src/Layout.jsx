import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function Layout() {
  return (
    <>
      <React.StrictMode>
        <Navbar />
        {/* <hr /> */}
        <Outlet />
        <hr />
        <Footer />
      </React.StrictMode>
    </>
  );
}

export default Layout;
