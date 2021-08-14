import React, { Fragment } from "react";
import { useToggle } from "./useToggle";

const Index = () => {
  const [toggled, { setToggle, setOnToggle, setUnToggle }] = useToggle();
  return (
    <Fragment>
      <p>toggle status is {String(toggled)}</p>
      <button onClick={() => setToggle()}>toggle it</button>
      <button onClick={() => setToggle(true)}>toggle true</button>
      <button onClick={() => setToggle(false)}>toggle false</button>
      <button onClick={() => setOnToggle()}>toggle true function</button>
      <button onClick={() => setUnToggle()}>toggle false function</button>
    </Fragment>
  );
};

export default Index;
