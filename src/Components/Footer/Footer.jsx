import React from "react";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#111111] to-[#0c0c0c] text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              className="w-[150px] py-2"
              src="\Images\Finterest.png"
              alt="Finterest Logo"
            />
            <p className="mt-4">Owner: Ritick Lath © 2024</p>
            <p>Made with ❤️ in India.</p>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <Links item="Premium" to="/" />
            <Links item="Financial Tools" to="/tools" />
            <Links item="News" to="/discover" />
          </div>

          {/* Team */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Team</h2>
            <Links item="About Us" to="/" />
            <Links item="Support" to="/tools" />
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Socials</h2>
            <Links item="Instagram" to="/" />
            <Links item="Facebook" to="/tools" />
            <Links item="Gmail" to="/discover" />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-sm text-center">
          <p>
            Disclaimer: The information provided on this website is for general
            informational purposes only and should not be considered as
            financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
