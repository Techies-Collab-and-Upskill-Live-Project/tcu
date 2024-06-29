import React from "react";
import { twMerge } from "tailwind-merge";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  isValid,
  required = false,
  inputClass,
}) => (
  <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
    <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
      {label} {required && <span className="text-[#e30000]">*</span>}
      {name === "birthdate" ? (
        <DatePicker
          selected={value ? new Date(value) : null}
          onChange={onChange}
          placeholderText={placeholder}
          showYearDropdown
          showMonthDropdown
          showDayDropdown
          dateFormat="YYYY-MM-dd"
          className={twMerge(
            `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none placeholder-[#4d4d4d]`,
            isValid === null
              ? "border-[#4d4d4d]"
              : isValid
              ? "border-green-500"
              : "border-red-500",
            inputClass
          )}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={twMerge(
            `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none placeholder-[#4d4d4d]`,
            isValid === null
              ? "border-[#4d4d4d]"
              : isValid
              ? "border-green-500"
              : "border-red-500",
            inputClass
          )}
        />
      )}
    </label>
  </div>
);

export default InputField;
