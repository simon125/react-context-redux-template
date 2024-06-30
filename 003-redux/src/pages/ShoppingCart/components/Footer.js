import React from "react";
import "./Footer.scss";

export const Footer = () => {
  /**
   * products będzie tablicą produktów które pochodza ze stora = to co user wybrał
   */
  const products = [];

  const handleClick = () => {};

  if (products.length === 0) return null;

  return (
    <article>
      <button onClick={handleClick} className="action-button">
        Sfinalizuj transakcje
      </button>
    </article>
  );
};
