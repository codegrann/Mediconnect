import React from "react";

function HealthHistory() {
  return (
    <div className="text-sm/6 p-2 border-2 mb-4 md:w-3/4 lg:w-1/2 lg:mx-auto border-gray-400 rounded-sm">
      <div>
        <p className=" flex flex-wrap gap-4">
          <span>Health Facility</span>
          <span>Date</span>
        </p>
        <p className=" flex flex-wrap gap-4">Symptoms</p>
        <p className=" flex flex-wrap gap-4">
          <span>Diagnosis</span>
          <span>Drugs</span>
        </p>
      </div>
    </div>
  );
}

export default HealthHistory;
