import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';


import { Tabs } from '../../components/tabs/Tabs';
import { EditFormFactory } from './EditFormFactory';
import { ListBranchOffice } from './ListBranchOffice';
import { ListCenterCost } from './ListCenterCost';
import { ListAssociatedEntities } from './ListAssociatedEntities';

export const EditFactory = () => {
    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "editar empresa" }
    ];

    const dict_title = { "tittle": "[Nombre empresa]" };

    const buttons_menu = [
        { 
            "icon" : "fa fa-plus",
            "list_items": [
                {
                    "label": "Agregar",
                    "url": `#`,
                }
            ]
        },{
            "icon" : "fa-solid fa-arrow-right-from-bracket",
            "url": `#`,
            "label": "Descargar"
        }
    ];

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, []);

    const tabData = [
        { id: 'empresa', label: 'Empresa', content: <EditFormFactory /> },
        { id: 'sucursales', label: 'Sucursales', content: <ListBranchOffice /> },
        { id: 'centros_costos', label: 'Centros de costos', content: <ListCenterCost /> },
        { id: 'entidades_asociadas', label: 'Entidades Asociadas', content: <ListAssociatedEntities /> },
    ];

    return (
        <>
            <Tabs tabs={tabData}/>
        </>
    );
};