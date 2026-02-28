const defaultCart = [
  {
    img: "https://i.postimg.cc/YqS20htm/catalog-Image1.jpg",
    category: "trending",
    name: "Angels malu zip jeans slim black used",
    price: 139,
    colors: ["#88ABCB", "#FACBCE", "#A75E5D"],
    id: "1",
    discount: 20,
    size: "w26",
    brand: "cece",
    quantity: 1
  }
];

// 1. Read from localStorage when the reducer first initializes
const persistedCart = localStorage.getItem('cartProducts');

const initialState = {
  items: persistedCart ? JSON.parse(persistedCart) : defaultCart,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cart/INCREMENT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        ),
      };
    case 'cart/DECREMENT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && (item.quantity || 1) > 1
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        ),
      };
    case 'cart/REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'cart/CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

// Selector
export const getCartItems = (state) => state.cart.items;