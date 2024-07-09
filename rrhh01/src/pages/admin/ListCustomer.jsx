import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { TableDinamyc } from '../../components/datatable/TableDinamyc';

export const ListCustomer = () => {
    const { handleBreadcrumbUpdate } = useOutletContext();
    const { handleTitle } = useOutletContext();
    const { handleBtn } = useOutletContext();

    const dict_bread_crumb = [
        { "bread": "clientes" },
        { "bread": "lista clientes" }
    ];

    const dict_title = { "tittle": "Lista de clientes" };

    const list_buttons = [
        {
            "icon": "fa fa-plus-circle",
            "label": "Agregar cliente",
            "action": "add-customer",
            "action_params": "",
            "url": "",
            }
    ];

    useEffect(() => {
        handleBreadcrumbUpdate(dict_bread_crumb);
        handleTitle(dict_title);
        handleBtn(list_buttons);
        // El arreglo vacío asegura que el efecto se ejecute solo una vez
    }, []);

    const config_table = {
        selectable_rows: false,
        fixed_header_scroll_height: '300px',
        input_search: true,
        input_button_group: false,
        buttons_list: [],
        "data" : [
            {
                id: 1,
                nombre: 'Beetlejuice',
                rut: '1988',
                base_datos: '',
                fecha_creacion: '',
                cliente_activo: '',
                acciones: ''
            },
            {
                id: 2,
                nombre: 'Beetlejuice',
                rut: '1988',
                base_datos: '',
                fecha_creacion: '',
                cliente_activo: '',
                acciones: ''
            },{
                id: 3,
                nombre: 'Beetlejuice',
                rut: '1988',
                base_datos: '',
                fecha_creacion: '',
                cliente_activo: '',
                acciones: ''
            },
            {
                id: 4,
                nombre: 'Beetlejuice',
                rut: '1988',
                base_datos: '',
                fecha_creacion: '',
                cliente_activo: '',
                acciones: ''
            },{
                id: 5,
                nombre: 'Beetlejuice',
                rut: '1988',
                base_datos: '',
                fecha_creacion: '',
                cliente_activo: '',
                acciones: ''
            }
        ]

    };

    return (
        <>
            <TableDinamyc config_table={ config_table } />
        </>
    );
};
