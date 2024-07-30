import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Tabs } from '../../components/tabs/Tabs';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { Forms } from '../../components/forms/Forms';
import { ModalForm } from '../../components/modal/ModalForm';
import { AppContext } from '../../providers/AppProvider';
import { useFechApi } from '../../hooks/useFechApi';
import { useValidateForm } from '../../hooks/useValidateForm';
import { useFormValidate } from '../../hooks/useFormValidate';


export const EditCustomer = () => {

    const { id } = useParams();

    const { getDataApi } = useFechApi();
    const { validateForm, validateUpdateForm } = useValidateForm();

    const { validate } = useFormValidate();

    // Estados para el formulario de cliente


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
        const { error, status } = await validateUpdateForm(form, url);
        
        if (error) {
            $.alert({
                title: 'Error al guardar el cliente',
                content: status,    
            });
            return false;
        }else{
            $.alert({
                title: 'Datos actualizados exitosamente!',
                content: 'Para continuar, haga clic en el botón ok.',
            });
            return false;
        }

    };

    const send_form_user = async (form, url) => {
        console.log('form', form);
        console.log('url', url);

        const { error, status } = await validate(form, url);

        console.log('error', error);
        console.log('status', status);
        if (error) {
            $.alert({
                title: 'Error al guardar el cliente',
                content: status,    
            });
            return false;
        }else{
            $.alert({
                title: 'Datos actualizados exitosamente!',
                content: 'Para continuar, haga clic en el botón ok.',
            });
            return false;
        }
    };

    const clean_form_user = (id_form) => {
        //const inputs = document.getElementById(id_form).querySelectorAll('input');
        console.log("id_form", id_form);
    };

    const config_form_modal = {
        number_row: 4,
        id_form: 'form_user',
        position_form: 'vertical', // vertical or horizontal
        def: (event) => { send_form_user('form_user', `update-data-customer/${id}/`); },
        clean_form: (event) => { clean_form_user('form_user'); },
        inputs: [
            {
                label: 'Usuario',
                required: true,
                name: 'username',
                type: 'text'
            },{
                label: 'Email',
                required: true,
                name: 'email',
                type: 'text',
            },{
                label: 'Contraseña',
                required: true,
                name: 'password',
                type: 'text'
            },{
                label: 'Nombre',
                required: true,
                name: 'first_name',
                type: 'text'
            },{
                label: 'Apellido',
                required: true,
                name: 'last_name',
                type: 'text'
            },
        ]
    };

    const list_buttons = [
        {
            "icon": "fa fa-edit",
            "label": "Editar cliente",
            "action": true,
            "def": (event) => { send_form('form_customer', `update-data-customer/${id}/`); },
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
                            url: `/create-user/${id}/`,
                            def: (event) => { send_form_user('form_user', `update-data-customer/${id}/`); },
                            body: <Forms config_form={config_form_modal} />
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

    const getDataCustomers = async (id_customer) => {
        
        const data = await getDataApi(`get-data-customer/${id_customer}`);

        const { 
            cus_name
            , cus_identifier
            , cus_email
            , cus_representative_name
            , cus_representative_rut
            , cus_representative_mail
            , cus_name_bd
            , cus_date_in
            , cus_date_out
            , cus_number_users
            , country_id
            , region_id
            , commune_id } = data;

        setCusName(cus_name);
        setCusIdentifier(cus_identifier);
        setCusEmail(cus_email);
        setCusRepresentativeName(cus_representative_name);
        setCusRepresentativeRut(cus_representative_rut);
        setCusRepresentativeMail(cus_representative_mail);
        setCusNameBd(cus_name_bd);
        setCusDateIn(cus_date_in);
        setCusDateOut(cus_date_out);
        setCusNumberUsers(cus_number_users);
        setCusCountry(country_id);
        setCusRegion(region_id);
        setCusCommune(commune_id);
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

    const [cusName, setCusName] = useState("");
    const [cusIdentifier, setCusIdentifier] = useState("");
    const [cusEmail, setCusEmail] = useState("");
    const [cusRepresentativeName, setCusRepresentativeName] = useState("");
    const [cusRepresentativeRut, setCusRepresentativeRut] = useState("");
    const [cusRepresentativeMail, setCusRepresentativeMail] = useState("");
    const [cusNameBd, setCusNameBd] = useState("");
    const [cusDateIn, setCusDateIn] = useState("");
    const [cusDateOut, setCusDateOut] = useState("");
    const [cusNumberUsers, setCusNumberUsers] = useState("");
    const [cusCountry, setCusCountry] = useState("");
    const [cusRegion, setCusRegion] = useState("");
    const [cusCommune, setCusCommune] = useState("");

    const config_form = {
        number_row: 3,
        id_form: 'form_customer',
        position_form: 'vertical',
        inputs: [
            {
                label: 'Nombre Cliente',
                required: true,
                name: 'cus_name',
                type: 'text',
                value: cusName,
                setValue: setCusName
            },{
                label: 'Rut Cliente',
                required: true,
                name: 'cus_identifier',
                type: 'text',
                value: cusIdentifier,
                setValue: setCusIdentifier,
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
                value: cusEmail,
                setValue: setCusEmail,
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
                value: cusRepresentativeName,
                setValue: setCusRepresentativeName,
            },{
                label: 'Rut Representante',
                required: true,
                name: 'cus_representative_rut',
                type: 'text',
                value: cusRepresentativeRut,
                setValue: setCusRepresentativeRut,
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
                value: cusRepresentativeMail,
                setValue: setCusRepresentativeMail,
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
                value: cusNameBd,
                setValue: setCusNameBd
            },{
                label: 'Fecha Creación',
                required: true,
                name: 'cus_date_in',
                type: 'date',
                value: cusDateIn,
                setValue: setCusDateIn
            },{
                label: 'Fecha Término',
                required: false,
                name: 'cus_date_out',
                type: 'date',
                value: cusDateOut,
                setValue: setCusDateOut
            },{
                label: 'Cantidad Usuarios',
                required: true,
                name: 'cus_number_users',
                type: 'number',
                value: cusNumberUsers,
                setValue: setCusNumberUsers
            },{
                label: 'Pais',
                required: true,
                name: 'country_id',
                type: 'select_autocomplete',
                options: countries,
                text_default: '-- Seleccione --',
                value: cusCountry,
                setValue: setCusCountry
            },{
                label: 'Regiones',
                required: true,
                name: 'region_id',
                type: 'select_autocomplete',
                options: regions,
                text_default: '-- Seleccione --',
                value: cusRegion,
                setValue: setCusRegion
            },{
                label: 'Comunas',
                required: true,
                name: 'commune_id',
                type: 'select_autocomplete',
                options: communes,
                text_default: '-- Seleccione --',
                value: cusCommune,
                setValue: setCusCommune
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