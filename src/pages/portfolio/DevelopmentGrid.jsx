import { Link } from "react-router-dom";
import { DesignData, DevelopmentData } from "./PortfolioData";

const DevelopmentGrid = () => {
  return (
    <div className="flex justify-center flex-col">
      <h2 className="text-white font-bold text-xl">Development</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {DevelopmentData.map((item, index) => (
          <Link
          to={item.to}
          key={index}
          className="text-white text-left py-[20px] flex flex-col items-center gap-2 justify-center"
          >
            <img src={item.img} alt={item.alt} />
            <h3 className="text-xl self-start text-[#fff]">{item.title}</h3>
            <p className="text-[#828282] self-start text-sm">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentGrid;
