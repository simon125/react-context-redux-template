import React from "react";

export const Statistics = () => {
  const total = 10;
  const amountOfFinishedTodos = 4;

  return (
    <article>
      <p>
        Total: <b>{total}</b>
      </p>
      <p>
        Done: <b>{amountOfFinishedTodos}</b>
      </p>
    </article>
  );
};
