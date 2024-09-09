import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';
import { TableDinamyc } from '../../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../../components/buttons/SmallButtons";
import { Tabs } from '../../../components/tabs/Tabs';

import { FormEditArea } from './FormEditArea';
import { ListDepartament } from './ListDepartament';

export const EditArea = () => {

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    const [dataTable, setDataTable] = useState(false);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "editar área" }
    ];

    const dict_title = { "tittle": "Editar Área" };

    const buttons_menu = [
        { 
            "label" : "Acciones",
            "list_items": [
                {
                    "label": "Agregar Departamento",
                    "url": `#`,
                }
            ]
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
        { id: 'area', label: 'Área', content: <FormEditArea /> },
        { id: 'dpto', label: 'Departmento', content: <ListDepartament /> },
    ];

    return (
        <>
            <Tabs tabs={tabData} />
        </>
    )
}
