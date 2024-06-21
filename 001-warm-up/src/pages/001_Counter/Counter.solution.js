import React, { useState } from "react";

/**
 * Stwórz komponent typu counter zgodnie z desginem dostępnym w folderze designs
 *
 * aplikacja po kliknięciu odpowiednich przycisków powinna decrementować/incrementować
 * wartość w counterze
 *
 * wartość countera powinna być wyświetlona jako "value" inputa
 * user nie powinien mieć możliwości ręcznej zmiany wartości w inpucie z poziomu klawiatury
 * jedynie przez kliknięcia przycisków +1 oraz -1
 */

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}
    >
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <input type="text" value={counter} readOnly />
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};
