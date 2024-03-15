import React, { useState } from "react";

import Profile from "../components/sections/Profile";
import HealthHistory from "../components/sections/HealthHistory";
import Input from "../components/Minor/Inputs/Input";
import ClickForward from "../components/Minor/Actions/ClickForward";
import Textarea from "../components/Minor/Inputs/Textarea";

function DoctorDashBoard({
  patientHistory,
  setPatientHistory,
  user,
  practioner,
}) {
  const [isAddingHistory, setisAddingHistory] = useState(false);
  const [isLoggingUser, setIsLoggingUser] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);

  // const {providerName, gender, email, phone} = practioner;

  const [facilityDetails, setFacilityDetails] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");
  const [providerName, setProviderName] = useState("");
  const [regNo, setRegNo] = useState("");

  const newHistory = {
    providerName: providerName,
    regno: regNo,
    facility: facilityDetails,
    date: date,
    symptoms: symptoms,
    diagnosis: diagnosis,
    treatment: prescription,
  };

  const handleSaveHistory = (e) => {
    e.preventDefault();
    setisAddingHistory(false);
    setIsUserLogged(false);
    console.log(newHistory);

    setPatientHistory([...patientHistory, newHistory]);
    // resetting form fields
    setFacilityDetails("");
    setDate("");
    setSymptoms("");
    setDiagnosis("");
    setPrescription("");
    setProviderName("");
    setRegNo("");
  };

  return (
    <div>
      <Profile user={user} />
      <div className="flex flex-col items-center">
        <h3 className="text-black font-medium mb-4 md:text-xl md:mb-10">
          Manage Patient data
        </h3>
        <div
          className="max-w-[100px] mb-2"
          onClick={() => setIsLoggingUser(isLoggingUser ? false : true)}
        >
          <ClickForward label={isLoggingUser ? "Cancel" : "Log user"} />
        </div>

        {isLoggingUser && (
          <form className="mb-2">
            {/* <input type="email" name="email" id="" />
        <input type="password" name="password" id="" /> */}
            <div className="max-w-[300px] mb-2 ">
              <Input
                type="text"
                placeholder="enter your email"
                required
                onChange={() => console.log("hello")}
              />
            </div>
            <div className="max-w-[300px] mb-2">
              <Input
                type="password"
                placeholder="enter your password"
                required
                onChange={() => console.log("hello")}
              />
            </div>
            <div
              className="max-w-[100px] border-2"
              onClick={(e) => {
                e.preventDefault();
                setIsUserLogged(true);
                setIsLoggingUser(false);
              }}
            >
              <ClickForward label="login" />
            </div>
          </form>
        )}
      </div>

      {isUserLogged && (
        <>
          <div
            className="max-w-[100px] border-2 font-medium"
            onClick={(e) => {
              e.preventDefault();
              setisAddingHistory(isAddingHistory ? false : true);
            }}
          >
            <ClickForward label={isAddingHistory ? "cancel" : "update"} />
          </div>
          {isAddingHistory && (
            <>
              {/* Adding to pattients */}
              <form className=" border-2 border-green-500">
                <div className="max-w-[300px] md:max-w-[400px] mb-2 ">
                  <Input
                    type="text"
                    placeholder="facility details"
                    attributes={{
                      value: { facilityDetails },
                    }}
                    required
                    onChange={(e) => setFacilityDetails(e.target.value)}
                  />
                </div>
                <div className="max-w-[300px] md:max-w-[400px] mb-2 ">
                  <Input
                    type="text"
                    placeholder="date: dd/mm/yyyy"
                    attributes={{
                      value: { date },
                    }}
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="max-w-[300px] md:max-w-[400px] border-2 mb-2">
                  <Textarea
                    placeholder="patients symptoms"
                    value={symptoms}
                    required
                    onChange={(e) => setSymptoms(e.target.value)}
                  />
                </div>
                <div className="max-w-[300px] md:max-w-[400px] mb-2 ">
                  <Input
                    type="text"
                    placeholder="your diagnosis"
                    attributes={{
                      value: { diagnosis },
                    }}
                    required
                    onChange={(e) => setDiagnosis(e.target.value)}
                  />
                </div>
                <div className="max-w-[300px] md:max-w-[400px] mb-2 ">
                  <Input
                    type="text"
                    placeholder="prescription"
                    attributes={{
                      value: { prescription },
                    }}
                    required
                    onChange={(e) => setPrescription(e.target.value)}
                  />
                </div>
                <div className="max-w-[300px] md:max-w-[400px] mb-2 ">
                  <Input
                    type="text"
                    placeholder="provider name"
                    attributes={{
                      value: { providerName },
                    }}
                    required
                    onChange={(e) => setProviderName(e.target.value)}
                  />
                </div>
                <div className="max-w-[300px] md:max-w-[400px] mb-2 ">
                  <Input
                    type="text"
                    placeholder="reg no."
                    attributes={{
                      value: { regNo },
                    }}
                    required
                    onChange={(e) => setRegNo(e.target.value)}
                  />
                </div>
                <div
                  className="max-w-[100px] border-2 font-medium"
                  onClick={handleSaveHistory}
                >
                  <ClickForward label="save" />
                </div>
              </form>
            </>
          )}
          {/* Log patients data after logging them */}
          <HealthHistory patientHistory={patientHistory} user={user} />
        </>
      )}
    </div>
  );
}

export default DoctorDashBoard;
