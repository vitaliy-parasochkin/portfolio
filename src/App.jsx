import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import MainLayout from "./Layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <About />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },

            {
                path: "/works",
                element: <Works />,
            },
        ],
    },
]);

export default function App() {
    return (
        <RouterProvider router={router}>
            <MainLayout />
        </RouterProvider>
    );
}
