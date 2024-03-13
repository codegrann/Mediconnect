import React from "react";
import Profile from "../components/sections/Profile";
import HealthHistory from "../components/sections/HealthHistory";

function ClientDashboard({ patientHistory, user }) {
  return (
    <div>
      <Profile />
      <HealthHistory patientHistory={patientHistory} user={user} />
    </div>
  );
}

export default ClientDashboard;
