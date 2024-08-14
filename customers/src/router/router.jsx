import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../pages/admin/Login";
import { App } from "../pages/App";
import { NotFound } from "../components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/home/*" element={<ProtectedRoute element={<App />} />} /> */}
                <Route path="/home" element={<ProtectedRoute element={<App />} />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};