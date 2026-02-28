// TODO: fetch
import {createSlice} from "@reduxjs/toolkit"
import { catalogData } from "../../data/catalog-data";

const productSlice = createSlice({
	name: "products",
	initialState:{
		products: catalogData,
	},
	reducers:{
		setProducts:(state, action)=>{
			state.products = action.payload
		},
		sortProducts:(state, action)=>{
			state.products.sort(action.payload)
		},
	},
})
export const {setProducts, sortProducts} = productSlice.actions
export const productsReducer = productSlice.reducer 