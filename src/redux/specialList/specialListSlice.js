import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	visibleCount: 4,
	isDesktop: false,
	startIndex: 0
}

const specialListSlice = createSlice({
	name: 'specialList',
	initialState,
	reducers: {
		setLayout(state, action) {
			const { isDesktop } = action.payload
			
			if (isDesktop) {
				state.isDesktop = true
				state.visibleCount = 5
				state.startIndex = 0
				return
			}
			
			state.isDesktop = false
			state.visibleCount = 4
			state.startIndex = 0
		},
		
		seeMore(state, action) {
			const { maxLength } = action.payload
			state.visibleCount = Math.min(state.visibleCount + 4, maxLength)
		},
		
		prev(state) {
			state.startIndex = Math.max(state.startIndex - 1, 0)
		},
		
		next(state, action) {
			const { maxLength } = action.payload
			if (state.startIndex + state.visibleCount < maxLength) {
				state.startIndex += 1
			}
		}
	}
})

export const { setLayout, seeMore, prev, next } = specialListSlice.actions
export default specialListSlice.reducer