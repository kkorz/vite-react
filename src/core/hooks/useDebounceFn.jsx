import React, { useRef, useEffect } from "react";

export const useDebounceFn = (fn, delay) => {
  const { current } = useRef({ fn, timer: null });

  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  const run = () => {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      fn();
    }, delay);
  };

  const cancel = () => {
    clearTimeout(current.timer);
  };

  return { run, cancel };
};
