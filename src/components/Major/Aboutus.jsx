import React from "react";
import ClickForward from "../Minor/Actions/ClickForward";

function Aboutus() {
  return (
    <div
      className="mt-6 max-md:max-w-[420px] mx-auto  md:w-5/6 md:mb-24"
      id="aboutus"
    >
      <h3
        className="text-black font-medium mb-4 md:text-center md:text-xl"
        // id="aboutus"
      >
        About us
      </h3>
      <div className="flex flex-col gap-4 items-center md:flex-row">
        <div className="  md:w-1/2">
          <img
            src="aboutus.jpeg"
            alt="about us"
            className="w-full h-full border-2"
          />
        </div>
        <div className="text-[15px] space-y-4 md:w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quod
            nulla vero explicabo similique iusto iste corrupti! Quae dolorem
            iure excepturi velit consequatur, earum molestias commodi nesciunt
            ipsa adipisci qui. Quae dolorem iure excepturi velit consequatur,
            earum molestias commodi nesciunt ipsa adipisci qui.
          </p>
          <ClickForward label="Our services" buttonType="" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
