import React from "react";
import { Link } from "react-router-dom";

export const TodoForm = () => {
  return (
    <article>
      <Link to="/todos">Przejdź do listy todos</Link>
    </article>
  );
};
