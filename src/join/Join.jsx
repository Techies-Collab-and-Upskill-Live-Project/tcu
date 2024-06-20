import { twMerge } from "tailwind-merge";
import Button from "../components/Button";

const Join = ({
  className,
  descClass,
  formClass,
  inputClass,
  textAreaClass,
}) => {
  return (
    <div
      className={twMerge(
        `flex flex-col justify-center items-center`,
        className
      )}
    >
        <div className="flex flex-col justify-center items-center align-middle bg-[#181818] w-[763px] h-[215px] rounded-[12px]">
            <p className="md:text-[36px] text-[16px] font-[700] text-[#ffffff]">TCU 2.0 Entry Form</p>
            <p className="md:text-[20px] text-[10px] font-[400] text-[#9c9c9c]">Please answer all the questions, it will help us know you better. Compulsory questions are indicated with <span className="text-[#e30000]">*</span> </p>
        </div>
      {/* <div className={twMerge(`flex flex-col lg:w-[401px] `, descClass)}>
        <h3 className="font-[700] max-lg:text-center text-[18px] lg:text-[32px] leading-[24.3px] lg:leading-[43.2px] text-white">
          Let help you build tomorrows product today.
        </h3>
        <p className="text-[#D9D9D9] text-[14px] lg:text-[16px] leading-[18.9px] lg:leading-[21.6px] font-[400] mt-[10px]">
          Let us assist in realizing your project vision. Our team is dedicated
          to collaborating with you, offering expertise and support every step
          of the way. Together, we&apos;ll build a robust and successful
          project.
        </p>
      </div> */}
      <form
        className={twMerge(
          `flex flex-col mt-[77px] lg:mt-[13px]  bg-[#121212] p-[20px] rounded-[12px] lg:w-[763px] `,
          formClass
        )}
      >
        <div className="">
          <input
            type="email"
            placeholder="Eg samplemail1234@gmail.com"
            className={twMerge(
              `bg-[#181818] rounded-[2.58px] max-lg:h-[25.8px] w-full text-[#4d4d4d] px-[20px] py-[15px] border-[1px] border-[#3E3E34] text-[7.74px] lg:leading-[24px] leading-[12.39px] lg:text-[15px] font-[400]`,
              inputClass
            )}
          />
          <input
            type="text"
            placeholder="Eg John Doe"
            className={twMerge(
              `bg-[#181818] rounded-[2.58px] max-lg:h-[25.8px] w-full text-[#4d4d4d] max-lg:text-[7.74px] px-[20px] py-[15px] border-[1px] border-[#3E3E34] leading-[12.39px] lg:leading-[24px] text-[15px] font-[400]`,
              inputClass
            )}
          />
          <input
            type="text"
            placeholder="Eg httms://x.com/account-name"
            className={twMerge(
              `bg-[#181818] rounded-[2.58px] max-lg:h-[25.8px] w-full text-[#4d4d4d] max-lg:text-[7.74px] px-[20px] py-[15px] border-[1px] border-[#3E3E34] leading-[12.39px] lg:leading-[24px] text-[15px] font-[400]`,
              inputClass
            )}
          />
          <input
            type="text"
            placeholder="Eg https:??linkedin.com/account-name"
            className={twMerge(
              `bg-[#181818] rounded-[2.58px] max-lg:h-[25.8px] w-full text-[#4d4d4d] max-lg:text-[7.74px] px-[20px] py-[15px] border-[1px] border-[#3E3E34] leading-[12.39px] lg:leading-[24px] text-[15px] font-[400]`,
              inputClass
            )}
          />
        </div>
        <textarea
          placeholder="Message"
          className={twMerge(
            `"w-full resize-none text-[#ACACAC] mt-[30px] lg:mt-[13px] h-[88px] lg:h-[224px] py-[20px] px-[15px] bg-[#181818] border-[0.6px] rounded-[5px] border-[#3E3E34]`,
            textAreaClass
          )}
        />
        <Button className="w-full bg-[#ffffff] rounded-[4px] mt-[20px] text-[#121212] font-[700] text-[7.74px] lg:text-[15px] lg:leading-[24px] leading-[12.39px]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Join;

