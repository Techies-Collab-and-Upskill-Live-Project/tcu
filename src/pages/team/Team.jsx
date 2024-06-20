import React from 'react'
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className='text-[#ffffff]'>
      <div className='flex flex-col justify-center items-center align-middle text-center'> 
        <p className='md:text-[24px] text-[14px]'>TCU 2.0</p>
        <p className='md:text-[40px] text-[20px] font-[700]'>Join Our Team</p>
        <p className='md:text-[32px] text-[18px] pt-[30px]'>Accumulate real-world job knowledge, hone our technical and interpersonal capabilities, and develop your personal portfolio.</p>
        <p className='md:text-[32px] text-[18px] pt-[30px]'>We have a space for you to collaborate and upskill. Join our community to be allocated to a project team at TCU 2.0</p>
      </div>
      <div className='flex justify-center items-center md:gap-[6rem] gap-[2rem] pt-[30px]'>
        <button className="bg-primary-green text-black rounded-[44px] py-[12px] px-[27px] text-[18px] font-[700] leading-[24.3px] tracking-[1%]">
            Fill Entry Form
        </button>
        <Link className='text-primary-green underline underline-offset-2'>
          Join Community
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center pt-[30px]'>
        <p className='md:text-[27px] text-[20px] pb-[20px]'>Time left to join TCU 2.0:</p>
        <div className='flex justify-center items-center md:gap-[1rem] gap-[0.5rem]'>
           <div className='flex gap-[0.5rem]'>
            <button className='md:w-[71px] md:h-[72px] w-[57px] h-[62px] rounded-[8px] bg-primary-green'>1</button>
            <button className='md:w-[71px] md:h-[72px] w-[57px] h-[62px] rounded-[8px] bg-primary-green'>1</button>
           </div>
           <p>:</p>
           <div className='flex gap-[0.5rem]'>
            <button className='md:w-[71px] md:h-[72px] w-[57px] h-[62px] rounded-[8px] bg-primary-green'>2</button>
            <button className='md:w-[71px] md:h-[72px] w-[57px] h-[62px] rounded-[8px] bg-primary-green'>7</button>
           </div>
           <p>:</p>
           <div className='flex gap-[0.5rem]'>
            <button className='md:w-[71px] md:h-[72px] w-[57px] h-[62px] rounded-[8px] bg-primary-green'>3</button>
            <button className='md:w-[71px] md:h-[72px] w-[57px] h-[62px] rounded-[8px] bg-primary-green'>4</button>
           </div>
        </div>
      </div>
      <div className='flex justify-center items-center md:gap-[6rem] gap-[5rem]'>
         <p className='md:text-[27px] text-[20px]'>DAYS</p>
         <p className='md:text-[27px] text-[20px]'>HOURS</p>
         <p className='md:text-[27px] text-[20px]'>MINUTES</p>
      </div>
    </div>
  )
}

export default Team