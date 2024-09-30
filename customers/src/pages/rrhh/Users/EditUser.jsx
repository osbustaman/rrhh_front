import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';

import { Tabs } from '../../../components/tabs/Tabs';

import { FormEditUSer } from './FormEditUser';
import { PersonalData } from './PersonalData';
import { EmploymentData } from './EmploymentData';
import { BankDetails } from './BankDetails';


export const EditUser = () => {
    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    const dict_bread_crumb = [
        { "bread": "Colaboradores" },
        { "bread": "editar colaborador" }
    ];

    const dict_title = { "tittle": "<i class='fa-solid fa-user'></i> editar colaborador" };
    const buttons_menu = [];

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, []);

    const tabData = [
        { id: 'user', label: 'Colaborador', content: <FormEditUSer/> },
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
