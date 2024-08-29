import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'antd'

import Ticket from '../ticket'
import { sortTickets, visibleFilter } from '../../utils'

import classes from './TicketList.module.scss'

export default function TicketList({ ticketList }) {
  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5)
  const sortFilter = useSelector((state) => state.sortFilter)
  const visibilityFilter = useSelector((state) => state.visibilityFilter)

  // Мемоизация фильтрации билетов
  const visibleTicketsList = useMemo(() => visibleFilter(ticketList, visibilityFilter), [ticketList, visibilityFilter])

  // Мемоизация сортировки билетов
  const sortedTickets = useMemo(() => sortTickets(visibleTicketsList, sortFilter), [visibleTicketsList, sortFilter])

  return (
    <>
      {sortedTickets.length === 0 && (
        <Alert
          className={classes.error}
          description="Не удалось найти билеты по заданному фильтру"
          type="info"
          showIcon
        />
      )}
      <ul className={classes.ticketList}>
        {sortedTickets.slice(0, visibleTicketsCount).map((ticket) => (
          <Ticket
            key={Math.random().toString(36).slice(2)}
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
          />
        ))}

        <button
          type="button"
          className={classes.button}
          onClick={() => setVisibleTicketsCount(visibleTicketsCount + 5)}
        >
          Показать еще 5 билетов!
        </button>
      </ul>
    </>
  )
}
