import { useState } from "react";

// Policies
import PrivacyPolicy from "../pages/policy/PrivacyPolicy.jsx";
import AccessPolicy from "../pages/policy/AccessPolicy.jsx";
import SitePolicy from "../pages/policy/SitePolicy.jsx";

// Other Components
import ContactForm from "./ContactForm.jsx";

const Footer = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isAccessPolicyOpen, setIsAccessPolicyOpen] = useState(false);
  const [isSitePolicyOpen, setIsSitePolicyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openPrivacyPolicy = () => {
    setIsPrivacyPolicyOpen(true);
  };

  const openAccessPolicy = () => {
    setIsAccessPolicyOpen(true);
  };


  const openSitePolicy = () => {
    setIsSitePolicyOpen(true);
  };

  const openContactForm = () => {
    setIsContactOpen(true);
  };

  const closePage = () => {
    setIsPrivacyPolicyOpen(false);
    setIsAccessPolicyOpen(false);
    setIsSitePolicyOpen(false);
    setIsContactOpen(false);
  };

  return (
    <div className="bg-white text-black p-4 flex flex-col items-center justify-center">
      <div className="flex-grow">
      </div>
      <div className="p-4 flex justify-center text-sm">
        <button onClick={openPrivacyPolicy} className="hover:text-secondary-color">Privacy Policy</button> 
        <span className="m-2">|</span>
        <button onClick={openAccessPolicy} className="hover:text-secondary-color">Access Policy</button>
        <span className="m-2">|</span>
        <button onClick={openSitePolicy} className="hover:text-secondary-color">Site Policy</button>
        <span className="m-2">|</span>
        <button onClick={openContactForm} className="hover:text-secondary-color">Contact Us</button>
      </div>
      {isPrivacyPolicyOpen && (
        <PrivacyPolicy closePrivacyPolicy={closePage} />
      )}
      {isAccessPolicyOpen && (
        <AccessPolicy closeAccessPolicy={closePage} />
      )}
      {isSitePolicyOpen && (
        <SitePolicy closeSitePolicy={closePage} />
      )}
      {isContactOpen && (
        <ContactForm closeContactForm={closePage} />
      )}
    </div>
  );
}

export default Footer
