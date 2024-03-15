import React from "react";

function Textarea({ placeholder, value, ...attributes }) {
  return (
    <>
      <textarea
        className="bg-white textarea textarea-bordered textarea-success textarea-md focus:outline-none w-full max-w-xs md:max-w-xl "
        rows="6"
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}

export default Textarea;
