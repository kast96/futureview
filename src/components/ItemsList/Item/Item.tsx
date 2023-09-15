import { FC } from 'react'
import s from './Item.module.scss'
import { ItemTypeResponse } from '../../../types/types'
import { fetchSetViewedItem, fetchRemoveItem } from '../../../redux/slices/items'
import { useDispatch } from 'react-redux'
import { TrashIcon } from '../../ui/icons/Icons'

export const Item: FC<ItemTypeResponse> = ({_id, title, category, image, isViewed}) => {
  const dispatch = useDispatch()

  const setViewedHandler = () => {
    //@ts-ignore
    dispatch(fetchSetViewedItem({id: _id, isViewed: !isViewed}))
  }

  const removeHandler = () => {
    //@ts-ignore
    dispatch(fetchRemoveItem(_id))
  }

  return (
    <div className={s.container}>
      <div className={s.image_container}>
        {image && <img className={s.image} src={image} alt={title} />}
        <div className={[s.viewed, isViewed && s.viewed_done].join(' ')} onClick={setViewedHandler}>{isViewed ? 'Просмотрен' : 'Не просмотрен'}</div>
      </div>
      <div className={s.footer}>
        <div className={s.footer_left}>
          <div className={s.title}>{title}</div>
          <div className={s.category}>{category}</div>
        </div>
        <div className={s.footer_right}>
          <button className={s.remove} onClick={removeHandler}><TrashIcon /></button>
        </div>
      </div>
    </div>
  )
}