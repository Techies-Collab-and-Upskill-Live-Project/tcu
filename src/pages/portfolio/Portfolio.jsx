import DevelopmentGrid from "./DevelopmentGrid";
import PortfolioGrid from "./PortfolioGrid";

const Portfolio = () => {
  return (
    <div>
      <div className="lg:px-[104px] px-[21px]">
        <div className="flex flex-col justify-center items-center">
          <header>hi</header>
        </div>

        <PortfolioGrid />
        <DevelopmentGrid />
      </div>
    </div>
  );
};

export default Portfolio;
