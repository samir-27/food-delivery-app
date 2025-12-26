import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-4">
              <IoFastFoodSharp size={36} />
              <h1 className="text-3xl font-bold text-white">Foodly</h1>
            </div>
            <p className="text-sm leading-relaxed">
              Delicious food delivered fast. Your hunger, our responsibility.
            </p>

            <div className="flex gap-4 mt-4 text-2xl text-gray-400">
              <FaFacebookSquare className="hover:text-orange-500 cursor-pointer" />
              <FaInstagramSquare className="hover:text-orange-500 cursor-pointer" />
              <FaLinkedin className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Company
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer">Home</li>
              <li className="hover:text-orange-500 cursor-pointer">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer">Delivery</li>
              <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h2>
            <ul className="space-y-2 text-sm">
              <li>📞 9878654512</li>
              <li>✉️ contact@foodly.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom */}
        <p className="text-center text-sm text-gray-400">
          © 2025 Foodly.com — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
