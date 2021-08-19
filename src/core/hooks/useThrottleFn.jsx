import React, { useRef, useEffect } from "react";

export const useThrottleFn = (fn, delay) => {
  const { current } = useRef({ timer: null, fn });

  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  const run = () => {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.timer = null;
      }, delay);
      current.fn();
    }
  };

  const cancel = () => {
    clearTimeout(current.timer);
    current.timer = null;
  };

  return { run, cancel };
};
