import { Spin } from 'antd'

import classes from './Spinner.module.scss'

export default function Spinner() {
  return (
    <Spin className={classes.loadingSpinner} size="large" tip="Loading...">
      <p />
    </Spin>
  )
}
