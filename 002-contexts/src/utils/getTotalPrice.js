export const getTotalPrice = (selectedProducts) =>
  selectedProducts.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);
