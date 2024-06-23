import React, { useContext } from "react";
import { ChildA } from "./ChildA";
import { ChildB } from "./ChildB";
import { LectureContext } from "../../../contexts/LectureContext";

export const ParentA = () => {
  const { counter } = useContext(LectureContext);
  return (
    <article style={{ background: "#789123" }}>
      <p>ParentA</p>
      <b>Wartość Kontekstu: {counter}</b>
      <ChildA />
      <ChildB />
    </article>
  );
};
