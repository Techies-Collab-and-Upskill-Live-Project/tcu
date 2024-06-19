import us from './assets/image 39.svg';
import tufts from './assets/image 3.svg';
import frame from './assets/Frame.svg';
import chart from './assets/chart.svg';
import vector from './assets/Vector.svg';
import award from './assets/award.svg';

const About = () => {
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
        </div>
      </div>
      <p className='text-[11px] md:text-[18px] pt-[20px] md:pt-[80px]'>We believe everyone deserves the opportunity to participate in the exciting world of technology. Our unique platform provides a collaborative learning environment for aspiring developers, designers, and other tech enthusiasts. Here, you'll gain practical experience working alongside industry professionals on real-world projects. It's not just learning the ropes, it's contributing to cutting-edge solutions while building your skillset and portfolio.</p>
      <p className='text-[11px] md:text-[18px] pt-[20px]'>At TCU, we foster a collaborative spirit. Our experienced team mentors newcomers, while fresh perspectives inject new ideas into the development process. This synergy fuels innovation and allows us to create truly groundbreaking tech solutions.</p>
      <div className='flex flex-col items-center pt-[50px]'>
        <p>Our Partners</p>
        <div className='flex flex-wrap justify-center gap-[1rem] md:gap-[5rem] pt-[15px]'> 
            {[...Array(7)].map((_, i) => (
              <div key={i}>
                <img src={tufts} alt='tufts'/>
              </div>
            ))}
        </div>
      </div>
      <div className='flex flex-col items-center pt-[50px]'>
        <p>What we do</p>
        <p className='text-[20px] md:text-[25px] font-[700] text-center'>Empowering your brand with our holistic solution for growth</p>
      </div>
      <div className='flex flex-col md:flex-row gap-[2rem] mt-[30px]'>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
            <p className='text-[19px] md:text-[32px] font-[700]'>Empowering tech talents globally.</p>
            <p className='text-[11px] md:text-[18px]'>Our goal is to be the tower bridge to more work experience for 2 million tech talents around the globe.</p>
          </div>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222] bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
            <p className='text-[19px] md:text-[32px] font-[700]'>Gain experience to get Jobs.</p>
            <p className='text-[11px] md:text-[18px]'>Join our cohort to get certification, work experience to add to your resume, Employment possibility, Mentorship linkage.</p>
          </div>
          <div className='w-full md:w-[400px] h-[288px] md:h-[254px] border border-[#222222]             bg-[#181818] rounded-[12px] flex flex-col justify-center items-center text-center p-[20px]'>
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
      <div className='flex flex-col items-center pt-[50px]'>
        <p>Reviews</p>
        <p className='text-[20px] md:text-[25px]'>What people say about us</p>
      </div>
      <div className='flex flex-col md:flex-row gap-[2rem] mt-[30px]'>
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
      </div>
    </div>
  )
}

export default About;