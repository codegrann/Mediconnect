import React from "react";

import HealthHistoryCard from "../Minor/HealthHistoryCard";

function HealthHistory({ patientHistory, user }) {
  const { patientName, age, gender } = user;
  return (
    <div>
      <div className="px-2 border-2 border-gray-400 md:w-1/2 md:mx-auto mb-4">
        <h3 className="text-black font-medium md:text-xl">History</h3>
        <div className=" flex flex-wrap gap-4">
          <p>{patientName}</p>
          <p>{age} yrs</p>
          <p>{gender}</p>
        </div>
      </div>
      {patientHistory.map((history, index) => (
        <HealthHistoryCard history={history} key={index} />
      ))}
    </div>
  );
}

export default HealthHistory;
