import React, { useState } from "react";
import Input from "../Minor/Inputs/Input";
import ImageContainer from "../Minor/ImageContainer";

function Profile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const { patientName, age, gender, email, phone } = user;
  return (
    <div className="py-8 flex flex-col md:flex-row md:gap-4 md:w-7/8 mx-auto mb-16 mt-20">
      <div className="w-32 md:w-1/4 md:h-1/2 mx-auto min-[600px]:mx-0 mb-4">
        <ImageContainer imageurl="/person.svg" />
      </div>
      <form action="" className="flex flex-col gap-2 md:w-full">
        <label className="flex flex-col ">
          <span className="text-black font-medium ">Name:</span>
          <Input
            placeholder="Enter your full name"
            attributes={{ disabled: true, value: patientName }}
          />
        </label>
        <label className="flex flex-col ">
          <span className="text-black font-medium ">Email:</span>
          <Input
            placeholder="Enter your email"
            attributes={{
              disabled: isEditing ? false : true,
              value: email,
            }}
          />
        </label>
        <label className="flex flex-col ">
          <span className="text-black font-medium ">Phone Number:</span>
          <Input
            placeholder="Enter your phone number"
            attributes={{
              disabled: isEditing ? false : true,
              value: phone,
            }}
          />
        </label>
        <label className="flex flex-col ">
          <span className="text-black font-medium ">Age:</span>
          <Input
            placeholder="Enter your dob"
            attributes={{
              disabled: isEditing ? false : true,
              value: age,
            }}
          />
        </label>
        <label className="flex flex-col ">
          <span className="text-black font-medium ">Gender:</span>
          <Input
            placeholder="Enter your phone number"
            attributes={{
              disabled: isEditing ? false : true,
              value: gender,
            }}
          />
        </label>
      </form>
    </div>
  );
}

export default Profile;
