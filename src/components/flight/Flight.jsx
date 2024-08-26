import { formatTimeRange, formatDate } from '../../utils'

import classes from './Flight.module.scss'

function stopsCount(stops) {
  if (stops.length === 0) {
    return 'Без пересадок'
  }
  if (stops.length === 1) {
    return '1 пересадка'
  }
  return `${stops.length} пересадки`
}

export default function Flight({ origin, destination, date, stops, duration }) {
  return (
    <div className={classes.flight}>
      <div className={classes.flight__date}>
        <p className={classes.grey_text}>
          {origin} - {destination}
        </p>
        <p>{formatTimeRange(new Date(date), duration)}</p>
      </div>
      <div className={classes.flight__duration}>
        <p className={classes.grey_text}>В пути</p>
        <p className={classes.duration}>{formatDate(duration)}</p>
      </div>
      <div className={classes.flight__stops}>
        <p className={classes.grey_text}>{stopsCount(stops)}</p>
        <p>
          {stops.map((stop, index) =>
            index === stops.length - 1 ? (
              <span key={Math.random().toString(36).slice(2)}>{stop}</span>
            ) : (
              <span key={Math.random().toString(36).slice(2)}>{stop}, </span>
            )
          )}
        </p>
      </div>
    </div>
  )
}
