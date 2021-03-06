import React, { useRef, useEffect } from "react";

export const useThrottleFn = (fn, delay) => {
  const { current } = useRef({ timer: null, fn });

  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  const run = () => {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.fn();
        current.timer = null;
      }, delay);
    }
  };

  const cancel = () => {
    clearTimeout(current.timer);
    current.timer = null;
  };

  return { run, cancel };
};
