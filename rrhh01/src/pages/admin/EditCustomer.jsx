import React, { useEffect, useState, useContext } from 'react';

import { Tabs } from '../../components/tabs/Tabs';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { Forms } from '../../components/forms/Forms';
import { ModalForm } from '../../components/modal/ModalForm';

import { AppContext } from '../../providers/AppProvider';


import { useFechApi } from '../../hooks/useFechApi';

export const EditCustomer = () => {

    const host_url = import.meta.env.VITE_API_URL;

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    
    const dict_bread_crumb = [
        { "bread": "clientes" },
        { "bread": "editar cliente" }
    ];
    
    const dict_title = { "tittle": "Editar cliente" };

    const list_buttons = [
        {
            "icon": "fa fa-save",
            "label": "Guardar cliente",
            "action": "#",
            "action_params": "",
            "url": ""
        },{
            "icon": "fa fa-user",
            "label": "Agregar usuario",
            "action": "#",
            "action_params": "modal",
            "url": "",
            "extra": <ModalForm 
                        config_modal={{
                            title: 'Agregar Usuario Administrativo',
                            body: <Forms config_form={{
                                number_row: 4,
                                position_form: 'vertical', // vertical or horizontal
                                inputs: [
                                    {
                                        label: 'Usuario',
                                        required: true,
                                        type: 'text',
                                    },{
                                        label: 'Email',
                                        required: true,
                                        type: 'text',
                                        evento: {
                                            name: 'onBlur',
                                            action: 'validateEmail',
                                            params: 'email',
                                            message: {
                                                error: 'El email del administrador ingresado no es válido',
                                                success: 'El email del administrador ingresado es válido'
                                            }
                                        }
                                    },{
                                        label: 'Contraseña',
                                        required: true,
                                        type: 'text',
                                    },{
                                        label: 'Nombre',
                                        required: true,
                                        type: 'text',
                                    },{
                                        label: 'Apellido',
                                        required: true,
                                        type: 'text',
                                    },
                                ]
                            }}  />
                        }}
                        />
        },{
            "icon": "fa fa-reply",
            "label": "Volver",
            "action": "/home/list-customers",
            "action_params": "",
            "url": "",
            "extra": ""
        }
    ];

    const { getDataApi } = useFechApi();
    const [data, setData] = useState([]);

    const list_countries = [];


    const showData = async () => {
        const get_countries = await getDataApi(`${host_url}/list-countries`);
        //const get_regions = await getDataApi(`list-region`);
        //const get_communes = await getDataApi(`list-commune`);
        console.log("get_countries: ", get_countries);
    }

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(list_buttons);
        showData();
    }, []);




    const data_table = [];
    const config_table = {
        loading: true,
        search_input: true,
    };


    const config_form = {
        number_row: 3,
        position_form: 'vertical', // vertical or horizontal
        inputs: [
            {
                label: 'Nombre Cliente',
                required: true,
                type: 'text',
            },{
                label: 'Rut Cliente',
                required: true,
                type: 'text',
                evento: {
                    name: 'onBlur',
                    action: 'validateRut',
                    params: 'rut',
                    message: {
                        error: 'El rut del cliente ingresado no es válido',
                        success: 'El rut del cliente ingresado es válido'
                    }
                }
            },{
                label: 'Email Cliente',
                required: true,
                type: 'text',
                evento: {
                    name: 'onBlur',
                    action: 'validateEmail',
                    params: 'email',
                    message: {
                        error: 'El email del cliente ingresado no es válido',
                        success: 'El email del cliente ingresado es válido'
                    }
                }
            },{
                label: 'Nombre Representante',
                required: true,
                type: 'text',
            },{
                label: 'Rut Representante',
                required: true,
                type: 'text',
                evento: { // Evento a ejecutar opcional
                    name: 'onBlur', // Evento a ejecutar (onBlur, onChange, etc.)
                    action: 'validateRut', // Acción a ejecutar
                    params: 'rut', // Parámetros a enviar a la acción
                    message: {
                        error: 'El rut del representante ingresado no es válido',
                        success: 'El rut del representante ingresado es válido'
                    }
                }
            },{
                label: 'Email Representante',
                required: true,
                type: 'text',
                evento: {
                    name: 'onBlur',
                    action: 'validateEmail',
                    params: 'email',
                    message: {
                        error: 'El email del representante ingresado no es válido',
                        success: 'El email del representante ingresado es válido'
                    }
                }
            },{
                label: 'Nombre Base de Datos',
                required: false,
                type: 'text',
            },{
                label: 'Fecha Creación',
                required: false,
                type: 'date',
            },{
                label: 'Fecha Término',
                required: false,
                type: 'date',
            },{
                label: 'Cantidad Usuarios',
                required: true,
                type: 'number', 
            },{
                label: 'Pais',
                required: true,
                type: 'select_autocomplete',
                options: [
                    {
                        value: '1',
                        label: 'Chile'
                    },{
                        value: '2',
                        label: 'Argentina'
                    },{
                        value: '3',
                        label: 'Perú'
                    },{
                        value: '4',
                        label: 'Colombia'
                    }
                ],
                text_default: '-- Seleccione --'
            },{
                label: 'Regiones',
                required: true,
                type: 'select_autocomplete', // text, number, email, password, select, checkbox, radio, date
                options: [ // solo en el caso que sea Select
                    {
                        value: '1',
                        label: 'Arica y Parinacota'
                    },{
                        value: '2',
                        label: 'Antofagasta'
                    }
                ],
                text_default: '-- Seleccione --'
            },{
                label: 'Comunas',
                required: true,
                type: 'select_autocomplete', // text, number, email, password, select, checkbox, radio, date, select_autocomplete
                options: [ // solo en el caso que sea Select
                    {
                        value: '1',
                        label: 'Maipú'
                    },{
                        value: '2',
                        label: 'Quinta Normal'
                    }
                ],
                text_default: '-- Seleccione --'
            }
        ]
    };


    const create_tab = {
		name: 'tab_cliente',
		list_tabs: [
			{
				active: true,
				name: 'data_customer',
				label: 'Datos del Cliente',
				content: <Forms config_form={config_form} />
			},{
				active: false,
				name: 'list_users',
				label: 'Usuarios Administrativos',
				content: <TableDinamyc data_in_table={data_table} config_table={config_table} />
			},{
				active: false,
				name: 'details_ser',
				label: 'Detalles Cliente',
				content: 'Aqui debe ir la info detallada del cliente con opcion de enviarla por correo'
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