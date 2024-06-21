import React from "react";

export const TodoForm = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter todo title..." />
      <button type="submit">Submit</button>
    </form>
  );
};
