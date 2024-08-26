import { useState } from 'react'

import Ticket from '../ticket'

import classes from './TicketList.module.scss'

export default function TicketList({ ticketList }) {
  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5)

  return (
    <ul className={classes.ticketList}>
      {ticketList.slice(0, visibleTicketsCount).map((ticket) => (
        <Ticket
          key={Math.random().toString(36).slice(2)}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ))}

      <button type="button" className={classes.button} onClick={() => setVisibleTicketsCount(visibleTicketsCount + 5)}>
        Показать еще 5 билетов!
      </button>
    </ul>
  )
}
