import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { Forms } from "../../../components/forms/Forms"
import { useParams } from 'react-router-dom';


export const AddAssociatedEntities = () => {

    const { id_customer } = useParams();

    const { validate } = useFormValidate();

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "editar empresa" },
        { "bread": "agregar entidades asociadas" }
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

    const [mutualSecurities, setMutualSecurities] = useState([]);
    const [boxesCompensation, setBoxesCompensation] = useState([]);

    const [mutualSecurity, setMutualSecurity] = useState("");
    const [boxCompensation, setBoxCompensation] = useState("");


    const data_mutualSecurities = async () => {
        setMutualSecurities([]);   
    }

    const data_boxesCompensation = async () => {
        setBoxesCompensation([]);   
    }

    const send_form = (form) => {

        const { error, status } = validate(form);

        if (!error) {
            $.confirm({
                title: 'Entidades guardadas exitósamente!',
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
        data_mutualSecurities();
        data_boxesCompensation();

        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, []);

    const config_form = {
        number_row: 4,
        id_form: 'form_entities',
        position_form: 'vertical',
        def: (event) => { send_form('form_entities'); },
        name_button: 'Guardar',
        inputs: [
            {
                label: 'Mutual de seguridad',
                required: true,
                name: 'mutual_security',
                type: 'select_autocomplete',
                options: mutualSecurities,
                text_default: '-- Seleccione --',
                value: ''
            },{
                label: 'Cajas de compensación',
                required: true,
                name: 'boxes_compensation',
                type: 'select_autocomplete',
                options: boxesCompensation,
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
