import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Tabs } from '../../components/tabs/Tabs';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { Forms } from '../../components/forms/Forms';
import { ModalForm } from '../../components/modal/ModalForm';
import { AppContext } from '../../providers/AppProvider';
import { useFechApi } from '../../hooks/useFechApi';
import { useValidateForm } from '../../hooks/useValidateForm';


export const EditCustomer = () => {

    const { getDataApi } = useFechApi();
    const { validateForm } = useValidateForm();
    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [communes, setCommunes] = useState([]);

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    
    const dict_bread_crumb = [
        { "bread": "clientes" },
        { "bread": "editar cliente" }
    ];
    
    const dict_title = { "tittle": "Editar cliente" };

    const send_form = async (form, url) => {
        console.log('form: ', form);
        console.log('add-customers: ', url);
    };

    const list_buttons = [
        {
            "icon": "fa fa-save",
            "label": "Guardar cliente",
            "action": true,
            "def": (event) => { send_form('form_customer', 'add-customers'); },
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
                                        name: 'cus_name',
                                        type: 'text',
                                    },{
                                        label: 'Email',
                                        required: true,
                                        name: 'cus_name',
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
                                        name: 'cus_name',
                                        type: 'text',
                                    },{
                                        label: 'Nombre',
                                        required: true,
                                        name: 'cus_name',
                                        type: 'text',
                                    },{
                                        label: 'Apellido',
                                        required: true,
                                        name: 'cus_name',
                                        type: 'text',
                                    },
                                ]
                            }}  />
                        }}
                        />
        },{
            "icon": "fa fa-reply",
            "label": "Volver",
            "action": false,
            "def": "",
            "action_params": "",
            "url": "/home/list-customers",
            "extra": ""
        }
    ];

    const { id } = useParams();

    const getDataCustomers = async (id_customer) => {
        
        const data = await getDataApi(`get-data-customer/${id_customer}`);

        console.log(data);


    }


    const data_country = async () => {
        const data = await getDataApi(`list-countries`);
        let list_countries = [];
        data.map((country) => {
            list_countries.push({
                value: country.cou_id,
                label: country.cou_name
            });
        });
        setCountries(list_countries);   
    }

    const data_region = async () => {
        const data = await getDataApi(`list-region`);
        let list_region = [];
        data.map((region) => {
            list_region.push({
                value: region.re_id,
                label: region.re_name
            });
        });
        setRegions(list_region);   
    }

    const data_communes = async () => {
        const data = await getDataApi(`list-commune`);
        let list_commune = [];
        data.map((commune) => {
            list_commune.push({
                value: commune.com_id,
                label: commune.com_name
            });
        });
        setCommunes(list_commune);   
    }

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(list_buttons);
        data_country();
        data_region();
        data_communes();
        getDataCustomers(id);
    }, []);

    const data_table = [];
    const config_table = {
        loading: true,
        search_input: true,
    };

    const config_form = {
        number_row: 3,
        id_form: 'form_customer',
        position_form: 'vertical', // vertical or horizontal
        inputs: [
            {
                label: 'Nombre Cliente',
                required: true,
                name: 'cus_name',
                type: 'text',
            },{
                label: 'Rut Cliente',
                required: true,
                name: 'cus_identifier',
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
                name: 'cus_email',
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
                name: 'cus_representative_name',
                type: 'text',
            },{
                label: 'Rut Representante',
                required: true,
                name: 'cus_representative_rut',
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
                name: 'cus_representative_mail',
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
                required: true,
                name: 'cus_name_bd',
                type: 'text',
            },{
                label: 'Fecha Creación',
                required: true,
                name: 'cus_date_in',
                type: 'date',
            },{
                label: 'Fecha Término',
                required: false,
                name: 'cus_date_out',
                type: 'date',
            },{
                label: 'Cantidad Usuarios',
                required: true,
                name: 'cus_number_users',
                type: 'number', 
            },{
                label: 'Pais',
                required: true,
                name: 'country_id',
                type: 'select_autocomplete',
                options: countries,
                text_default: '-- Seleccione --'
            },{
                label: 'Regiones',
                required: true,
                name: 'region_id',
                type: 'select_autocomplete', // text, number, email, password, select, checkbox, radio, date
                options: regions,
                text_default: '-- Seleccione --'
            },{
                label: 'Comunas',
                required: true,
                name: 'commune_id',
                type: 'select_autocomplete', // text, number, email, password, select, checkbox, radio, date, select_autocomplete
                options: communes,
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