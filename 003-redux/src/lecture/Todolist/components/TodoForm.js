import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../slices/todolistSlice";

export const TodoForm = () => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    /**
     * 1. stworzenie obiektu todoItem
     * 2. dispatch akcji addTodo z przekazanym payloadem - todoItem
     * 3. wyczyszcznie formularza
     */

    // const todoItem = {
    //   name,
    //   priority,
    //   status: false,
    //   id: window.crypto.randomUUID(),
    // };

    const todoItem = {
      name: name,
      priority: priority,
      status: false,
      id: window.crypto.randomUUID(),
    };

    dispatch(addTodo(todoItem));
    setName("");
    setPriority("");
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo title..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="" hidden>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};
