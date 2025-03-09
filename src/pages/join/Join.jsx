import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { showToast } from "../../components/toaster";
import { IoCloseSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";
import InputField from "./components/InputField";
import RadioGroup from "./components/RadioGroup";
import Button from "../../components/Button";
import Download from "../../components/Download";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";
import validator from "validator";

const baseUrl = import.meta.env.VITE_API_URL;

const skills = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Product/Project Management",
  "Illustration",
  "Graphic Design",
];

const experiences = ["Novice", "Intermediate", "Advanced", "Expert"];
const commitments = ["Yes", "No", "Maybe"];

const Join = ({ className, formClass, inputClass }) => {
  const [formattedBirthdate, setFormattedBirthdate] = useState("");
  const [formEntries, setFormEntries] = useState({
    certificate: "",
    email: "",
    full_name: "",
    twitter_handle: "",
    linkedin: "",
    github_link: "",
    skill: "",
    experience: "",
    about_skill: "",
    commitment: false,
    birthdate: { month: "", day: "" },
  });

  const [validity, setValidity] = useState({
    email: null,
    full_name: null,
    twitter_handle: null,
    linkedin: null,
    github_link: null,
    about_skill: null,
    birthdate: null,
    skill: null,
    experience: null,
    commitment: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState({ type: "", message: "" });
  const [isShaking, setIsShaking] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
  const validateUrl = (url) => {
    return validator.isURL(url);
  };

  const validateBirthdate = (month, day) => {
    const monthNum = parseInt(month, 10);
    const dayNum = parseInt(day, 10);
    return (
      !isNaN(monthNum) &&
      !isNaN(dayNum) &&
      monthNum >= 1 &&
      monthNum <= 12 &&
      dayNum >= 1 &&
      dayNum <= 31
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;

    if (name === "email") isValid = validateEmail(value);
    if (name === "twitter_handle" || name === "linkedin") isValid = validateUrl(value);
  
    // Validate GitHub link only if it's provided
    if (name === "github_link" && value !== "") isValid = validateUrl(value);

    if (name.includes("birthdate")) {
      const [field, part] = name.split("-");
      const formattedValue = value.padStart(2, "0");
      const newBirthdate = { ...formEntries.birthdate, [part]: formattedValue };
      isValid = validateBirthdate(newBirthdate.month, newBirthdate.day);
      const birthdateFormatted = `1990-${newBirthdate.month}-${newBirthdate.day}`;

      setFormEntries((prevVals) => ({
        ...prevVals,
        birthdate: newBirthdate,
      }));
      setFormattedBirthdate(isValid ? birthdateFormatted : "");
      setValidity((prevVal) => ({ ...prevVal, birthdate: isValid }));
    } else {
      setFormEntries((prevVal) => ({ ...prevVal, [name]: value }));
      setValidity((prevVal) => ({ ...prevVal, [name]: isValid }));
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "commitment" && newValue === "Maybe") {
      newValue = "No";
    }
    let isValid = true;
    setFormEntries((prevVal) => ({ ...prevVal, [name]: newValue }));
    setValidity((prevVal) => ({ ...prevVal, [name]: isValid }));
  };

  const handleFileSelect = (file) => {
    setFormEntries((prevVal) => ({ ...prevVal, certificate: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validity.twitter_handle) {
      showToast("Invalid Twitter URL format", "error");
      return;
    }

    if (!validity.linkedin) {
      showToast("Invalid Linkedin URL format", "error");
      return;
    }
    const isValid = Object.values(validity).every((v) => v !== false);

    // Ensure skill and experience are not empty
    if (!formEntries.skill || !formEntries.experience) {
      showToast("Please select a skill and experience level.", "error");
      return;
    }

    if (
      !isValid ||
      Object.entries(formEntries).some(([key, value]) => {
        return (
          value === "" && key !== "certificate" && key !== "github_link"
        );
      })
    ) {
      showToast("Please fill out all required fields correctly.", "error");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    const formData = new FormData();
    for (const [key, value] of Object.entries(formEntries)) {
      if (key !== "birthdate") {
        formData.append(key, value);
      } else {
        formData.append("birthdate", formattedBirthdate);
      }
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${baseUrl}/internship/register/entry/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setIsLoading(false);
      setFormEntries({
        certificate: "",
        email: "",
        full_name: "",
        twitter_handle: "",
        linkedin: "",
        github_link: "",
        skill: "",
        experience: "",
        about_skill: "",
        commitment: false,
        birthdate: { month: "", day: "" },
      });
      setModalMessage({
        type: "success",
        message: response?.data?.detail,
      });
    } catch (error) {
      setIsLoading(false);
      setModalMessage({
        type: "error",
        message: "Application Failed! Please try again.",
      });
    }
  };

  return (
    <div
      className={twMerge(
        `flex flex-col justify-center items-center min-h-screen font-satoshi`,
        className
      )}
    >
      <div className="flex flex-col justify-center items-center bg-[#181818]  max-w-[720px] w-full p-5 rounded-[12px]">
        <p className="md:text-[36px] text-[16px] font-[700] text-[#ffffff]">
          TCU 3.0 Entry Form
        </p>
        <p className="md:text-[20px] text-[10px] font-[400] text-[#9c9c9c]">
          Please answer all the questions, it will help us know you better.
          Compulsory questions are indicated with{" "}
          <span className="text-[#e30000]">*</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={twMerge(
          `flex flex-col mt-[20px] bg-[#121212] p-[20px] rounded-[12px] w-full max-w-[763px]`,
          formClass
        )}
      >
        <div className="flex flex-col gap-[20px]">
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formEntries.email}
            onChange={handleChange}
            placeholder="Eg samplemail1234@gmail.com"
            isValid={validity.email}
            required
            inputClass={inputClass}
          />
          <InputField
            label="Fullname"
            name="full_name"
            value={formEntries.full_name}
            onChange={handleChange}
            placeholder="Eg John Doe"
            isValid={validity.full_name}
            required
            inputClass={inputClass}
          />
          <InputField
            label="Twitter Handle (E.g https://x.com/account-name)"
            name="twitter_handle"
            value={formEntries.twitter_handle}
            onChange={handleChange}
            placeholder="E.g https://x.com/account-name"
            isValid={validity.twitter_handle}
            required
            inputClass={inputClass}
          />
          <div className="mb-[20px]">
            <InputField
              label="LinkedIn Profile (E.g https://www.linkedin.com/in/account-name/"
              name="linkedin"
              value={formEntries.linkedin}
              onChange={handleChange}
              placeholder="Eg https://www.linkedin.com/in/account-name/"
              isValid={validity.linkedin}
              required
              inputClass={inputClass}
            />
          </div>
          <div className="mb-[20px]">
            <InputField
              label="Github Profile Link (Optional)"
              name="github_link"
              value={formEntries.github_link}
              onChange={handleChange}
              placeholder="Eg https://www.github.com/account-name/"
              isValid={validity.github_link}
              inputClass={inputClass}
            />
          </div>
        </div>

        <RadioGroup
          label="Skill"
          name="skill"
          options={skills}
          selectedValue={formEntries.skill}
          onChange={handleRadioChange}
          isValid={validity.skill}
          required
        />

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
            Upload a certificate of related field <i>(optional) MAX Size 5MB</i>
            <Download onFileSelect={handleFileSelect} />
          </label>
        </div>
        <div className="mt-[20px]">
          <RadioGroup
            label="Experience (Please be honest)"
            name="experience"
            options={experiences}
            selectedValue={formEntries.experience}
            onChange={handleRadioChange}
            isValid={validity.experience}
            required
            className="mt-[20px]"
          />
        </div>
        <div className="mt-[20px]">
          <InputField
            label="Please tell us what you know about this skill"
            name="about_skill"
            value={formEntries.about_skill}
            onChange={handleChange}
            placeholder="Describe your knowledge"
            isValid={validity.about_skill}
            required
            inputClass={inputClass}
          />
        </div>
        <div className="mt-[20px]">
          <RadioGroup
            label="This project will require your attention, are you willing to be committed? (We really don’t expect an answer that’s not yes)"
            name="commitment"
            options={commitments}
            selectedValue={formEntries.commitment}
            onChange={handleRadioChange}
            isValid={validity.commitment}
            required
          />
        </div>
        <div className="mt-[20px]">
          <InputField
            label="Birthday Date"
            name="birthdate"
            value={formEntries.birthdate}
            onChange={handleChange}
            placeholder="Enter your birth date"
            isValid={validity.birthdate}
            inputClass={inputClass}
          />
        </div>
        <Button
          className={twMerge(
            `w-full bg-[#ffffff] border-[#ffffff] rounded-[4px] mt-[20px] text-[#121212] font-[700] text-[15px]`,
            isShaking ? "shake" : ""
          )}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {modalMessage.message && (
        <Modal
          type={modalMessage.type}
          onClose={() => setModalMessage({ type: "", message: "" })}
        >
          <button
            className="absolute top-3 right-3 text-white text-[20px]"
            onClick={() => setModalMessage({ type: "", message: "" })}
          >
            <IoCloseSharp />
          </button>
          {modalMessage.type === "success" ? (
            <>
              <div className="flex flex-col justify-center align-middle items-center">
                <div className="bg-[#13ba00] text-[#181818] md:h-[83px] md:w-[83px] w-[50px] h-[50px] rounded-[50%] flex justify-center align-middle items-center">
                  <FaCheck size={40} />
                </div>
                <strong className="font-[900] text-[#f8fafc] md:text-[24px] text-[15px] pt-[30px]">
                  Application Submitted
                </strong>
                <p className="font-[400] text-[#f8fafc] md:text-[12px] text-[10px] pt-[15px] px-[50px] md:w-[400px] w-[300px] text-center">
                  Your application has been submitted and we’ll get back to you
                  as soon as possible.
                </p>
                <Link to="https://chat.whatsapp.com/CiPpXYyhtTxLVRkr2zZxlP">
                  <button
                    className="md:w-[480px] h-[51px] w-[250px] bg-[#ffffff] text-[#181818] rounded-[4px] mt-[20px] md:text-[15px] text-[13px] font-[700]"
                    onClick={() => {
                      setModalMessage({ type: "", message: "" });
                    }}
                  >
                    Join Community
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center align-middle items-center">
                <div className="bg-[#ee3300] text-[#181818] md:h-[83px] md:w-[83px] w-[50px] h-[50px] rounded-[50%] flex justify-center align-middle items-center">
                  <IoCloseSharp size={40} />
                </div>
                <strong className="font-[700] text-[#f8fafc] md:text-[24px] text-[15px] pt-[30px]">
                  Application Failed
                </strong>
                <p className="font-[400] text-[#f8fafc] md:text-[12px] text-[10px] pt-[15px] px-[50px] md:w-[400px] w-[300px] text-center">
                  Please check your internet connection or that you filled the
                  form correctly and try again later.
                </p>
                <button
                  className="md:w-[480px] h-[51px] w-[250px] bg-[#ffffff] text-[#181818] rounded-[4px] mt-[20px] md:text-[15px] text-[13px] font-[700]"
                  onClick={() => setModalMessage({ type: "", message: "" })}
                >
                  Try Again
                </button>
              </div>
            </>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Join;
