import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { Forms } from "../../../components/forms/Forms"
import { useParams } from 'react-router-dom';


export const EditarBranchOffice = () => {

    const { id_customer, id_branch } = useParams();

    const { validate } = useFormValidate();

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "editar empresa" },
        { "bread": "editar sucursal" }
    ];

    const dict_title = { "tittle": "[Nombre empresa]:[Nombre Sucursal]" };

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

    const [countries, setcountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [communes, setCommunes] = useState([]);

    const [subName, setSubName] = useState("");
    const [subAddress, setSubAddress] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [commune, setCommune] = useState("");
    const [subMatrixhouse, setSubMatrixhouse] = useState("");

    const data_country = async () => {
        setcountries([]);   
    }

    const data_region = async () => {
        setRegions([]);   
    }

    const data_communes = async () => {
        setCommunes([]);   
    }

    const send_form = (form) => {

        const { error, status } = validate(form);

        if (!error) {
            $.alert({
                title: 'Sucursal editada exitósamente!',
                content: 'Para continuar, haga clic en el botón aceptar.',
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
        data_country();
        data_region();
        data_communes();
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, []);

    const config_form = {
        number_row: 2,
        id_form: 'form_branch_office',
        position_form: 'vertical',
        def: (event) => { send_form('form_branch_office'); },
        name_button: 'Editar',
        inputs: [
            {
                label: 'Descripción de la unidad',
                placeholder: '',
                required: true,
                name: 'sub_name',
                type: 'text',
                value: subName,
                setValue: setSubName
            },{
                label: 'Direccion de la unidad',
                placeholder: '',
                required: true,
                name: 'sub_address',
                type: 'text',
                value: subAddress,
                setValue: setSubAddress
            },{
                label: 'Comunas',
                required: true,
                name: 'commune',
                type: 'select_autocomplete',
                options: communes,
                text_default: '-- Seleccione --',
                value: commune,
                setValue: setCommune
            },{
                label: 'Regiones',
                required: true,
                name: 'regions',
                type: 'select_autocomplete',
                options: regions,
                text_default: '-- Seleccione --',
                value: region,
                setValue: setRegion
            },{
                label: 'País',
                required: true,
                name: 'countries',
                type: 'select_autocomplete',
                options: countries,
                text_default: '-- Seleccione --',
                value: country,
                setValue: setCountry
            },{
                label: 'Es casa matriz?',
                required: true,
                name: 'sub_matrixhouse',
                type: 'select',
                text_default: '',
                options: [{key: 'Y', value: 'Si'}, {key: 'N', value: 'No', default: true}],
                value: subMatrixhouse,
                setValue: setSubMatrixhouse
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
