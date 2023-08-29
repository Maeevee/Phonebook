import { Outlet } from "react-router-dom"
import Nav from "../Nav/Nav"
import { Suspense } from "react"

const Layout = () => {
    return (
        <>
            <Nav/>
            <Suspense fallback={null}><Outlet/></Suspense>
        </>
    )
}

export default Layout
