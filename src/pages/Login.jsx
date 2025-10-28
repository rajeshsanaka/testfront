import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Loding from "../comp/Loding";
import SideBar from "../Student/SideBar"
import Alert from "../comp/Alert";
const Login = () => {
  const [formData, setData] = useState({
    userType: "",
    username: "",
    password: "",
  });
  const { setIsLoginPage } = useUserContext();
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginButton = async () => {
    const { userType, username, password } = formData;
    console.log(formData);

    if (!userType || !username || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://ssv-lyart.vercel.app/login",
        formData
      );

      if (response.data.message === "Login successful!") {
        setMsg("Login successful!");
        setIsLoginPage(false);
        setTimeout(() => {
          navigate("/SideBar");
        }, 1000);
      } else {
        setMsg(response.data.error || "Invalid username or password");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setMsg("Error logging in. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen font-sans overflow-hidden">
      {loading && <Loding />}

      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-10 shadow-lg">
        <div className="flex items-center mb-8 space-x-2">
          <div className="w-6 h-6 bg-black rounded-sm"></div>
          <h1 className="font-bold text-lg">TEMPLATE DSGN</h1>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5.121 17.804A9 9 0 1118.879 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        <div className="w-full max-w-sm">
          {/* User Type Dropdown */}
          <div className="mb-4">
            <label className="flex items-center border border-pink-500 rounded-full px-4 py-2 text-sm text-gray-600">
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="outline-none w-full text-gray-700 bg-transparent"
              >
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="flex items-center border border-pink-500 rounded-full px-4 py-2 text-sm text-gray-600">
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                className="outline-none w-full text-gray-700"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="flex items-center border border-pink-500 rounded-full px-4 py-2 text-sm text-gray-600">
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="outline-none w-full text-gray-700"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>

          <button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full py-2"
            onClick={handleLoginButton}
            disabled={loading}
          >
            {loading ? "Please Wait..." : "LOGIN"}
          </button>
          {msg && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
              <Alert
                message={msg}
                type={
                  msg.includes("successful")
                    ? "success"
                    : msg.includes("Invalid")
                    ? "error"
                    : "info"
                }
                onClose={() => setMsg("")}
              />
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex w-1/2 flex-col justify-between text-white relative bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-8">
        <div className="flex flex-col justify-center items-start h-full px-10">
          <h1 className="text-6xl font-bold mb-4">Welcome.</h1>
          <p className="text-sm leading-relaxed max-w-xs opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-8 text-xs">
            Not a member?{" "}
            <a
              onClick={() => navigate("/reg")}
              className="font-semibold underline cursor-pointer"
            >
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
