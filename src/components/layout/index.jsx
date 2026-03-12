import { Outlet } from "react-router-dom"
import Header from "../../../header/index.jsx"

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout