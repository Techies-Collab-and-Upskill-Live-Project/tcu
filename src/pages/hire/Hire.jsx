import Contact from "../home/components/Contact";

const Hire = () => {
  return (
    <div className=" flex flex-col mt-[57x]">
      <div className="flex flex-col items-center tracking-[1%]">
        <h6 className="font-[500] text-[22px] leading-[29.7px] text-primary-green ">
          Agency
        </h6>
        <h4 className="font-[700] text-[32px] leading-[43.2px] text-white">
          Hire Us
        </h4>
      </div>
      <div>
        <Contact
        className={"bg-transparent mt-0"}
          descClass={"lg:w-[559px]"}
          formClass={"bg-white"}
          inputClass={"bg-[#FAFAFA] text-[#1E1E1E] border-[#EDEDED]"}
          textAreaClass={"bg-[#FAFAFA] border-[#EDEDED]"}
        />
      </div>
    </div>
  );
};

export default Hire;
