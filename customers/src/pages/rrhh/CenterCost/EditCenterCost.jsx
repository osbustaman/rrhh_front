import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';
import { useParams } from 'react-router-dom';

import { useFormValidate } from '../../../hooks/useFormValidate';
import { Forms } from "../../../components/forms/Forms"

export const EditCenterCost = () => {

    const { id_customer, cencost_id } = useParams();

    const { validate } = useFormValidate();

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "editar empresa" },
        { "bread": "agregar centro de costo" }
    ];

    const dict_title = { "tittle": "[Nombre empresa]:[Nombre Centro de Costo]" };

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

    const send_form = (form) => {

        const { error, status } = validate(form);

        if (!error) {
            $.confirm({
                title: 'Centro de costo creado exitósamente!',
                content: 'Para continuar, haga clic en el botón aceptar.',
                buttons: {
                    aceptar: function () {
                        alert('se debe hacer código para redireccionar al editar')
                    }
                }
            });
            return false;
        }else{

            $.confirm({
                title: 'Tienes errores en los siguientes campos!',
                content: status,
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
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, []);

    const config_form = {
        number_row: 6,
        id_form: 'form_center_cost',
        position_form: 'vertical',
        def: (event) => { send_form('form_center_cost'); },
        name_button: 'Guardar',
        inputs: [
            {
                label: 'Nombre del centro de costo',
                placeholder: '',
                required: true,
                name: 'sub_name',
                type: 'text',
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
