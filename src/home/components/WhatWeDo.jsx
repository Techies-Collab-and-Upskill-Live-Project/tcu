import Button from "../../components/Button";

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
    <div className="px-[100px] mt-[90px] flex flex-col items-center">
      <div className="w-[768px] pb-[17px]">
        <h6 className="font-[500] text-[24px] leading-[32.4px] text-center text-[#DBDBDB]">
          What we do
        </h6>
        <h4 className="text-white mt-[8px] font-[700] text-[40px] leading-[54px] text-center">
          Empowering tech talents globally and helping startups.
        </h4>
      </div>
      <div className="">
        {/* what we do */}
        <div className="flex gap-x-[20px] ">
          {whatWeDo?.map((item, index)=>(
            <div key={index} className="flex flex-col gap-y-[28px] bg-[#181818] border-[1px] border-[#292929] pb-[43px] rounded-[12px] lastpt-[36px]">
               <div className="flex flex-col gap-y-[28px] bg-[#181818] border-[1px] border-[#292929] px-[24px] pb-[56px] rounded-[12px] last:pt-[36px] h-[350px]">
              <h2 className={`text-[32px] mt-[56px] ${index ==2 && 'mt-[28px]'} font-[700] leading-[43.2px] text-white`}>{item.title}</h2>
              <p className="text-[16px] font-[500] leading-[27.52px] text-[#D9D9D9]">{item.desc}</p>
            </div>
            </div>
          ))}
        </div>
        {/* Entry for Cohort */}
        <div className=" bg-[#181818] w-full flex justify-center gap-x-[160px] py-[60px] items-center mt-[8px]" >
          <div className="flex flex-col w-[352px] gap-y-[28px]">
            <h4 className="font-[700] text-[32px] leading-[43.2px] text-white">Entry for our Cohort</h4>
            <p className="text-[14px] text-[#D9D9D9] font-[500] leading-[24.08px]">Grab an opportunity to work with a full team to build a digital product and have access to a community flowing with milk and honey. </p>
          </div>
          <Button className={"h-fit px-[27px] w-[213px]"}>Fill entry form</Button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
