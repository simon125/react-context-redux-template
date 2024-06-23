import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

export const Footer = () => {
  /**
   * Sprawdz jaka jest cena wszystkich produktów w koszyku i przypisz ją do zmiennej total
   * zmienna total jest wyświetlana userowi
   */

  return (
    <article className="footer">
      <div className="container">
        <Link className="link" role="button" to="/shopping-cart">
          Przejdź do koszyka
        </Link>
      </div>
    </article>
  );
};
