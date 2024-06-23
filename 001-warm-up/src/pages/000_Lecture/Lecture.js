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
import { Checkbox } from "./Checkbox";

export const Lecture = () => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [hideProductsInCart, setHideProductsInCart] = useState(false);

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

  //   const productsToDisplay = products.filter((product) => {
  //     if (product.inCart === true && hideProductsInCart === true) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });

  //   const productsToDisplay = products.filter((product) => {
  //     if (product.inCart && hideProductsInCart) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });

  //   const productsToDisplay = products.filter((product) => {
  //     const shouldBeFilteredOut = !(product.inCart && hideProductsInCart);
  //     return shouldBeFilteredOut;
  //   });

  //   const productsToDisplay = products.filter(
  //     (product) => !(product.inCart && hideProductsInCart)
  //   );

  const productsToDisplay = products.filter(
    ({ inCart }) => !(inCart && hideProductsInCart)
  );

  return (
    <div>
      <h2>Hello from Lecture {value}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nazwa produktu</span>
          <input
            type="text"
            placeholder="Co masz kupić?"
            value={value}
            onChange={(event) => {
              //   setValue(); "trelemorele" + ostatnio kliknięty przycisk
              console.log("CHANGE");
              setValue(event.target.value);
            }}
            onKeyDown={() => {
              console.log("KEy DOWN");
            }}
            onKeyUp={() => {
              console.log("KEY UP");
            }}
            onClick={(event) => {
              console.log("CLICK");
            }}
            onInput={() => {
              console.log("INPUT");
            }}
            onDrag={(event) => {}}
            onMouseLeave={(event) => {}}
          />
        </label>
        <button>Submit</button>
        {/* document.querySelector('button').addEventListener('click',(event)=>{console.log(event)}) */}
      </form>
      <p>Wartość z input: {value}</p>
      {/* <p>Wartość zmodyfikowana {value.split("").join("*")}</p> */}
      <Checkbox
        label="Hide products in cart"
        cokolwiek={hideProductsInCart}
        func={() => {
          setHideProductsInCart(!hideProductsInCart);
        }}
      />

      <ul>
        {productsToDisplay.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <input
              onChange={() => {
                /**
                 * W momencie kliknięcia chcekboxa
                 * 1. wiem który produkt został kliknięty console.log(product);
                 * 2. wiem o wszystkich wyświetlanych produktach console.log(products);
                 * 3. mam możliwość ustawiania/aktualizacji stanu wsyztskich lub pojedyńczych produktów
                 *
                 * aktualizacja produktów
                 * 1. tworzymy nową tablicę ALE dodajemy ifa który sprawdza
                 *
                 */
                console.log(product);
                console.log(products);

                const nowaZakutlizowanaTablica = products.map(
                  (currentProduct) => {
                    // product.id - id klikniętego produktu
                    if (currentProduct.id === product.id) {
                      // negacja pozwala odznaczać i zaznaczać
                      return { ...product, inCart: !product.inCart };
                    } else {
                      return currentProduct;
                    }
                  }
                );
                setProducts(nowaZakutlizowanaTablica);
              }}
              type="checkbox"
              checked={product.inCart}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
