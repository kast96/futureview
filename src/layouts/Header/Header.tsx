import { Link } from 'react-router-dom'
import { Search } from '../../components/Search/Search'
import { Button } from '../../components/ui/Button/Button'
import { BurgerIcon, LogoIcon, UserIcon } from '../../components/ui/icons/Icons'
import s from './Header.module.scss'
import { routes } from '../../routes'

export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.icon_button}>
          <BurgerIcon />
        </div>
        <Link to={routes.home} className={s.logo}>
          <LogoIcon />
        </Link>
      </div>
      <div className={s.center}>
        <Search />
      </div>
      <div className={s.right}>
        <Button text='Войти' icon={<UserIcon />} />
      </div>
    </div>
  )
}