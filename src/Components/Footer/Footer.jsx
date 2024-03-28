import Links from "./Links";

const Footer = () => {
  return (
    <div className="bg-black px-12 pb-12">
      <img
        className="w-[150px] py-2 mr-[25%] lg:mr-[30%]"
        src="\Images\Finterest.png"
        alt=""
      />

      <div className="flex justify-between text-white mt-6">
        <div className="hidden sm:flex md:flex">
          <div>
            <p className="mb-1">Owner: Ritick Lath © 2024</p>
            <p className="mb-1">Made with ❤️ in India.</p>
            <p className="mb-1">Data provided by API</p>
          </div>
        </div>

        <div className="flex space-x-8 md:space-x-16 lg:space-x-32 lg:mr-32 md:mr-8">
          <div>
            <h1 className="text-xl mb-3">Products</h1>
            <Links item="Premium" to="/" />
            <Links item="Financial Tools" to="/tools" />
            <Links item="News" to="/discover" />
          </div>
          <div>
            <h1 className="text-xl mb-3">Team</h1>
            <Links item="About Us" to="/" />
            <Links item="Support" to="/tools" />
          </div>
          <div>
            <h1 className="text-xl mb-3">Socials</h1>
            <Links item="Instagram" to="/" />
            <Links item="Facebook" to="/tools" />
            <Links item="Gmail" to="/discover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
