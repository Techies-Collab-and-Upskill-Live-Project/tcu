import { Link } from "react-router-dom"
import logo from "../../../public/assets/logo.svg"
import { FaLinkedin, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="sticky top-0 px-[133.43px] py-[29px]  w-full flex items-center bg-[#121212] font-satoshi  backdrop-blur-md">
      <div className="w-full flex justify-between items-center ">
        <img src={logo} alt="logo" className="lg:w-[41px] lg:h-[53.66px] " />
        {/* Links */}
        <div className="flex gap-x-[49px] font-[700] text-[16px] leading-[27px] tracking-[1%]">
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
        </div>
        {/* Socials */}
        <div className="flex gap-x-[14.13px] text-white">
            <FaTwitter className=""/>
            <FaLinkedin/>
        </div>
      </div>
    </footer>
  )
}

export default Footer