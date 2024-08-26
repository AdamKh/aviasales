/* eslint-disable indent */
import { VisibilityFilters } from '../actions'

// eslint-disable-next-line default-param-last
const visibleTicketsList = (state = [], action) => {
  const { ticketsList = [], filter = [] } = action.payload || {}

  switch (action.type) {
    case 'SET_VISIBLE_TICKETS_LIST':
      if (filter.includes(VisibilityFilters.SHOW_ALL)) {
        return ticketsList
      }

      return ticketsList.filter((ticket) =>
        filter.some((f) => {
          switch (f) {
            case VisibilityFilters.SHOW_ONE_STOPS:
              return ticket.segments.every((segment) => segment.stops.length === 1)
            case VisibilityFilters.SHOW_TWO_STOPS:
              return ticket.segments.every((segment) => segment.stops.length === 2)
            case VisibilityFilters.SHOW_THREE_STOPS:
              return ticket.segments.every((segment) => segment.stops.length === 3)
            case VisibilityFilters.SHOW_WITHOUT_STOPS:
              return ticket.segments.every((segment) => segment.stops.length === 0)
            default:
              return false
          }
        })
      )
    default:
      return state
  }
}

export default visibleTicketsList
