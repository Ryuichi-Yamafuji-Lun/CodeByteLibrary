

const PrivacyPolicy = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[600px] m-3 mt-5 p-4 rounded-lg overflow-hidden bg-slate-950/50 backdrop-blur-3xl shadow-[inset_0px_1px_0px_0px_rgba(148,163,184,0.1)] flex flex-col">
        <div className="text-center text-lg underline">Privacy Policy</div>
        <div className="p-2">
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
