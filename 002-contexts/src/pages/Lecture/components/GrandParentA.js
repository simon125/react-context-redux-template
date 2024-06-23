import React from "react";
import { ParentA } from "./ParentA";

export const GrandParentA = (props) => {
  // <GrandParentA test={counter} setCounter={setCounter} />
  return (
    <article style={{ background: "#123123" }}>
      <p>GrandParentA</p>
      <ParentA counter={props.test} setCounter={props.setCounter} />
    </article>
  );
};
