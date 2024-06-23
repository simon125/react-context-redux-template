import React, { useContext } from "react";
import { LectureContext } from "../../../contexts/LectureContext";

export const ChildB = () => {
  const { sayHello, counter } = useContext(LectureContext);

  return (
    <article style={{ background: "#567123" }}>
      ChildB
      <b>Wartość kontekstu: {counter}</b>
      <button onClick={sayHello}>Say Hello</button>
    </article>
  );
};
