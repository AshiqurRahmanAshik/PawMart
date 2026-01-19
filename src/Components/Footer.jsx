import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-10 bg-linear-to-r from-blue-200 via-white to-sky-100 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Brand */}
        <div>
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition flex items-center justify-center gap-2"
          >
            WarmPaws
          </Link>
        </div>

        {/* Navigation Links */}
        <p className="text-xl font-bold">
          Let's Build a Beautiful Ecosystem For Our Pets In This Winter.
        </p>
        {/* Social Icons */}
        <div className="flex space-x-5 text-gray-600 text-xl">
          <Link to="#" className="hover:text-blue-600 transition">
            <FaFacebook />
          </Link>
          <Link to="#" className="hover:text-blue-600 transition">
            <FaInstagram />
          </Link>
          <Link to="#" className="hover:text-blue-600 transition">
            <FaTwitter />
          </Link>
          <Link to="#" className="hover:text-blue-600 transition">
            <FaLinkedin />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} WarmPaws — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
