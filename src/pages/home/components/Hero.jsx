import heroImg from "../../../assets/hero-img.png";
import heroImg2 from "../../../assets/hero-img2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  const slides = [
    {
      title: "  Empowering Tech talents Globally",
      desc: "Take a break with us as an intern and break into the job market with greater Technical and soft skills.",
    },
    {
      title: "Helping startups with technological services. ",
      desc: "Just think it, we have the skills to build it for you.",
    },
    {
      title: "Empowering Tech Talents Globally",
      desc: "We curate the best digital products while giving hands-on experience to those who need it.",
    },
  ];

  return (
    <div className="flex flex-col -mt[54px]  lg:-mt-[105px]">
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          modules={[Pagination]}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={heroImg}
                alt="team members"
                className="hidden lg:block"
              />
              <img src={heroImg2} alt="team members" className="lg:hidden " />
              <div className=" absolute bottom-[65.9px] lg:bottom-[108.5px] max-lg:px-[36px] max-lg:pr-[44px]  lg:px-[130px]">
                <h3 className="text-[16px] lg:text-[58px] font-[700] leading-[21.6px] lg:leading-[78.3px] tracking-[1%] text-white">
                  {slide.title}
                </h3>
                <p className="text-[10px] max-lg:text-justify lg:text-[22px] lg:w-[715px] font-[400] leading-[18.08px] lg:leading-[35px] text-justify text-[#E3E3E3]">
                  {slide.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
