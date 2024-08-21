// eslint-disable-next-line import/prefer-default-export
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_WITHOUT_STOPS: 'SHOW_WITHOUT_STOPS',
  SHOW_ONE_STOPS: 'SHOW_ONE_STOPS',
  SHOW_TWO_STOPS: 'SHOW_TWO_STOPS',
  SHOW_THREE_STOPS: 'SHOW_THREE_STOPS',
}
export const SortFilters = {
  CHEAPEST: 'CHEAPEST',
  FASTEST: 'FASTEST',
  OPTIMAL: 'OPTIMAL',
}

export const setVisibilityFilter = (filter) => ({
  type: filter,
})

export const setSortFilter = (filter) => ({
  type: 'SET_SORT_FILTER',
  filter,
})
