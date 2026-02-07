import axios from "axios";

export const productsApi = axios.create({ baseURL: import.meta.env.VITE_PRODUCTS_API });
