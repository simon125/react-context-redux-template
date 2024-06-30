import React from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoTable } from "./components/TodoTable";
import { removeCompleted } from "../../slices/todolistSlice";
import { useDispatch } from "react-redux";

export const Todolist = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <TodoForm />
      <TodoTable />
      <article>
        <button
          onClick={() => {
            dispatch(removeCompleted());
          }}
        >
          Usuń zadania skończone
        </button>
      </article>
    </div>
  );
};
