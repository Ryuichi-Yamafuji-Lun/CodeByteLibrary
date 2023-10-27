import { FaTimes } from "react-icons/fa";

const PrivacyPolicy = ({ closePrivacyPolicy }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">
      <div className="w-[600px] p-4 rounded-lg bg-gray-900 relative">
        <button onClick={closePrivacyPolicy} className="absolute top-2 right-2 text-gray-500 hover:text-white">
          <FaTimes />
        </button>
        <p className="text-center text-lg font-bold">Privacy Policy</p>
        <div className="p-2 space-y-4">
          <p className="text-2xl">1. Introduction</p>
          <p>
            Welcome to CodeByte Library. We are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the personal information you provide to us when you access and use our e-commerce website. By accessing or using our website, you consent to the practices described in this Privacy Policy.
          </p>
          <p className="text-2xl">2. Information We Collect</p>
          <p>2.1. Personal Information: We may collect personal information that you provide to us when you make a purchase or create an account. This may include your name, email address, shipping address, and payment information.</p>
          <p>2.2. Usage Information: We may collect information about how you interact with our website, including your IP address, browser type, device information, and website usage data.</p>
          <p className="text-2xl">3. Contact Us</p>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us via the contact form.</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy
