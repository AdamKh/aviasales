import Ticket from '../ticket'

import classes from './TicketList.module.scss'

export default function TicketList({ ticketList }) {
  return (
    <ul className={classes.ticketList}>
      {ticketList.map((ticket) => (
        <Ticket
          key={Math.random().toString(36).slice(2)}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ))}
    </ul>
  )
}
