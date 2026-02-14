import { catalogData } from "../../data/catalog-data";

const ADD_ITEM = "wishlist/ADD_ITEM";
const REMOVE_ITEM = "wishlist/REMOVE_ITEM";
const SET_CURRENT_PAGE = "wishlist/SET_CURRENT_PAGE";
const NEXT_PAGE = "wishlist/NEXT_PAGE";
const PREV_PAGE = "wishlist/PREV_PAGE";

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: { ...item, id: Date.now() },
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});

const initialItems = catalogData.map((item, index) => ({
  ...item,
  id: item.id || `item-${Date.now()}-${index}`,
}));

const initialState = {
  items: initialItems,
  currentPage: 1,
  perPage: 6,
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM: {
      const newItems = state.items.filter((item) => item.id !== action.payload);

      const totalPages = Math.ceil(newItems.length / state.perPage);
      let newPage = state.currentPage;
      if (newPage > totalPages && newPage > 1) {
        newPage -= 1;
      }

      return {
        ...state,
        items: newItems,
        currentPage: newPage,
      };
    }

    case ADD_ITEM: {
      const newItems = [...state.items, action.payload];

      const newTotalPages = Math.ceil(newItems.length / state.perPage);

      return {
        ...state,
        items: newItems,
        currentPage: newTotalPages,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case NEXT_PAGE: {
      const totalPages = Math.ceil(state.items.length / state.perPage);
      if (state.currentPage < totalPages) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      }
      return state;
    }

    case PREV_PAGE: {
      if (state.currentPage > 1) {
        return {
          ...state,
          currentPage: state.currentPage - 1,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
