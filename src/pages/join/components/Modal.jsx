import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const Modal = ({ type, children, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-[#181818] text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-6 rounded-lg ">
          {children}
          {/* <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="text-[#ffffff] bg-[#121212] px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
