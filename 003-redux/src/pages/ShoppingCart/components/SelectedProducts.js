import React from "react";

import "./SelectedProducts.scss";

export const SelectedProducts = () => {
  const products = [];

  /**
   * policz cene wszystkich produktów w koszyku
   * uwzględnij też wybraną ilość produktów
   */

  const total = 100;

  const handleCouterChange = (id, amount) => {
    console.log(id, amount);
  };

  const handleDeleteClick = (id) => {
    console.log(id);
  };

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
          {products.length === 0 && (
            <tr>
              <td className="no-products" colSpan={4}>
                Brak produktów w koszyku
              </td>
            </tr>
          )}
          {products.map((product) => (
            <tr>
              <td>{product.title}</td>
              <td>
                <input
                  onChange={(event) =>
                    handleCouterChange(product.id, event.target.value)
                  }
                  className="counter"
                  type="number"
                  name=""
                  id=""
                  value={product.amount}
                />
              </td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => handleDeleteClick(product.id)}
                  className="remove-btn"
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}

          {products.length !== 0 && (
            <tr>
              <td></td>
              <td style={{ textAlign: "right" }}>Total:</td>
              <td>
                <b> {total}$</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </article>
  );
};
