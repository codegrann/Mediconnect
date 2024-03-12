import React from "react";

function Input({ placeholder, type, onChange }) {
  return (
    <>
      <input
        className=" bg-white py-4 input input-sm md:py- input-bordered input-success w-full md:input-md md:max-w-xl focus:outline-none"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default Input;

{
  /* <input */
}
//   type="text"
//   placeholder="Type here"
//   className="input input-bordered input-success w-full max-w-xs"
{
  /* />; */
}
