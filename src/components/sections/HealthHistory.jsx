import React from "react";

import HealthHistoryCard from "../Minor/HealthHistoryCard";

function HealthHistory() {
  return (
    <div>
      <div className="border-2 border-gray-400 md:w-1/2 md:mx-auto mb-4">
        <h3 className="text-black font-medium md:text-xl">History</h3>
        <div className=" flex flex-wrap gap-4">
          <p>John Micah Shikaku</p>
          <p>46 yrs</p>
          <p>Male</p>
        </div>
      </div>
      <HealthHistoryCard />
      <HealthHistoryCard />
      <HealthHistoryCard />
    </div>
  );
}

export default HealthHistory;
