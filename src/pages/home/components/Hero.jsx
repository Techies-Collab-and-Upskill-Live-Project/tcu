import heroImg from "../../../assets/hero-img.png";
import heroImg2 from "../../../assets/hero-img2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Hero = () => {
  return (
    <div className="flex flex-col -mt-[54px]  lg:-mt-[105px]">
      <div className="">
        <Swiper>
          <SwiperSlide>
            <img src={heroImg} alt="team members" className="hidden lg:block" />
            <img src={heroImg2} alt="team members" className="lg:hidden " />
            <div className=" absolute bottom-[65.9px] lg:bottom-[108.5px] max-lg:px-[20px]  lg:px-[130px]">
              <h3 className="text-[16px] lg:text-[58px] font-[700] leading-[21.6px] lg:leading-[78.3px] tracking-[1%] text-white">
                Empowering Tech talents Globally
              </h3>
              <p className="text-[10px] max-lg:text-justify lg:text-[22px] lg:w-[715px] font-[400] leading-[18.08px] lg:leading-[35px] text-justify text-[#E3E3E3]">
                Take a break with us as an intern and break into the job market
                with greater Technical and soft skills.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg} alt="team members" className="hidden lg:block" />
            <img src={heroImg2} alt="team members" className="lg:hidden " />
            <div className=" absolute bottom-[65.9px] lg:bottom-[108.5px] lg:px-[130px]">
              <h3 className="text-[58px] font-[700] leading-[78.3px] tracking-[1%] text-white">
                SLIDE TWO
              </h3>
              <p className="text-[22px] lg:w-[715px] font-[400] leading-[35px] text-justify text-[#E3E3E3]">
                Take a break with us as an intern and break into the job market
                with greater Technical and soft skills.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
