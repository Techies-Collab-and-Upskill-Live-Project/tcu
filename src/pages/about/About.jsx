import us from './assets/Us.svg';
import tufts from './assets/image 3.svg';
import frame from './assets/Frame.svg';
import chart from './assets/chart.svg';
import vector from './assets/Vector.svg';
import award from './assets/award.svg';
import Button from '../../components/Button';
import wireclay from './assets/Telephone wire clay.svg';
import spiralclay from './assets/Spiral clay.svg';
import clinton from './assets/Clinton.svg';
import cynthia from './assets/Cynthia.svg';
import deborah from './assets/Deborah.svg';
import samuel from './assets/Samuel.svg';
import ringclay from './assets/Star ring clay.svg';
import ejikeme from './assets/Ejikeme.svg';
import light from './assets/Light.svg';
import temitayo from './assets/Temitayo.svg';
import simon from './assets/Simon.svg';
import { IoLogoLinkedin} from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";


const About = () => {
 
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
    }
  ]
  
const reviews = [
  {
   avatar:ejikeme,
   name:'Cynthia Ejikeme',
   role:'Project Manager',
   feedback:'As one of the project managers in TCU 1,0, Working with designers and developers was a profound experience I hope to have again. We were able to seamlessly integrate a functional, user friendly platform.',
   socials:'',
  },
  {
   avatar:temitayo,
   name:'Temitayo Lawal',
   role:'Product Designer',
   feedback:'While leading the design team to create the Donation Trace platform, it was an interesting experience and process. Working with the developers to bring our project to life was challenging, yet beautiful.',
   socials:'',
  },
  {
    avatar:simon,
    name:'Simon Favour',
    role:'Developer',
    feedback:'Working with others, has been a highly rewarding experience. The team’s dedication to excellence, innovative approach to problem-solving, and collaborative spirit have made the project both challenging and fulfilling.',
    socials:'',
  },
  {
    avatar:light,
    name:'Light',
    role:'Product Manager',
    feedback:'Collaborating with designers and developers  was an impactful experience. Through proper communication, we were able to integrate aesthetics and functionality, in creating a user-friendly platform.',
    socials:'',
  },
]

  return (
    <div className='bg-[#121212] text-[#ffffff] w-full h-full px-[20px] md:px-[50px]'>
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
            <Button className={"mt-[22.81px] max-lg:w-full max-lg:text-[10.8px] max-lg:py-[7.2px] lg:mt-[38px]"}>Learn More</Button>
    
        </div>
      </div>
      <div>
      <p className='text-[11px] md:text-[18px] pt-[20px] md:pt-[80px]'>We believe everyone deserves the opportunity to participate in the exciting world of technology. Our unique platform provides a collaborative learning environment for aspiring developers, designers, and other tech enthusiasts. Here, you'll gain practical experience working alongside industry professionals on real-world projects. It's not just learning the ropes, it's contributing to cutting-edge solutions while building your skillset and portfolio.</p>
      <p className='text-[11px] md:text-[18px] pt-[20px]'>At TCU, we foster a collaborative spirit. Our experienced team mentors newcomers, while fresh perspectives inject new ideas into the development process. This synergy fuels innovation and allows us to create truly groundbreaking tech solutions.</p>
      
      <div className='flex float-right'><img src={wireclay} alt='wireclay'/></div>
      </div>
      {/* <div className='flex flex-col items-center pt-[50px]'>
        <p>What we do</p>
        <p className='text-[20px] md:text-[25px] font-[700] text-center'>Empowering your brand with our holistic solution for growth</p>
      </div> */}
      <div className='flex flex-col md:flex-row gap-[2rem] mt-[30px] pt-[100px]'>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
            <p className='text-[19px] md:text-[32px] font-[700]'>Empowering tech talents globally.</p>
            <p className='text-[11px] md:text-[18px]'>Our goal is to be the tower bridge to more work experience for 2 million tech talents around the globe.</p>
          </div>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
            <p className='text-[19px] md:text-[32px] font-[700]'>Gain experience to get Jobs.</p>
            <p className='text-[11px] md:text-[18px]'>Join our cohort to get certification, work experience to add to your resume, Employment possibility, Mentorship linkage.</p>
          </div>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
            <p className='text-[19px] md:text-[32px] font-[700]'>Helping startups with technological services</p>
            <p className='text-[11px] md:text-[18px]'>We have a seasoned team that cares for your startup more than you do. You won't believe it until you try.</p>
          </div>
      </div>
      <div className='w-full   md:h-[263px]  h-[349px] border border-[#222222] bg-[#181818] rounded-[12px] mt-[20px] flex flex-col md:flex-row justify-between items-center text-center p-[30px]'>
        <div className='w-full md:w-[312px]'>
          <p className='text-[19px] md:text-[32px]'>Entry for our Cohort</p>
          <p className='text-[11px] md:text-[18px]'>Grab an opportunity to work with a full team to build a digital product and have access to a community flowing with milk and honey.</p>
        </div>
        <button className="bg-primary-green text-white rounded-[44px] py-[12px] px-[27px] text-[18px] font-[700] leading-[24.3px] tracking-[1%] mt-[20px] md:mt-0">
            Fill entry form
        </button>
      </div>
      <div className='flex'><img src={spiralclay} alt='spiralclay'/></div>
      <div className='flex flex-col items-center pt-[50px]'>
        <p>Our Team</p>
        <div className='flex flex-wrap justify-center gap-[1rem] md:gap-[5rem] pt-[15px]'> 
           <div className='flex md:flex-row flex-col gap-[1rem]'>
            {team && team.map((teams, index) => (
            <div key={index}>
             <img src={teams.img} alt='profile' className=' md:w-[260px] md:h-[205px] w-[343px] h-[205px] rounded-t-[12px]'/>
            <div className='bg-[#181818] md:w-[260px] md:h-[150px] w-[343px] h-[202px] rounded-b-[12px] flex flex-col justify-center items-center mt-[-12px]'>
               <p className='md:text-[20px] font-[700]'>{teams.name}</p>
               <p className='md:text-[14px] font-[400] w-[180px] flex items-center'>{teams.role}</p>
               <div className='flex gap-[1.5rem] pt-[20px] items-center'>
                <IoLogoLinkedin  className='w-[20px] h-[20px]'/>
                <RiTwitterXFill/>
            </div>
            </div>
            
            </div>
            ))}
            <img src={ringclay} alt='ringclay' className='flex float-end md:ml-[-60px] justify-center'/>
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
            <div className='flex pt-[20px]'>
                <img src={review.avatar} alt='avatar'/>
                <div>
                  <p className='md:text-[16px] text-[12px] font-[700]'>{review.name}</p>
                  <p className='md:text-[12px] text-[10px] font-[400]'>{review.role}</p>
                </div>
            </div>
            <div className='md:w-[253px] w-[160]  h-[110px]'>
              <p className='md:text-[14px] text-[10px] font-[500] pt-[20px]'>{review.feedback}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='flex flex-col md:flex-row gap-[2rem] mt-[30px]'>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
             <p>Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the best practices and latest technologies.</p>
             <div className='flex gap-[2rem] pt-[20px]'>
                <div className='w-[46px] h-[46px] bg-[#ffffff] rounded-full flex justify-center items-center'>
                <img src={frame} alt='frame'/>
                </div>
                <div>
                    <p>XTP V.6</p>
                    <p>Audit . 1/27</p>
                </div>
             </div>
          </div>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
            <p>Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the best practices and latest technologies.</p>
            <div className='flex gap-[2rem] pt-[20px]'>
                <div className='w-[46px] h-[46px] bg-[#000000] rounded-full flex justify-center items-center'>
                <img src={chart} alt='chart'/>
                </div>
                <div>
                    <p>Quoter X</p>
                    <p>Audit . 1/27</p>
                </div>
             </div>
          </div>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
           <p>Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the best practices and latest technologies.</p>
           <div className='flex gap-[2rem] pt-[20px]'>
                <div className='w-[46px] h-[46px] bg-[#ffffff] rounded-full flex justify-center items-center'>
                <img src={vector} alt='vector'/>
                </div>
                <div>
                    <p>Cater V2</p>
                    <p>Audit . 1/27</p>
                </div>
             </div>
          </div>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
            <p>Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the best practices and latest technologies.</p>
            <div className='flex gap-[2rem] pt-[20px]'>
                <div className='w-[46px] h-[46px] bg-[#ffcf0f] rounded-full flex justify-center items-center'>
                <img src={award} alt='award'/>
                </div>
                <div>
                    <p>XTP V.6</p>
                    <p>Audit . 1/27</p>
                </div>
             </div>
          </div>
      </div> */}
    </div>
  )
}

export default About;