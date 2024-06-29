import React from "react";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../store/shoppingCart/shoppingCartSlice";

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.shoppingCart.products);

  const isAddedToCart = productsInCart.find(({ id }) => product.id === id);

  const handleAddProductClick = () => {
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
