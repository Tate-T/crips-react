import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://69bfcdee72ca04f3bcb977d9.mockapi.io/";

export const addAddress = createAsyncThunk(
  "userData/addAddress",
  async (address, thunkAPI) => {
    try {
      await axios.post("/users", {
        first_name: "-",
        last_name: "-",
        email: "-",
        password: "-",
        basket: [],
        addresses: address,
        wishlist: [],
      });
      const response = await axios.get("/users");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
