import { Link } from "react-router-dom";
import { DesignData } from "./PortfolioData";

const PortfolioGrid = () => {
  return (
    <div className="flex justify-center flex-col mb-32">
      <h2 className="text-white font-bold text-xl">Design</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {DesignData.map((item, index) => (
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

{/* /api/v1/contactus/ */}
      </div>
    </div>
  );
};

export default PortfolioGrid;
