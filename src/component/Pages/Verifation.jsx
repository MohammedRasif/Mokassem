"use client";

import { useState, useRef, useEffect } from "react";
import img from "../../image/Group.png";

export default function Verification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Initialize refs for each input
    inputRefs.current = inputRefs.current.slice(0, otp.length);
  }, [otp.length]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[0-9]/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input if a digit is entered and it's not the last input
      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus to the previous input on backspace if current is empty
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    const digits = pasteData.replace(/\D/g, "").slice(0, otp.length); // Get only digits, max 6

    const newOtp = [...otp];
    for (let i = 0; i < otp.length; i++) {
      newOtp[i] = digits[i] || "";
    }
    setOtp(newOtp);

    // Move focus to the last input if all digits are pasted
    if (digits.length === otp.length) {
      inputRefs.current[otp.length - 1].focus();
    } else if (digits.length > 0) {
      inputRefs.current[digits.length - 1].focus();
    }
  };

  const handleVerify = () => {
    const fullOtp = otp.join("");
    console.log("Verifying OTP:", fullOtp);
    // Add your verification logic here
    alert(`Verifying code: ${fullOtp}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bg-start to-dark-bg-end p-4 bg-black">
      <div className="w-full max-w-xl bg-card-bg text-white border border-border-dark rounded-lg shadow-lg bg-gradient-to-br from-gray-700/50 via-gray-700 to-gray-700/50">
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-3xl font-bold">
            {/* EARTH AI-Q logo/text */}
            <img src={img} alt="" />
            <span>EARTH AI-Q</span>
          </div>
          <h1 className="text-3xl font-semibold py-3 pt-7">Check your Mail</h1>
          <p className="text-text-dark-grey">
            A 6-digit code has been sent to your email{" "}
            <span className="text-white">username@gmail.com</span> Make sure you
            enter correct code.
          </p>
        </div>
        <div className="p-6 pt-0 space-y-6">
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined} // Only allow paste on the first input
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center text-2xl font-bold rounded-md border border-border-dark bg-input-bg text-white focus:outline-none focus:ring-0 focus:border-blue-primary"
              />
            ))}
          </div>
          <button
            onClick={handleVerify}
            className="w-full h-12 bg-blue-primary hover:bg-blue-hover text-white font-semibold  rounded-md bg-blue-600 text-xl cursor-pointer "
          >
            Verify
          </button>
        </div>
        <div className="p-6 pt-0 text-center text-sm text-text-dark-grey">
          Don't receive code?{" "}
          <a href="#" className="text-blue-primary hover:underline">
            Send again
          </a>
        </div>
      </div>
    </div>
  );
}
