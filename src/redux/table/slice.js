import { createSlice } from "@reduxjs/toolkit";
import { tableData } from "../../data/table-data.js";

const initialState = {
  rows: tableData,
  isModalOpen: false,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = tableSlice.actions;
export default tableSlice.reducer;
