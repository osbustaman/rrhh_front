import { Link, useLocation } from "react-router-dom"

export const menu = () => {
    const location = useLocation();

    console.log(location.pathname);
}