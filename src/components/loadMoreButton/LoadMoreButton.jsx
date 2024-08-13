import classes from './LoadMoreButton.module.scss'

export default function LoadMoreButton() {
  return (
    <button type="button" className={classes.button}>
      Показать еще 5 билетов!
    </button>
  )
}
