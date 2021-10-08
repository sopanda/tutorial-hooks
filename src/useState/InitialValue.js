import React, { useState } from "react";

// function computeProfile() {
//   console.log("I'm doing heavy MATH and ROCKET SCIENCE to make you happy");
//   return {
//     name: "Bohdan",
//     age: 25,
//   };
// }

function InitialValue() {
  const [profile, setProfile] = useState({
    name: "Bohdan",
    age: 25,
  });

  // Will do re-calculation of initial value after each re-render
  //   const [profile, setProfile] = useState(computeProfile());
  // Will calculation only once
  //   const [profile, setProfile] = useState(() => computeProfile());

  return (
    <>
      <div>{JSON.stringify(profile, null, 2)}</div>
      {/* 
            Dummy update with full state object replacement.
            Class way with this.setState() did smart update
      */}
      <button onClick={() => setProfile({ age: profile.age + 1 })}>
        Make Bohdan young again!
      </button>
      {/* 
            Now we are smart, we are updating only needed field
      */}
      <button
        onClick={() =>
          setProfile((prevState) => ({ ...prevState, age: profile.age + 1 }))
        }
      >
        Make Bohdan young again! (correct way)
      </button>
    </>
  );
}

export default InitialValue;
