import { Alert } from 'antd'

import classes from '../Error.module.scss'

export default function ErrorHandler({ errorMessage, errorDescription }) {
  return (
    <Alert className={classes.error} message={errorMessage} description={`${errorDescription}`} type="error" showIcon />
  )
}
