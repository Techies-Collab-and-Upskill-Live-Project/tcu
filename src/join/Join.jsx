import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../components/Button";
import Download from "../components/Download";
import axios from "axios";
import { toast } from "sonner";

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

const Join = ({
  className,
  descClass,
  formClass,
  inputClass,
  textAreaClass,
}) => {
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

  const [isLoading, setIsLoading] = useState(false);

  const handleSkillChange = (event) => {
    console.log(event.target.value);
    setFormEntries((prevVals) => ({ ...prevVals, skill: event.target.value }));
  };

  const handleExperienceChange = (event) => {
    console.log(event.target.value);
    setFormEntries((prevVals) => ({
      ...prevVals,
      experience: event.target.value,
    }));
  };
  const handleCommitmentChange = (event) => {
    if (event.target.value === "Yes") {
      setFormEntries((prevVals) => ({ ...prevVals, commitment: true }));
    } else {
      setFormEntries((prevVals) => ({ ...prevVals, commitment: false }));
    }
  };

  const baseUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formEntries);
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${baseUrl}/internship/register/entry`,
        { formEntries }
      );
      setIsLoading(false);
      console.log(response);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEntries((prevVal) => ({ ...prevVal, [name]: value }));
  };

  return (
    <div
      className={twMerge(
        `flex flex-col justify-center items-center min-h-screen`,
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
          {/* Email */}
          <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
            <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
              Email <span className="text-[#e30000]">*</span>
              <input
                required
                type="email"
                name="email"
                onChange={handleChange}
                value={formEntries.email}
                placeholder="Eg samplemail1234@gmail.com"
                className={twMerge(
                  `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`,
                  inputClass
                )}
              />
            </label>
          </div>
          {/* Full name */}
          <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
            <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
              Fullname <span className="text-[#e30000]">*</span>
              <input
                type="text"
                name="full_name"
                required
                onChange={handleChange}
                value={formEntries.full_name}
                placeholder="Eg John Doe"
                className={twMerge(
                  `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`,
                  inputClass
                )}
              />
            </label>
          </div>
          {/* Twitter */}
          <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
            <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
              Twitter <span className="text-[#e30000]">*</span>
              <input
                type="text"
                name="twitter_handle"
                onChange={handleChange}
                value={formEntries.twitter_handle}
                placeholder="Eg https://x.com/account-name"
                className={twMerge(
                  `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`,
                  inputClass
                )}
              />
            </label>
          </div>
          {/* Linkedin */}
          <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
            <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
              LinkedIn <span className="text-[#e30000]">*</span>
              <input
                type="text"
                name="linkedin"
                onChange={handleChange}
                value={formEntries.linkedin}
                placeholder="Eg https://linkedin.com/account-name"
                className={twMerge(
                  `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`,
                  inputClass
                )}
              />
            </label>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <p className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700] mb-[10px]">
            Skill <span className="text-[#e30000]">*</span>
          </p>
          {/* Skill */}
          <div className="flex flex-col gap-[10px]">
            {skills.map((skill, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="skill"
                  // disabled={formEntries.skill}
                  value={skill}
                  checked={formEntries.skill === skill}
                  onChange={handleSkillChange}
                  className="mr-2 accent-[#181818]"
                />
                <span className="text-[#9c9c9c] md:text-[15px] text-[12px]">
                  {skill}
                </span>
              </label>
            ))}
            <input
              type="text"
              name="skill"
              // disabled={formEntries.skill}
              placeholder="Not mentioned? Type it out"
              value={formEntries.skill}
              onChange={(e) =>
                setFormEntries((prevVals) => ({
                  ...prevVals,
                  skill: e.target.value,
                }))
              }
              className="bg-[#181818] text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none"
            />
          </div>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
            Upload a certificate of related field <i>(optional)</i>
            {/* <input
              type="text"
              placeholder="Enter your birth date"
              className={twMerge(`bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`, inputClass)}
            /> */}
            <Download />
          </label>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <p className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700] mb-[10px]">
            Experience (Please be honest){" "}
            <span className="text-[#e30000]">*</span>
          </p>
          {/* Exprience */}
          <div className="flex flex-col gap-[10px]">
            {experiences.map((experience, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  required
                  value={experience}
                  // checked={selectedExperience === experience}
                  onChange={handleExperienceChange}
                  className="mr-2 accent-[#181818]"
                />
                <span className="text-[#9c9c9c] md:text-[15px] text-[12px]">
                  {experience}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
            Please tell us what you know about this skill{" "}
            <span className="text-[#e30000]">*</span>
            <input
              type="text"
              placeholder="Describe your knowledge"
              name="about_skill"
              required
              onChange={handleChange}
              value={formEntries.about_skill}
              className={twMerge(
                `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`,
                inputClass
              )}
            />
          </label>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <p className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700] mb-[10px]">
            This project will require your attention, are you willing to be
            committed? (We really don’t expect an answer that’s not yes){" "}
            <span className="text-[#e30000]">*</span>
          </p>
          <div className="flex flex-col gap-[10px]">
            {commitments.map((commitment, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="commitment"
                  value={commitment}
                  // checked={selectedCommitment === commitment}
                  onChange={handleCommitmentChange}
                  className="mr-2 accent-[#181818]"
                />
                <span className="text-[#9c9c9c] md:text-[15px] text-[12px]">
                  {commitment}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
            Birthday Date <i>(optional)</i>
            <input
              type="text"
              name="birthdate"
              value={formEntries.birthdate}
              onChange={handleChange}
              placeholder="Enter your birth date"
              className={twMerge(
                `bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`,
                inputClass
              )}
            />
          </label>
        </div>

        <Button  disabled={isLoading}  className="w-full bg-[#ffffff] rounded-[4px] mt-[20px] text-[#121212] font-[700] text-[15px]">
          {isLoading ? "Submitting..." : "  Submit"}
        </Button>
      </form>
    </div>
  );
};

export default Join;
