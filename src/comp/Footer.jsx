import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Location: 123 Street, City, Country</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <h3 className="text-xl font-bold mb-3">Legal</h3>
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>

      {/* Optional: Small Bottom Note */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        Designed with ❤️ by Your Company
      </div>
    </footer>
  );
};

export default Footer;
