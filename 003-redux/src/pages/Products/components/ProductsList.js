import React, { useEffect, useState } from "react";
import "./ProductsList.scss";
import { Product } from "./Product";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        /*
        zwerfyikuj co jest w konsoli - co się pobiera - następnie przypisz dane (tablice produktów)
        do stanu products
        */
        setProducts(data.products);
        console.log(data);
      });
  }, []);

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
