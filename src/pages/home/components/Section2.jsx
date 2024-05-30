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
    <div className="w-full flex flex-col mt-[67px] items-center">
      {/* Partners */}
      <div className="flex flex-col  gap-y-[22px] ">
        <h5 className="font-[500] text-[24px] leading-[32.4px] tracking-[1%] text-[#DBDBDB] text-center">
          Our Partners
        </h5>
        <div className="flex gap-x-[71px] ">
          {partners.map((partner, index) => (
            <img key={index} src={partner} className="rounded-[14.54px]" />
          ))}
        </div>
      </div>
      {/* About us */}
      <div className="flex gap-x-[42px] mt-[83.28px] self-start px-[100px]">
        {/* About */}
        <img src={aboutImg} alt="" className="rounded-[16px]" />
        <div className="flex flex-col">
          <div className="w-[520px]">
            <h6 className="text-[24px] text-[#DBDBDB] leading-[32.4px] font-[500]">
              About us
            </h6>
            <h2 className="w-[227px] mt-[8px] text-white font-[700] text-[40px] leading-[54px]">
              Collaborate and Upskill
            </h2>
            <p className="font-[500] mt-[15px] text-[18px] leading-[32.94px] text-[#D9D9D9]">
              We are individuals with diverse levels of experience in
              technology, spanning from entry-level to mid and senior positions
              join forces to collaborate and enhance their skill sets and build
              their professional portfolio. We also have a seasoned team
              specializing in technological service solutions.
            </p>
            <div className="flex gap-x-[47px] mt-[15px] text-[#EEEEEE]">
              <div className="flex flex-col">
                <h2 className="text-[32px] font-[900] ">5+</h2>
                <p className="text-[20px] mt-[-5px] font-[500] leading-[27px] text-white">
                  Live projects
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[32px] font-[900] ">100+</h2>
                <p className="text-[20px] mt-[-5px] font-[500] leading-[27px] text-white">
                  Interns
                </p>
              </div>
            </div>
            <Button className={"mt-[38px]"}>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
