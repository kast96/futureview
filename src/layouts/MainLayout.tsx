import s from "./MainLayout.module.scss"
import { Outlet } from "react-router-dom"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { useState } from "react"

export const MainLayout = () => {
	const [isSmallSidebar, setIsSmallSidebar] = useState<boolean>(false)

	const toggleIsSmallSidebarHandler = () => {
		setIsSmallSidebar(value => !value)
	}

	return (
		<>
			<Header toggleIsSmallSidebar={toggleIsSmallSidebarHandler} />
			<div className={s.container}>
				<div className={s.sidebar}>
					<Sidebar isSmall={isSmallSidebar} />
				</div>
				<div className={s.outlet}>
					<Outlet />
				</div>
			</div>
			{/*<Footer />*/}
		</>
	)
}