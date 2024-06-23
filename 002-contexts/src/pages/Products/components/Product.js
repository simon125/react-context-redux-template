import React from "react";
import "./Product.scss";

/**
 *
 * Stwórz komponent Produkt który wywietli dane zgodnie z dostępnym designem
 * komponent powinien przyjmować dane z propsów
 *
 * 
 
   <Product
    key={product.id}
    title={product.title}
    price={product.price}
    thumbnail={product.thumbnail}
    />


    <Product
      key={product.id}
      product={product}
    />
 */

export const Product = (props) => {
  // Zablokuj przycisk w sytuacji gdy produkt jest już w koszyku
  const isProductInCart = true;

  return (
    <div className="product-container">
      <div className="thumbnail-container">
        <img className="thumbnail" alt="" />
      </div>
    </div>
  );
};
