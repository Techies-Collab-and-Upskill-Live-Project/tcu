import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import wireclay from '../../about/assets/Telephone wire clay.svg';
import spiralclay from '../../about/assets/Spiral clay.svg';

const WhatWeDo = () => {
  const whatWeDo = [
    {
      title: "Empowering tech talents globally.",
      desc: "Our goal is to be the tower bridge to more work experience for 2 million tech talents around the globe.",
    },
    {
      title: "Gain experience to get Jobs.",
      desc: "Join our cohort to get certification, work experience to add to your resume, Employment possibility, Mentorship linkage.",
    },
    {
      title: "Helping startups with technological services",
      desc: "We have a seasoned team that cares for your startup more than you do. You wont believe until you try.",
    },
  ];
  return (
    <div className="lg:px-[100px] px-[20px] mt-[48.3px] lg:mt-[90px] flex flex-col items-center">
      
      <div className=" mt-[15px] lg:mt-[15px] flex flex-col items-center">
      <div className='flex float-right md:mr-[-1000px] mr-[-300px] md:mb-[2px] mb-[-30px] '><img src={wireclay} alt='wireclay'/></div>
        <div className="">
          {/* what we do */}
          
          <div className="flex max-lg:flex-col gap-y-[32px] max-lg:mt-[32px] lg:gap-x-[20px] ">
            {whatWeDo?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-[28px] bg-[#181818] border-[2px] border-dashed border-[#292929] pb-[43px] rounded-[12px] lastpt-[36px]"
              >
                <div className="flex flex-col gap-y-[28px] bg-[#181818]  border-[#292929] px-[24px] pb-[56px] rounded-[12px] lg:last:pt-[36px] lg:h-[350px]">
                  <h2
                    className={`text-[22px] lg:text-[32px] mt-[56px] ${
                      index == 2 && "mt-[28px]"
                    } font-[700] leading-[29.7px] lg:leading-[43.2px] text-white`}
                  >
                    {item.title}
                  </h2>
                  <p className="text-[15px] lg:text-[16px] font-[500] leading-[25.8px] lg:leading-[27.52px] text-[#D9D9D9]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Entry for Cohort */}
          <div className="bg-[#181818] w-full flex flex-col lg:flex-row justify-center lg:gap-x-[180px] gap-[2rem] py-[60px] md:items-center items-start  mt-[32px] border-dashed border-[2px] border-[#292929] rounded-[12px] lg:mt-[8px]">
            <div className="px-[17.38px] flex flex-col lg:w-[352px] gap-y-[28px]">
              <h4 className="font-[700] text-[22px] lg:text-[32px] leading-[29.7px] lg:leading-[43.2px] text-white">
                Entry for our Cohort
              </h4>
              <p className="text-[14px] text-[#D9D9D9] font-[500] leading-[24.08px]">
                Grab an opportunity to work with a full team to build a digital
                product and have access to a community flowing with milk and
                honey.
              </p>
              <p className="flex items-center justify-center bg-[#292929] w-[110px] h-[15px] rounded-[2px] text-[#FF8686] text-[8px] font-[500] md:hidden visible">Project Kickoff at August.</p>
            </div>
            <Link to="/join">
              <Button className="h-[48px] lg:h-[60px] justify-center align-middle items-center flex px-[27px] text-[14px] lg:text-[16px] w-full lg:w-[213px] py-[16.78px] ml-[20px]">
                Fill entry form
              </Button>
            </Link>
          </div>
          <div className='flex'><img src={spiralclay} alt='spiralclay'/></div>
        </div>
        
      </div>
     
    </div>
  );
};

export default WhatWeDo;
