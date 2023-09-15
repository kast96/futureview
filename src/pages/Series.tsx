import { useEffect } from "react"
import { ItemsList } from "../components/ItemsList/ItemsList"
import { useDispatch, useSelector } from "react-redux"
import { fetchItems } from "../redux/slices/items"

export const Series = () => {
	const dispatch = useDispatch()
	//@ts-ignore
  const {items, status} = useSelector(state => state.items)
	const isItemsLoading = status === 'loading'
	

	useEffect(() => {
    //@ts-ignore
    dispatch(fetchItems())
  }, [dispatch])

	return (
		<>
			<h1 className={'title'}>Фильмы</h1>
			{isItemsLoading && 'Загрузка...'}
			{!isItemsLoading &&
				//@ts-ignore
				<ItemsList items={items.filter(item => item.category === 'series')} />
			}
		</>
	)
}