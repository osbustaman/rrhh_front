import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';
import { TableDinamyc } from '../../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../../components/buttons/SmallButtons";
import { Tabs } from '../../../components/tabs/Tabs';

import { useFech } from '../../../hooks/useFech';
import { FormAddArea } from './FormAddArea';

export const AddArea = () => {

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    const [dataTable, setDataTable] = useState(false);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "nueva área" }
    ];

    const dict_title = { "tittle": "Empresa: [Nombre Empresa]" };

    const buttons_menu = [
        { 
            "label" : "Acciones",
            "list_items": []
        },{
            "icon" : "fa-solid fa-arrow-right-from-bracket",
            "url": `lista-areas`,
            "label": "Volver"
        }
    ];


    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, []);

    const tabData = [
        { id: 'area', label: 'Área', content: <FormAddArea /> },
    ];

    return (
        <>
            <Tabs tabs={tabData} />
        </>
    )
}