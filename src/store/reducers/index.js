import { combineReducers } from 'redux'

import visibilityFilter from './visibilityFilter'
import ticketsRequest from './ticketsRequest'
import sortFilter from './sortFilter'
import visibleTicketsList from './visibleTicketsList'
import sortedTicketsList from './sortedTicketsList'

export default combineReducers({
  visibilityFilter,
  ticketsRequest,
  sortFilter,
  visibleTicketsList,
  sortedTicketsList,
})
