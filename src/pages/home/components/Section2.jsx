import aboutImg from "../../../assets/team.png";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  
  const navigateTo = useNavigate();
  return (
    <div className="w-full max-lg:px-[20px] flex flex-col mt-[32.94px] lg:mt-[67px] items-center">
      {/* About us */}
      <div className="flex max-lg:flex-col lg:gap-x-[42px] mt-[46.76px] lg:mt-[83.28px] self-start lg:px-[100px]">
        {/* About */}
        <img
          src={aboutImg}
          alt=""
          className="rounded-[16px] lg:w-[578px] lg:h-[586px]"
        />
        <div className="flex flex-col max-lg:mt-[25px]">
          <div className="lg:w-[520px]">
            <h6 className="text-[13.2px] lg:text-[32px] text-[#DBDBDB] leading-[17.28px] lg:leading-[43.2px] font-[500]">
              About us
            </h6>
            <h2 className="lg:w-[227px lg:mt-[40px] text-white font-[700] text-[19.21px] lg:text-[48px] leading-[25.93px] lg:leading-[64.8px]">
              Collaborate and Upskill
            </h2>
            <p className="font-[500] mt-[9px] lg:mt-[20px] text-[10.8px] lg:text-[24px] leading-[17.57px] lg:leading-[43.92px] text-[#D9D9D9]">
              A platform where tech professionals with diverse experience level
              collaborating, enhancing their skills and building their
              professional portfolio with live projects. We also have a seasoned
              team specializing in technological service solutions.
            </p>
            <div className="flex gap-x-[47px] mt-[9px] lg:mt-[20px] text-[#EEEEEE]">
              <div className="flex flex-col">
                <h2 className="text-[19.21px] max-lg:leading-[14.58px] lg:text-[32px] font-[900] ">
                  5+
                </h2>
                <p className="text-[14.58px] max-lg:leading-[14.58px] lg:text-[20px] mt-[5px] lg:mt-[-5px] font-[500] leading-[27px] text-white">
                  Live projects
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[19.21px] max-lg:leading-[14.58px] lg:text-[32px] font-[900] ">
                  100+
                </h2>
                <p className="text-[14.58px] max-lg:leading-[14.58px] lg:text-[20px] mt-[5px] lg:mt-[-5px] font-[500] leading-[27px] text-white">
                  Interns
                </p>
              </div>
            </div>
            <Button
              onclick={() => navigateTo("/about")}
              className={
                "mt-[22.81px] max-lg:w-full max-lg:text-[10.8px] max-lg:py-[7.2px] lg:mt-[40px]"
              }
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
