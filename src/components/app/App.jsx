import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../header'
import TicketList from '../ticketList'
import Filter from '../filter'
import Tabs from '../tabs'
import Spinner from '../spinner'
import ErrorHandler from '../error/error-handler'
import { setTicketsRequest } from '../../store/actions/index'

import classes from './App.module.scss'

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
          {ticketsRequest.error ? (
            <ErrorHandler errorMessage={ticketsRequest.error} />
          ) : (
            <>
              {ticketsRequest.stop === false && <span className={classes.loader} />}
              {!ticketsRequest.loaded && <Spinner />}
              {ticketsRequest.loaded && <TicketList ticketList={ticketsRequest.tickets} />}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
