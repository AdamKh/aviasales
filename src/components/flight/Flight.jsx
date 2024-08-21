import classes from './Flight.module.scss'

export default function Flight({ origin, destination, date, stops, duration }) {
  return (
    <div className={classes.flight}>
      <div className={classes.flight__date}>
        <p className={classes.grey_text}>
          {origin} - {destination}
        </p>
        <p>{date}</p>
      </div>
      <div className={classes.flight__duration}>
        <p className={classes.grey_text}>В пути</p>
        <p>{duration}</p>
      </div>
      <div className={classes.flight__stops}>
        <p className={classes.grey_text}>{stops.length > 1 ? `${stops.length} пересадки` : '1 пересадка'}</p>
        <p>
          {stops.map((stop, index) =>
            index === stop.length - 1 ? (
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
