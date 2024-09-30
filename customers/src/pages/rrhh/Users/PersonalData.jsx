import React, { useEffect, useState } from 'react';
import { Forms } from '../../../components/forms/Forms';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { useParams } from 'react-router-dom';
import { useFech } from '../../../hooks/useFech';

export const PersonalData = () => {
    const { id_user } = useParams();

    const [dataEmployee, setDataEmployee] = useState({});
    const [configForm, setConfigForm] = useState(null);
    const { getDataTable } = useFech({ url: `/employee/by-user/${id_user}/` });
    const { getDataTable: list_countries } = useFech({ url: 'list-countries' });
    const { getDataTable: list_regions } = useFech({ url: 'list-region' });
    const { getDataTable: list_communes } = useFech({ url: 'list-commune' });

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [communes, setCommunes] = useState([]);

    const { validate } = useFormValidate();

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
        } else if (type_data_response === 'regions') {
            status.map((value) => {
                list_data.push({
                    value: value.re_id,
                    label: value.re_name
                });
            });
        } else if (type_data_response === 'communes') {
            status.map((value) => {
                list_data.push({
                    value: value.com_id,
                    label: value.com_name
                });
            });
        }
        set_state(list_data);
    };

    const get_data_response = async () => {
        const { error, status } = await getDataTable();
        setDataEmployee(status);
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
        } else {
            const { updateDataApi } = useFech({ url: `update-employee/by-user/${id_user}/` });
            const { error, status } = await updateDataApi(form_data);

            if (error) {
                $.alert(status.message);
            } else {
                const { com_id, message } = status;
                $.alert("Colaborador actualizado con éxito");
                return false;
            }
        }
    };

    useEffect(() => {
        getDataFech(list_countries, setCountries, 'Error al cargar los datos de los paises', 'countries');
        getDataFech(list_regions, setRegions, 'Error al cargar los datos de las regiones', 'regions');
        getDataFech(list_communes, setCommunes, 'Error al cargar los datos de las comunas', 'communes');
    }, []);

    useEffect(() => {
        get_data_response();
    }, [id_user]);

    useEffect(() => {
        if (Object.keys(dataEmployee).length > 0 && countries.length > 0 && regions.length > 0 && communes.length > 0) {
            const {
                emp_id,
                emp_foreign,
                emp_nationality,
                emp_rut,
                emp_sex,
                emp_birthdate,
                emp_civilstatus,
                emp_address,
                emp_studies,
                emp_studiesstatus,
                emp_title,
                emp_drivellicense,
                emp_typelicense,
                country,
                region,
                commune,
            } = dataEmployee;

            const config_form = {
                number_row: 3,
                id_form: 'form_data_employee',
                position_form: 'vertical',
                def: (event) => { send_form('form_data_employee'); },
                name_button: 'Editar',
                inputs: [
                    {
                        label: 'Es extranjero',
                        required: true,
                        name: 'emp_foreign',
                        type: 'select_autocomplete',
                        options: [{ value: 'Y', label: 'Si' }, { value: 'N', label: 'No' }],
                        text_default: '-- Seleccione --',
                        value: emp_foreign === null ? '' : emp_foreign
                    },{
                        label: 'Nacionalidad',
                        placeholder: 'chilen@',
                        required: true,
                        name: 'emp_nationality',
                        type: 'text',
                        value: emp_nationality === null ? 'chilen@' : emp_nationality
                    },{
                        label: 'rut',
                        placeholder: '',
                        required: true,
                        name: 'emp_rut',
                        type: 'rut',
                        value: emp_rut
                    },{
                        label: 'Sexo',
                        required: true,
                        name: 'emp_sex',
                        type: 'select_autocomplete',
                        options: [{ value: 'M', label: 'Masculino' }, { value: 'F', label: 'Femenino' }],
                        text_default: '-- Seleccione --',
                        value: emp_sex
                    },{
                        label: 'Fecha de nacimiento',
                        placeholder: '',
                        required: true,
                        name: 'emp_birthdate',
                        type: 'date',
                        value: emp_birthdate
                    },{
                        label: 'Estado civil',
                        required: true,
                        name: 'emp_civilstatus',
                        type: 'select_autocomplete',
                        options: [
                            { value: 1, label: 'Solter@' }, 
                            { value: 2, label: 'Casad@' }, 
                            { value: 3, label: 'Divorciad@' }, 
                            { value: 4, label: 'Viud@' }
                        ],
                        text_default: '-- Seleccione --',
                        value: emp_civilstatus
                    }, {
                        label: 'Comunas',
                        required: true,
                        name: 'commune',
                        type: 'select_autocomplete',
                        options: communes,
                        text_default: '-- Seleccione --',
                        value: commune
                    }, {
                        label: 'Regiones',
                        required: true,
                        name: 'region',
                        type: 'select_autocomplete',
                        options: regions,
                        text_default: '-- Seleccione --',
                        value: region
                    }, {
                        label: 'País',
                        required: true,
                        name: 'country',
                        type: 'select_autocomplete',
                        options: countries,
                        text_default: '-- Seleccione --',
                        value: country
                    },{
                        label: 'Dirección',
                        placeholder: '',
                        required: true,
                        name: 'emp_address',
                        type: 'text',
                        value: emp_address
                    },{
                        label: 'Tipo de estudios',
                        required: true,
                        name: 'emp_studies',
                        type: 'select_autocomplete',
                        options: [
                            { value: 1, label: 'Enseñanza Media' }, 
                            { value: 2, label: 'Estudios Superiores (CFT)' }, 
                            { value: 3, label: 'Estudios Universitarios' }
                        ],
                        text_default: '-- Seleccione --',
                        value: emp_studies
                    },{
                        label: 'Estado de estudios',
                        required: true,
                        name: 'emp_studiesstatus',
                        type: 'select_autocomplete',
                        options: [
                            { value: 1, label: 'Completo' }, 
                            { value: 2, label: 'Incompleto' }
                        ],
                        text_default: '-- Seleccione --',
                        value: emp_studiesstatus
                    },{
                        label: 'Titulo',
                        placeholder: '',
                        required: true,
                        name: 'emp_title',
                        type: 'text',
                        value: emp_title
                    },{
                        label: 'Tiene licencia de conducir',
                        required: true,
                        name: 'emp_drivellicense',
                        type: 'select_autocomplete',
                        options: [{ value: 'Y', label: 'Si' }, { value: 'N', label: 'No' }],
                        text_default: '-- Seleccione --',
                        value: emp_drivellicense
                    },{
                        label: 'Tipo de lLicencia',
                        placeholder: 'A, B, C, D, E',
                        required: true,
                        name: 'emp_typelicense',
                        type: 'text',
                        value: emp_typelicense
                    },{
                        label: '',
                        required: true,
                        name: 'emp_id',
                        type: 'hidden',
                        value: emp_id
                    }
                ],
            };

            setConfigForm(config_form);
        }
    }, [dataEmployee, countries, regions, communes]);

    return (
        <div>
            {configForm && <Forms config_form={configForm} />}
        </div>
    );
};