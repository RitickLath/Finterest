import { Link } from "react-router-dom";

const ToolCard = ({ name, description, to, img }) => {
  return (
    <Link to={to}>
      <div className="z-100 relative w-[270px] h-[200px] sm:w-[240px] sm:h-[220px]  bg-[#2D2E2E] hover:bg-opacity-30 hover:border-[0.1px] bg-opacity-20 p-6 rounded-md m-2">
        <h1 className="text-xl font-serif font-semibold">{name}</h1>
        <p className="text-sm pt-2">{description}</p>
        <img className="absolute w-[150px] sm:w-[200px] -bottom-8 -right-6 sm:-bottom-12 sm:-right-8 z-0" src={img} alt="" />
      </div>
    </Link>
  );
};

export default ToolCard;
