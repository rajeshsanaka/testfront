import React from "react";
import NavBar from "./comp/NavBar";
import Footer from "./comp/Footer";
import LandingPage from "./comp/LandingPage";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Sample from "./pages/Sample";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Sample />} />
      </Routes>
    </>
  );
};

export default App;
