import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { HiOutlineBars2 } from "react-icons/hi2";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 lg:px-[104px] h-[54px] lg:h-[105px] w-full flex items-center px-[21px] bg-[#121212 bg-transparent z-20 font-satoshi backdrop-blur-md">
      <div className="w-full flex justify-between items-center ">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[18px] h-[23.56px] lg:w-[41px] lg:h-[53.66px] "
          />
        </Link>
        {/* Links */}
        <HiOutlineBars2
          className="text-[32px] text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        />

        <div
          className={`transition-all duration-700 ${
            isOpen
              ? " w-full flex flex-col fixed right-0 lg:hidden top-0 h-screen bg-black z-[99999]"
              : " lg:flex max-lg:translate-x-[300%] top-0 max-lg:h-screen max-lg:w-full max-lg:bg-black max-lg:fixed gap-x-[49px] font-[700] text-[16px] leading-[27px] tracking-[1%] "
          }`}
        >
          <div className="lg:hidden flex justify-between pl-[21px] pt-[13px] pr-[7px] pb-[9px]">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-[18px] h-[23.56px] lg:w-[41px] lg:h-[53.66px] "
              />
            </Link>
            <IoCloseOutline
              onClick={() => setIsOpen(false)}
              className="text-[32px] text-white"
            />
          </div>
          <div className="flex max-lg:flex-col px-[20px] gap-y-[32px] lg:gap-x-[49px] font-[700] text-[16px] lg:leading-[27px] leading-[13.95px] max-lg:mt-[28px] tracking-[1%]">
            <NavLink
              to="/"
              onClick={()=>setIsOpen(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-white "
                  : isActive
                  ? "text-primary-green underline underline-offset-2 "
                  : "text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={()=>setIsOpen(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-white "
                  : isActive
                  ? "text-primary-green underline underline-offset-2 "
                  : "text-white"
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/portfolio"
              onClick={()=>setIsOpen(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-white "
                  : isActive
                  ? "text-primary-green underline underline-offset-2 "
                  : "text-white"
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              onClick={()=>setIsOpen(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-white "
                  : isActive
                  ? "text-primary-green underline underline-offset-2 "
                  : "text-white"
              }
            >
              Contact us
            </NavLink>
            {/* <NavLink
              to="/join"
              onClick={()=>setIsOpen(false)}
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-white "
                  : isActive
                  ? "text-primary-green underline underline-offset-2 "
                  : "text-white"
              }
            >
              Join our team
            </NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
