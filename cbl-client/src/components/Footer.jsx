import { useState } from "react";

// Policies
import PrivacyPolicy from "../pages/policy/PrivacyPolicy.jsx";
import AccessPolicy from "../pages/policy/AccessPolicy.jsx";
import SitePolicy from "../pages/policy/SitePolicy.jsx";

const Footer = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isAccessPolicyOpen, setIsAccessPolicyOpen] = useState(false);
  const [isSitePolicyOpen, setIsSitePolicyOpen] = useState(false);

  const openPrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(true);
  };

  const openAccessPolicy = () => {
    setIsAccessPolicyOpen(true);
  };


  const openSitePolicy = () => {
    setIsSitePolicyOpen(true);
  };

  const closePolicy = () => {
    setIsPrivacyPolicyOpen(false);
    setIsAccessPolicyOpen(false);
    setIsSitePolicyOpen(false);
  };

  return (
    <div className="bg-white text-black p-4 flex flex-col items-center justify-center">
      <div className="flex-grow"></div>
      <div className="p-4 flex justify-center text-sm">
        <button onClick={openPrivacyPolicy}>Privacy Policy</button> 
        <span className="m-2">|</span>
        <button onClick={openAccessPolicy} >Access Policy</button>
        <span className="m-2">|</span>
        <button onClick={openSitePolicy}>Site Policy</button>
      </div>
      {isPrivacyPolicyOpen && (
        <PrivacyPolicy closePrivacyPolicy={closePolicy} />
      )}
      {isAccessPolicyOpen && (
        <AccessPolicy closeAccessPolicy={closePolicy} />
      )}
      {isSitePolicyOpen && (
        <SitePolicy closeSitePolicy={closePolicy} />
      )}
    </div>
  );
}

export default Footer
