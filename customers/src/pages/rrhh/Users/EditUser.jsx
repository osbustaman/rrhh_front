import React, { useEffect, useState, useContext } from 'react';
import { AppContext, AppContexCompany } from '../../../providers/AppProvider';

import { Tabs } from '../../../components/tabs/Tabs';
import { useParams } from 'react-router-dom';
import { PersonalData } from './PersonalData';
import { EmploymentData } from './EmploymentData';
import { BankDetails } from './BankDetails';
import { capitalizeFirstLetter } from '../../../js/validations';
import { FormEditUser } from './FormEditUser';
import { useFech } from '../../../hooks/useFech';


export const EditUser = () => {
    const { id_user } = useParams();

    const { getDataTable } = useFech({ url: `get-employee/${id_user}/` });
    const [dataUser, setDataUser] = useState([]);
    const [usernameCrumbs, setUsernameCrumbs] = useState([]);
    const [fullname, setFullname] = useState([]);

    const get_data_response = async () => {
        const { status } = await getDataTable();
        setDataUser(status);

        console.log(status);

        setFullname(`${status.first_name} ${status.last_name}`);
        setUsernameCrumbs(status.username);
    };

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    const { title } = useContext(AppContexCompany);

    const dict_bread_crumb = [
        { "bread": "Colaboradores" },
        { "bread": "Editar colaborador" },
        { "bread": usernameCrumbs }
    ];

    const dict_title = { "tittle": `<i class="fa-solid fa-user"></i> ${fullname}` };
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
        get_data_response();
    }, [id_user]);

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, [usernameCrumbs, fullname]);

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
