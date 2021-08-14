import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [toggled, setToggled] = useState(initialValue);

  const setToggle = (toggleStatus) => {
    if (typeof toggleStatus !== "undefined") {
      setToggled(toggleStatus);
      return;
    }

    setToggled(() => !toggled);
  };

  const setOnToggle = () => {
    setToggled(true);
  };

  const setUnToggle = () => {
    setToggled(false);
  };

  return [toggled, { setToggle, setOnToggle, setUnToggle }];
};
