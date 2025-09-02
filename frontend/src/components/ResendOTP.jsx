import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ResendOTP = ({ onResend, className }) => {
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
    onResend();
    setTimer(60);
    setCanResend(false);
  };

  return (
    <div className={`text-center ${className}`}>
      {canResend ? (
        <Button variant="link" onClick={handleResend} className="p-0">
          Resend OTP
        </Button>
      ) : (
        <p className="text-sm text-muted-foreground">
          Resend OTP in {timer} seconds
        </p>
      )}
    </div>
  );
};

export default ResendOTP;