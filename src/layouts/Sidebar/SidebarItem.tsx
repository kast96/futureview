import { FC, ReactNode } from 'react'
import s from './SidebarItem.module.scss'
import { NavLink } from 'react-router-dom'

type PropsType = {
  icon: ReactNode
  title: string
  to: string
  isSmall: boolean
}

export const SidebarItem: FC<PropsType> = ({icon, title, to, isSmall}) => {
  return (
    <NavLink to={to} className={[s.container, isSmall && s.small].join(' ')}>
      <div className={s.icon}>{icon}</div>
      <div className={s.title}>{title}</div>
    </NavLink>
  )
}