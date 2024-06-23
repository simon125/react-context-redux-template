/**
 * Turbo powtórka z Reacta
 * - czym jest react libka do budowania apek typu SPA
 * - czym jest komponent
 * - czym jest jsx
 * - kompozycja komponentów - wywołanie/użycie komponentu kilkukrotnie
 * - czym jest stan i propsy
 * - listingi
 * - wyświetlanie warunkowe
 *
 * na przykładzie formularza i listy zakupów (tablica obiektów) ze statusem jako checkbox
 * użycie useState, formularza i handlerów
 *
 */

import { useState } from "react";

export const Lecture = () => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.random();

    /**
     * 1. stworzenie obiektu typu produkt
     * 2. umieszczenie nowostworzonego obiektu w tablicy products (setProducts)
     */
    // const newProduct = {
    //     name: value,
    //     inCart: false,
    //     id: id
    // }
    const newProduct = {
      name: value,
      inCart: false,
      id,
    };

    setValue("");
    console.log(newProduct);
    const noweProduckty = [...products, newProduct];

    setProducts(noweProduckty);
  };

  console.table(products);

  return (
    <div>
      <ul>
        {[
          { id: 1, name: "Kawa", inCart: false },
          { id: 2, name: "mleko", inCart: true },
        ].map((product) => (
          <li key={product.id}>
            {product.name}
            <input
              onChange={() => {
                const nowaZakutlizowanaTablica = products.map();
                setProducts(nowaZakutlizowanaTablica);
              }}
              type="checkbox"
              checked={product.inCart}
            />
          </li>
        ))}
        {/* REZULTAT DZIAŁANIA MAPOWANIA na podstawie tablicy prodktów tworzy się tablica elementów <li> */}
        [
        <li key={1}>
          {"kawa"}
          <input
            onChange={() => {
              const nowaZakutlizowanaTablica = products.map();
              setProducts(nowaZakutlizowanaTablica);
            }}
            type="checkbox"
            checked={false}
          />
        </li>
        ,
        <li key={2}>
          {"mleko"}
          <input
            onChange={() => {
              const nowaZakutlizowanaTablica = products.map();
              setProducts(nowaZakutlizowanaTablica);
            }}
            type="checkbox"
            checked={true}
          />
        </li>
        ]
      </ul>
    </div>
  );
};
