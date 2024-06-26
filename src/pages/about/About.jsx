import React, { useState } from 'react';
import us from './assets/Us.svg';
import Button from '../../components/Button';
import wireclay from './assets/Telephone wire clay.svg';
import spiralclay from './assets/Spiral clay.svg';
import clinton from './assets/Clinton.svg';
import cynthia from './assets/Cynthia.svg';
import deborah from './assets/Deborah.svg';
import uko from './assets/Uko.svg';
import tems from './assets/Tems.svg';
import winner from './assets/Winner.svg';
import eche from './assets/Eche.svg';
import emem from './assets/Emem.svg';
import daniel from './assets/Daniel.svg';
import samuel from './assets/Samuel.svg';
import ringclay from './assets/Star ring clay.svg';
import ejikeme from './assets/Ejikeme.svg';
import light from './assets/Light.svg';
import temitayo from './assets/Temitayo.svg';
import simon from './assets/Simon.svg';
import { IoLogoLinkedin} from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";



const About = () => {

  const [showMore, setShowMore] = useState(false);

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
 
  const team =[
    {
      img:clinton,
      name:'Clinton Michael',
      role:'Founder & Product designer',
      socials:''
    },
    {
      img:cynthia,
      name:'Cynthia Ejikeme',
      role:'Project Manager & Brand commissioner',
      socials:''
    },
    {
      img:samuel,
      name:'Samuel Ogboye',
      role:'Software engineer & Technical Supervisor ',
      socials:''
    },
    {
      img:deborah,
      name:'Deborah Adegoke',
      role:'Frontend developer & Community manager',
      socials:''
    },
    {
      img:uko,
      name:'Uko Idung',
      role:'Project Manager'
    },
    {
      img:winner,
      name:'Winner Brinemugha',
      role:'UI/UX Designer'
    },
    {
      img:tems,
      name:'Temiloluwa Orekoya',
      role:'Designer/ Dev and social media manager'
    },
    {
      img:daniel,
      name:'Daniel Ogenna',
      role:'UI/UX designer & Community advocate.'
    },
    {
      img:eche,
      name:'Eche Ibekwe',
      role:'Project Manager'
    },
    {
      img:cynthia,
      name:'Farid Abdulmalik',
      role:'UI/UX Designer'
    },
    {
      img:emem,
      name:'Emem Idem',
      role:'Project manager & Event organizer'
    },
  ]
  
const reviews = [
  {
   avatar:ejikeme,
   name:'Cynthia Ejikeme',
   role:'Project Manager',
   feedback:'As one of the project managers in TCU 1,0, Working with designers and developers was a profound experience I hope to have again. We were able to seamlessly integrate a functional, user friendly platform.',
   socials:linkedin,
  },
  {
   avatar:temitayo,
   name:'Temitayo Lawal',
   role:'Product Designer',
   feedback:'While leading the design team to create the Donation Trace platform, it was an interesting experience and process. Working with the developers to bring our project to life was challenging, yet beautiful.',
   socials:twitter,
  },
  {
    avatar:simon,
    name:'Simon Favour',
    role:'Developer',
    feedback:'Working with others, has been a highly rewarding experience. The team’s dedication to excellence, innovative approach to problem-solving, and collaborative spirit have made the project both challenging and fulfilling.',
    socials:linkedin,
  },
  {
    avatar:light,
    name:'Light',
    role:'Product Manager',
    feedback:'Collaborating with designers and developers  was an impactful experience. Through proper communication, we were able to integrate aesthetics and functionality, in creating a user-friendly platform.',
    socials:twitter,
  },
]

const firstFourTeam = team.slice(0, 4);
const remainingTeam = team.slice(4);

  return (
    <div className='bg-[#121212] text-[#ffffff] w-full h-full px-[20px] md:px-[50px] font-satoshi'>
      <div className='flex flex-col md:flex-row gap-[20px]'>
        <div className='w-full md:w-[578px] h-[318px] md:h-[529px]'>
            <img src={us} alt='us' className='rounded-[16px] w-full h-full object-cover'/> 
        </div>
        <div className='w-full md:w-[620px] h-full'>
            <p className='text-[14px] md:text-[24px]'>About us</p>
            <p className='text-[19px] md:text-[50px] font-[700]'>Where creativity meets opportunity</p>
            <p className='text-[11px] md:text-[18px] pt-[20px]'>We are a community built by individuals with diverse levels of experience in technology, spanning from entry-level to mid and senior positions join forces to collaborate and enhance their skill sets and build their personal portfolio. We also have a seasoned team specializing in technological service solutions.</p>
            <p className='text-[11px] md:text-[18px] pt-[20px]'>Our team of experienced developers and designers are at the forefront of technological advancement. We leverage the latest tools and frameworks to craft robust, scalable solutions that address real-world challenges. From web and mobile applications to complex enterprise systems, we deliver results that empower our clients and shape the future.</p>
            <div className='flex gap-[20px] pt-[20px]'> 
                <div>
                    <p className='text-[19px] md:text-[32px] font-[700] md:font-[900]'>5+</p>
                    <p className='text-[11px] md:text-[18px]'>Live Projects</p>
                </div>
                <div>
                    <p className='text-[19px] md:text-[32px] font-[700] md:font-[900]'>100+</p>
                    <p className='text-[11px] md:text-[18px]'>Interns</p>
                </div>
            </div>
            {/* <Button className={"mt-[22.81px] max-lg:w-full max-lg:text-[10.8px] max-lg:py-[7.2px] lg:mt-[38px]"}>Learn More</Button> */}
    
        </div>
      </div>
      <div>
      <p className='text-[11px] md:text-[18px] pt-[20px] md:pt-[80px]'>We believe everyone deserves the opportunity to participate in the exciting world of technology. Our unique platform provides a collaborative learning environment for aspiring developers, designers, and other tech enthusiasts. Here, you'll gain practical experience working alongside industry professionals on real-world projects. It's not just learning the ropes, it's contributing to cutting-edge solutions while building your skillset and portfolio.</p>
      <p className='text-[11px] md:text-[18px] pt-[20px]'>At TCU, we foster a collaborative spirit. Our experienced team mentors newcomers, while fresh perspectives inject new ideas into the development process. This synergy fuels innovation and allows us to create truly groundbreaking tech solutions.</p>
      
      <div className='flex float-right'><img src={wireclay} alt='wireclay'/></div>
      </div>

      <div className=" mt-[100px] lg:mt-[100px] flex flex-col items-center">
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
  </div>
  <Link to='/join'>
    <Button className="h-fit px-[27px] text-[14px] lg:text-[16px] w-full lg:w-[213px] py-[16.78px] ml-[20px]">
      Fill entry form
    </Button>
  </Link>
</div>

      </div>
    </div>
      
      <div className='flex'><img src={spiralclay} alt='spiralclay'/></div>
      <div className='flex flex-col items-center pt-[50px]'>
        <p className='md:text-[48px] text-[20px] font-[700]'>Our Team</p>
      {/* <div className='flex flex-wrap justify-center gap-[1rem] md:gap-[5rem] pt-[15px]'>
      <div className='flex flex-wrap gap-[1rem] justify-center'>
        {team && team.map((teams, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='overflow-hidden rounded-t-[12px]'>
            <img 
              src={teams.img} 
              alt='profile' 
              className='md:w-[260px] w-[260px] h-[180px]' 
            />
            </div>
            <div 
              className='bg-[#181818] md:w-[260px] w-[260px] md:h-[150px] h-[140px] mt-[-12px] rounded-b-[12px] flex flex-col justify-center items-center'
            >
              <p className='md:text-[20px] text-[16px] font-[700] text-center'>{teams.name}</p>
              <p className='md:text-[14px] text-[12px] font-[400] w-[180px] text-center'>{teams.role}</p>
              <div className='flex gap-[1.5rem] pt-[20px] items-center'>
                <IoLogoLinkedin className='w-[20px] h-[20px]'/>
                <RiTwitterXFill className='w-[20px] h-[20px]'/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img 
        src={ringclay} 
        alt='ringclay' 
        className='md:ml-[-60px] flex justify-center mt-4 md:mt-0' 
      />
    </div> */}
       {/* Swiper for large screens */}
       <div className='hidden lg:block w-full'>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
          >
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col items-center'>
                  <img src={member.img} alt='profile' className='md:w-[260px] w-[260px] h-[180px]' />
                  <div className='bg-[#181818] md:w-[260px] w-[260px] md:h-[150px] h-[140px] mt-[-12px] rounded-b-[12px] flex flex-col justify-center items-center'>
                    <p className='md:text-[20px] text-[16px] font-[700] text-center'>{member.name}</p>
                    <p className='md:text-[14px] text-[12px] font-[400] w-[180px] text-center'>{member.role}</p>
                    <div className='flex gap-[1.5rem] pt-[20px] items-center'>
                      <IoLogoLinkedin className='w-[20px] h-[20px]'/>
                      <RiTwitterXFill className='w-[20px] h-[20px]'/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className='absolute right-[10px] top-[73%] transform translate-y-[-50%] bg-white text-black p-2 rounded-full'>
          <MdKeyboardArrowRight />
          </button>
        </div>
     
        {/* Dropdown for small screens */}
        <div className='block lg:hidden'>
          <div className='flex flex-wrap justify-center gap-[1rem]'>
            {firstFourTeam.map((member, index) => (
              <div key={index} className='flex flex-col items-center'>
                <img src={member.img} alt='profile' className='w-[180px] h-[180px] rounded-md' />
                <div className='bg-[#181818] w-[260px]  h-[140px] mt-[-27px] rounded-b-[12px] pt-[30px] '>
                <p className='text-[14px] font-[700] text-center'>{member.name}</p>
                <p className='text-[12px] font-[400] text-center'>{member.role}</p>
                <div className='flex justify-center gap-[1.5rem] pt-[10px]'>
                  <IoLogoLinkedin className='w-[20px] h-[20px]'/>
                  <RiTwitterXFill className='w-[20px] h-[20px]'/>
                </div>
                </div>
              </div>
            ))}
          </div>
          
          {showMore && (
            <div className='flex flex-wrap justify-center gap-[1rem] mt-[20px]'>
              {remainingTeam.map((member, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <img src={member.img} alt='profile' className='w-[180px] h-[180px] rounded-md' />
                  <div className='bg-[#181818] w-[260px]  h-[140px] mt-[-27px] rounded-b-[12px] pt-[30px]'>
                  <p className='text-[14px] font-[700] text-center'>{member.name}</p>
                  <p className='text-[12px] font-[400] text-center'>{member.role}</p>
                  <div className='flex justify-center gap-[1.5rem] pt-[10px]'>
                    <IoLogoLinkedin className='w-[20px] h-[20px]'/>
                    <RiTwitterXFill className='w-[20px] h-[20px]'/>
                  </div>
                  </div>
                </div>
              ))}
            </div>
         )}
         <div className='flex justify-center items-center'>
          <button onClick={() => setShowMore(!showMore)} className='mt-[20px] flex justify-center items-center w-[59px] h-[36px] bg-white text-black rounded-[21.84px]'>
            {showMore ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
          </div>
         </div>
         

      </div>
      <div className='flex flex-col items-center pt-[50px] pb-[30px]'>
        <p className='text-[14px] md:text-[32px] font-[500]'>Reviews</p>
        <p className='text-[20px] font-[700] md:text-[48px]'>What our interns say about us</p>
      </div>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-[1rem] items-center justify-center'>
        {reviews && reviews.map((review, index) => (
          <div key={index} className='border border-[#191919] border-t-[#121212] border-b-[#121212] w-[165px] h-[250px] md:w-[280px] md:h-[304px] md:pl-[15px] pl-[8px]'>
            <div className='flex gap-[1rem] pt-[20px]'>
                <img src={review.avatar} alt='avatar'/>
                <div>
                  <p className='md:text-[16px] text-[12px] font-[700]'>{review.name}</p>
                  <p className='md:text-[12px] text-[10px] font-[400]'>{review.role}</p>
                </div>
            </div>
            <div className='md:w-[253px] w-[160]  '>
              <p className='md:text-[14px] text-[10px] font-[500] pt-[20px]'>{review.feedback}</p>
            </div>
            <div className='pt-[20px]'>
              <img src={review.socials} alt='socials'/>
            </div>
            </div>
           
        ))}
         
      </div>
    </div>
  )
}

export default About;