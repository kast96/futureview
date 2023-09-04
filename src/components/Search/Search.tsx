import { SearchIcon } from '../ui/icons/Icons'
import s from './Search.module.scss'

export const Search = () => {
  return (
    <div className={s.container}>
      <input className={s.input} type="text" name="search" placeholder="Введите запрос" />
      <div className={s.icon_button}>
        <SearchIcon />
      </div>
    </div>
  )
}