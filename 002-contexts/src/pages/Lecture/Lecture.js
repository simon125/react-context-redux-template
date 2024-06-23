import React from "react";

/**
 * Przygotuj strukture komponentową zgodną z designem (folder designs)
 * Zauważ że komponenty skłądają się z wielu zagnieżdzeń.
 * Każdy komponent powinien być wydzielony do oddzielnego pliku
 * nazwy komponentów jakie mozesz użyć są określone jako nagłówki prostokocię na designie.
 *
 * Założeniem zadania jest odzwierciedlenie dość złożonej struktury komponentów która z pewnością
 * spotkasz w relanych projektach.
 *
 * Kolejnym celem jest rozpropagowanie stanu z komponentu useState (np stanu dla countera) za pomocą
 * propsów po wyznaczonych komponentach zgodnie z designem.
 *
 * Pytanie rekrutacyjne:
 * ============================================
 * Efekt który osiągniemy nazywa się ........ .
 * ============================================
 */

export const Lecture = () => {
  return (
    <article>
      Lecture: <br />
      <b>Wartość propsów: </b>
    </article>
  );
};
