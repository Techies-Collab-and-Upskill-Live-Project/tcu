import Button from "../../../components/Button";
import portfolio1 from "../../../assets/portfolio1.png";
import portfolio2 from "../../../assets/portfolio2.png";
import { PiArrowCircleDownLight } from "react-icons/pi";

const Portfolio = () => {
  return (
    <div className="max-lg:w-full px-[20px] lg:px-[100px] flex flex-col mt-[51.67px] lg:mt-[50px]">
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
        <div className="max-lg:w-full flex max-lg:flex-col lg:justify-between border-b border-b-[#ACACAC] pb-[25px]">
          <div className="max-lg:w-full flex flex-col gap-y-[20px] lg:max-w-[483px]">
            <div className="flex gap-x-[18px]">
              <span className="text-[20px] lg:text-[25px] font-[500] leading-[27px] lg:leading-[33.75px] text-[#4E4E4E]">
                01
              </span>
              <p className="text-[20px] lg:text-[32px] font-[700] leading-[27px] lg:leading-[43.2px] text-white">
                UI/UX design
              </p>
            </div>
            <p className="font-[500] text-[14px] lg:text-[20px] leading-[22.4px] lg:leading-[32px] text-[#D9D9D9]">
              A gallery of all our UI/UX Design projects from the first upskill
              program.
            </p>
            <Button
              className={
                "bg-[#EEEEEE] hidden lg:block w-fit text-[14px] leading-[18.9px] text-[#121212]"
              }
            >
              See all
            </Button>
          </div>
          {/* Portfolio images */}
          <div className="max-lg:w-full flex max-lg:justify-between  max-lg:gap-x-[10px] max-lg:mt-[22px] ">
            <img
              src={portfolio1}
              className="w-[169px] lg:w-[293px] h-[141px] rounded-[8px]"
            />
            <img
              src={portfolio2}
              className="w-[169px] lg:w-[293px] h-[141px] rounded-[8px]"
            />
          </div>
          <Button className=" mt-[40px] lg:hidden bg-white leading-[18.9px] text-black text-[14px]">See all</Button>
        </div>
        <div className="flex justify-between items-center border-b border-b-[#ACACAC] pb-[25px]">
        <div className="flex gap-x-[18px]">
              <span className="text-[20px] lg:text-[25px] font-[500] leading-[27px] lg:leading-[33.75px] text-[#4E4E4E]">
                02
              </span>
              <p className="text-[20px] lg:text-[32px] font-[700] leading-[27px] lg:leading-[43.2px] text-white">
                Development
              </p>
            </div>
          <PiArrowCircleDownLight className="text-white text-[32px] lg:text-[64px]" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
