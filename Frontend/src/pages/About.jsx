import React, { useState } from 'react';
import { FaBook, FaGlobe, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-10 px-4 transition-colors duration-300 
         dark:bg-gray-900 dark:text-white bg-white text-gray-800'
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:px-20">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Book Haven</h1>
          <p className="text-base md:text-lg mb-4 flex items-center justify-center md:justify-start">
            <FaBook className="mr-2 text-indigo-500" /> Welcome to Our Book Haven! We offer a vast collection of free PDF books, ranging from educational to literary classics and bestsellers.
          </p>
          <p className="text-base md:text-lg mb-4 flex items-center justify-center md:justify-start">
            <FaGlobe className="mr-2 text-indigo-500" /> Our mission is to make reading accessible to everyone, offering an easy-to-use platform for book lovers.
          </p>
          <p className="text-base md:text-lg mb-4 flex items-center justify-center md:justify-start">
            <FaUsers className="mr-2 text-indigo-500" /> Join our community of readers and explore the world of books with us!
          </p>
          <Link to="/contact"
            onClick={toggleTheme}
            className="mt-6 px-4 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-700 transition"
            
          >
             Contact Us
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/premium-vector/diverse-group-professionals-working-together-laptops-collaborating-meeting_1280751-63203.jpg?uid=R118373275&ga=GA1.1.1638468388.1724500364&semt=ais_hybrid"
            alt="About Our Book Haven"
            className="rounded-lg shadow-lg w-4/6 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

