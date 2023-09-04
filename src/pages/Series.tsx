import { ItemsList } from "../components/ItemsList/ItemsList"
import { items } from "../data/items"

export const Series = () => {
	return (
		<>
			<h1 className={'title'}>Сериалы</h1>
			<ItemsList items={items.filter(item => item.category === 'series')} />
		</>
	)
}