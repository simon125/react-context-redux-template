import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip } from "recharts";

export const Statistics = () => {
  const todos = useSelector((store) => store.todos.list);

  const dataToDisplay = todos.reduce(
    (acc, todoItem) => {
      if (todoItem.status === true) {
        acc[0].value += 1;
      } else {
        acc[1].value += 1;
      }
      return acc;
    },
    [
      { name: "Done", value: 0 },
      { name: "Todo", value: 0 },
    ]
  );

  return (
    <article>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={dataToDisplay}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </article>
  );
};
