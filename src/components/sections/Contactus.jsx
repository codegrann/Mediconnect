import React from "react";
import Input from "../Minor/Inputs/Input";
import Textarea from "../Minor/Inputs/Textarea";
import ClickForward from "../Minor/Actions/ClickForward";
// import "../App.css";

function Contactus() {
  return (
    <div className="items-center md:w-5/6 mx-auto mb-16">
      <h3 className="text-black font-medium md:text-xl mb-4" id="contactus">
        Contact us
      </h3>
      <form className="flex flex-col items-center lg:items-start gap-4 md:w-full mx-auto ">
        <Input placeholder="Enter your name" />
        <Input placeholder="Enter your email" />
        <Textarea placeholder="Enter your message here..." />
        <div className="w-40 lg:place-self-start">
          <ClickForward label="Send" />
        </div>
      </form>
    </div>
  );
}

export default Contactus;
