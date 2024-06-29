import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductsList } from "./components/ProductsList";

export const Products = () => {
  return (
    <>
      <Header />
      <ProductsList />
      {/* 
          ZAIMPORTUJ I WYŚWIETL KOMPONENT ProductsList
      */}
      <Footer />
    </>
  );
};
