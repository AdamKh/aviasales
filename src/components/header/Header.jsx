import Logo from '../../img/Logo.svg'

import classes from './Header.module.scss'

export default function Header() {
  return (
    <header className={classes.header}>
      <img alt="logo" src={Logo} />
    </header>
  )
}
