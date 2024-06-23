import React, { useContext } from "react";
import { ParentA } from "./ParentA";
import { LectureContext } from "../../../contexts/LectureContext";

export const GrandParentA = () => {
  const { name } = useContext(LectureContext);

  return (
    <article style={{ background: "#123123" }}>
      <p>
        GrandParentA <b>Wartość z kontekstu: {name}</b>
      </p>
      <ParentA />
    </article>
  );
};
