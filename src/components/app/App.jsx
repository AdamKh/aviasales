import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'antd'

import Header from '../header'
import TicketList from '../ticketList'
import Filter from '../filter'
import Tabs from '../tabs'
import Spinner from '../spinner'
import { setTicketsRequest, setVisibleTicketsList, setSortedTicketsList } from '../../store/actions/index'

import classes from './App.module.scss'

function main(request, ticketsList = request.tickets) {
  if (!request.loaded) {
    return <Spinner />
  }
  if (request.error) {
    return (
      <Alert
        className={classes.error}
        message={request.error.message}
        description={request.error.description}
        type="error"
        showIcon
      />
    )
  }
  if (ticketsList.length === 0) {
    return (
      <Alert
        className={classes.error}
        description="Не удалось найти билеты по заданному фильтру"
        type="info"
        showIcon
      />
    )
  }
  if (request.loaded && !request.error) {
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
  // const [ticketsRequestLoaded, setTicketsRequestLoaded] = useState(false)
  const ticketsRequest = useSelector((state) => state.ticketsRequest)
  const visibilityFilter = useSelector((state) => state.visibilityFilter)
  const sortedTicketsList = useSelector((state) => state.sortedTicketsList)
  const sortFilter = useSelector((state) => state.sortFilter)
  const visibleTicketsList = useSelector((state) => state.visibleTicketsList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTicketsRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(setSortedTicketsList(ticketsRequest.tickets, sortFilter))
  }, [dispatch, sortFilter, ticketsRequest.tickets])

  useEffect(() => {
    dispatch(setVisibleTicketsList(sortedTicketsList, visibilityFilter))
  }, [dispatch, sortedTicketsList, visibilityFilter])

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
