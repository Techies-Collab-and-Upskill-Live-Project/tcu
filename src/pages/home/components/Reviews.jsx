import logo1 from "../../../assets/xtp.png";
import logo2 from "../../../assets/quoter.png";
import logo3 from "../../../assets/caterV2.png";
import logo4 from "../../../assets/xtpv6.png";
import ejikeme from '../../about/assets/Ejikeme.svg'
import light from '../../about/assets/Light.svg';
import temitayo from '../../about/assets/Temitayo.svg';
import simon from '../../about/assets/Simon.svg';
import linkedin from '../../about/assets/linkedin.svg';
import twitter from '../../about/assets/twitter.svg';

const Reviews = () => {

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

  return (

    <div className="text-[#DBDBDB] px-[20px]">
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
  );
};

export default Reviews;
