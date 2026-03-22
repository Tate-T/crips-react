import { createSelector } from "@reduxjs/toolkit";

function onlyUnique(value, index, array) {
	return array.indexOf(value) === index;
}

const selectProducts = (state) => state.products.products;

export const getBrands = createSelector([selectProducts], (products) => products.map((product) => product.brand).filter(onlyUnique));

export const getSizes = createSelector([selectProducts], (products) => products.map((product) => product.size).filter(onlyUnique));

export const getLengths = createSelector([selectProducts], (products) => products.map((product) => product.length).filter(onlyUnique));

export const getColors = createSelector([selectProducts], (products) => products.map((product) => product.colors.reduce((acc, val) => [...acc, ...val], [])).filter(onlyUnique));

export const getMinPrice = createSelector([selectProducts], (products) => Math.min(products.map((product) => (product.discount ? product.price * (100 - product.discount) : product.price))));

export const getMaxPrice = createSelector([selectProducts], (products) => Math.max(products.map((product) => (product.discount ? product.price * (100 - product.discount) : product.price))));
