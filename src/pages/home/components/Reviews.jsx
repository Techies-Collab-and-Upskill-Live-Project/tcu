import logo1 from "../../../assets/xtp.png";
import logo2 from "../../../assets/quoter.png";
import logo3 from "../../../assets/caterV2.png";
import logo4 from "../../../assets/xtpv6.png";

const Reviews = () => {
  const reviews = [
    {
      content:
        "Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the",
      logo: logo1,
      title: "XTP V.6",
    },
    {
      content:
        "Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the",
      logo: logo2,
      title: "Quoter X",
    },
    {
      content:
        "Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the",
      logo: logo3,
      title: "Cater V2",
    },
    {
      content:
        "Second Layer is not just a service provider; we are partners in your project's success. We offer educational resources and workshops to empower project teams with the",
      logo: logo4,
      title: "XTP  V.6",
    },
  ];
  return (
    <div className="px-[100px] flex flex-col mt-[90px]">
      <div className="flex flex-col items-center">
        <h6 className="text-[#DBDBDB] text-[24px] leading-[32.4px] font-[500] text-center">
          Reviews
        </h6>
        <h2 className="text-white text-[40px] leading-[54px] text-center font-[700]">
          What our talents have to say about us
        </h2>
        <div className="mt-[60px] flex justify-between gap-x-[20px]">
          {reviews?.map((review, index) => (
            <div key={index} className="flex font-geologica flex-col gap-y-[40px] bg-[#181818] rounded-[20px] px-[25px] pt-[21px] pb-[14px]">
              <p className="text-[16px] text-justify leading-[22px] text-[#EEEEEE] font-[300]">
                {review.content}
              </p>
              <div className="flex gap-x-[5px]">
                <img src={review.logo} className="size-[46px]" />
                <div className="flex flex-col">
                  <p className="text-[16px] font-[500] leading-[20px] text-white">
                    {review.title}
                  </p>
                  <small className="text-[#CACACA] text-[12px] font-[400] leading-[15px]">
                    Audit . 1/27
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
