import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Header />
                <div className="page-wrapper">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
