import React from 'react';
import us from '../landingpage/assets/image 39.svg';
import tufts from '../landingpage/assets/image 3.svg';
import frame from '../landingpage/assets/Frame.svg';
import chart from '../landingpage/assets/chart.svg';
import vector from '../landingpage/assets/Vector.svg';
import award from '../landingpage/assets/award.svg';
const About = () => {
  return (
    <div className='bg-[#121212] text-[#ffffff] w-full h-full md:pl-[50px] md:pr-[50px] pl-[20px] pr-[20px]'>
      <div className='flex md:flex-row flex-col gap-[20px]'>
        <div className='md:w-[578px] md:h-[529px] w-[347px] h-[318px]'>
            <img src={us} alt='us' className='rounded-[16px]'/>
        </div>
        <div className='w-[620px] md:h-[468px] h-full'>
            <p className='md:text-[24px] text-[14px]'>About us</p>
            <p className='md:text-[50px] text-[19px]'>Where creativity meet opportunity</p>
            <p className='md:text-[18px] text-[11px] pt-[20px]'>We are a community built by individuals with diverse levels of experience in technology, spanning from entry-level to mid and senior positions join forces to collaborate and enhance their skill sets and build their personal portfolio.  We also have a seasoned team specializing in technological service solutions.</p>
            <p className='md:text-[18px] text-[11px] pt-[20px]'>Our team of experienced developers and designers are at the forefront of technological advancement. We leverage the latest tools and frameworks to craft robust, scalable solutions that address real-world challenges. From web and mobile applications to complex enterprise systems, we deliver results that empower our clients and shape the future.</p>
            <div className='flex gap-[20px]'> 
                <div className='pt-[20px]'>
                    <p className='md:text-[32px] text-[19px]'>5+</p>
                    <p className='md:text-[18px] text-[11px]'>Live Projects</p>
                </div>
                <div className='pt-[20px]'>
                    <p className='md:text-[32px] text-[19px]'>100+</p>
                    <p className='md:text-[18px] text-[11px]'>Interns</p>
                </div>
            </div>
        </div>
      </div>
      <p className='md:text-[18px] text-[11px] md:pt-[80px] pt-[20px]'>We believe everyone deserves the opportunity to participate in the exciting world of technology. Our unique platform provides a collaborative learning environment for aspiring developers, designers, and other tech enthusiasts. Here, you'll gain practical experience working alongside industry professionals on real-world projects. It's not just learning the ropes, it's contributing to cutting-edge solutions while building your skillset and portfolio.</p>
      <p className='md:text-[18px] text-[11px] pt-[20px]'>At TCU, we foster a collaborative spirit. Our experienced team mentors newcomers, while fresh perspectives inject new ideas into the development process. This synergy fuels innovation and allows us to create truly groundbreaking tech solutions.</p>
      <div className='flex flex-col justify-center items-center pt-[50px]'>
        <p>Our Partners</p>
        <div className='flex md:gap-[5rem] gap-[1rem] pt-[15px]'>
            <div className=''>
                <img src={tufts} alt='tufts'/>
            </div>
            <div className=''>
                <img src={tufts} alt='tufts'/>
            </div>
            <div className=''>
                <img src={tufts} alt='tufts'/>
            </div>
            <div className=''>
                <img src={tufts} alt='tufts'/>
            </div>
            <div className=''>
                <img src={tufts} alt='tufts'/>
            </div>
            <div className=''>
                <img src={tufts} alt='tufts'/>
            </div>
            <div className=''>
                <img src={tufts} alt='tufts'/>
            </div>
        </div>
      </div>
      <div className='flex flex-col items-center pt-[50px]'>
        <p>What we do</p>
        <p className='md:text-[25px] text-[20px]'>Empowering tech talents globally and helping startups.</p>
      </div>
      <div className='flex md:flex-row flex-col gap-[2rem] mt-[30px]'>
          <div className='md:w-[400px] md:h-[254px] w-[347px] h-[288px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center'>
            <p className='md:text-[32px] text-[19px]'>Empowering tech talents globally.</p>
            <p className='md:text-[18px] text-[11px]'>Our goal is to be the tower bridge to more work experience for 2 million tech talents around the globe.</p>
          </div>
          <div className='md:w-[400px] md:h-[254px] w-[347px] h-[288px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center'>
            <p className='md:text-[32px] text-[19px]'>Gain experience to get Jobs.</p>
            <p className='md:text-[18px] text-[11px]'>Join our cohort to get certification, work experience to add to your resume, Employment possibility, Mentorship linkage. </p>
          </div>
          <div className='md:w-[400px] md:h-[254px] w-[347px] h-[288px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center'>
            <p className='md:text-[32px] text-[19px]'>Helping startups with technological services</p>
            <p className='md:text-[18px] text-[11px]'>We have a seasoned team that cares for your startup more than you do. You wont believe until you try.</p>
          </div>
      </div>
      <div className='md:w-full md:h-[263px] w-[347px] h-[349px] border border-[#222222] bg-[#181818] rounded-[12px] mt-[20px] flex justify-center items-center gap-[2rem]'>
        <div>
          <p className='md:text-[32px] text-[19px]'>Entry for our Cohort</p>
          <p className='md:text-[18px] text-[11px]'>Grab an opportunity to work with a full team to build a digital product and have access to a community flowing with milk and honey. </p>
        </div>
        <button>
            Fill entry form
        </button>
      </div>
      <div className='flex flex-col items-center pt-[50px]'>
        <p>Reviews</p>
        <p className='md:text-[25px] text-[20px]'>What people say about us</p>
      </div>
      <div className='flex md:flex-row flex-col gap-[2rem] mt-[30px]'>
          <div className='md:w-[400px] md:h-[254px] w-[347px] h-[288px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center'>
             <p>Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the </p>
             <div className='flex gap-[2rem]'>
                <div className='w-[46px] h-[46px] bg-[#ffffff] rounded-full flex justify-center items-center'>
                <img src={frame} alt='frame'/>
                </div>
                <div>
                    <p>XTP V.6</p>
                    <p>Audit . 1/27</p>
                </div>
             </div>
          </div>
          <div className='md:w-[400px] md:h-[254px] w-[347px] h-[288px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center'>
            <p>Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the </p>
            <div className='flex gap-[2rem]'>
                <div className='w-[46px] h-[46px] bg-[#000000] rounded-full flex justify-center items-center'>
                <img src={chart} alt='chart'/>
                </div>
                <div>
                    <p>Quoter X</p>
                    <p>Audit . 1/27</p>
                </div>
             </div>
          </div>
          <div className='md:w-[400px] md:h-[254px] w-[347px] h-[288px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center'>
           <p>Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the </p>
           <div className='flex gap-[2rem]'>
                <div className='w-[46px] h-[46px] bg-[#ffffff] rounded-full flex justify-center items-center'>
                <img src={vector} alt='vector'/>
                </div>
                <div>
                    <p>Cater V2</p>
                    <p>Audit . 1/27</p>
                </div>
             </div>
          </div>
          <div className='md:w-[400px] md:h-[254px] w-[347px] h-[288px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center'>
            <p>Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the </p>
            <div className='flex gap-[2rem]'>
                <div className='w-[46px] h-[46px] bg-[#ffcf0f] rounded-full flex justify-center items-center'>
                <img src={award} alt='award'/>
                </div>
                <div>
                    <p>XTP V.6</p>
                    <p>Audit . 1/27</p>
                </div>
             </div>
          </div>
      </div>
    </div>
  )
}

export default About
