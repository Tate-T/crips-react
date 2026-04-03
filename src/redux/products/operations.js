import { createAsyncThunk } from "@reduxjs/toolkit";

import { productsApi } from "../../apis/productsApi";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const res = await productsApi.get("/");
	return res.data;
})
