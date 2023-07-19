import {Outlet} from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="layout">
            <NavBar/>
            <Outlet />
            <Footer />
        </div>
    )
}