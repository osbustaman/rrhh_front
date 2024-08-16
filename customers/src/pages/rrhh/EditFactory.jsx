import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';


import { Tabs } from '../../components/tabs/Tabs';
import { FormFactory } from './FormFactory';

export const EditFactory = () => {
    const { updateBreadcrumbs, updateTitulo } = useContext(AppContext);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "editar empresa" }
    ];

    const dict_title = { "tittle": "[Nombre empresa]" };

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
    }, []);

    const tabData = [
        { id: 'empresa', label: 'Empresa', content: <FormFactory /> },
        { id: 'sucursales', label: 'Sucursales', content: 'Contenido de Sucursales' },
        { id: 'cargos', label: 'Cargos', content: 'Contenido de Cargos' },
        { id: 'centros_costos', label: 'Centros de costos', content: 'Contenido de Centros de Costos' },
        { id: 'entidades_asociadas', label: 'Entidades Asociadas', content: 'Contenido de Entidades Asociadas' },
    ];

    return (
        <>
            <Tabs tabs={tabData} />
        </>
    );
};