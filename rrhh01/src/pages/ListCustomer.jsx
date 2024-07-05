import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { TableDinamyc } from '../components/TableDinamyc';

export const ListCustomer = () => {
    const { handleBreadcrumbUpdate } = useOutletContext();
    const { handleTitle } = useOutletContext();

    const dict_bread_crumb = [
        { "bread": "clientes" },
        { "bread": "lista clientes" }
    ];

    const dict_title = { "tittle": "Lista de clientes" };

    useEffect(() => {
        handleBreadcrumbUpdate(dict_bread_crumb);
        handleTitle(dict_title);
        // El arreglo vacío asegura que el efecto se ejecute solo una vez
    }, []);

    return (
        <>
            <TableDinamyc />
        </>
    );
};
