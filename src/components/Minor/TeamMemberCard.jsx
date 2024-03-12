import React from "react";

function TeamMemberCard({ name, title, image }) {
  return (
    <div className="flex flex-col gap-2 items-center text-xs max-w-60 border-2 border-solid border-gray-300 rounded-xl py-4">
      <div className="size-32">
        <img src={image} alt="human" className="w-full h-full rounded-full" />
      </div>
      <h3 className=" text-black font-medium">
        {name} <span className="ml-2 text-gray-600">{title}</span>
      </h3>
      <p className="w-3/4 mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        porro minus laborum?
      </p>
    </div>
  );
}

export default TeamMemberCard;
