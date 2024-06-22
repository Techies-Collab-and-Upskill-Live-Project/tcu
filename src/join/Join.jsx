import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../components/Button';

const skills = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Product/Project Management",
  "Illustration",
  "Graphic Design"
];

const experiences = [
  "Novice",
  "Intermediate",
  "Advanced",
  "Expert"
];

const commitments = [
  "Yes",
  "No",
  "Maybe"
];

const Join = ({
  className,
  descClass,
  formClass,
  inputClass,
  textAreaClass,
}) => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedCommitment, setSelectedCommitment] = useState('');

  const handleSkillChange = (event) => setSelectedSkill(event.target.value);
  const handleExperienceChange = (event) => setSelectedExperience(event.target.value);
  const handleCommitmentChange = (event) => setSelectedCommitment(event.target.value);

  return (
    <div className={twMerge(`flex flex-col justify-center items-center min-h-screen`, className)}>
      <div className="flex flex-col justify-center items-center bg-[#181818] w-full max-w-[763px] p-5 rounded-[12px]">
        <p className="md:text-[36px] text-[16px] font-[700] text-[#ffffff]">TCU 2.0 Entry Form</p>
        <p className="md:text-[20px] text-[10px] font-[400] text-[#9c9c9c]">
          Please answer all the questions, it will help us know you better. Compulsory questions are indicated with <span className="text-[#e30000]">*</span>
        </p>
      </div>

      <form className={twMerge(`flex flex-col mt-[20px] bg-[#121212] p-[20px] rounded-[12px] w-full max-w-[763px]`, formClass)}>
        <div className="flex flex-col gap-[20px]">
          <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
            <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
              Email <span className="text-[#e30000]">*</span>
              <input
                type="email"
                placeholder="Eg samplemail1234@gmail.com"
                className={twMerge(`bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`, inputClass)}
              />
            </label>
          </div>
          <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
            <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
              Fullname <span className="text-[#e30000]">*</span>
              <input
                type="text"
                placeholder="Eg John Doe"
                className={twMerge(`bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`, inputClass)}
              />
            </label>
          </div>
          <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
            <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
              Twitter <span className="text-[#e30000]">*</span>
              <input
                type="text"
                placeholder="Eg https://x.com/account-name"
                className={twMerge(`bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`, inputClass)}
              />
            </label>
          </div>
          <div className="bg-[#181818] w-full rounded-[12px] p-[20px]">
            <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
              LinkedIn <span className="text-[#e30000]">*</span>
              <input
                type="text"
                placeholder="Eg https://linkedin.com/account-name"
                className={twMerge(`bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`, inputClass)}
              />
            </label>
          </div>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <p className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700] mb-[10px]">Skill <span className="text-[#e30000]">*</span></p>
          <div className="flex flex-col gap-[10px]">
            {skills.map((skill, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="skill"
                  value={skill}
                  checked={selectedSkill === skill}
                  onChange={handleSkillChange}
                  className="mr-2"
                />
                <span className="text-[#9c9c9c] md:text-[15px] text-[12px]">{skill}</span>
              </label>
            ))}
            <input
              type="text"
              placeholder="Not mentioned? Type it out"
              className='bg-[#181818] text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none'
            />
          </div>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <p className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700] mb-[10px]">Experience (Please be honest) <span className="text-[#e30000]">*</span></p>
          <div className="flex flex-col gap-[10px]">
            {experiences.map((experience, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value={experience}
                  checked={selectedExperience === experience}
                  onChange={handleExperienceChange}
                  className="mr-2"
                />
                <span className="text-[#9c9c9c] md:text-[15px] text-[12px]">{experience}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
            Please tell us what you know about this skill <span className="text-[#e30000]">*</span>
            <input
              type="text"
              placeholder="Describe your knowledge"
              className={twMerge(`bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`, inputClass)}
            />
          </label>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <p className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700] mb-[10px]">This project will require your attention, are you willing to be committed? (We really don’t expect an answer that’s not yes) <span className="text-[#e30000]">*</span></p>
          <div className="flex flex-col gap-[10px]">
            {commitments.map((commitment, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="commitment"
                  value={commitment}
                  checked={selectedCommitment === commitment}
                  onChange={handleCommitmentChange}
                  className="mr-2"
                />
                <span className="text-[#9c9c9c] md:text-[15px] text-[12px]">{commitment}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-[#181818] w-full rounded-[12px] p-[20px] mt-[20px]">
          <label className="text-[#9c9c9c] md:text-[18px] text-[12px] font-[700]">
            Birthday Date (optional) <span className="text-[#e30000]">*</span>
            <input
              type="text"
              placeholder="Enter your birth date"
              className={twMerge(`bg-[#181818] w-full text-[#4d4d4d] p-[10px] border-b-[2px] border-[#4d4d4d] outline-none`, inputClass)}
            />
          </label>
        </div>

        <Button className="w-full bg-[#ffffff] rounded-[4px] mt-[20px] text-[#121212] font-[700] text-[15px]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Join;
