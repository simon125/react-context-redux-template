import React, { useState } from "react";

/**
 *
 * Stwórz apkę typu kalkulator na podstawie designu dostępnego w folderze designs
 *
 * Twoim zadaniem jest stworzenie Todolist.
 * Aplikacja powinna umożliwiać dodawanie nowych zadań, wyświetlanie ich w formie listy, oraz usuwanie zadań.
 *
 * Wymagania:
 *
 * Formularz Dodawania Zadania:
 *
 * Stwórz formularz zawierający pole tekstowe do wprowadzania tytułu zadania oraz przycisk "Dodaj".
 *
 * Lista Zadań:
 *
 * Wykorzystaj tabelę do wyświetlania listy zadań.
 * Kolumny tabeli powinny obejmować: "Idx", "Tytuł", oraz przycisk "Usuń".
 *
 * Dodawanie Zadań:
 *
 * Po wprowadzeniu tytułu zadania i kliknięciu przycisku "Dodaj", nowe zadanie powinno zostać dodane do listy.
 *
 * Usuwanie Zadań:
 *
 * Przy każdym zadaniu w tabeli umieść przycisk "Usuń".
 * Po kliknięciu przycisku "Usuń", odpowiednie zadanie powinno zostać usunięte z listy.
 *
 */

export const Todolist = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([{ id: 1, title: "Pouczyć się JSa" }]);

  const handleTitleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        title: todoTitle,
      };
      setTodos([...todos, newTodo]);
      setTodoTitle("");
    }
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo title..."
          value={todoTitle}
          onChange={handleTitleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Idx</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <button
                  style={{ width: "fit-content" }}
                  onClick={() => handleRemove(todo.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
