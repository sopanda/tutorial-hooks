import { useRef, useEffect } from "react";

function useRenderCount() {
  const ref = useRef(0);

  useEffect(() => {
    ref.current++;
  });

  return ref.current;
}

export default useRenderCount;
