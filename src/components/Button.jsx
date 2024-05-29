import { twMerge } from "tailwind-merge";

const Button = ({ className, children }) => {
  return (
    <button
      className={twMerge(
        "bg-primary-green text-white rounded-[44px] py-[12px] px-[27px] text-[18px] font-[700] leading-[24.3px] tracking-[1%]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
