import React from "react";
import "./Footer.scss";

export const Footer = () => {
  /**
   * products będzie tablicą produktów które pochodza ze stora = to co user wybrał
   */
  const products = [];

  const handleClick = () => {
    fetch("https://dummyjson.com/http/200", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      /**
       * zmień to co wysyłamy na tablice id wybranych produktów
       */
      body: JSON.stringify({ products: "trelemorele" }),
    })
      .then((res) => res.json())
      .then(() => {
        /**
         * zresetuj stan reduxowy do stanu początkowego tak żeby
         * można było na nowo coś kupować :)
         */
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
