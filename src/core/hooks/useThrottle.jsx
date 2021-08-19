import React, { useState, useEffect } from "react";
import { useThrottleFn } from "./useThrottleFn";

export const useThrottle = (initialValue, delay = 0) => {
  const [value, setValue] = useState(initialValue);

  const { run } = useThrottleFn(() => setValue(initialValue), delay);

  useEffect(() => {
    run();
  }, [initialValue, delay]);

  return value;
};
