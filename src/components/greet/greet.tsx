import React from "react";
import { GreetProps } from "./greet.types";

const Greet = (props: GreetProps) => {
  const { name } = props;
  console.log("page props", props);
  return <div>Hello {name ? name + "!" : ""}</div>;
};

export default Greet;
