import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const{isLoginPage}=useUserContext();
const navigate=useNavigate();
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        } else {
          // Optional: remove for one-time animation
          entry.target.classList.remove("opacity-100", "translate-y-0");
          entry.target.classList.add("opacity-0", "translate-y-10");
        }
      });
    });

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 scroll-smooth">
      <NavBar />

      {/* Hero Section */}
      <section
        id="home"
        className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Welcome to BoomLearn
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
          Learn and grow with our curated courses designed for students.
        </p>
        <a onClick={()=>{
          isLoginPage?navigate("/course"):navigate("/login")
        }}
          
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Courses Section */}
      <section
        id="courses"
        className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out py-20 px-6 container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>Learn HTML, CSS, JavaScript, React and build amazing web apps.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Data Science</h3>
            <p>
              Python, Machine Learning, NLP, and Data Analysis for real-world
              projects.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <p>
              Build cross-platform mobile apps using React Native and Flutter.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out py-20 px-6 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">About BoomLearn</h2>
          <p className="text-lg mb-4">
            BoomLearn is an online platform dedicated to providing students with
            the best courses to help them excel in web development, data
            science, app development, and more.
          </p>
          <p className="text-lg">
            Our mission is to empower learners with skills that are relevant and
            practical, ensuring career growth and personal development.
          </p>
        </div>
      </section>

      {/* Contact / Registration Section */}
      <section
        id="contact"
        className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out py-20 px-6 container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Register Now</h2>
        <form className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Course</label>
            <select className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700">
              <option>Web Development</option>
              <option>Data Science</option>
              <option>App Development</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-full mt-4"
          >
            Submit
          </button>
        </form>
      </section>
      <Footer/>

    </div>
  );
};

export default LandingPage;