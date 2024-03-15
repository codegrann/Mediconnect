import React, { useState } from "react";
import Input from "../Minor/Inputs/Input";
import Input1 from "../Minor/Inputs/Input1";
import ImageContainer from "../Minor/ImageContainer";

function Profile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const { patientName, age, gender, email, phone } = user;
  const [userEmail, setUserEmail] = useState(email);
  const [userPhone, setUserPhone] = useState(phone);

  const handleEdit = () => {
    setIsEditing(false);
  };
  return (
    <div className="py-8 flex flex-col md:flex-row md:gap-4 md:w-7/8 mx-auto mb-16 mt-20 z-0">
      <div className="w-32 md:w-1/4 md:h-1/2 mx-auto min-[600px]:mx-0 mb-4 relative">
        <ImageContainer imageurl="/person.svg" />

        <img
          src="/pen_edit.svg"
          className="w-4  mx-auto min-[600px]:mx-0 mb-4 absolute top-0 right-0 "
          onClick={() => setIsEditing(true)}
        />
      </div>
      <form action="" className="flex flex-col gap-2 md:w-full relative">
        {isEditing && (
          <button
            className="absolute bottom-0 left-0 btn btn-success btn-sm"
            onClick={handleEdit}
          >
            Save
          </button>
        )}
        <label className="flex flex-col ">
          <span className="text-black font-medium ">Name:</span>
          <Input1
            placeholder="Enter your full name"
            disabled={true}
            value={patientName}
          />
        </label>
        <label className="flex flex-col ">
          <span className="text-black font-medium ">Email:</span>
          <Input1
            placeholder="Enter your email"
            disabled={isEditing ? false : true}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <label className="flex flex-col ">
          <span className="text-black font-medium ">Phone Number:</span>
          <Input1
            placeholder="Enter your phone number"
            disabled={isEditing ? false : true}
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </label>
        <label className="flex flex-col ">
          <span className="text-black font-medium ">Age:</span>
          <Input1 placeholder="Enter your dob" disabled={true} value={age} />
        </label>
        <label className="flex flex-col mb-10">
          <span className="text-black font-medium ">Gender:</span>
          <Input1
            placeholder="Enter your phone number"
            value={gender}
            disabled={true}
          />
        </label>
      </form>
    </div>
  );
}

export default Profile;
