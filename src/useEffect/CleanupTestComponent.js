import React, { useState, useEffect } from "react";

function Test() {
  useEffect(() => {
    console.log("Rendered");

    return () => {
      console.log("Unmount");
    };
  }, []);

  return <h2>Hello from Test</h2>;
}

function CleanupTestComponent() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && <Test />}
      <button
        onClick={() => {
          setShow((prevState) => !prevState);
        }}
      >
        Toggle
      </button>
    </>
  );
}

export default CleanupTestComponent;
