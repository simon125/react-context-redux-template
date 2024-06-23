import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { Lecture } from "./pages/Lecture/Lecture";
import { LectureContexts } from "./pages/Lecture/Lecture_contexts";

export const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/lecture-contexts" element={<LectureContexts />} />
        <Route path="/" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </main>
  );
};
