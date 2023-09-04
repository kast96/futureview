import s from "./MainLayout.module.scss"
import { Outlet } from "react-router-dom"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"

export const MainLayout = () => {
	return (
		<>
			<Header />
			<div className={s.container}>
				<div className={s.sidebar}>
					<Sidebar isSmall />
				</div>
				<div className={s.outlet}>
					<Outlet />
				</div>
			</div>
			{/*<Footer />*/}
		</>
	)
}