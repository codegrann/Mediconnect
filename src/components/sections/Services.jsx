import React from "react";
import ServiceCard from "../Minor/ServiceCard";
import ServiceCard2 from "../Minor/ServiceCard2";

function Services() {
  return (
    <div className="mt-6 pb-10 md:w-5/6 mx-auto">
      <h3
        className="text-black font-medium md:text-xl mb-6 md:mb-10"
        id="services"
      >
        Services
      </h3>
      {/* <div className=" w-7/8 mx-auto md:flex md:flex-wrap md:justify-center md:gap-6 lg:w-full lg:justify-center">
        <ServiceCard
          serviceName="Service Name"
          serviceDescription=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
        quis!"
        />
        <ServiceCard
          serviceName="Service Name"
          serviceDescription=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
        quis!"
        />
      </div> */}
      <div className="w-7/8 mx-auto md:flex md:flex-wrap md:justify-center md:gap-6  lg:w-full">
        <ServiceCard2
          title="service name"
          imageSrc="aboutus.jpeg"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
        quis. Lorem ipsum dolor sit amet consectetur, adipisicing."
          buttonText="Learn more"
        />
        <ServiceCard2
          title="service name"
          imageSrc="aboutus.jpeg"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
        quis. Lorem ipsum dolor sit amet consectetur, adipisicing."
          buttonText="Learn more"
        />
      </div>
    </div>
  );
}

export default Services;
