import React from "react";

function ImageContainer({ imageurl, size }) {
  const imageSize = `size-${size}`;
  return (
    <div className="rounded-full w-ful h-full">
      <img src={imageurl} className="w-full h-full rounded-full" />
    </div>
  );
}

export default ImageContainer;
