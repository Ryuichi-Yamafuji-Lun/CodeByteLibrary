import { useState } from "react";
import PrivacyPolicy from "../pages/policy/PrivacyPolicy.jsx";
import AccessPolicy from "../pages/policy/AccessPolicy.jsx";

const Footer = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isAccessPolicyOpen, setIsAccessPolicyOpen] = useState(false);

  const openPrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(true);
  };

  const closePrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(false);
  };

  const openAccessPolicy = () => {
    setIsAccessPolicyOpen(true);
  };

  const closeAccessPolicy = () => {
    setIsAccessPolicyOpen(false);
  };

  return (
    <div className="bg-white text-black p-4 flex flex-col items-center justify-center">
      <div className="flex-grow"></div>
      <div className="p-4 flex justify-center text-sm">
        <button onClick={openPrivacyPolicy} className="mr-2">Privacy Policy</button> 
        <span>|</span>
        <button onClick={openAccessPolicy} className="ml-2">Access Policy</button>
      </div>
      {isPrivacyPolicyOpen && (
        <PrivacyPolicy closePrivacyPolicy={closePrivacyPolicy} />
      )}
      {isAccessPolicyOpen && (
        <AccessPolicy closeAccessPolicy={closeAccessPolicy} />
      )}
    </div>
  );
}

export default Footer
