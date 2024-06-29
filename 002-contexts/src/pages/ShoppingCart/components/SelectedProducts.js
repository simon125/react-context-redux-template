import React, { useContext } from "react";

import "./SelectedProducts.scss";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";
import { getTotalPrice } from "../../../utils/getTotalPrice";

export const SelectedProducts = () => {
  /**
   * policz cene wszystkich produktów w koszyku
   * uwzględnij też wybraną ilość produktów
   */

  const { selectedProducts, removeProductFromCart, increaseProductAmount } =
    useContext(ShoppingCartContext);

  if (selectedProducts.length === 0) {
    return <article>Koszyk, tylko trochę pusty ...</article>;
  }

  const totalPrice = getTotalPrice(selectedProducts);

  return (
    <article>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <input
                  className="counter"
                  type="number"
                  value={product.amount}
                  onChange={(event) => {
                    console.log("change");
                    increaseProductAmount(event.target.value, product.id);
                  }}
                />
              </td>
              <td>{product.price}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => {
                    removeProductFromCart(product.id);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2} style={{ textAlign: "end" }}>
              Total:
            </td>
            <td>
              <b>{totalPrice}$</b>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};
