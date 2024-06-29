import React from "react";
import "./Product.scss";
import { addProduct } from "../../../store/shoppingCartSlice";
import { useDispatch } from "react-redux";

export const Product = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  /**
   * sprawdź czy w storze istnieje już element który też jest dostepny w propsach
   * jeżeli tak przypisz do zmiennej wartość true dzięki temu przycisk zostanie zablokowany
   * przez co user nie będzie mógł dodać tego samego do koszyka
   */
  const isAddedToCart = false;

  const handleAddProductClick = () => {
    /**
     * dodaj produkt do stora
     */

    dispatch(addProduct(product));
  };

  return (
    <div className="product-container">
      <p>
        Name: <b>{product.title}</b>
      </p>
      <p>
        Price: <b>{product.price}</b>
      </p>
      <div className="thumbnail-container">
        <img className="thumbnail" src={product.thumbnail} alt="" />
      </div>
      <button disabled={isAddedToCart} onClick={handleAddProductClick}>
        Dodaj do koszyka
      </button>
    </div>
  );
};
