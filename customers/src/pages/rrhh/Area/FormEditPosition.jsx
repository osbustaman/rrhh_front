import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../providers/AppProvider';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { Forms } from "../../../components/forms/Forms"
import { useFech } from '../../../hooks/useFech';
import { useParams } from 'react-router-dom';

export const FormEditPosition = () => {

    const { id_area, id_department, id_position } = useParams();
    const { getDataList } = useFech({ url: `get-position/${id_position}` });
    const [configForm, setConfigForm] = useState(null);
    const [dataResponses, setDataResponses] = useState([]);
    const [companiesLoaded, setCompaniesLoaded] = useState(false);
    const { validate } = useFormValidate();

    const get_data_element = async () => {
        const { error, status } = await getDataList();
        setDataResponses(status);
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
            const { updateDataApi } = useFech({ url: `update-position/${id_position}/` });
            const { error, status } = await updateDataApi(form_data);
            if (error) {
                $.alert(status.message);
            }else{
                $.alert('Cargo editado correctamente!');
                return false;
            }
        }
    };

    useEffect(() => {
        if (Object.keys(dataResponses).length > 0) {
            const { pos_name_position, post_description, departament } = dataResponses;
            const config_form = {
                number_row: 12,
                id_form: 'form_cargo',
                position_form: 'vertical',
                def: (event) => { send_form('form_cargo'); },
                name_button: 'Editar',
                inputs: [
                    {
                        label: 'Nombre  del cargo',
                        placeholder: '',
                        required: true,
                        name: 'pos_name_position',
                        type: 'text',
                        value: pos_name_position,
                    },{
                        label: 'Descripción del cargo',
                        placeholder: '',
                        required: true,
                        name: 'post_description',
                        type: 'textarea',
                        value: post_description,
                    },{
                        label: '',
                        required: true,
                        name: 'departament',
                        type: 'hidden',
                        value: departament
                    }
                ]
            }
            setConfigForm(config_form);
        }
    }, [dataResponses, companiesLoaded]);

    useEffect(() => {
        get_data_element();
    }, [id_department, id_position]);

    return (
        <>
            {configForm && <Forms config_form={configForm} />}
        </>
    )
}
