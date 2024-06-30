import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Statistics } from "./Statistics";
import { removeTodo, toggleTodoStatus } from "../../../slices/todolistSlice";

export const TodoTable = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);

  const colorsByPriority = {
    low: "green",
    medium: "yellow",
    high: "red",
  };

  return (
    <>
      <article>
        <table>
          <thead>
            <tr>
              <th>Idx</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.name}</td>
                <td style={{ color: colorsByPriority[todo.priority] }}>
                  {todo.priority.toUpperCase()}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.status}
                    onChange={() => {
                      dispatch(toggleTodoStatus(todo.id));
                    }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(removeTodo(todo.id));
                    }}
                    style={{ width: "fit-content" }}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
      {/* ⭐⭐DLA CHĘTNYCH STATISTICS⭐⭐ */}
      <Statistics />
    </>
  );
};
