import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";
import { getTotalPrice } from "../../../utils/getTotalPrice";

export const Footer = () => {
  // const variable = useContext(ShoppingCartContext);
  // variable.selectedProducts
  // const {selectedProducts} = variable;
  const { selectedProducts } = useContext(ShoppingCartContext);

  /**
   * Sprawdz jaka jest cena wszystkich produktów w koszyku i przypisz ją do zmiennej total
   * zmienna total jest wyświetlana userowi
   */

  /**
   * 1. odczyt danych z kontekstu
   * 2. wyświetlenie/schowanie footera w zależności od stanu (selectedProducts)
   *    if selectedProducts.length === 0 return null;
   * 3. wyświetlenie ceny sumarczynej wybranych produktów (.reduce)
   */

  if (selectedProducts.length === 0) {
    return null;
  }

  // const totalPrice = selectedProducts.reduce((total, product) => {
  //   return total + product.price;
  // }, 0);

  const totalPrice = getTotalPrice(selectedProducts);

  return (
    <article className="footer">
      <div className="container">
        <span>
          Total price: <b>{totalPrice}$</b>{" "}
        </span>
        <Link className="link" role="button" to="/shopping-cart">
          Przejdź do koszyka
        </Link>
      </div>
    </article>
  );
};
