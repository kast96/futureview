import { FC, ReactElement } from 'react'
import s from './Button.module.scss'

type PropsType = {
  text: string
  icon?: ReactElement
  onClick?: () => any
}

export const Button: FC<PropsType> = ({text, icon, onClick}) => {
  return (
    <button className={s.button} onClick={onClick}>
      {icon &&
        <span className={s.icon}>{icon}</span>
      }
      <span className={s.text}>{text}</span>
    </button>
  )
}