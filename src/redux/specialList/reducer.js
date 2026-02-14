const initialState = {
	visibleCount: 4,
	isDesktop: false,
	startIndex: 0
}

export const specialListReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'special/SET_LAYOUT': {
			const { isDesktop } = action.payload

			if (isDesktop) {
				return {
					...state,
					isDesktop: true,
					visibleCount: 5,
					startIndex: 0
				}
			}

			return {
				...state,
				isDesktop: false,
				visibleCount: 4
			}
		}

		case 'special/SEE_MORE': {
			const { maxLength } = action.payload
			return {
				...state,
				visibleCount: Math.min(state.visibleCount + 4, maxLength)
			}
		}

		case 'special/PREV': {
			return {
				...state,
				startIndex: Math.max(state.startIndex - 1, 0)
			}
		}

		case 'special/NEXT': {
			const { maxLength } = action.payload

			if (state.startIndex + state.visibleCount < maxLength) {
				return {
					...state,
					startIndex: state.startIndex + 1
				}
			}

			return state
		}

		default:
			return state
	}
}
