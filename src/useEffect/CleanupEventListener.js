import React, { useState, useEffect } from "react";

function CleanupEventListener() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    // runs once before unmount
    return () => {
      /* 
        This avoids memory leaks. Modern browsers will do it for you and remove listeners but it is not true in cases 
        of old browses like IE.
      */
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <pre>{JSON.stringify(mousePosition, null, 2)}</pre>
    </>
  );
}

export default CleanupEventListener;
