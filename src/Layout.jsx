import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <React.StrictMode>
        <Navbar />
        <Outlet />
      </React.StrictMode>
    </>
  );
}

export default Layout;
