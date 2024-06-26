import { PiArrowCircleDownLight, PiArrowCircleUpLight } from "react-icons/pi";
import { useState } from "react";
import { images } from "./TestData";
import Button from "../../components/Button";
// import Button from "../../components/Button";

const Test = () => {
  const [openPortfolio, setOpenPortfolio] = useState(false);

  const handleClick = (e) => {
    setOpenPortfolio((prev) => !prev);
  };

  return (
    <div className="max-lg:w-full bg-black  px-[20px] lg:px-[100px] flex flex-col mt-[51.67px] lg:mt-[50px]">
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

            {openPortfolio ? (
                <PiArrowCircleDownLight
                onClick={handleClick}
                className="text-white self-start text-[32px] lg:text-[64px]"
              />
            ) : (
                <PiArrowCircleUpLight
                  onClick={handleClick}
                  className="text-white self-start text-[32px] lg:text-[64px]"
                />
            )}
          </div>

          {/* Portfolio images */}
          <div className={openPortfolio ? "block" : "hidden"}>
            <div className="max-lg:w-full overflow-hidden flex max-lg:justify-between gap-x-[14px] max-lg:mt-[22px] mt-[30px] ">
              {images.map((image, index) => (
                <img
                  src={image}
                  className="w-[200px] border-[3px] border-gray-300 lg:w-[293px] h-[141px] rounded-[8px]"
                  alt=""
                />
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
        {/* <div className="flex justify-between items-center border-b border-b-[#ACACAC] pb-[25px]">
          <div className="flex gap-x-[18px]">
            <span className="text-[20px] lg:text-[25px] font-[500] leading-[27px] lg:leading-[33.75px] text-[#4E4E4E]">
              02
            </span>
            <div className="flex flex-col gap-4">
              <p className="text-[20px] lg:text-[32px] font-[700] leading-[27px] lg:leading-[43.2px] text-white">
                Development
              </p>

              <p className="font-[500] text-[14px] lg:text-[20px] leading-[22.4px] lg:leading-[32px] text-[#D9D9D9]">
                A gallery of all our UI/UX Design projects from the first
                upskill program.
              </p>
            </div>
          </div>

          {openPortfolio ? (
            <PiArrowCircleUpLight
              onClick={handleClick}
              className="text-white self-start text-[32px] lg:text-[64px]"
            />
          ) : (
            <PiArrowCircleDownLight
              onClick={handleClick}
              className="text-white self-start text-[32px] lg:text-[64px]"
            />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Test;
