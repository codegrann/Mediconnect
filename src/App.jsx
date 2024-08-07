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
  const [user, setUser] = useState({
    patientName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
  });
  const [role, setRole] = useState("");
  const users = [
    {
      patientName: "Patient 1",
      age: 46,
      gender: "male",
      email: "sample@gmail.com",
      phone: "9876543210",
    },
    {
      patientName: "Dr1",
      age: 40,
      gender: "male",
      email: "sample123@gmail.com",
      phone: "67854029384",
    },
    {
      patientName: "Dr2",
      age: 57,
      gender: "female",
      email: "sample456@gmail.com",
      phone: "85402938467",
    },
  ];
  const [practioner, setPractioner] = useState({
    patientName: "Dr1",
    age: 40,
    gender: "male",
    email: "sample123@gmail.com",
    phone: "67854029384",
  });
  const initialpatientHistory = [
    {
      providerName: "Provider 1",
      regno: "GH459653",
      facility: "Facility 1",
      date: "2021-08-01",
      symptoms: "Fever, joint pain, vomiting",
      diagnosis: "Malaria",
      treatment: "Antibiotics",
    },
    {
      providerName: "Provider 2",
      regno: "GH45345",
      facility: "Facility 2",
      date: "2021-08-01",
      symptoms: "Fever, joint pain, vomiting",
      diagnosis: "Malaria",
      treatment: "Antibiotics",
    },
  ];
  const [patientHistory, setPatientHistory] = useState(initialpatientHistory);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UsersContext.Provider value={user}>
      <div>
        <BrowserRouter>
          <Navbar isLogged={isLogged} setIsLogged={setIsLogged} role={role} />
          <div className="px-6">
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route
                path="/doctorprofile"
                element={
                  <DoctorDashBoard
                    patientHistory={patientHistory}
                    user={user}
                    setUser={setUser}
                  />
                }
              /> */}
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/signin"
                element={
                  <SignIn
                    setIsLogged={setIsLogged}
                    users={users}
                    setUser={setUser}
                    role={role}
                    setRole={setRole}
                  />
                }
              />
              {isLogged && (
                <Route
                  path="/client/dashboard"
                  element={
                    <ClientDashboard
                      patientHistory={patientHistory}
                      user={user}
                      setUser={setUser}
                    />
                  }
                />
              )}
              {isLogged && (
                <Route
                  path="/practitioner/dashboard"
                  element={
                    <DoctorDashBoard
                      user={user}
                      setUser={setUser}
                      practioner={practioner}
                      patientHistory={patientHistory}
                      setPatientHistory={setPatientHistory}
                    />
                  }
                />
              )}
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
