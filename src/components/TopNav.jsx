import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const TopNav = () => {
  return (
    <nav className="fixed top-0 px-[104px] h-[105px] w-full flex items-center bg-[#121212 bg-transparent z-20 font-satoshi  backdrop-blur-md">
      <div className="w-full flex justify-between items-center ">
        <img src={logo} alt="logo" className="lg:w-[41px] lg:h-[53.66px] " />
        {/* Links */}
        <div className="flex gap-x-[49px] font-[700] text-[16px] leading-[27px] tracking-[1%]">
          <NavLink
            to="/"
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
            to="/count"
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
          <NavLink
            to="/join"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-white "
                : isActive
                ? "text-primary-green underline underline-offset-2 "
                : "text-white"
            }
          >
            Join our team
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
