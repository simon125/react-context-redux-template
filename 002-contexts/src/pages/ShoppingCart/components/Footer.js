import React from "react";
import "./Footer.scss";

export const Footer = () => {
  /**
   * POST
   * https://dummyjson.com/http/200
   *
   * napisz funckje wykonującą request http metodą POST
   * użyj wbudowanej funkcji fetch
   * w body wyślij idki produktów które user wybrał klikając w ekranie z produktami
   * niech idki będą kluczami a ilość poszczególnych produktów wartością
   * np.
   *
   * {
   *  telefon: 2,
   *  telewizor: 1,
   *  ziemniaki: 20
   * }
   */

  return (
    <article>
      <button className="action-button">Sfinalizuj transakcje</button>
    </article>
  );
};
