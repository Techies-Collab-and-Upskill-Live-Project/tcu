import { PiArrowCircleDownLight, PiArrowCircleUpLight } from "react-icons/pi";
import { useState } from "react";
import { images } from "./NewPortfolioData";
import { Link } from "react-router-dom";

const NewPortfolio = () => {
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const [openDesign, setOpenDesign] = useState(false);

  const ToggleDesign = (e) => {
    setOpenDesign((prev) => !prev);
  };

  const TogglePortfolio = (e) => {
    setOpenPortfolio((prev) => !prev);
  };

  return (
    <div className="max-lg:w-full bg-black px-[20px] mb-[130px] lg:px-[100px] flex flex-col mt-[51.67px] lg:mt-[50px]">
      <div className="flex flex-col">
        <p className="text-[#DBDBDB] text-[14px] lg:text-[24px] leading-[18.9px] lg:leading-[32.4px] font-[500] text-center">
          Our Work
        </p>
        <h3 className="text-[20px] lg:text-[40px] leading-[27px] lg:leading-[54px] text-center font-[700] text-white">
          Our Portfolio
        </h3>
      </div>

      <div className="max-lg:w-full flex flex-col justify-center gap-y-[32px] mt-[12px] lg:mt-[60px]  ">
        {/* UI/UX Design */}
        <div className="max-lg:w-full relative  flex flex-col lg:justify-between border-b border-b-[#ACACAC] pb-[25px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-[18px]">
              <span className="text-[20px] lg:text-[25px] font-[500] leading-[27px] lg:leading-[33.75px] text-[#4E4E4E]">
                01
              </span>
              <div className="flex flex-col gap-4">
                <p className="text-[20px] lg:text-[32px] font-[700] leading-[27px] lg:leading-[43.2px] text-white">
                  UI/UX Design
                </p>

                <p className="font-[500] text-[14px] lg:text-[20px] leading-[22.4px] lg:leading-[32px] text-[#D9D9D9]">
                  A gallery of all our UI/UX Design projects from the first
                  upskill program.
                </p>
              </div>
            </div>

            {openDesign ? (
              <PiArrowCircleUpLight
                onClick={ToggleDesign}
                size={32}
                className="text-white flex-shrink-0 self-start text-[32px] lg:text-[64px]"
              />
            ) : (
              <PiArrowCircleDownLight
                onClick={ToggleDesign}
                size={32}
                className="text-white flex-shrink-0 self-start text-[32px] lg:text-[64px]"
              />
            )}
          </div>

          {/* Portfolio images */}
          <div className={openDesign ? "block" : "hidden"}>
            <div className="max-lg:w-full overflow-hidden flex max-lg:justify-between gap-x-[15px] max-lg:mt-[22px] mt-[30px] ">
              {images.map((item, index) => (
                <Link
                  key={index}
                  className="w-[250px] flex-shrink-0 block lg:w-[300px] h-[142px]"
                  to={item.path}
                >
                  <img
                    src={item.img}
                    className="w-full h-full rounded-[8px]"
                    alt="Digital productivity tool"
                  />
                </Link>
              ))}
            </div>

            {/* <button className="md:left-[90%] lg:left-[100%] w-[80px] py-1 rounded-lg absolute left-[75%] bottom-[30%] bordeer-none outline-none bg-white">
              View all
            </button> */}

            {/* <Button  className="md:left-[50%] lg:left-[60%] text-black absolute left-[60%] bottom-[30%] bordeer-none outline-none bg-white" >
                View all
            </Button> */}
          </div>
        </div>

        {/* Development */}
        <div className="max-lg:w-full relative  flex flex-col lg:justify-between border-b border-b-[#ACACAC] pb-[25px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-[18px]">
              <span className="text-[20px] lg:text-[25px] font-[500] leading-[27px] lg:leading-[33.75px] text-[#4E4E4E]">
                02
              </span>
              <div className="flex flex-col gap-4">
                <p className="text-[20px] lg:text-[32px] font-[700] leading-[27px] lg:leading-[43.2px] text-white">
                  Development
                </p>
              </div>
            </div>

            {openPortfolio ? (
              <PiArrowCircleUpLight
                onClick={TogglePortfolio}
                className="text-white self-start text-[32px] lg:text-[64px]"
              />
            ) : (
              <PiArrowCircleDownLight
                onClick={TogglePortfolio}
                className="text-white self-start text-[32px] lg:text-[64px]"
              />
            )}
          </div>

          {/* Portfolio images */}
          <div className={openPortfolio ? "block" : "hidden"}>
            <div className="max-lg:w-full overflow-hidden flex max-lg:justify-between gap-x-[15px] max-lg:mt-[22px] mt-[30px] ">
              {images.map((item, index) => (
                <Link
                  key={index}
                  className="w-[250px] flex-shrink-0 block lg:w-[300px] h-[142px]"
                  to={item.path}
                >
                  <img
                    src={item.img}
                    className="w-full h-full rounded-[8px]"
                    alt="Digital productivity tool"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default NewPortfolio;
