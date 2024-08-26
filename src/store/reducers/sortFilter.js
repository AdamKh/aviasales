/* eslint-disable indent */
import { SortFilters } from '../actions'

const initialState = SortFilters.CHEAPEST

// eslint-disable-next-line default-param-last
const sortFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_FILTER':
      return action.filter
    default:
      return state
  }
}

export default sortFilter
