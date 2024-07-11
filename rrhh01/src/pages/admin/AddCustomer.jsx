import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Tabs } from '../../components/tabs/Tabs';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { Forms } from '../../components/forms/Forms';
import { ModalForm } from '../../components/modal/ModalForm';

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
            "action": "list-customer",
            "action_params": "",
            "url": "",
            "extra": ""
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
				content: <TableDinamyc config_table={ config_table } />
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