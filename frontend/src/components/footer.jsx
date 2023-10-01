import React from "react";
import "../index.css";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0 w-full fixed">
      <div className="container flex justify-between items-center">
        <a href="#" className="hover:text-indigo-500">
          <i className="fab fa-instagram text-md mx-4"> Instagram</i>
        </a>
        <a href="#" className="hover:text-indigo-500">
          <i className="fab fa-facebook text-md"> Fecebook</i>
        </a>
        <a href="#" className="hover:text-indigo-500">
          <i className="fab fa-twitter text-md">Twitter</i>
        </a>
        <a href="#" className="hover:text-indigo-500 mx-4">
          About
        </a>
      </div>
    </footer>
  );
};

export default Footer;
