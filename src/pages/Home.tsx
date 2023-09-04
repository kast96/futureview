import { ItemsList } from "../components/ItemsList/ItemsList"
import { items } from "../data/items"

export const Home = () => {
	return (
		<>
			<h1 className={'title'}>Главная</h1>
			<ItemsList items={items} />
		</>
	)
}