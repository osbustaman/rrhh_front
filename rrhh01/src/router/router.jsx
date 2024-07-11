import { ProtectedRoute } from "./ProtectedRoute";
import { PanelControl } from "../pages/admin/AdminPanel";
import { Login } from "../pages/admin/Login";
import { AddCustomer } from "../pages/admin/AddCustomer";
import { ListCustomer } from "../pages/admin/ListCustomer";

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
            { path: 'list-customer', element: <ListCustomer /> },
            { path: 'add-customer', element: <AddCustomer /> },
            //{ path: 'edit-customer/:id', element: <UserDetails /> }
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
