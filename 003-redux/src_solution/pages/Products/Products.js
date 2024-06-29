import React from "react";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Footer } from "./components/Footer";

export const Products = () => {
  return (
    <>
      <Header />
      <ProductsList />
      <Footer />
    </>
  );
};
