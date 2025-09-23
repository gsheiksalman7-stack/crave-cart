import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-200 text-black py-6 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <Link to="/about" className="hover:text-orange-600 font-semibold">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-orange-600 font-semibold">
            Contact Us
          </Link>
        </div>
         <div className="flex flex-col items-center">
        <h1 className="text-lg font-bold mb-2 text-center md:text-right">
            Tech Stacks:
          </h1>
        <div className="flex flex-wrap justify-center md:justify-end gap-3 text-sm">
          <span className="bg-black text-white px-2 py-1 rounded flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React Logo"
              className="w-5 h-5"
            />
            React
          </span>
          <span className="bg-black text-white px-2 py-1 rounded flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="Tailwind Logo"
              className="w-5 h-5"
            />
            Tailwind
          </span>
          <span className="bg-black text-white px-2 py-1 rounded flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript Logo"
              className="w-5 h-5"
            />
            JavaScript
          </span>
          <span className="bg-black text-white px-2 py-1 rounded flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML Logo"
              className="w-5 h-5"
            />
            HTML
          </span>
          <span className="bg-black text-white px-2 py-1 rounded flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS Logo"
              className="w-5 h-5"
            />
            CSS
          </span>
          <span className="bg-black text-white px-2 py-1 rounded flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="Redux Logo"
              className="w-5 h-5"
            />
            Redux
          </span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-black mt-4">
        © {new Date().getFullYear()} Cravecart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
