import React, { useContext } from "react";
import "./Footer.scss";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";

import { toast } from "react-toastify";

export const Footer = () => {
  const { selectedProducts, clearShoppingCart } =
    useContext(ShoppingCartContext);
  /**
   * POST
   * https://dummyjson.com/http/200
   *
   * napisz funckje wykonującą request http metodą POST
   * użyj wbudowanej funkcji fetch
   * w body wyślij idki lub name produktów które user wybrał klikając w ekranie z produktami
   * niech idki będą kluczami a ilość poszczególnych produktów wartością
   * np.
   *
   * {
   *  telefon: 2,
   *  telewizor: 1,
   *  ziemniaki: 20
   * }
   */

  const handleClick = () => {
    fetch("https://dummyjson.com/http/200", {
      method: "POST",
      body: JSON.stringify(selectedProducts),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast("Jupi udało się Twoje zamówienie jest procesowane");
          clearShoppingCart();
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        toast("Coś nie pykło spróbuj ponownie", { type: "error" });
      });
  };

  return (
    <article>
      <button className="action-button" onClick={handleClick}>
        Sfinalizuj transakcje
      </button>
    </article>
  );
};
