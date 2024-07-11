import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import axios from "axios";
// import { toast } from "sonner";
import { showToast } from "../../components/toaster";
import { IoCloseSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputField from "./components/InputField";
import RadioGroup from "./components/RadioGroup";
import Button from "../../components/Button";
import Download from "../../components/Download";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

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
  const [formEntries, setFormEntries] = useState({
    certificate: "",
    email: "",
    full_name: "",
    twitter_handle: "",
    linkedin: "",
    skill: "",
    experience: "",
    about_skill: "",
    commitment: false,
    birthdate: "",
  });

  const [validity, setValidity] = useState({
    email: null,
    full_name: null,
    twitter_handle: null,
    linkedin: null,
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
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.?)+[a-zA-Z]{2,})" + // domain name
        "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-zA-Z\\d_]*)?$", // fragment locator
      "i"
    );
    return !!urlPattern.test(url);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;

    if (name === "email") isValid = validateEmail(value);
    if (name === "twitter_handle" || name === "linkedin")
      isValid = validateUrl(value);

    setFormEntries((prevVal) => ({ ...prevVal, [name]: value }));
    setValidity((prevVal) => ({ ...prevVal, [name]: isValid }));
  };

  const handleDateChange = (date) => {
    const isValid = date !== "";
    setFormEntries((prevVals) => ({
      ...prevVals,
      birthdate: date ? date.toISOString().slice(0, 10) : "",
    }));
    setValidity((prevVal) => ({ ...prevVal, birthdate: isValid }));
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

    if (!validity.linkedin | !validity.twitter_handle) {
      showToast("Invalid Linkedin URL format", "error");
      return;
    }
    const isValid = Object.values(validity).every((v) => v);
    if (
      !isValid ||
      Object.values(formEntries).some(
        (val) =>
          val === "" &&
          val !== formEntries.birthdate &&
          val !== formEntries.certificate
      )
    ) {
      showToast("Please fill out all required fields correctly.", "error");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    const formData = new FormData();
    for (const [key, value] of Object.entries(formEntries)) {
      formData.append(key, value);
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
      setModalMessage({
        type: "success",
        message: "Application Submitted Successfully!",
      });
    } catch (error) {
      console.log("error", error);
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
          TCU 2.0 Entry Form
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
            onChange={handleDateChange}
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
                <Link to="https://www.linkedin.com/company/techies-collab-and-upskill-on-live-project/">
                  <button
                    className="md:w-[480px] h-[51px] w-[250px] bg-[#ffffff] text-[#181818] rounded-[4px] mt-[20px] md:text-[15px] text-[13px] font-[700]"
                    onClick={() => {
                      setModalMessage({ type: "", message: "" });
                    }}
                  >
                    Now follow us on our socials
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
