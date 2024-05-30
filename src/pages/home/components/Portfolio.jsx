import Button from "../../../components/Button";
import portfolio1 from "../../../assets/portfolio1.png";
import portfolio2 from "../../../assets/portfolio2.png";
import { PiArrowCircleDownLight } from "react-icons/pi";

const Portfolio = () => {
  return (
    <div className="px-[100px] flex flex-col mt-[50px]">
      <div className="flex flex-col">
        <p className="text-[#DBDBDB] text-[24px] leading-[32.4px] font-[500] text-center">
          Our Work
        </p>
        <h3 className="text-[40px] leading-[54px] text-center font-[700] text-white">
          Our Portfolio
        </h3>
      </div>
      <div className="flex flex-col justify-center gap-y-[32px] mt-[60px]  ">
        {/* UI/UX Design */}
        <div className="flex justify-between border-b border-b-[#ACACAC] pb-[25px]">
          <div className="flex flex-col gap-y-[20px] max-w-[483px]">
            <div className="flex gap-x-[18px]">
              <span className="text-[25px] font-[500] leading-[33.75px] text-[#4E4E4E]">
                01
              </span>
              <p className="text-[32px] font-[700] leading-[43.2px] text-white">
                UI/UX design
              </p>
            </div>
            <p className="font-[500] text-[20px] leading-[32px] text-[#D9D9D9]">
              A gallery of all our UI/UX Design projects from the first upskill
              program.
            </p>
            <Button
              className={
                "bg-[#EEEEEE] w-fit text-[14px] leading-[18.9px] text-[#121212]"
              }
            >
              See all
            </Button>
          </div>
          {/* Portfolio images */}
          <div className="flex ">
            <img
              src={portfolio1}
              className="w-[293px] h-[141px] rounded-[8px]"
            />
            <img
              src={portfolio2}
              className="w-[293px] h-[141px] rounded-[8px]"
            />
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-b-[#ACACAC] pb-[25px]">
          <div className="flex gap-x-[18px] items-center">
            <span className="text-[25px] font-[500] leading-[33.75px] text-[#4E4E4E]">
              02
            </span>
            <p className="text-[32px] font-[700] leading-[43.2px] text-white">
              Development
            </p>
          </div>
          <PiArrowCircleDownLight className="text-white text-[64px]" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
