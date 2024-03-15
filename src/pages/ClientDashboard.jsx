import React from "react";
import Profile from "../components/sections/Profile";
import HealthHistory from "../components/sections/HealthHistory";

function ClientDashboard({ patientHistory, user, setUser }) {
  return (
    <div>
      <Profile user={user} setUser={setUser} />
      <HealthHistory patientHistory={patientHistory} user={user} />
    </div>
  );
}

export default ClientDashboard;
