import { tableData } from "../../data/table-data.js";

import { OPEN_MODAL, CLOSE_MODAL } from "./actions.js";

const initialState = {
  rows: tableData,
  isModalOpen: false,
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};
