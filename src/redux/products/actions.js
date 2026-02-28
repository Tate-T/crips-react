export const setProducts = (products) => ({
	type: "products/setProducts",
	payload: products,
});

export const sortProducts = (compareFn) => ({
	type: "products/sortProducts",
	payload: compareFn,
});
