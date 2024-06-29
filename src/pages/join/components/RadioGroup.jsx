import React from "react";

const RadioGroup = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  required = false,
}) => (
  <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
    <p className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700] mb-[10px]">
      {label} {required && <span className="text-[#e30000]">*</span>}
    </p>
    <div className="flex flex-col gap-[10px]">
      {options.map((option, index) => (
        <label key={index} className="flex items-center">
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={onChange}
            className="mr-2 accent-[#181818]"
          />
          <span className="text-[#9c9c9c] md:text-[18px] text-[12px]">
            {option}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default RadioGroup;
