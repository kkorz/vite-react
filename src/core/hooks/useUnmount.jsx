import React, { useEffect } from "react";

export const useUnmount = (fn) => {
  useEffect(() => () => fn(), []);
};
