import { FaTimes } from "react-icons/fa";

const AccessPolicy = ({ closeAccessPolicy }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[600px] p-4 rounded-lg bg-white relative max-h-[80vh] overflow-y-auto">
        <button onClick={closeAccessPolicy} className="absolute top-2 right-2 text-gray-500">
          <FaTimes />
        </button>
        <div className="text-center text-lg underline">Access Policy</div>
        <div className="p-2">
          <p>Last updated: [10/30/2023]</p>
          <ol>
            <li>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the CodeByte Library website, you agree to comply with and be bound by the terms and conditions of this Access Policy. If you do not agree with these terms, please do not access or use the website.
              </p>
            </li>
            <li>
              <h2>2. Permitted Use</h2>
              <ul>
                <li>
                  <p>2.1. General Access: You may access and use our website for personal, non-commercial purposes, including browsing, searching, and making purchases of computer science books.</p>
                </li>
                <li>
                  <p>2.2. Account Creation: To access certain features and services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
                </li>
                <li>
                  <h3>2.3. Prohibited Actions</h3>
                  <ul>
                    <li>a. Violates applicable laws, regulations, or our Privacy Policy.</li>
                    <li>b. Infringes on the rights of others, including intellectual property rights.</li>
                    <li>c. Harasses, defames, or discriminates against others.</li>
                    <li>d. Attempts to disrupt or compromise the security or functionality of the website.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <h2>3. Termination of Access</h2>
              <p>
                We reserve the right to terminate or restrict your access to the website without notice if you violate this Access Policy, engage in prohibited actions, or for any other reason at our sole discretion.
              </p>
            </li>
            <li>
              <h2>4. Intellectual Property</h2>
              <ul>
                <li>
                  <p>4.1. Ownership: All content, trademarks, logos, and other intellectual property on the website are the property of CodeByte Library or its licensors and protected by copyright and other intellectual property laws.</p>
                </li>
                <li>
                  <p>4.2. Limited License: You are granted a limited, non-exclusive, and non-transferable license to access and use the website for personal, non-commercial purposes. This license does not grant you ownership or rights to use our intellectual property for any other purpose.</p>
                </li>
              </ul>
            </li>
            <li>
              <h2>5. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external websites. Your access to and use of third-party websites are subject to their terms and policies.
              </p>
            </li>
            <li>
              <h2>6. Changes to this Policy</h2>
              <p>
                We may update this Access Policy from time to time. Any changes will be posted on the website, and your continued use of the website after such changes will indicate your acceptance of the updated terms.
              </p>
            </li>
            <li>
              <h2>7. Contact Information</h2>
              <p>
                If you have any questions or concerns about this Access Policy, please contact us via contact form.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default AccessPolicy
