import React from "react";
import GrandChild from "./GrandChild";

export const ChildA = (props) => {
  return (
    <article style={{ background: "#567123" }}>
      <p>ChildA</p>
      <GrandChild counter={123} setCounter={props.setCounter} />
    </article>
  );
};
