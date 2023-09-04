import { FC } from 'react'
import { Item } from './Item/Item'
import s from './ItemsList.module.scss'
import { ItemType } from '../../types/types'

type PropsType = {
  items: Array<ItemType>
}

export const ItemsList: FC<PropsType> = ({items}) => {
  items.sort((a, b) => {
    return a.isViewed > b.isViewed ? 1 : -1
  })
  
  return (
    <div className={s.container}>
      {items.map((item, key) => <Item key={key} title={item.title} category={item.category} image={item.image} isViewed={item.isViewed} />)}
    </div>
  )
}