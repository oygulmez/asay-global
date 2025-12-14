"use client";

import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
  onExpired?: () => void;
}

export function ReCaptcha({ onChange, onExpired }: ReCaptchaProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey="6LcjqissAAAAAOS0ut83viHkG1DVn01_Zye4srZP"
      onChange={onChange}
      onExpired={onExpired}
      theme="light"
    />
  );
}

