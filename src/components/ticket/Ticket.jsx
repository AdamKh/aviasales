import Flight from '../flight'

import classes from './Ticket.module.scss'

export default function Ticket({ price, segments, carrier }) {
  return (
    <li className={classes.ticket}>
      <div className={classes.flex_wrapper}>
        <p className={classes.ticket__price}>{price} ₽</p>
        <img className={classes.ticket__carrier} src={`http://pics.avs.io/200/60/${carrier}.png`} alt="carrier logo" />
      </div>
      <div className={classes.ticket__segments}>
        {segments.map((flight) => (
          <Flight
            key={Math.random().toString(36).slice(2)}
            origin={flight.origin}
            destination={flight.destination}
            date={flight.date}
            stops={flight.stops}
            duration={flight.duration}
          />
        ))}
      </div>
    </li>
  )
}
