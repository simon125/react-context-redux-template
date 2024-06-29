import React from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoTable } from "./components/TodoTable";
import { Link } from "react-router-dom";

export const Todolist = () => {
  return (
    <div>
      <Link to="/counter">Counter</Link>
      <TodoForm />
      <TodoTable />
      <article>
        <button>Usuń zadania skończone</button>
      </article>
    </div>
  );
};
