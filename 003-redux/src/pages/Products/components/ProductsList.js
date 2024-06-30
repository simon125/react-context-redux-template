import React, { useEffect, useState } from "react";
import "./ProductsList.scss";
import { Product } from "./Product";

export const ProductsList = () => {
  const [products] = useState([]);

  useEffect(() => {}, []);

  return (
    <article className="products-list-container">
      {/* 
        POBRANĄ LISTĘ PRODUKTÓW WYŚWIETL ZA POMOCĄ FUNCKJE .MAP DOSTĘPNEJ NA TABLICACH
        UŻYJ KOMPONENTU Product.js do wysweitlania produktów 
    */}

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </article>
  );
};
