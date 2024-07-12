import React from 'react';
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import chainclay from "../../../assets/Chain clay.svg";

const WhyJoinUs = () => {
  return (
    <div className='lg:px-[100px] px-[20px] mt-[48.3px] lg:mt-[90px] flex flex-col items-center text-[#ffffff] font-satoshi'>
      <p className='font-[500] text-[14px] lg:text-[24px] leading-[18.9px] lg:leading-[32.4px]'>TCU 2.0</p>
      <p className='font-[700] text-[20px] lg:text-[40px] leading-[27px] lg:leading-[54px] pb-[50px]'>Why join us?</p>
      <div className='flex gap-[1rem] md:flex-row flex-col'>
        <div className='md:w-[350px] w-full md:h-[470px] h-[100px] rounded-[12px] border-[2px] border-[#5C5C5C] bg-[#181818] flex items-center justify-center align-middle'>
            <p className='text-[22px] lg:text-[32px]  font-[700] px-[40px]'>Internship Certification</p>
        </div>
        <div className='flex md:flex-col flex-row gap-[1rem] justify-center items-center'>
            <img src={chainclay} alt='chainclay' className='md:w-[296px] md:h-[193px] w-[80px] h-[60px] md:rotate-0 rotate-90'/>
            <div className='md:w-[350px] w-full md:h-[261px] h-[143px] rounded-[12px] border-[2px] border-[#5C5C5C] bg-[#181818] flex items-center justify-center align-middle'>
                <p className='text-[22px] lg:text-[32px]  font-[700] px-[40px]'>Probable Employment</p>
            </div>
        </div>
        <div className='md:w-[350px] w-full md:h-[470px] h-[100px] rounded-[12px] border-[2px] border-[#5C5C5C] bg-[#181818] flex items-center justify-center align-middle '>
            <p className='text-[22px] lg:text-[32px]  font-[700] px-[40px]'>Mentorship Offers</p>
        </div>
      </div>
      <Link to="/join">
              <Button className="h-[48px] lg:h-[60px] justify-center align-middle items-center flex px-[27px] text-[14px] lg:text-[16px] w-full lg:w-[213px] py-[16.78px] ml-[20px] mt-[50px]">
                Fill entry form
              </Button>
     </Link>
     </div>
  );
}

export default WhyJoinUs;

