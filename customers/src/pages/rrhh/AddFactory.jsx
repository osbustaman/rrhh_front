import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';

import { Tabs } from '../../components/tabs/Tabs';
import { FormFactory } from './FormFactory';

export const AddFactory = () => {

    const { updateBreadcrumbs, updateTitulo } = useContext(AppContext);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "crear empresa" }
    ];

    const dict_title = { "tittle": "Creación de una nueva empresa" };

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
    }, []);


    const tabData = [
        { id: 'empresa', label: 'Empresa', content: <FormFactory /> },
    ];

    return (
        <>
            <Tabs tabs={tabData} />
        </>
    );
}
