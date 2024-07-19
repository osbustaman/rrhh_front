import React, { useEffect, useState, useContext } from 'react';

import { Tabs } from '../../components/tabs/Tabs';
import { Forms } from '../../components/forms/Forms';
import { AppContext } from '../../providers/AppProvider';

export const AddCustomer = () => {

    const host_url = import.meta.env.VITE_API_URL;

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [communes, setCommunes] = useState([]);

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    
    const dict_bread_crumb = [
        { "bread": "clientes" },
        { "bread": "nuevo cliente" }
    ];
    
    const dict_title = { "tittle": "Agregar nuevo cliente" };


    const handleSaveCustomer = (id_form) => {
        const form = document.getElementById(id_form);
        if (form) {
            const formData = new FormData(form);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            console.log(formObject);
        }
    };

    const list_buttons = [
        {
            "icon": "fa fa-save",
            "label": "Guardar cliente",
            "action": true,
            "def": (event) => { handleSaveCustomer('form_customer'); },
            "action_params": "",
            "url": ""
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

    const data_country = async () => {

        const response = await fetch(`${host_url}/list-countries`);
        const data = await response.json();
        
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

        const response = await fetch(`${host_url}/list-region`);
        const data = await response.json();
        
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

        const response = await fetch(`${host_url}/list-commune`);
        const data = await response.json();
        
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

    }, []);

    const config_form = {
        number_row: 3,
        id_form: 'form_customer',
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
                options: countries,
                text_default: '-- Seleccione --'
            },{
                label: 'Regiones',
                required: true,
                type: 'select_autocomplete', // text, number, email, password, select, checkbox, radio, date
                options: regions,
                text_default: '-- Seleccione --'
            },{
                label: 'Comunas',
                required: true,
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