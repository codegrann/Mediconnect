import React from "react";

function HealthHistory({ history }) {
  const {
    providerName,
    regno,
    facility,
    date,
    symptoms,
    diagnosis,
    treatment,
  } = history;
  return (
    <div className="text-sm/6 p-2 border-2 mb-4 md:w-3/4 lg:w-1/2 lg:mx-auto border-gray-400 rounded-sm">
      <div>
        <p className=" flex flex-wrap gap-x-4">
          <span>Facility: {facility}</span>
          <span>Date: {date}</span>
        </p>
        <p className=" flex flex-wrap gap-4">{symptoms}</p>
        <p className=" flex flex-wrap gap-4">
          <span>{diagnosis}</span>
          <span>{treatment}</span>
        </p>
        <p className=" flex flex-wrap gap-4">
          <span>{providerName}</span>
          <span>{regno}</span>
        </p>
      </div>
    </div>
  );
}

export default HealthHistory;
