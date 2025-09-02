// src/components/OTPInput.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

const OTPInput = ({ length = 6, onOTPChange, className }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputs = useRef([]);

  useEffect(() => {
    if (inputs.current[0]) {
      inputs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    onOTPChange(newOtp.join(''));

    // Move to next input
    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, length);
    if (isNaN(pastedData)) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      if (i < length) {
        newOtp[i] = pastedData[i];
      }
    }
    setOtp(newOtp);
    onOTPChange(newOtp.join(''));
    
    // Focus on the next empty field or the last field
    const nextIndex = pastedData.length < length ? pastedData.length : length - 1;
    inputs.current[nextIndex].focus();
  };

  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      {otp.map((digit, index) => (
        <Input
          key={index}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          ref={(el) => (inputs.current[index] = el)}
          className="w-12 h-12 text-xl text-center"
        />
      ))}
    </div>
  );
};

export default OTPInput;