import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ballclay from "../../../assets/ballclay.svg";
import herocube from "../../../assets/hero-cube.png";
import star from "../../../assets/star.svg";
import Button from "../../../components/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      title: "  Empowering Tech talents Globally",
      desc: "Gain valuable experience to add to your resume, connect and learn from our community.",
      image: ballclay,
    },
    {
      title: "Helping startups with our tech talents. ",
      desc: "We offer technological services deal you can not get elsewhere to help your business scale.",
      image: herocube,
    },
  ];

  return (
    <div className="flex flex-col -mt[54px] lg:h-screen lg:-mt-[105px]">
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          // modules={[Pagination]}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`${index == 1 && "bg-[#00404B]"}`}
            >
              <div
                className={`${
                  index == 1 && "bg-[#00404B]"
                } flex items-center  lg:mt-[114px] max-lg:mt-[62px] font-satoshi max-lg:px-[36px] max-lg:pr-[44px]  lg:px-[130px] max-lg:flex-col`}
              >
                <div className="max-lg:flex max-lg:flex-col">
                  <h3 className="text-[40px] max-lg:text-center lg:text-[72px] max-lg:leading-[54px] font-[900] leading-[97.2px] lg:leading-[97.2x] tracking-[1%] text-white">
                    {slide.title}
                  </h3>
                  <p className="text-[10px] max-lg:mt-[16px] max-lg:text-[14px] max-lg:leading-[18.9px] max-lg: lg:pr-[105px] max-lg:text-center max-lg:text-justif lg:text-[22px] lg:w-[715px] font-[400] leading-[18.08px] lg:leading-[35px] text-justify text-[#E3E3E3]">
                    {slide.desc}
                  </p>
                  <div className="flex gap-x-[40px] mt-[48px]">
                    <Link to="join">
                      <Button
                        className={
                          "max-lg:text-[12px] max-lg:leading-[16.2px] max-lg:px-[16px] max-lg:py-[8px] shrink-0"
                        }
                      >
                        Join Our Team
                      </Button>
                    </Link>
                    <Button
                      className={
                        "text-white border-[#8C8C8C99] max-lg:text-[12px] max-lg:leading-[16.2px] max-lg:px-[16px]"
                      }
                    >
                      Work with us
                    </Button>
                  </div>
                </div>
                <img src={slide.image} className=" max-lg:size-[243px] max-lg:mt-[41px] lg:size-[407px]" />
              </div>
              <div className="flex mt-[153px] px-[64px] gap-x-[100px]">
                <img src={star} className="" />
                <div className="flex w-full items-center ">
                  <div className="border-[#8C8C8CCC] w-full border-b-[1px]"></div>
                  <MdKeyboardArrowRight className="text-[#8C8C8CCC] -ml-[10px] text-[24px]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
