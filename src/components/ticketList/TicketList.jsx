import Ticket from '../ticket'

import classes from './TicketList.module.scss'

export default function TicketList({ ticketList }) {
  return (
    <ul className={classes.ticketList}>
      {ticketList.map((ticket) => (
        <Ticket price={ticket.price} airline={ticket.airline} segments={ticket.segments} />
      ))}
    </ul>
  )
}
