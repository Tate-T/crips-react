const initialState = {
	currentPage: 1
};

export const miniCatalogReducer = (state = initialState, action) => {
	switch (action.type) {
		case "page/nextPage":
			return { ...state, currentPage: state.currentPage + 1 };

		default:
			return state;
	}
};
