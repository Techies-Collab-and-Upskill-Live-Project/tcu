import Button from "../../../components/Button";

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
      <div className="lg:w-[768px] pb-[17px]">
        <h6 className="font-[500] text-[14px] lg:text-[24px] leading-[18.9px] lg:leading-[32.4px] text-center text-[#DBDBDB]">
          What we do
        </h6>
        <h4 className="text-white lg:mt-[8px] font-[700] text-[20px] lg:text-[40px] leading-[27px] lg:leading-[54px] text-center">
          Empowering tech talents globally and helping startups.
        </h4>
      </div>
      <div className="">
        {/* what we do */}
        <div className="flex max-lg:flex-col gap-y-[32px] max-lg:mt-[32px] lg:gap-x-[20px] ">
          {whatWeDo?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-[28px] bg-[#181818] border-[1px] border-[#292929] pb-[43px] rounded-[12px] lastpt-[36px]"
            >
              <div className="flex flex-col gap-y-[28px] bg-[#181818] lg:border-[1px] border-[#292929] px-[24px] pb-[56px] rounded-[12px] lg:last:pt-[36px] lg:h-[350px]">
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
        <div className=" bg-[#181818] w-full flex max-lg:flex-col max-lg:gap-y-[60px] justify-center lg:gap-x-[160px] py-[60px] items-center mt-[32px] max-lg:border-[0.89px] max-lg:border-[#292929] max-lg:rounded-[10.64px] lg:mt-[8px]">
          <div className="max-lg:px-[17.38px] flex flex-col lg:w-[352px] gap-y-[28px]">
            <h4 className="font-[700] text-[22px] lg:text-[32px] leading-[29.7px] lg:leading-[43.2px] text-white">
              Entry for our Cohort
            </h4>
            <p className="text-[14px] text-[#D9D9D9] font-[500] leading-[24.08px]">
              Grab an opportunity to work with a full team to build a digital
              product and have access to a community flowing with milk and
              honey.{" "}
            </p>
          </div>
          <Button className={"h-fit px-[27px] max-lg:text-[12.42px] w-full lg:w-[213px] max-lg:py-[16.78px]"}>
            Fill entry form
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;