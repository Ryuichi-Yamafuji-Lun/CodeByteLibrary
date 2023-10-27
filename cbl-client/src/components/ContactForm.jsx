import { FaTimes } from "react-icons/fa";

const ContactForm = ({ closeContactForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[600px] p-4 rounded-lg bg-gray-900 relative max-h-[80vh] overflow-y-auto">
        <button onClick={closeContactForm} className="absolute top-2 right-2 text-gray-500">
          <FaTimes />
        </button>
        <p className="text-center text-lg text-white font-bold">Contact Us</p>
        <form className="p-2 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="rounded-lg border border-gray-300 p-3 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg py-3 px-5 text-sm font-medium text-center text-white bg-gray-700 hover:text-black hover:bg-white"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm
