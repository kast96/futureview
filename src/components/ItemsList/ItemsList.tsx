import { FC } from 'react'
import { Item } from './Item/Item'
import s from './ItemsList.module.scss'
import { ItemTypeResponse } from '../../types/types'

type PropsType = {
  items: Array<ItemTypeResponse>
}

export const ItemsList: FC<PropsType> = ({items}) => {
  let itemsSort = [...items]

  itemsSort.sort((a, b) => {
    return a.isViewed > b.isViewed ? 1 : -1
  })
  
  return (
    <div className={s.container}>
      {!itemsSort.length && <div>Элементы не найдены</div>}
      {!!itemsSort.length &&
        <>
          {itemsSort.map((item, key) => <Item key={key} _id={item._id} title={item.title} category={item.category} image={item.image} isViewed={item.isViewed} />)}
        </>
      }
    </div>
  )
}