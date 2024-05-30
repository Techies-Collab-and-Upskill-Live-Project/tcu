import partnerImg from "../../../assets/partner.png";
import aboutImg from "../../../assets/aboutImg.png";
import Button from "../../../components/Button";

const Section2 = () => {
  const partners = [
    partnerImg,
    partnerImg,
    partnerImg,
    partnerImg,
    partnerImg,
    partnerImg,
    partnerImg,
  ];
  return (
    <div className="w-full max-lg:px-[20px] flex flex-col mt-[32.94px] lg:mt-[67px] items-center">
      {/* Partners */}
      <div className="flex flex-col  lg:gap-y-[22px] ">
        <h5 className="font-[500] text-[5.95px] lg:text-[24px] leading-[7.2px] lg:leading-[32.4px] tracking-[1%] text-[#E3E3E3] lg:text-[#DBDBDB] text-center">
          Our Partners
        </h5>
        <div className="flex gap-x-[23.46px] max-lg:mt-[7.27px] lg:gap-x-[71px] ">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner}
              className="rounded[4.81px] lg:rounded-[14.54px] max-lg:size-[26px]"
            />
          ))}
        </div>
      </div>
      {/* About us */}
      <div className="flex max-lg:flex-col lg:gap-x-[42px] mt-[46.76px] lg:mt-[83.28px] self-start lg:px-[100px]">
        {/* About */}
        <img src={aboutImg} alt="" className="rounded-[16px]" />
        <div className="flex flex-col max-lg:mt-[25px]">
          <div className="lg:w-[520px]">
            <h6 className="text-[13.2px] lg:text-[24px] text-[#DBDBDB] leading-[17.28px] lg:leading-[32.4px] font-[500]">
              About us
            </h6>
            <h2 className="lg:w-[227px] lg:mt-[8px] text-white font-[700] text-[19.21px] lg:text-[40px] leading-[25.93px] lg:leading-[54px]">
              Collaborate and Upskill
            </h2>
            <p className="font-[500] mt-[9px] lg:mt-[15px] text-[10.8px] lg:text-[18px] leading-[17.57px] lg:leading-[32.94px] text-[#D9D9D9]">
              We are individuals with diverse levels of experience in
              technology, spanning from entry-level to mid and senior positions
              join forces to collaborate and enhance their skill sets and build
              their professional portfolio. We also have a seasoned team
              specializing in technological service solutions.
            </p>
            <div className="flex gap-x-[47px] mt-[9px] lg:mt-[15px] text-[#EEEEEE]">
              <div className="flex flex-col">
                <h2 className="text-[19.21px] max-lg:leading-[14.58px] lg:text-[32px] font-[900] ">5+</h2>
                <p className="text-[14.58px] max-lg:leading-[14.58px] lg:text-[20px] mt-[5px] lg:mt-[-5px] font-[500] leading-[27px] text-white">
                  Live projects
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[19.21px] max-lg:leading-[14.58px] lg:text-[32px] font-[900] ">100+</h2>
                <p className="text-[14.58px] max-lg:leading-[14.58px] lg:text-[20px] mt-[5px] lg:mt-[-5px] font-[500] leading-[27px] text-white">
                  Interns
                </p>
              </div>
            </div>
            <Button className={"mt-[22.81px] max-lg:w-full max-lg:text-[10.8px] max-lg:py-[7.2px] lg:mt-[38px]"}>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
