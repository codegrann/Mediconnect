import React from "react";
import Profile from "../components/sections/Profile";
import HealthHistory from "../components/sections/HealthHistory";

function ClientDashboard() {
  return (
    <div>
      <Profile />
      <HealthHistory />
    </div>
  );
}

export default ClientDashboard;
