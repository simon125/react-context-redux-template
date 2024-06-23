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

  const { title, price, thumbnail } = props.product;

  return (
    <div className="product-container">
      <p>
        Name: <b>{title}</b>
      </p>
      <p>
        Price: <b>{price}</b>
      </p>
      <div className="thumbnail-container">
        <img src={thumbnail} className="thumbnail" alt="" />
      </div>
      <button>Add to cart</button>
    </div>
  );
};
