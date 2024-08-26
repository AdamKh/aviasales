import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { setSortFilter } from '../../store/actions/index'

import classes from './Tabs.module.scss'

export default function Tabs() {
  const sortFilter = useSelector((state) => state.sortFilter)
  const dispatch = useDispatch()
  return (
    <div className={classes.tabs}>
      <button
        type="button"
        className={classNames(classes.tab, sortFilter === 'CHEAPEST' && classes.activeTab)}
        onClick={() => dispatch(setSortFilter('CHEAPEST'))}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={classNames(classes.tab, sortFilter === 'FASTEST' && classes.activeTab)}
        onClick={() => dispatch(setSortFilter('FASTEST'))}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={classNames(classes.tab, sortFilter === 'OPTIMAL' && classes.activeTab)}
        onClick={() => dispatch(setSortFilter('OPTIMAL'))}
      >
        Оптимальный
      </button>
    </div>
  )
}
