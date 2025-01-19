import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const Button = ({ className, children, onclick, disabled }) => {
  return (
    <button
    disabled={disabled}
      onClick={onclick}
      className={twMerge(
        "bg-transparent border-[2px] border-primary-green text-primary-green rounded-[44px] py-[14px] px-[32px] text-[20px] font-[700] leading-[27px] tracking-[1%]",
        className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onclick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
