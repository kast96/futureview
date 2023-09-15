import './App.scss'
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { routes } from "./routes"
import { Home } from './pages/Home'
import { Films } from './pages/Films'
import { Series } from './pages/Series'
import { Games } from './pages/Games'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path={routes.home} element={<MainLayout />}>
					<Route path="" element={<Home />} />
					<Route path={routes.films} element={<Films />} />
					<Route path={routes.series} element={<Series />} />
					<Route path={routes.games} element={<Games />} />
					<Route path="*" element={<div>404 Страница не найдена</div>} />
				</Route>
			</Routes>
		</Provider>
	)
}

export default App
