import React, { useState } from "react";

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
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleCalculateClick = () => {
    let calulatedResult = "";
    if (operation === "+") {
      calulatedResult = parseInt(number1) + parseInt(number2);
    } else if (operation === "-") {
      calulatedResult = parseInt(number1) - parseInt(number2);
    } else if (operation === "*") {
      calulatedResult = parseInt(number1) * parseInt(number2);
    } else {
      calulatedResult = parseInt(number1) / parseInt(number2);
    }

    setResult(calulatedResult);
  };

  return (
    <div>
      <p>Calculator</p>
      <div style={{ display: "flex", gap: 20 }}>
        <input
          type="number"
          value={number1}
          onChange={(event) => setNumber1(event.target.value)}
        />
        <select
          value={operation}
          onChange={(event) => setOperation(event.target.value)}
        >
          <option value="" hidden>
            Select operation
          </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={number2}
          onChange={(event) => setNumber2(event.target.value)}
        />
        <button onClick={handleCalculateClick}>Calculate</button>
      </div>
      <input type="text" readOnly value={result} />
    </div>
  );
};
