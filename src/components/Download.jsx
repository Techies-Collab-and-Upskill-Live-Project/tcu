import React, { useState } from "react";
import { GoUpload } from "react-icons/go";

const Download = () => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log(file.name);
    }
  };

  return (
    <div className="w-96 Satoshi pt-[20px]">
      <label>
        <div className="flex justify-center items-center md:gap-[1rem] gap-[0.5rem] cursor-pointer border-[2px] border-[#13BA00] md:w-[168px] md:h-[51px] w-[91px] h-[32px] rounded-[12px]">
          <GoUpload className="text-[#13BA00] md:h-[20px] md:w-[20px] w-[14px] h-[14px]" />
          <p className="md:text-[20px] text-[12px] font-[700] text-[#13BA00]">
            Add File
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>
      {fileName && (
        <p className="md:text-[20px] text-[12px] font-[400] text-[#4D4D4D] pt-[20px]">
          File: {fileName}
        </p>
      )}
      <p className="md:text-[20px] text-[12px] font-[400] text-[#4D4D4D] pt-[20px]">
        .Jpeg, .png, .pdf, .docx
      </p>
    </div>
  );
};

export default Download;
