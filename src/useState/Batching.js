import React, { useState } from "react";
import ReactDOM from "react-dom";
import useRenderCount from "../useRenderCount/useRenderCount";

function Batching() {
  const [count, setCount] = useState(0);
  const renderCount = useRenderCount();

  function incrementSync() {
    //one render -> get's overwritten
    setCount(count + 1);
    setCount(count + 1);

    // one render -> multiple current value updates
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  }

  function incrementAsync() {
    setTimeout(() => {
      // multiple renders -> multiple current value updates
      setCount((prevState) => prevState + 1);
      setCount((prevState) => prevState + 1);
      setCount((prevState) => prevState + 1);
      setCount((prevState) => prevState + 1);
    }, 0);

    setTimeout(() => {
      // one render -> multiple current value updates
      // will be fixed and be out of the box in React 18
      ReactDOM.unstable_batchedUpdates(() => {
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 1);
      });
    }, 0);
  }

  return (
    <>
      <div>Renders: {renderCount}</div>
      <div>Count: {count}</div>
      <button onClick={incrementSync}>IncreaseSync</button>
      <button onClick={incrementAsync}>IncreaseAsync</button>
    </>
  );
}

export default Batching;

// redux way of unstable_batchedUpdates re-implementation

// import { batch } from 'react-redux';

// batch(() => {
// dispatch(...),
// dispatch(...),
// dispatch(...),
// dispatch(...),
// dispatch(...)
// })
