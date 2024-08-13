import classes from './Ticket.module.scss'

export default function Ticket({ price }) {
  return (
    <li className={classes.ticket}>
      <p>{price} ₽</p>
    </li>
  )
}
