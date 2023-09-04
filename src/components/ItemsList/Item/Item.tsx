import { FC } from 'react'
import s from './Item.module.scss'
import { ItemType } from '../../../types/types'

export const Item: FC<ItemType> = ({title, category, image, isViewed}) => {
  return (
    <div className={s.container}>
      <div className={s.image_container}>
        {image && <img className={s.image} src={image} alt={title} />}
        <div className={[s.viewed, isViewed && s.viewed_done].join(' ')}>{isViewed ? 'Просмотрен' : 'Не просмотрен'}</div>
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.category}>{category}</div>
    </div>
  )
}