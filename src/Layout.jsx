import { Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer> </footer>
        </>
    );
}
