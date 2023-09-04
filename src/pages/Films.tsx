import { ItemsList } from "../components/ItemsList/ItemsList"
import { items } from "../data/items"

export const Films = () => {
	return (
		<>
			<h1 className={'title'}>Фильмы</h1>
			<ItemsList items={items.filter(item => item.category === 'films')} />
		</>
	)
}