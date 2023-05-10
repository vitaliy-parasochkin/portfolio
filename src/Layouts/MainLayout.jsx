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
                    <div className="container">
                        <div className="page-body">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
