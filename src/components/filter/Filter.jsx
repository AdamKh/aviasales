import classes from './Filter.module.scss'

export default function Filter() {
  return (
    <div className={classes.filter}>
      <p className={classes.filter__title}>Количество пересадок</p>
      <ul className={classes.filter__list}>
        <li className={classes.filter__item}>
          <label htmlFor="stops-all">
            <span className={classes.checkboxView}>
              <svg
                className={classes.shape}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
                  fill="#2196F3"
                />
              </svg>
            </span>
            <input type="checkbox" id="stops-all" name="stops" defaultChecked />
            Все
          </label>
        </li>
        <li className={classes.filter__item}>
          <label htmlFor="stops-nonstop">
            <span className={classes.checkboxView} />
            <input type="checkbox" id="stops-nonstop" name="stops" />
            Без пересадок
          </label>
        </li>
        <li className={classes.filter__item}>
          <label htmlFor="stops-one">
            <span className={classes.checkboxView} />
            <input type="checkbox" id="stops-one" name="stops" />1 пересадка
          </label>
        </li>
        <li className={classes.filter__item}>
          <label htmlFor="stops-two">
            <span className={classes.checkboxView} />
            <input type="checkbox" id="stops-two" name="stops" />2 пересадки
          </label>
        </li>
        <li className={classes.filter__item}>
          <label htmlFor="stops-three">
            <span className={classes.checkboxView} />
            <input type="checkbox" id="stops-three" name="stops" />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}
