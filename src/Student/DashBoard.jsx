import React, { useEffect } from "react";
// import { useEmail } from "../context/LoginContext";
// import axios from "axios";

const StudentDashBoard = () => {
//   let { email, setStudentInfromation, studentInfromation } = useEmail();

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("userEmail");
//     if (savedEmail && !email) email = savedEmail;
//     if (!email) return;

//     axios
//       .get(`http://localhost:5000/sdash?email=${email}`)
//       .then((res) => setStudentInfromation(res.data))
//       .catch((err) => console.log("Error fetching student info:", err));
//   }, [email, setStudentInfromation]);

//   if (!studentInfromation)
//     return <p className="text-gray-500 p-6">Loading student data...</p>;

//   const dob = new Date(studentInfromation.date_of_birth).toLocaleDateString();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Student Information</h1>

      {/* <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {studentInfromation.firstname} {studentInfromation.lastname}
        </h2>
        <div className="space-y-2 text-gray-600">
          <p><strong>Email:</strong> {studentInfromation.email}</p>
          <p><strong>Phone:</strong> {studentInfromation.phone_number}</p>
          <p><strong>Address:</strong> {studentInfromation.address}</p>
          <p><strong>Date of Birth:</strong> {dob}</p>
        </div>
      </div> */}
    </div>
  );
};

export default StudentDashBoard;
