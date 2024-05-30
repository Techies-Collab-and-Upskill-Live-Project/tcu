import PortfolioGrid from "./PortfolioGrid";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="text-[#13BA00] lg:hidden">
        <h1 className="text-center text-sm text-[#DBDBDB]">Our Work</h1>
        <h3 className="text-center font-bold text-xl text-[#fff]">Our Portfolio</h3>
      </header>

      <PortfolioGrid />
    </div>
  );
};

export default Portfolio;
