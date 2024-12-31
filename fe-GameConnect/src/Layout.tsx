import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";

export default function Layout () {
    return (
        <div className="bg-background text-text-primary min-h-screen">
        <Header/>
        <main>
            <Outlet/>
        </main>
        </div>
    );
}