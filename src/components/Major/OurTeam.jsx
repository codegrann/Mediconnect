import React, { useContext, useState, useEffect } from "react";
import TeamMemberCard from "../Minor/TeamMemberCard";

import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

function OurTeam() {
  // FIREBASE HOOK
  const query = collection(db, "ourteam");
  const [docs, loading, error] = useCollectionData(query);

  // ONSNAPSHOT
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  // onSnapshot(collection(db, "ourteam"), (snapshot) => {
  // setUsers(snapshot.docs.map((doc) => doc.data()));
  // console.log(snapshot.docs.map((doc) => doc.data()));
  // });
  // }, []);

  // useEffect(() => {}, []);
  console.log(docs);

  return (
    <div className="mt-6 pb-10 md:w-5/6 mx-auto">
      <h3 className="text-black font-medium mb-4 md:text-xl md:mb-10">
        Our team
      </h3>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:gap-2 items-center">
        {loading && "please wait..."}
        {docs?.map((user) => {
          return (
            <TeamMemberCard
              key={user.name}
              name={user.name}
              title={user.title}
              // image={user.image}
            />
          );
        })}
        {error && `${error}`}
      </div>
      {/* <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:gap-2 items-center">
        {users?.map((user) => {
          return (
            <TeamMemberCard
              key={user.name}
              name={user.name}
              title={user.title}
              // image={user.image}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default OurTeam;
