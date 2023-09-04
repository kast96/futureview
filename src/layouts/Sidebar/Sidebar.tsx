import { FC } from 'react'
import s from './Sidebar.module.scss'
import { SidebarItem } from './SidebarItem'
import { HomeIcon, FilmsIcon, SeriesIcon, GamesIcon } from '../../components/ui/icons/Icons'
import { routes } from '../../routes'

type PropsType = {
  isSmall?: boolean
}

const menu = [
 {title: 'Главная', to: routes.home, icon: <HomeIcon />},
 {title: 'Фильмы', to: routes.films, icon: <FilmsIcon />},
 {title: 'Сериалы', to: routes.series, icon: <SeriesIcon />}, 
 {title: 'Игры', to: routes.games, icon: <GamesIcon />},
]

export const Sidebar: FC<PropsType> = ({isSmall = false}) => {
  return (
    <div className={[s.container, isSmall && s.small].join(' ')}>
      <div className={s.items}>
        {menu.map((item, key) => (
          <SidebarItem key={key} icon={item.icon} title={item.title} to={item.to} isSmall={isSmall} />
        ))}
      </div>
    </div>
  )
}