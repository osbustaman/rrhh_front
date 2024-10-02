import React, { useEffect, useState, useContext } from 'react';
import { AppContext, AppContexCompany } from '../../../providers/AppProvider';

import { Tabs } from '../../../components/tabs/Tabs';

import { PersonalData } from './PersonalData';
import { EmploymentData } from './EmploymentData';
import { BankDetails } from './BankDetails';
import { capitalizeFirstLetter } from '../../../js/validations';
import { FormEditUser } from './FormEditUser';


export const EditUser = () => {
    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    const { title } = useContext(AppContexCompany);

    const dict_bread_crumb = [
        { "bread": "Colaboradores" },
        { "bread": "Editar colaborador" }
    ];

    const dict_title = { "tittle": `<i class="fa-solid fa-user"></i> ${capitalizeFirstLetter(title)}` };
    const buttons_menu = [
        { 
            "label" : "Acciones",
            "icon" : "fa fa-plus",
            "list_items": [
                
            ]
        },{
            "icon" : "fa-solid fa-arrow-right-from-bracket",
            "url": `listado-colaboradores`,
            "label": "Volver"
        }
    ];

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, []);

    const tabData = [
        { id: 'user', label: 'Colaborador', content: <FormEditUser/> },
        { id: 'employee', label: 'Datos Personales', content: <PersonalData/> },
        { id: 'user_employee', label: 'Datos Laborales', content: <EmploymentData/> },
        { id: 'bank_details', label: 'Datos Bancarios', content: <BankDetails/> },
    ];

    return (
        <>
            <Tabs tabs={tabData} />
        </>
    );
}
