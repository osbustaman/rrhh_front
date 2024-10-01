import React, { useEffect, useState } from 'react';
import { Forms } from '../../../components/forms/Forms';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { useParams } from 'react-router-dom';
import { useFech } from '../../../hooks/useFech';

export const BankDetails = () => {
    const { id_user } = useParams();

    const [dataBankEmployee, setDataBankEmployee] = useState({});
    const [configForm, setConfigForm] = useState(null);
    const { getDataTable } = useFech({ url: `/employee/by-user/${id_user}/` });
    const { getDataTable: list_banks } = useFech({ url: 'list-banks' });

    const [banks, setBanks] = useState([]);

    const { validate } = useFormValidate();

    const get_data_response = async () => {
        const { error, status } = await getDataTable();
        setDataBankEmployee(status);
    };

    const getDataFech = async (get_data_table, set_state, error_message, type_data_response) => {
        const { error, status } = await get_data_table();
        if (error) {
            $.alert(error_message);
        }

        let list_data = [];
        if (type_data_response === 'bank') {
            status.map((value) => {
                list_data.push({
                    value: value.ban_id,
                    label: value.ban_name
                });
            });
        }
        set_state(list_data);
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
            const { updateDataApi } = useFech({ url: `update-method-of-payment/by-user/${id_user}/` });
            const { error, status } = await updateDataApi(form_data);

            if (error) {
                $.alert(status.message);
            } else {
                const { com_id, message } = status;
                $.alert("Datos de pago actualizado con éxito");
                return false;
            }
        }
    };

    useEffect(() => {
        getDataFech(list_banks, setBanks, 'Error al cargar los bancos', 'bank');
    }, []);

    useEffect(() => {
        get_data_response();
    }, [id_user]);

    useEffect(() => {
        if (Object.keys(dataBankEmployee).length > 0 ) {
            const {
                emp_paymentformat,
                emp_accounttype,
                emp_bankaccount,
                bank
            } = dataBankEmployee;

            const config_form = {
                number_row: 3,
                id_form: 'form_data_employee',
                position_form: 'vertical',
                def: (event) => { send_form('form_data_employee'); },
                name_button: 'Editar',
                inputs: [
                    {
                        label: 'Forma de pago',
                        required: true,
                        name: 'emp_paymentformat',
                        type: 'select_autocomplete',
                        options: [
                            { value: 1, label: 'Efectivo' },
                            { value: 2, label: 'Cheque' }, 
                            { value: 3, label: 'Vale vista' }, 
                            { value: 4, label: 'Depósito directo' }
                        ],
                        text_default: '-- Seleccione --',
                        value: emp_paymentformat === null ? '' : emp_paymentformat
                    },{
                        label: 'Bancos',
                        required: true,
                        name: 'bank',
                        type: 'select_autocomplete',
                        options: banks,
                        text_default: '-- Seleccione --',
                        value: bank
                    },{
                        
                        label: 'Tipo de cuenta bancaria',
                        required: true,
                        name: 'emp_accounttype',
                        type: 'select_autocomplete',
                        options: [
                            { value: 1, label: 'Cuenta Vista' },
                            { value: 2, label: 'Cuenta de Ahorro' }, 
                            { value: 3, label: 'Cuenta Bancaria para Estudiante' }, 
                            { value: 4, label: 'Cuenta Chequera Electrónica' }, 
                            { value: 5, label: 'Cuenta Rut' }, 
                            { value: 6, label: 'Cuenta Bancaria para Extranjeros' }, 
                            { value: 7, label: 'Cuenta Corriente' }
                        ],
                        text_default: '-- Seleccione --',
                        value: emp_accounttype === null ? '' : emp_accounttype
                    },{
                        label: 'Cuenta bancaria',
                        placeholder: '',
                        required: true,
                        name: 'emp_bankaccount',
                        type: 'text',
                        value: emp_bankaccount
                    }
                    
                    
                ],
            };

            setConfigForm(config_form);
        }
    }, [dataBankEmployee, banks]);

    return (
        <div>
            {configForm && <Forms config_form={configForm} />}
        </div>
    );
}
