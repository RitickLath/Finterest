import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black text-white">
      <img className="w-[80px] ml-12 py-2" src="\Images\Logo.png" alt="" />
      <Link to="/explore">Explore</Link>
      <Link to="/discover">Discover</Link>
      <Link to="/tools">Tools</Link>
      <Link to="/insights">Insights</Link>
    </div>
  );
};

export default Navbar;

// Explore -> Financial news
// Discover -> For stocks knowledge
// Tools -> For FInancial calculators
// Insights -> For fundamental analysis based stocks
