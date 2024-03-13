import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import userIcon from "/person.png";
import emailIcon from "/email.png";
import passwordIcon from "/password.png";
import phone from "/phone.png";

const SignUp = () => {
  // const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationalID, setNationalID] = useState();
  const [phone, setPhone] = useState();
  const [dob, setDob] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {};

  return (
    <>
      <form
        onSubmit={handleSignUp}
        className="form-control flex flex-col min-[500px]:w-7/8  m-auto my-[80px] bg-white pb-[30px] "
      >
        <div className="flex flex-col items-center gap-2 w-full mt-[30px]  ">
          <div className="text-[#10Bb32]text-sm md:text-3xl font-medium">
            Sign Up
          </div>
          <div className="w-[61px] h-[6px] bg-[#10Bb32] rounded-md"></div>
        </div>
        <div className="mt-[35px] border-none  min-[500px]:w-3/4 md:w-[600px] min-[500px]:mx-auto flex flex-col gap-4  border-2  px-[10px]">
          <div className="flex items-center m-auto w-full  bg-[#9dc69d] rounded-md">
            <img
              src={userIcon}
              alt="usericon"
              className="my-0 ml-[10px] size-4"
            />
            <input
              className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
              // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
              type="text"
              placeholder="Full Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
            <img
              src={emailIcon}
              alt="emailicon"
              className="my-0 ml-[10px] size-4"
            />
            <input
              className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
              // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
            <img
              src={phone}
              alt="emailicon"
              className="my-0 ml-[10px] size-4"
            />
            <input
              className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
              // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
              type="number"
              placeholder="Phone number"
              value={phone}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
            <img
              src={emailIcon}
              alt="emailicon"
              className="my-0 ml-[10px] size-4"
            />
            <input
              className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
              // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
              type="number"
              placeholder="National ID/ Birth Certificate"
              value={nationalID}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
            <img
              src={emailIcon}
              alt="emailicon"
              className="my-0 ml-[10px] size-4"
            />
            <input
              className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
              // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
              type="text"
              placeholder="DOB dd/mm/yyyy"
              value={dob}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center m-auto w-full  rounded-md ">
            <div class="flex items-center mb-4">
              <input
                id="radio-1"
                className="radio radio-success radio-xs"
                type="radio"
                name="gender"
                value="male"
                required
                // onChange={(e) => setEmail(e.target.value)}
              />

              <label
                for="radio-1"
                class="ms-2 text-sm font-medium text-gray-900"
              >
                Male
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="radio-2"
                className="radio radio-success radio-xs ml-[10px]"
                type="radio"
                name="gender"
                value="female"
                required
                // onChange={(e) => setEmail(e.target.value)}
              />
              <label
                for="radio-2"
                class="ms-2 text-sm font-medium text-gray-900"
              >
                Female
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="radio-3"
                className="radio radio-success radio-xs ml-[10px]"
                type="radio"
                name="gender"
                value="other"
                required
                // onChange={(e) => setEmail(e.target.value)}
              />
              <label
                for="radio-3"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Other
              </label>
            </div>
          </div>

          <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md">
            <img
              src={passwordIcon}
              alt="passwordicon"
              className="my-0 ml-[10px] size-4"
            />
            <input
              className="caret-red-700 py-4 bg-transparent input input-sm md:py-6 w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
              // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md">
            <img
              src={passwordIcon}
              alt="passwordicon"
              className="my-0 ml-[10px] size-4"
            />
            <input
              className="caret-red-700 py-4 bg-transparent input input-sm md:py-6 w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
              // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
              type="password"
              placeholder="Confirm password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-[30px] my-[30px] mx-auto ">
          <button className="flex justify-center items-center px-[20px] py-[5px] text-[#fff] bg-[#10Bb32] rounded-lg text-sm md:text-lg font-medium cursor-pointer">
            Sign Up
          </button>
          <div
            className="bg-[#eaeaea] text-[#676767] px-[20px] py-[5px] flex justify-center items-center  rounded-lg text-sm md:text-lg font-medium cursor-pointer"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
