import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useEmail } from "../context/LoginContext";
// import Alert from "../comp/Alert";

const ListOfCourses = () => {
//   const { email, setEmail } = useEmail();
//   const [courses, setCourse] = useState([]);
//   const [alert, setAlert] = useState(null);

//   const showAlert = (msg, type) => setAlert({ msg, type });

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("userEmail");
//     if (savedEmail && !email) setEmail(savedEmail);
//     const activeEmail = email || savedEmail;
//     if (!activeEmail) return;

//     axios
//       .get("http://localhost:5000/ListOfCourses")
//       .then((res) => setCourse(res.data))
//       .catch((err) => console.log("Error fetching courses:", err));
//   }, [email, setEmail]);

//   const buyCourse = (courseId, name) => {
//     axios
//       .post("http://localhost:5000/buyCourse", { email, courseId, name })
//       .then(() => showAlert("Course purchased successfully!", "success"))
//       .catch(() => showAlert("Already Purchased", "error"));
//   };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-2">Available Courses</h1>
      <p className="text-gray-600 mb-6">Choose a course and start learning today!</p>

      {/* {alert && (
        <div className="mb-4">
          <Alert message={alert.msg} type={alert.type} onClose={() => setAlert(null)} />
        </div>
      )} */}

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        {/* {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              className="border border-gray-200 rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-2">{course.description}</p>
              <p className="text-sm text-gray-500">
                <b>Date:</b> {new Date(course.date).toLocaleDateString("en-GB")}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <b>Students Enrolled:</b> {course.no_of_students}
              </p>
              <button
                onClick={() => buyCourse(course.id, course.name)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-all duration-200 font-medium"
              >
                Buy Course
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading courses...</p>
        )} */}
      </div>
    </div>
  );
};

export default ListOfCourses;
