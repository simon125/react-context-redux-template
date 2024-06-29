import React, { useEffect, useState } from "react";

import { Product } from "./Product";

import "./ProductsList.scss";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <article className="products-list-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </article>
  );
};
