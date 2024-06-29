import React from "react";
import "./Footer.scss";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../../store/shoppingCart/shoppingCartSlice";

export const Footer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shoppingCart.products);

  const handleClick = () => {
    fetch("https://dummyjson.com/http/200", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ products: products.map(({ id }) => id) }),
    })
      .then((res) => res.json())
      .then(() => {
        dispatch(resetState());
      });
  };

  if (products.length === 0) return null;

  return (
    <article>
      <button onClick={handleClick} className="action-button">
        Sfinalizuj transakcje
      </button>
    </article>
  );
};
