import React from "react";

/**
 * Stwórz komponent typu counter zgodnie z desginem dostępnym w folderze designs
 *
 * aplikacja po kliknięciu odpowiednich przycisków powinna decrementować/incrementować
 * wartość w counterze
 *
 * wartość countera powinna być wyświetlona jako "value" inputa
 * user nie powinien mieć możliwości ręcznej zmiany wartości w inpucie z poziomu klawiatury
 * jedynie przez kliknięcia przycisków +1 oraz -1
 *
 *
 * ⭐ Dla chętnych stwórz dodatkową kontrolkę do aktualizacji wartości countera
 * kontrolka powinna składać się z inputa typu number oraz przycisku do wykonania
 * działania na aktualnej wartości countera z wartością z inputu
 * - pamiętaj o sytuacjach brzegowych (tzw. edge cases) np sytuacja gdy user nie podał żadnej wartości
 * i następnie zasubmitował ją system powinien temu zapobiedz oraz wyświetlić stosowny komunikat
 * - niech nowa kontrolka będzie oddzielnym komponentem umieszczonym w folderze components
 */

export const Counter = () => {
  return (
    <div>
      <p>Miejsce na Apke counter</p>
    </div>
  );
};
