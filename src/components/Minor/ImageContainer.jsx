import React from "react";

function ImageContainer({ imageurl, size }) {
  return (
    <div className="rounded-full w-ful h-full">
      <img src={imageurl} className="w-full h-full rounded-lg" />
    </div>
  );
}

export default ImageContainer;
