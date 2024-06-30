import { Route, Routes, Link } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { Todolist } from "./lecture/Todolist/Todolist";
import { Counter } from "./lecture/Counter/Counter";

export const App = () => {
  return (
    <main className="container">
      <article>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">Products</Link>
            </li>
            <li>
              {" "}
              <Link to="/shopping-cart">ShoppingCart</Link>
            </li>
            <li>
              {" "}
              <Link to="/lecture">Todolist</Link>
            </li>
            <li>
              {" "}
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
      </article>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/lecture" element={<Todolist />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </main>
  );
};
