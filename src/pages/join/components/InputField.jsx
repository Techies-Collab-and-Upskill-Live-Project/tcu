import React from "react";
import { twMerge } from "tailwind-merge";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

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
        <div className="flex space-x-2">
          <select
            name={`${name}-month`}
            onChange={onChange}
            className={twMerge(
              `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none placeholder-[#4d4d4d]`,
              isValid === null
                ? "border-[#4d4d4d]"
                : isValid
                ? "border-green-500"
                : "border-red-500",
              inputClass
            )}
          >
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
          <select
            name={`${name}-day`}
            onChange={onChange}
            className={twMerge(
              `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none placeholder-[#4d4d4d]`,
              isValid === null
                ? "border-[#4d4d4d]"
                : isValid
                ? "border-green-500"
                : "border-red-500",
              inputClass
            )}
          >
            <option value="">Day</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
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
