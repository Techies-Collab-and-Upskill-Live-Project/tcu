import { twMerge } from "tailwind-merge";

const Button = ({ className, children, onclick }) => {
  return (
    <button
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

export default Button;
