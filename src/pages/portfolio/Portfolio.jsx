import ContactPage from "../contactPage/ContactPage";
import DevelopmentGrid from "./DevelopmentGrid";
import PortfolioGrid from "./PortfolioGrid";
import img from "./Assets/Star ring clay.png"

const Portfolio = () => {
  const title = "Let help you build tomorrows product today.";
  const description =
    "Let us assist in realizing your project vision. Our team is dedicated to collaborating with you, offering expertise and support every step of the way. Together, we'll build a robust and successful project.";

  return (
    <div>
      <div className="lg:px-[104px] px-[21px]">
        <div className="flex flex-col justify-center items-center">
          <header>hi</header>
        </div>

        <PortfolioGrid />
        <DevelopmentGrid />

        <img src={img} className="hidden md:block md:absolute lg:bottom-[26%] bottom-[7%]" alt="" />

      </div>
      <ContactPage title={title} icon={img} text={description} />
    </div>
  );
};

export default Portfolio;
