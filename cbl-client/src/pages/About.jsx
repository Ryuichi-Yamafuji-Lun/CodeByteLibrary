import React from 'react';

const About = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-full m-3 p-4 rounded-lg overflow-hidden bg-background-main shadow-lg flex flex-col">
        <div className="text-center text-2xl font-bold py-3">
          About CodeByte Library
        </div>
        <div className="p-4">
          <p className="text-lg">
            At CodeByte Library, we're more than just an e-commerce store; we're a haven for tech enthusiasts, coding aficionados, and knowledge seekers in the world of computer science. Our mission is to provide a curated collection of books and resources that cater to the ever-evolving and dynamic field of technology.
          </p>
          <p className="text-lg mt-3">
            We understand that computer science is not just a subject; it's a journey of exploration, innovation, and problem-solving. That's why we've carefully assembled a vast assortment of books that cover programming languages, algorithms, data science, artificial intelligence, cybersecurity, and everything in between. Our shelves are filled with titles that cater to beginners taking their first steps, seasoned professionals deepening their expertise, and everyone in between.
          </p>
          <p className="text-lg mt-3">
            With CodeByte Library, you can expect more than just books; you'll discover a wealth of knowledge waiting to be explored. Our selection includes textbooks, reference materials, hands-on guides, and thought-provoking reads from leading authors and publishers in the tech industry. We're dedicated to keeping our collection up-to-date with the latest releases, ensuring that you have access to the most current and relevant insights.
          </p>
          <p className="text-lg mt-3">
            We believe that learning and staying informed in the world of technology should be accessible and enjoyable. That's why we've designed our website to be user-friendly, offering an intuitive shopping experience, secure transactions, and fast deliveries. We're here to serve you, whether you're on a quest for a specific title, seeking inspiration, or just browsing for your next big idea.
          </p>
          <p className="text-lg mt-3">
            At CodeByte Library, we're not just selling books; we're fostering a community of learners, developers, and dreamers. Join us in the journey of continuous learning and discovery. Browse our virtual shelves, explore the limitless possibilities of computer science, and empower your mind one byte at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
