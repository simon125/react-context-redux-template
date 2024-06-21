import React from "react";

/**
 * Stwórz apkę typu kalkulator na podstawie designu dostępnego w folderze designs
 *
 * działanie kalkulatora:
 * - user ma mieć możliwość wpisania wartości liczbowych do inputów
 * - user ma mieć możliwość wybrania z selecta operacji matematycznej którą chce wykonać
 * (+, -, *, /)
 * - use ma mieć możliwość uruchomienia operacji kalkulacji za pomocą przycisku calculate
 * po czym wynik ma się wyświetlić w inpucie z placeholderem Wynik (patrz design)
 *
 * nice to have:
 * spróbuj wykonać to zadanie tworząc więcej niż jeden komponent
 *
 * sugerowane komponenty:
 *
 * - Input
 * - MathOperations
 * - Calculate
 * - Result
 *
 * ⭐ Dodaj przycisk continue który umożliwi użytkownikowi ustawić wynik działania do pierwszego inputu
 * dzięki czemu kalkulator będzie zachowywał się podobnie jak systemowy kalkulator
 * przykład działania:
 * 1. user wpisuje pierwszą i drugą liczbę oraz wybiera operację którą chce wykonać na tych liczbach
 * 2. user klika calulate -> system wykonuje działanie -> wynik wyświetla się w inpucie do wyświetlania wartości
 * 3. na UI wyświetla się przycisk z labelką continue który po kliknięciu ustawia wynik poprzedniego działania
 * jako wartość w 1 inpucie
 * 4. user wpisuje drugą liczbę oraz wybiera operację którą chce wykonać na tych liczbach
 * 5. user klika calulate -> system wykonuje działanie na wyniku z poprzedniego działania oraz nowej liczby z 2 inputu
 * -> wynik wyświetla się w inpucie do wyświetlania wartości
 *
 */

export const Calculator = () => {
  return (
    <div>
      <p>Miejsce na kalkulator</p>
    </div>
  );
};
