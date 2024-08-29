import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../header'
import TicketList from '../ticketList'
import Filter from '../filter'
import Tabs from '../tabs'
import Spinner from '../spinner'
import { setTicketsRequest } from '../../store/actions/index'

import classes from './App.module.scss'

function main(request, ticketsList = request.tickets) {
  if (!request.loaded) {
    return <Spinner />
  }
  if (request.loaded) {
    return (
      <>
        {request.stop === false && <span className={classes.loader} />}
        <TicketList ticketList={ticketsList} />
      </>
    )
  }
  return 0
}

export default function App() {
  const ticketsRequest = useSelector((state) => state.ticketsRequest)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTicketsRequest())
  }, [dispatch])

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.asideAndMainWrapper}>
        <Filter />
        <div className={classes.mainWrapper}>
          <Tabs />
          {main(ticketsRequest, ticketsRequest.tickets)}
        </div>
      </div>
    </div>
  )
}
