export const setProducts = (products) => ({
  type: "setProducts",
  payload: products,
});

export const selectColor = (color) => ({
  type: "selectColor",
  payload: color,
});

export const selectSize = (size) => ({
  type: "selectSize",
  payload: size,
});

export const increaseQuantity = () => ({
  type: "increaseQuantity",
});

export const decreaseQuantity = () => ({
  type: "decreaseQuantity",
});