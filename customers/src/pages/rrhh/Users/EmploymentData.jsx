import React, { useEffect, useState } from 'react';
import { Forms } from '../../../components/forms/Forms';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { useParams } from 'react-router-dom';
import { useFech } from '../../../hooks/useFech';

export const EmploymentData = () => {
    const { id_user } = useParams();

    const [dataEmployee, setDataEmployee] = useState({});
    const [configForm, setConfigForm] = useState(null);
    const { getDataTable } = useFech({ url: `get-user-company/by-user/${id_user}/` });
    const { getDataTable: list_companies } = useFech({ url: 'list-companies' });


    const [companies, setCompanies] = useState([]);

    const { validate } = useFormValidate();

    const getDataFech = async (get_data_table, set_state, error_message, type_data_response) => {
        const { error, status } = await get_data_table();
        if (error) {
            $.alert(error_message);
        }

        let list_data = [];
        if (type_data_response === 'companies') {
            status.map((value) => {
                list_data.push({
                    value: value.com_id,
                    label: value.com_name_company
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
            const { updateDataApi } = useFech({ url: `update-user-company/by-user/${id_user}/` });
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
        getDataFech(list_companies, setCompanies, 'Error al cargar los datos de la lista', 'companies');
    }, []);

    useEffect(() => {
        get_data_response();
    }, [id_user]);

    useEffect(() => {
        if (Object.keys(dataEmployee).length > 0 && companies.length > 0 ) {

            const { 
                company,
                uc_type_user
            } = dataEmployee;

            const config_form = {
                number_row: 3,
                id_form: 'form_data_employee_company',
                position_form: 'vertical',
                def: (event) => { send_form('form_data_employee_company'); },
                name_button: 'Editar',
                inputs: [
                    {
                        label: localStorage.getItem('uc_type_user') == 1 ? 'Empresa' : '',
                        required: true,
                        name: 'company',
                        type: localStorage.getItem('uc_type_user') == 1 ? 'select_autocomplete' : 'hidden',
                        options: companies,
                        text_default: '-- Seleccione --',
                        value: company ? company : localStorage.getItem('company')
                    },{
                        label: 'Tipo de usuario',
                        required: true,
                        name: 'uc_type_user',
                        type: 'select_autocomplete',
                        options: [
                            { value: 1, label: 'Admin' }, 
                            { value: 2, label: 'HR Manager' }, 
                            { value: 3, label: 'Colaborador' }, 
                            { value: 4, label: 'Supervisor/Jefatura' }
                        ],
                        text_default: '-- Seleccione --',
                        value: uc_type_user
                    }
                ],
            };

            setConfigForm(config_form);
        }
    }, [dataEmployee, companies]);

    return (
        <div>
            {configForm && <Forms config_form={configForm} />}
        </div>
    );
}
