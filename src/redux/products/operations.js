import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_PRODUCTS_API;

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const res = await axios.get("/");
	return res.data;
})
