import React, { useContext } from "react";
import "./Product.scss";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";

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
  const rozpropagowanyObiekt = useContext(ShoppingCartContext);
  // rozpropagowanyObiekt.selectedProducts
  // rozpropagowanyObiekt.setSelectedProducst

  // <Product
  //   key={product.id}
  //   product={product}
  //  />

  // Zablokuj przycisk w sytuacji gdy produkt jest już w koszyku
  // const isProductInCart = props.selectedProducts.some(
  //   (product) => product.id === props.product.id
  // );

  const isProductInCart =
    rozpropagowanyObiekt.selectedProducts.filter(
      (product) => product.id === props.product.id
    ).length > 0;

  const { title, price, thumbnail } = props.product;

  const handleClick = () => {
    rozpropagowanyObiekt.addProductToCart(props.product);
  };

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
      <button onClick={handleClick} disabled={isProductInCart}>
        Add to cart
      </button>
    </div>
  );
};
