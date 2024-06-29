import React from "react";
import { SelectedProducts } from "./components/SelectedProducts";
import { Footer } from "./components/Footer";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  return (
    <>
      <Link style={{ marginTop: 20 }} role="button" to="/">
        Go back
      </Link>
      <SelectedProducts />
      <Footer />
    </>
  );
};
