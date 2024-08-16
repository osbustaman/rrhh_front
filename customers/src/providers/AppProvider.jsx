import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const [titulo, setTitulo] = useState('');

    const updateBreadcrumbs = (newBreadcrumbs) => {
        setBreadcrumbs(newBreadcrumbs);
    };

    const updateTitulo = (newTitulo) => {
        setTitulo(newTitulo);
    };

    return (
        <AppContext.Provider value={{ breadcrumbs, updateBreadcrumbs, titulo, updateTitulo }}>
            {children}
        </AppContext.Provider>
    );
};
