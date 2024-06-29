import React from "react";
import { Statistics } from "./Statistics";

export const TodoTable = () => {
  const todos = [];

  return (
    <>
      <article>
        <table>
          <thead>
            <tr>
              <th>Idx</th>
              <th>Title</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{todos}</tbody>
        </table>
      </article>
      {/* ⭐⭐DLA CHĘTNYCH STATISTICS⭐⭐ */}
      <Statistics />
    </>
  );
};
