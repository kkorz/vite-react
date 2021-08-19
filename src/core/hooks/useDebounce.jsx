import React, { useState, useEffect } from "react";

export const useDebounce = (initialValue, delay = 0) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => setValue(initialValue), delay);
    return () => clearTimeout(timer);
  }, [initialValue, delay]);

  return value;
};
