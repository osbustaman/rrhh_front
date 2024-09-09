import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { Forms } from "../../../components/forms/Forms"
import { useFech } from '../../../hooks/useFech';
import { useParams } from 'react-router-dom';

export const FormAddArea = () => {

    const [companies, setCompanies] = useState([]);

    const { getDataList } = useFech({ url: `list-companies` });
    const [dataCompanies, setDataCompanies] = useState([]);

    const { validate } = useFormValidate();

    const get_list_companies = async () => {
        try {
            const { error, status } = await getDataList();

            const list_data = [];
            status.map((value) => {
                list_data.push({
                    value: value.com_id,
                    label: value.com_name_company
                });
            });

            setDataCompanies(list_data);
        } catch (error) {
            $.alert({
                title: 'Alerta!',
                content: error,
            });
        }
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

            const { postDataApi } = useFech({ url: `add-areas/create/` });
            const { error, status } = await postDataApi(form_data);

            if (error) {
                $.alert(status.message);
            }else{
                const { message } = status;
                $.confirm({
                    title: 'Área creada correctamente!',
                    content: 'Click en continuar para ver la lista de áreas o en nuevo para agregar una nueva área.',
                    buttons: {
                        continuar: function () {
                            window.location.href = `/home/lista-areas`;
                        }, 
                        nuevo: function () {
                            window.location.href = `/home/agregar-area`;
                        }
                    }
                });
                return false;
            }
        }

    };


    const config_form = {
        number_row: 6,
        id_form: 'form_area',
        position_form: 'vertical',
        def: (event) => { send_form('form_area'); },
        name_button: 'Guardar',
        inputs: [
            {
                label: 'Nombre área',
                placeholder: '',
                required: true,
                name: 'ar_name',
                type: 'text',
                value: '',
            },{
                label: 'Empresa',
                required: true,
                name: 'company',
                type: 'select_autocomplete',
                options: dataCompanies,
                text_default: '-- Seleccione una empresa --',
                value: ''
            }
        ],
    }

    useEffect(() => {
        get_list_companies();
    }, []);

    return (
        <>
            <Forms config_form={config_form} />
        </>
    )
}
