import React from "react";
import NavBar from "./comp/NavBar";
import Footer from "./comp/Footer";
import LandingPage from "./comp/LandingPage";
import Login from "./pages/Login";
import { Routes,Route } from "react-router-dom";
const App = () => {
  return (
   <>
     <NavBar />
     <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/login" element={<Login />} />
     </Routes>
     <Footer />
   </>
  );
};

export default App;
