
// export const filtrationReducer = (state =[], action) => {
//     switch (action.type) {
//         case 'APPLY_FILTERS':
//             return action.payload;
//         default:
//             return state;
//     }

// }
import { createSlice } from "@reduxjs/toolkit";

export const filtrationReducer = createSlice({
    name: 'filtration',
    initialState: {},
    reducers: {
        applyFilters: (state, action) => {
            return action.payload;
        },
        clearFilters: () => {
            return {};
        },
        setSorting: (state, action) => {
            return action.payload;
        }
    }
})
export const { applyFilters, clearFilters, setSorting } = filtrationReducer.actions;
