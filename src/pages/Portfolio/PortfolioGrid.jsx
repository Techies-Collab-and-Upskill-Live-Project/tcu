import { Link } from "react-router-dom";
import { DesignData, DevelopmentData } from "./PortfolioData";

const PortfolioGrid = () => {
  return (
    <div className="">
      <h2 className="font-bold px-4 text-xl text-[#fff]">Design</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DesignData.map((item, index) => (
          <Link
          to={item.to}
            key={index}
            className="w-[348px] p-1 text-white text-left lg:p-3 flex flex-col items-center gap-2 justify-center"
          >
            <img className="w-full object-cover" src={item.img} alt="" />
            <h3 className="text-xl self-start text-[#fff]">{item.title}</h3>
            <p className="text-[#828282] self-start text-sm">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
