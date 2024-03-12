import React from "react";
import ClickForward from "./Actions/ClickForward";

function ServiceCard({ serviceName, serviceDescription }) {
  return (
    <div className="max-w-80 mb-6 mx-auto border-3 border-solid border-black pb-16 lg:w-1/4">
      <h4 className="mb-4 text-zinc-700 font-semibold">{serviceName}</h4>
      <p className="text-sm/6 text-zinc-900 mb-12"> {serviceDescription}</p>
      <ClickForward label={`Learn more about ${serviceName}`} />
    </div>
  );
}

export default ServiceCard;
