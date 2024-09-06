import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { Forms } from "../../../components/forms/Forms"
import { useFech } from '../../../hooks/useFech';
import { useParams } from 'react-router-dom';

export const AddBranchOffice = () => {

    const { id_customer } = useParams();

    const { validate } = useFormValidate();

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "editar empresa" },
        { "bread": "agregar sucursal" }
    ];

    const dict_title = { "tittle": "[Nombre empresa]" };

    const buttons_menu = [
        { 
            "label" : "Acciones",
            "list_items": []
        },{
            "icon" : "fa-solid fa-arrow-right-from-bracket",
            "url": `/home/editar-empresa/${id_customer}`,
            "label": "Volver"
        }
    ];

    const { getDataTable: list_countries } = useFech({ url: 'list-countries' });
    const { getDataTable: list_regions } = useFech({ url: 'list-region' });
    const { getDataTable: list_communes } = useFech({ url: 'list-commune' });

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [communes, setCommunes] = useState([]);

    const getDataFech = async (get_data_table, set_state, error_message, type_data_response) => {
        
        const { error, status } = await get_data_table();

        if (error) {
            $.alert(error_message);
        }

        let list_data = [];

        if (type_data_response === 'countries') {
            status.map((value) => {
                list_data.push({
                    value: value.cou_id,
                    label: value.cou_name
                });
            });
        }else if (type_data_response === 'regions') {
            status.map((value) => {
                list_data.push({
                    value: value.re_id,
                    label: value.re_name
                });
            });
        }else if (type_data_response === 'communes') {
            status.map((value) => {
                list_data.push({
                    value: value.com_id,
                    label: value.com_name
                });
            });
        }
        set_state(list_data);    
    }

    const send_form = async (form) => {

        const { error, form_data } = validate(form);

        if (error) {
            $.confirm({
                title: 'Tienes errores en los siguientes campos!',
                content: form_data,
                buttons: {
                    aceptar: function () {
                        const form_data = document.getElementById(form);
                        const formData = new FormData(form_data);
                        formData.forEach((value, key) => {
                            const input = document.getElementsByName(key);
                            input[0].classList.remove('is-invalid');
                        });
                    }
                }
            });
            return false;
        }else{

            const { postDataApi } = useFech({ url: `create-branch-office/${id_customer}/` });
            const { error, status } = await postDataApi(form_data);

            const { sub_id, message } = status;

            if (error) {
                $.alert(status.message);
            }else{
                const { com_id, message } = status;
                $.confirm({
                    title: message,
                    content: form_data,
                    buttons: {
                        continuar: function () {
                            window.location.href = `/home/editar-sucursal/${id_customer}/${sub_id}`;
                        }
                    }
                });
                return false;
            }
        }

    };

    const clean_form = (id_form) => {
        setTimeout(() => {
            const form = document.getElementById(id_form);
            const formData = new FormData(form);

            formData.forEach((value, key) => {
                const input = document.getElementsByName(key);
                //input[0].value = '';
                input[0].classList.remove('is-invalid');
            });
        }, 3000);
    };


    useEffect(() => {
        getDataFech(list_countries, setCountries, 'Error al cargar los datos de los paises', 'countries');
        getDataFech(list_regions, setRegions, 'Error al cargar los datos de las regiones', 'regions');
        getDataFech(list_communes, setCommunes, 'Error al cargar los datos de las comunas', 'communes');
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, []);


    const config_form = {
        number_row: 3,
        id_form: 'form_branch_office',
        position_form: 'vertical',
        def: (event) => { send_form('form_branch_office'); },
        name_button: 'Guardar',
        inputs: [
            {
                label: 'Descripción de la unidad',
                placeholder: '',
                required: true,
                name: 'sub_name',
                type: 'text',
                value: ''
            },{
                label: 'Correo',
                placeholder: '',
                required: true,
                name: 'sub_mail',
                type: 'email',
                value: ''
            },{
                label: 'Teléfono',
                placeholder: '',
                required: true,
                name: 'sub_phone',
                type: 'text',
                value: ''
            },{
                label: 'Dirección',
                placeholder: '',
                required: true,
                name: 'sub_address',
                type: 'text',
                value: ''
            },{
                label: 'Comunas',
                required: true,
                name: 'commune',
                type: 'select_autocomplete',
                options: communes,
                text_default: '-- Seleccione --',
                value: ''
            },{
                label: 'Regiones',
                required: true,
                name: 'region',
                type: 'select_autocomplete',
                options: regions,
                text_default: '-- Seleccione --',
                value: ''
            },{
                label: 'País',
                required: true,
                name: 'country',
                type: 'select_autocomplete',
                options: countries,
                text_default: '-- Seleccione --',
                value: ''
            },{

                label: 'Es casa matriz?',
                required: true,
                name: 'sub_matrixhouse',
                type: 'select_autocomplete',
                options: [{value: 'Y', label: 'Si'}, {value: 'N', label: 'No'}],
                text_default: '-- Seleccione --',
                value: ''
            }
        ],
    }

    return (
        <>
            <div className="card mb-4">
                <div className="card-header">
                    <nav className="nav nav-borders">
                    </nav>
                </div>
                <div className="card-body">
                    <div className="row">
                        <Forms config_form={config_form}/>
                    </div>
                </div>
            </div>
        </>
    )
}
