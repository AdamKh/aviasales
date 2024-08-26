import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../header'
import TicketList from '../ticketList'
import Filter from '../filter'
import Tabs from '../tabs'
import Spinner from '../spinner'
import { setTicketsRequest, setVisibleTicketsList } from '../../store/actions/index'

import classes from './App.module.scss'

function main(request, ticketsList = request.tickets) {
  if (!request.loaded) {
    return <Spinner />
  }
  if (request.error) {
    return <p>Error</p>
  }
  if (request.loaded && !request.error) {
    return <TicketList ticketList={ticketsList} />
  }
  return 0
}

export default function App() {
  const [ticketsRequestLoaded, setTicketsRequestLoaded] = useState(false)
  const ticketsRequest = useSelector((state) => state.ticketsRequest)
  const visibilityFilter = useSelector((state) => state.visibilityFilter)
  const visibleTicketsList = useSelector((state) => state.visibleTicketsList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTicketsRequest())
    setTicketsRequestLoaded(true)
  }, [dispatch])

  useEffect(() => {
    if (ticketsRequestLoaded) {
      dispatch(setVisibleTicketsList(ticketsRequest.tickets, visibilityFilter))
    }
  }, [dispatch, ticketsRequest, visibilityFilter, ticketsRequestLoaded])

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.asideAndMainWrapper}>
        <Filter />
        <div className={classes.mainWrapper}>
          <Tabs />
          {main(ticketsRequest, visibleTicketsList)}
        </div>
      </div>
    </div>
  )
}
