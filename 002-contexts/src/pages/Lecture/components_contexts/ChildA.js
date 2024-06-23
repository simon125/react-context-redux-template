import React from "react";
import { GrandChild } from "./GrandChild";

export const ChildA = () => {
  return (
    <article style={{ background: "#567123" }}>
      <p>ChildA</p>
      <GrandChild />
    </article>
  );
};
