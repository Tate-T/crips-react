export const incrementQuantity = (id) => ({
  type: 'cart/INCREMENT',
  payload: id,
});

export const decrementQuantity = (id) => ({
  type: 'cart/DECREMENT',
  payload: id,
});

export const removeItem = (id) => ({
  type: 'cart/REMOVE_ITEM',
  payload: id,
});

export const clearCart = () => ({
  type: 'cart/CLEAR_CART',
});

export const getCartItems = (state) => state.cart.items;
