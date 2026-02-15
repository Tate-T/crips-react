export const applyFilters = (filters) => {
  return {
    type: 'APPLY_FILTERS',
    payload: filters,
  };
}
export const clearFilters = () => {
  return {
    type: 'CLEAR_FILTERS',
  };
}
export const setSorting = (sorting) => {
  return {
    type: 'SET_SORTING',
    payload: sorting,
  };
}