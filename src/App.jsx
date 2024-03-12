import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UsersContext } from "./Hooks/UsersContext";
import Home from "./pages/Home";
import ClientDashboard from "./pages/ClientDashboard";
import DoctorDashBoard from "./pages/DoctorDashBoard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={users}>
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="px-6">
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route path="/clientprofile" element={<ClientDashboard />} /> */}
              <Route path="/doctorprofile" element={<DoctorDashBoard />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/client/dashboard" element={<ClientDashboard />} />
              <Route
                path="/practitioner/dashboard"
                element={<DoctorDashBoard />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </UsersContext.Provider>
  );
}

export default App;
