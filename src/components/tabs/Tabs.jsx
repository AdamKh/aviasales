import classNames from 'classnames'

import classes from './Tabs.module.scss'

export default function Tabs() {
  return (
    <div className={classes.tabs}>
      <p className={classNames(classes.tab, classes.activeTab)}>Самый дешевый</p>
      <p className={classes.tab}>Самый быстрый</p>
      <p className={classes.tab}>Оптимальный</p>
    </div>
  )
}
