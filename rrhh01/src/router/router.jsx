import { ProtectedRoute } from "./ProtectedRoute";
import { PanelControl } from "../pages/AdminPanel";
import { Login } from "../pages/Login";
import { NewCustomer } from "../pages/NewCustomer";
import { ListCustomer } from "../pages/ListCustomer";

import { NotFound } from "../components/NotFound";

import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";

const PanelLayout = () => (
    <div>
        <PanelControl />
    </div>
);

export const router = createBrowserRouter([
    {
        path: '/admin-panel',
        element: <ProtectedRoute element={<PanelLayout />} />,
        children: [
            { path: 'new-customer', element: <NewCustomer /> },
            { path: 'list-customer', element: <ListCustomer /> },
            // Añade más rutas aquí si es necesario
        ]
    },
    {
        path: '/',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
