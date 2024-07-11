import React, { useState } from "react";
import { GoUpload } from "react-icons/go";
import { showToast } from "./toaster";

const allowedExtensions = ["jpeg", "png", "pdf", "docx"];

const Download = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState("");
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      const fileSize = file.size;
      // Check file extension
      if (!allowedExtensions.includes(fileExtension)) {
        showToast(
          "Invalid file type. Allowed types are: .jpeg, .png, .pdf, .docx",
          "error"
        );
        return;
      }

      // Check file size
      if (fileSize > maxSize) {
        showToast("File size exceeds 5MB limit.", "error");
        return;
      }

      setFileName(file.name);
      onFileSelect(file);
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
        .jpeg, .png, .pdf, .docx
      </p>
    </div>
  );
};

export default Download;
