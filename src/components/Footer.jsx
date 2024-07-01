import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { RxEnvelopeClosed } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="sticky top-0 md:px-[133.43px] md:py-[29px] px-[30px]  w-full flex items-center bg-[#121212] font-satoshi  backdrop-blur-md">
      <div className="w-full flex justify-between items-center align-middle">
        <div className="flex md:gap-[1rem] gap-[0.5rem] align-middle justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="lg:w-[41px] lg:h-[53.66px] w-[20px] h-[40px] "
          />
          <p className="lg:text-[32px] text-[12px] font-[500] text-[#ffffff]">
            TCU
          </p>
        </div>
        {/* Links */}
        {/* <div className="flex max-lg:flex-col max-lg:text-center max-lg:mt-[48px] max-lg:gap-y-[49px] gap-x-[49px] font-[700] text-[16px] leading-[27px] tracking-[1%]">
          <Link
            to="/"
            className={ "text-[#F1F1F1]"
        }
          >
            Home
          </Link>
          <Link
            to="/about"
            className={ "text-[#F1F1F1]"
            }
          >
            About us
          </Link>
          <Link
            to="/porfolio"
            className={ "text-[#F1F1F1]"
        }
          >
            Portfolio
          </Link>
          <Link
            to="/count"
            className={ "text-[#F1F1F1]"
            }
          >
            Contact us
          </Link>
          <Link
            to="/join"
            className={ "text-[#F1F1F1]"
            }
          >
            Join our team
          </Link>
        </div> */}
        {/* Socials */}

        <div className="flex gap-x-[14.13px]  text-white">
          <Link to="mailto:tculiveprojects@gmail.com">
            <RxEnvelopeClosed size={26} />
          </Link>
          <Link to="https://x.com/tculive?t=tnTUDVem-abYrxpkn9P5XA&s=09">
            <RiTwitterXFill size={24} />
          </Link>
          <Link to="https://www.linkedin.com/company/techies-collab-and-upskill-on-live-project/">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
