import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
import { useSelector } from "react-redux";

export const Footer = () => {
  const productsInCart = useSelector((state) => state.shoppingCart.products);

  if (productsInCart.length === 0) {
    return null;
  }

  const total = productsInCart.reduce(
    (totalAcc, product) => totalAcc + product.price,
    0
  );

  return (
    <article className="footer">
      <div className="container">
        <p>
          Total: <b>{total}$</b>
        </p>
        <Link className="link" role="button" to="/shopping-cart">
          Przejdź do koszyka
        </Link>
      </div>
    </article>
  );
};
