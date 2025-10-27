import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import NavBar from "../comp/NavBar";

const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPassword] = useState("");
  const { setIsLoginPage } = useUserContext();
  const navigate = useNavigate();
const handleLoginButton = async () => {
  if (!name || !pass) {
    alert("Please fill all fields");
    return;
  }

  try {
    // Send the data with the expected keys
    const response = await axios.post(
      "https://ssv-lyart.vercel.app/login",
      { username: name, password: pass }  // match backend keys
    );

    // Backend sends either 'message' or 'error'
    if (response.data.message === "Login successful") {
      alert("Login successful!");
      setIsLoginPage(false);
      navigate("/dashboard"); // redirect to dashboard
    } else {
      alert(response.data.error || "Invalid username or password");
    }
  } catch (err) {
    console.error("Login Error:", err);
    alert("Error logging in. Please try again later.");
  }
};


  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Section */}
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
          {/* Username Field */}
          <div className="mb-4">
            <label className="flex items-center border border-pink-500 rounded-full px-4 py-2 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              <input
                type="text"
                placeholder="USERNAME"
                className="outline-none w-full text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="flex items-center border border-pink-500 rounded-full px-4 py-2 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3m6 0a3 3 0 00-3-3m6 0V7a4 4 0 10-8 0v1m12 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8"
                />
              </svg>
              <input
                type="password"
                placeholder="PASSWORD"
                className="outline-none w-full text-gray-700"
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full py-2"
            onClick={handleLoginButton}
          >
            LOGIN
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-1/2 flex-col justify-between text-white relative bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-8">
        <div className="flex flex-col justify-center items-start h-full px-10">
          <h1 className="text-6xl font-bold mb-4">Welcome.</h1>
          <p className="text-sm leading-relaxed max-w-xs opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-8 text-xs">
            Not a member?{" "}
            <a onClick={()=>navigate("/reg")} className="font-semibold underline" >
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
