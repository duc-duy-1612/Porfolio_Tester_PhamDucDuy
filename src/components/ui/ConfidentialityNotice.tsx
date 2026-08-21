import { Info } from "lucide-react";

interface ConfidentialityNoticeProps {
  message?: string;
}

export function ConfidentialityNotice({ 
  message = "Selected business and product details have been anonymised due to confidentiality." 
}: ConfidentialityNoticeProps) {
  return (
    <div className="confidentiality-banner">
      <Info aria-hidden="true" size={20} className="confidentiality-banner__icon" />
      <p>{message}</p>
    </div>
  );
}
