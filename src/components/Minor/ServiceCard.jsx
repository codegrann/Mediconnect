import React from "react";
import ClickForward from "./Actions/ClickForward";

function ServiceCard({ serviceName, serviceDescription }) {
  return (
    <div className="max-w-80 mb-6 mx-auto border-2 border-solid border-gray-300 px-4 py-8 lg:w-1/4 rounded-3xl">
      <h4 className="mb-4 text-zinc-700 font-semibold">{serviceName}</h4>
      <p className="text-sm/6 text-zinc-900 mb-12"> {serviceDescription}</p>
      <ClickForward label={`Learn more about ${serviceName}`} />
    </div>
  );
}

export default ServiceCard;
