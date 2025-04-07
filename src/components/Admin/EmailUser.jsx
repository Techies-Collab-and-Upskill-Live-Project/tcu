import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { showToast } from "../../components/toaster";
import InputField from "../../pages/join/components/InputField";
import Button from "../../components/Button";
import { IoAddCircleOutline, IoClose } from "react-icons/io5";

const baseUrl = import.meta.env.VITE_API_URL;

const SuccessEmailForm = ({ className, formClass, inputClass }) => {
  const [recipients, setRecipients] = useState([{ name: "", email: "" }]);

  const [isLoading, setIsLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const validateName = (name) => name.trim() !== "";

  // Check if all recipients have valid info
  const areAllRecipientsValid = () => {
    return recipients.every(
      (recipient) =>
        validateName(recipient.name) && validateEmail(recipient.email)
    );
  };

  // Add new recipient field
  const addRecipient = () => {
    setRecipients([...recipients, { name: "", email: "" }]);
  };

  // Remove a recipient
  const removeRecipient = (index) => {
    if (recipients.length > 1) {
      const newRecipients = [...recipients];
      newRecipients.splice(index, 1);
      setRecipients(newRecipients);
    } else {
      showToast("You need at least one recipient", "error");
    }
  };

  // Handle input changes
  const handleChange = (index, field, value) => {
    const newRecipients = [...recipients];
    newRecipients[index][field] = value;
    setRecipients(newRecipients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!areAllRecipientsValid()) {
      showToast("Please fill out all fields correctly.", "error");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    try {
      setIsLoading(true);

      // Send emails to all recipients
      const response = await axios.post(`${baseUrl}/internship/send-mail/`, {
        recipients,
      });

      setIsLoading(false);
      showToast(
        `Success emails sent to ${recipients.length} recipient(s)!`,
        "success"
      );

      // Reset form to single empty recipient
      setRecipients([{ name: "", email: "" }]);
    } catch (error) {
      setIsLoading(false);
      showToast(
        error.response?.data?.message ||
          "Failed to send emails. Please try again.",
        "error"
      );
    }
  };

  return (
    <div
      className={twMerge(
        `flex flex-col justify-center items-center min-h-screen font-satoshi`,
        className
      )}
    >
      <div className="flex flex-col justify-center items-center bg-[#181818] max-w-[720px] w-full p-5 rounded-[12px]">
        <p className="md:text-[36px] text-[16px] font-[700] text-[#ffffff]">
          TCU 3.0 Send Success Email Form
        </p>
        <p className="md:text-[20px] text-[10px] font-[400] text-[#9c9c9c]">
          Send emails to successful applicants. Required fields are indicated
          with <span className="text-[#e30000]">*</span>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className={twMerge(
          `flex flex-col mt-[20px] bg-[#121212] p-[20px] rounded-[12px] w-full max-w-[763px]`,
          formClass
        )}
      >
        {recipients.map((recipient, index) => (
          <div
            key={index}
            className="mb-6 bg-[#181818] p-4 rounded-[12px] relative"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="text-[#f8fafc] font-semibold">
                Recipient #{index + 1}
              </p>
              {recipients.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRecipient(index)}
                  className="text-[#9c9c9c] hover:text-[#e30000]"
                >
                  <IoClose size={20} />
                </button>
              )}
            </div>

            <div className="flex flex-col gap-[20px]">
              <InputField
                label="Name"
                name={`name-${index}`}
                value={recipient.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder="Eg John"
                isValid={
                  recipient.name === "" ? null : validateName(recipient.name)
                }
                required
                inputClass={inputClass}
              />

              <InputField
                label="Email"
                name={`email-${index}`}
                type="email"
                value={recipient.email}
                onChange={(e) => handleChange(index, "email", e.target.value)}
                placeholder="Eg samplemail1234@gmail.com"
                isValid={
                  recipient.email === "" ? null : validateEmail(recipient.email)
                }
                required
                inputClass={inputClass}
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addRecipient}
          className="flex items-center justify-center gap-2 text-[#9c9c9c] hover:text-[#ffffff] py-2 w-full border border-dashed border-[#9c9c9c] rounded-[8px] mt-4 mb-4"
        >
          <IoAddCircleOutline size={20} />
          <span>Add Another Recipient</span>
        </button>

        <Button
          className={twMerge(
            `w-full bg-[#ffffff] border-[#ffffff] rounded-[4px] mt-[20px] text-[#121212] font-[700] text-[15px]`,
            isShaking ? "shake" : ""
          )}
        >
          {isLoading
            ? "Sending..."
            : `Send Success ${recipients.length > 1 ? "Emails" : "Email"}`}
        </Button>
      </form>
    </div>
  );
};

export default SuccessEmailForm;
