import React, { useContext } from "react";
import { GrandParentA } from "./components_contexts/GrandParentA";
import { LectureContext } from "../../contexts/LectureContext";

export const LectureContexts = () => {
  const { counter } = useContext(LectureContext);

  return (
    <article>
      Lecture Contexts:
      <b>Wartość z kontekstu: {counter}</b>
      <GrandParentA />
    </article>
  );
};
