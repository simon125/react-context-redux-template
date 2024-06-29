import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";

export const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </main>
  );
};
