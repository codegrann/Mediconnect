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
          <span>
            <b>Facility:</b> {facility}
          </span>
          <span>
            <b>Date:</b> {date}
          </span>
        </p>
        <p className=" flex flex-wrap gap-x-4">
          <b>Symptoms:</b> {symptoms}
        </p>
        <p className=" flex flex-wrap gap-x-4">
          <span>
            <b>Diagnosis:</b> {diagnosis}
          </span>
          <span>
            <b>Treatment:</b> {treatment}
          </span>
        </p>
        <p className=" flex flex-wrap gap-x-4">
          <span>
            <b>Provider:</b> {providerName}
          </span>
          <span>
            <b>Reg no:</b> {regno}
          </span>
        </p>
      </div>
    </div>
  );
}

export default HealthHistory;
