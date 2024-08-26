/* eslint-disable indent */
import { sortTickets } from '../../utils'

// eslint-disable-next-line default-param-last
const sortedTicketsList = (state = [], action) => {
  switch (action.type) {
    case 'SET_SORTED_TICKETS_LIST': {
      const { ticketsList = [], sort = 'CHEAPEST' } = action.payload || {}
      return sortTickets(ticketsList, sort)
    }
    default:
      return state
  }
}

export default sortedTicketsList
