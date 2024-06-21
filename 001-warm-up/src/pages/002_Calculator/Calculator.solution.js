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
 */

export const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [operation, setOperation] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);

  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
  };

  const handleCalculate = () => {
    if (number1 && number2) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      switch (operation) {
        case "+":
          setResult(num1 + num2);
          break;
        case "-":
          setResult(num1 - num2);
          break;
        case "*":
          setResult(num1 * num2);
          break;
        case "/":
          setResult(num1 / num2);
          break;
        default:
          setResult(null);
      }
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 20 }}>
        <input
          type="text"
          placeholder="Number 1"
          value={number1}
          onChange={handleNumber1Change}
        />
        <select value={operation} onChange={handleOperationChange}>
          <option hidden disabled value="">
            Select operation
          </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          placeholder="Number 2"
          value={number2}
          onChange={handleNumber2Change}
        />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <input type="text" placeholder="Wynik" value={result} readOnly />
    </div>
  );
};
