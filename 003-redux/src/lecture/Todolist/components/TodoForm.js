import React from "react";

export const TodoForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter todo title..." />
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};
