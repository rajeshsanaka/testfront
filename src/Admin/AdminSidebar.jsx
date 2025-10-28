import React, { useState } from "react";
import {
  FaUserCircle,
  FaBook,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import AdminDashBoard from "./AdminDashBoard";
import UploadCourse from "./UploadCourse";
import ListOfStudents  from "./ListOfStudents";

const SideBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavClick = (section) => {
    setActive(section);
    setSidebarOpen(false); // close sidebar on mobile when clicking link
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 relative">
      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-4 z-50 text-2xl text-indigo-700 md:hidden"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-gradient-to-b from-indigo-700 to-purple-800 text-white flex flex-col justify-between shadow-2xl transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Profile Section */}
          <div className="flex flex-col items-center py-8 border-b border-purple-600">
            <FaUserCircle className="text-6xl mb-2 text-white/90" />
            <h3 className="text-lg font-semibold tracking-wide">
              Hello, Rajesh
            </h3>
            <p className="text-sm text-purple-200 mt-1">Admin Panel</p>
          </div>

          {/* Navigation Links */}
          <ul className="mt-6 space-y-2 px-4">
            <li
              onClick={() => handleNavClick("dashboard")}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                active === "dashboard"
                  ? "bg-white/20 shadow-inner"
                  : "hover:bg-white/10 hover:translate-x-1"
              }`}
            >
              <FaUser className="text-lg" />
              <span className="font-medium">Dashboard</span>
            </li>

            <li
              onClick={() => handleNavClick("list")}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                active === "list"
                  ? "bg-white/20 shadow-inner"
                  : "hover:bg-white/10 hover:translate-x-1"
              }`}
            >
              <FaBook className="text-lg" />
              <span className="font-medium">List of Students</span>
            </li>

            <li
              onClick={() => handleNavClick("course")}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                active === "course"
                  ? "bg-white/20 shadow-inner"
                  : "hover:bg-white/10 hover:translate-x-1"
              }`}
            >
              <FaBook className="text-lg" />
              <span className="font-medium">Upload Courses</span>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="px-4 py-6 border-t border-purple-600">
          <button
            onClick={() => navigate("/login")}
            className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition-all duration-200 font-semibold"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay (Mobile only when sidebar open) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white md:ml-0 overflow-y-auto">
        {active === "dashboard" && <AdminDashBoard />}
        {active === "list" && <ListOfStudents />}
        {active === "course" && <UploadCourse />}
      </div>
    </div>
  );
};

export default SideBar;
