import React from "react";

function Input({ placeholder, type, onChange, ...attributes }) {
  return (
    <>
      <input
        className=" bg-white py-4 input input-sm md:py- input-bordered input-success w-full md:input-md md:max-w-xl focus:outline-none disabled:bg-white disabled:border-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
        type={type}
        placeholder={placeholder}
        {...attributes}
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
