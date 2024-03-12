import React from "react";
import ImageContainer from "./ImageContainer";

function Logo() {
  return (
    <div className="w-24 sm:w-32 sm:pt-4 rounded-full shadow-2xl">
      <ImageContainer imageurl="/logo1.png" />
    </div>
  );
}

export default Logo;
