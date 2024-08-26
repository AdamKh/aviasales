import { useDispatch, useSelector } from 'react-redux'

import { setVisibilityFilter, VisibilityFilters } from '../../store/actions/index'

import classes from './Filter.module.scss'

export default function Filter() {
  const visibilityFilter = useSelector((state) => state.visibilityFilter)
  const dispatch = useDispatch()

  return (
    <div className={classes.filter}>
      <p className={classes.filter__title}>Количество пересадок</p>
      <ul className={classes.filter__list}>
        <li className={classes.filter__item}>
          <label htmlFor="stops-all">
            <input
              type="checkbox"
              id="stops-all"
              name="stops"
              onChange={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}
              checked={visibilityFilter.includes('SHOW_ALL')}
            />
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
            Все
          </label>
        </li>
        <li className={classes.filter__item}>
          <label htmlFor="stops-nonstop">
            <input
              type="checkbox"
              id="stops-nonstop"
              name="stops"
              onChange={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_WITHOUT_STOPS))}
              checked={visibilityFilter.includes('SHOW_ALL') || visibilityFilter.includes('SHOW_WITHOUT_STOPS')}
            />
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
            Без пересадок
          </label>
        </li>
        <li className={classes.filter__item}>
          <label htmlFor="stops-one">
            <input
              type="checkbox"
              id="stops-one"
              name="stops"
              onChange={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ONE_STOPS))}
              checked={visibilityFilter.includes('SHOW_ALL') || visibilityFilter.includes('SHOW_ONE_STOPS')}
            />
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
            1 пересадка
          </label>
        </li>
        <li className={classes.filter__item}>
          <label htmlFor="stops-two">
            <input
              type="checkbox"
              id="stops-two"
              name="stops"
              onChange={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_TWO_STOPS))}
              checked={visibilityFilter.includes('SHOW_ALL') || visibilityFilter.includes('SHOW_TWO_STOPS')}
            />
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
            2 пересадки
          </label>
        </li>
        <li className={classes.filter__item}>
          <label htmlFor="stops-three">
            <input
              type="checkbox"
              id="stops-three"
              name="stops"
              onChange={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_THREE_STOPS))}
              checked={visibilityFilter.includes('SHOW_ALL') || visibilityFilter.includes('SHOW_THREE_STOPS')}
            />
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
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}
