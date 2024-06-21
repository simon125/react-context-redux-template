import { Counter } from "./pages/001_Counter/Counter";
import { Calculator } from "./pages/002_Calculator/Calculator";
import { Todolist } from "./pages/003_Todolist/Todolist";

export const App = () => {
  return (
    <main className="container">
      <article>
        <h2>Lecture</h2>
        <p>Miejsce na komponent z części wykładowej</p>
      </article>

      <article>
        <h2>Counter</h2>
        <Counter />
      </article>
      <article>
        <h2>Calculator</h2>
        <Calculator />
      </article>
      <article>
        <h2>Todolist</h2>
        <Todolist />
      </article>
    </main>
  );
};
