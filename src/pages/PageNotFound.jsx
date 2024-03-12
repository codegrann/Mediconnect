import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="pt-16 border- text-center flex flex-col gap-6 h-[600px]">
      <h1 className="text-8xl  text-gray-400">?</h1>
      <h1 className="text-error text-lg md:text-4xl font-medium md:font-normal">
        404&nbsp;page&nbsp;not&nbsp;found
      </h1>
      <p className="text-sm md:text-xl">This page does not exist </p>

      <div className="flex gap-[30px] my-[30px] mx-auto ">
        <button
          className="flex justify-center items-center px-[20px] py-[5px]  text-[#fff] bg-[#10Bb32] rounded-lg text-sm md:text-lg font-medium cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to home
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
