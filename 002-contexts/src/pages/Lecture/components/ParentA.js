import React from "react";
import { ChildA } from "./ChildA";
import { ChildB } from "./ChildB";

export const ParentA = (props) => {
  // <ParentA counter={props.test} />
  return (
    <article style={{ background: "#789123" }}>
      <p>ParentA</p>
      <b>Wartość propsów: {props.counter}</b>
      <ChildA setCounter={props.setCounter} />
      <ChildB counter={props.counter} />
    </article>
  );
};
