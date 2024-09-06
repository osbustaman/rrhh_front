import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';
import { useParams } from 'react-router-dom';
import { useFech } from '../../../hooks/useFech';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { Forms } from "../../../components/forms/Forms"

export const EditCenterCost = () => {

    const { id_customer, cencost_id } = useParams();

    const { validate } = useFormValidate();
    const { getDataTable } = useFech({ url: `view-center-cost/${cencost_id}/` });

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

    const [dataCenterCost, setDataCenterCost] = useState([]);

    const get_center_cost = async () => {
        const { error, status } = await getDataTable();
        setDataCenterCost(status);
    };

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

            const { updateDataApi } = useFech({ url: `edit-center-cost/${cencost_id}/` });
            const { error, status } = await updateDataApi(form_data);

            if (error) {
                $.alert(status.message);
            }else{
                const { cencost_id, message } = status;
                $.alert(message);
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
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, []);

    useEffect(() => {
        get_center_cost();
    }, [id_customer]); // Mantén id_customer como dependencia


    const {
        cencost_name,
        company
    } = dataCenterCost;   

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
                name: 'cencost_name',
                type: 'text',
                value: cencost_name
            },{
                label: '',
                required: true,
                name: 'company',
                type: 'hidden',
                value: company
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
