import { FaTimes } from "react-icons/fa";

const SitePolicy = ({ closeSitePolicy }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">
      <div className="w-[600px] p-4 rounded-lg bg-background-main relative max-h-[80vh] overflow-y-auto">
        <button onClick={closeSitePolicy} className="absolute top-2 right-2 text-gray-500 hover:text-white">
          <FaTimes />
        </button>
        <p className="text-center text-lg font-bold">Site Policy</p>
        <div className="p-2 space-y-4">
          <p>Last updated: [10/30/2023]</p>
          <ol>
            <li>
              <h2>1. Introduction</h2>
              <p>
                Welcome to CodeByte. Our Site Policy outlines the rules, guidelines, and expectations for users who visit and interact with our website. By accessing and using our website, you agree to comply with the terms and conditions described in this Site Policy.
              </p>
            </li>
            <li>
              <h2>2. User Conduct</h2>
              <ul>
                <li>
                  <p>2.1. Respectful Behavior: We expect all users to engage with our website and its community respectfully. This includes refraining from any behavior that is offensive, discriminatory, or harmful to others.</p>
                </li>
                <li>
                  <p>2.2. Content Contributions: If our website allows users to submit content, such as reviews or comments, you are responsible for the content you post. Content must not violate our terms and conditions, infringe on the rights of others, or contain malicious or misleading information.</p>
                </li>
              </ul>
            </li>
            <li>
              <h2>3. Intellectual Property</h2>
              <ul>
                <li>
                  <p>3.1. Our Content: All content, trademarks, logos, and intellectual property displayed on our website are the property of CodeByte Library or its licensors. You may not use, reproduce, or distribute our content without permission.</p>
                </li>
                <li>
                  <p>3.2. User Content: If you submit content to our website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and distribute that content within the scope of our website.</p>
                </li>
              </ul>
            </li>
            <li>
              <h2>4. Privacy and Data Security</h2>
              <ul>
                <li>
                  <p>4.1. Data Collection: Our website may collect and use personal information in accordance with our Privacy Policy. We take privacy and data security seriously, and your data will be handled in compliance with applicable laws and regulations.</p>
                </li>
                <li>
                  <p>4.2. Security: We employ reasonable security measures to protect your data. However, we cannot guarantee absolute security, and you are responsible for safeguarding your account credentials.</p>
                </li>
              </ul>
            </li>
            <li>
              <h2>5. Termination of Access</h2>
              <p>
                We reserve the right to terminate or restrict access to our website for users who violate this Site Policy, engage in prohibited actions, or for any other reason at our sole discretion.
              </p>
            </li>
            <li>
              <h2>6. Changes to this Policy</h2>
              <p>
                We may update this Site Policy to reflect changes in our practices or for legal and regulatory reasons. We will notify users of significant changes by posting the updated Site Policy on our website.
              </p>
            </li>
            <li>
              <h2>7. Contact Information</h2>
              <p>
                If you have any questions or concerns about this Site Policy, please contact us via the contact form.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default SitePolicy
