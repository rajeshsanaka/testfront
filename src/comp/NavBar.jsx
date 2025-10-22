import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const { isLoginPage } = useUserContext();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme when toggled
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50 transition-colors duration-500">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Boom<span className="text-blue-600">Learn</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`
                  relative px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px]
                  before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:transition-all before:duration-300
                  ${
                    active === item.name
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                      : "hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:before:w-full"
                  }
                `}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition"
          >
            {darkMode ? (
              // ☀️ Light Mode Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zM10 15a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM15.66 15.66a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 010 2H3a1 1 0 01-1-1zM15 9h2a1 1 0 010 2h-2a1 1 0 010-2zM4.22 15.66a1 1 0 010 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7a1 1 0 011.42 0zM15.66 4.22a1 1 0 010 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7a1 1 0 011.42 0zM10 5a5 5 0 100 10A5 5 0 0010 5z" />
              </svg>
            ) : (
              // 🌙 Dark Mode Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 0010.586 10.586z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Sign In Button */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition" onClick={() => { console.log("Login");navigate("/login")}}>
           { isLoginPage ? "Dashboard" : "Sign In" }
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 dark:text-gray-200 font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    active === item.name
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition" onClick={() => { console.log("Login");navigate("/login")}}>
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
