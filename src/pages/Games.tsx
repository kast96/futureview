import { ItemsList } from "../components/ItemsList/ItemsList"
import { items } from "../data/items"

export const Games = () => {
	return (
		<>
			<h1 className={'title'}>Игры</h1>
			<ItemsList items={items.filter(item => item.category === 'games')} />
		</>
	)
}