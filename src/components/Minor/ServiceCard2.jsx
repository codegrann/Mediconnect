import React from "react";
import ClickForward from "./Actions/ClickForward";
import ImageContainer from "./ImageContainer";

function ServiceCard2({ title, imageSrc, description, buttonText }) {
  return (
    <div className="mb-6 max-w-80 mx-auto lg:w-1/4 border-none p-0.5 bg-gradient-to-r from-[#f83904] via-black to-[#2bf607] rounded-3xl hover:animate-moveColors items-center">
      <div className="py-6 flex flex-col gap-4 items-center justify-center bg-white rounded-3xl p-1 sm:p-2">
        {/* <img src={imageSrc} alt={title} className="w-8 md:w-10 m-2" /> */}
        <ImageContainer imageurl={imageSrc} />

        <h3 className="text-[#092A9F] font-medium">{title}</h3>
        <p className="text-center text-xs sm:text-sm">{description}</p>
        {buttonText ? <ClickForward label={buttonText} /> : ""}
      </div>
    </div>
  );
}

export default ServiceCard2;
