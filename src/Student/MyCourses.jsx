import React, { useState, useEffect } from "react";
// import { useEmail } from "../context/LoginContext";
// import axios from "axios";

const MyCourses = () => {
//   const { email, setEmail } = useEmail();
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("userEmail");
//     if (savedEmail && !email) setEmail(savedEmail);
//     const activeEmail = email || savedEmail;
//     if (!activeEmail) return;

//     axios
//       .get(`http://localhost:5000/seemycourses?email=${activeEmail}`)
//       .then((res) => setCourses(res.data))
//       .catch((err) => console.log("Error fetching courses:", err));
//   }, [email, setEmail]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">My Courses</h1>

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {/* {courses.length === 0 ? (
          <p className="text-gray-500 italic">You haven't enrolled in any courses yet.</p>
        ) : (
          courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.course}</h3>
              <p className="text-gray-500 text-sm">Keep learning and stay consistent!</p>
            </div>
          ))
        )} */}
      </div>
    </div>
  );
};

export default MyCourses;
