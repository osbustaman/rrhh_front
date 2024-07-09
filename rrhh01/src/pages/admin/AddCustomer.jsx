import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Tabs } from '../../components/tabs/Tabs';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';

export const AddCustomer = () => {
    const { handleBreadcrumbUpdate } = useOutletContext();
    const { handleTitle } = useOutletContext();
    const { handleBtn } = useOutletContext();
    
    const dict_bread_crumb = [
        { "bread": "clientes" },
        { "bread": "nuevo cliente" }
    ];
    
    const dict_title = { "tittle": "Agregar nuevo cliente" };

    const list_buttons = [
        {
            "icon": "fa fa-save",
            "label": "Guardar cliente",
            "action": "",
            "action_params": "",
            "url": "",
        },{
            "icon": "fa fa-user",
            "label": "Agregar usuario",
            "action": "",
            "action_params": "",
            "url": "",
        },{
            "icon": "fa fa-reply",
            "label": "Volver",
            "action": "list-customer",
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

    const create_tab = {
		name: 'tab_cliente',
		list_tabs: [
			{
				active: true,
				name: 'data_customer',
				label: 'Datos del cliente',
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
			},{
				active: false,
				name: 'list_users',
				label: 'Usuarios Administrativos',
				content: <TableDinamyc config_table={ config_table } />
			}
		]
	}

    
    return (
        <>
            <div className="x_content">
                <Tabs create_tab={create_tab} />
            </div>
        </>
    )
}