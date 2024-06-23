import React, { useEffect, useState } from "react";
import "./ProductsList.scss";
import { Product } from "./Product";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  /**
   * 1. sposób na pobieranie danych przy użyciu async/await
   */
  // const fetchProducts = async () => {
  //   const response = await fetch("https://dummyjson.com/products");
  //   const data = await response.json();
  //   setProducts(data.products);
  // };

  // useEffect(() => {
  //   try {
  //     fetchProducts();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => {
        console.log("Coś nie pykło");
      });
  }, []);

  // Zadanie
  // https://dummyjson.com/products
  // fetch
  // wykonaj request pod podany endpoint
  // zweryfikuj response w konsoli
  // zapisz dane z responsu do satanu lokalnego lub stanu w kontekście

  console.table(products);

  return (
    <article className="products-list-container">
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} Price: {product.price}
          </li>
        ))}
      </ul> */}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </article>
  );
};
